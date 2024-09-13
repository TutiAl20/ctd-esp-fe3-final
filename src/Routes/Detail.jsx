import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDentistContext } from "../Context/Context";
import DentistDetail from "../Components/DentistDetail";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [errorToGetDentist, setErrorToGetDentist] = useState(false);

  const { state, dispatch } = useDentistContext();
  const { dentist } = state;

  const getDentistDetail = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      dispatch({ type: "GET_DENTIST", payload: data });
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorToGetDentist(true);
    }
  };

  useEffect(() => {
    getDentistDetail();
    (dentist);
  }, []);

  return (
    <>
      {!errorToGetDentist ? (
        <DentistDetail navigate={navigate} dentist={dentist}/>
      ) : (
        <h2 className="not-found">
          Dentist with id {id} not exist. Check id and try again!
        </h2>
      )}


    </>
  );
};

export default Detail;