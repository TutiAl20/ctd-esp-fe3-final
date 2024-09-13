import Card from "../Components/Card";
import { useDentistContext } from "../Context/Context";
import Loader from "../Components/Loader";

const Home = () => {
  const { state, dispatch } = useDentistContext();
  const checkAdded = (id) => {
    return state.favs.some((fav) => fav.id === id);
  };
  return (
    <main>
      <h1>Home</h1>
      <div className="card-grid">
        {state.dentists.length == 0 ? (
          <Loader />
        ) : (
          state.dentists.map((dentist) => (
            <Card key={dentist.id} data={dentist}>
              {checkAdded(dentist.id) ? (
                <button
                  className="delfavButton"
                  onClick={() =>
                    dispatch({ type: "REMOVE_FAV", payload: dentist })
                  }
                >
                  Remove to Fav
                </button>
              ) : (
                <button
                  className="favButton"
                  onClick={() =>
                    dispatch({ type: "ADD_FAV", payload: dentist })
                  }
                >
                  Add to Fav
                </button>
              )}
            </Card>
          ))
        )}
      </div>
    </main>
  );
};

export default Home;