import { createContext, useContext, useEffect, useReducer } from "react";

export const DentistContext = createContext();
const lsFavDentist = JSON.parse(localStorage.getItem("favDentist")) || [];
const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "GET_DENTIST":
      return { ...state, dentist: action.payload };
    case "ADD_FAV":
      return { ...state, favs: [...state.favs, action.payload] };
    case "REMOVE_FAV":
      const filter = state.favs.filter(
        (fav) => fav.id !== action.payload.id
      );
      return { ...state, favs: filter };
    case "TOGGLE_THEME":
      return { ...state, theme: !state.theme };
    default:
      throw new Error("Error on Context");
  }
};

export const initialState = {
  theme: false,
  dentists: [],
  dentist: {},
  favs: lsFavDentist,
};

export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    localStorage.setItem("favDentist", JSON.stringify(state.favs));
  }, [state.favs]);

  const getDentists = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    dispatch({ type: "GET_DENTISTS", payload: data });
  };
  useEffect(() => {
    setTimeout(() => {
      getDentists();
    }, "1000");
  }, []);
  return (
    <DentistContext.Provider value={{ state, dispatch }}>
      {children}
    </DentistContext.Provider>
  );
};

export default Context;

export const useDentistContext = () => useContext(DentistContext);