import React from "react";
import Card from "../Components/Card";
import { useDentistContext } from "../Context/Context";


const Favs = () => {
  const {state, dispatch} = useDentistContext();
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {
          state.favs.length ? state.favs.map((dentist=>(
            <Card key={dentist.id} data={dentist}>
              <button className="delfavButton" onClick={()=>dispatch({type:'REMOVE_FAV', payload: dentist})}>Remove fav</button>
            </Card>
          ))) : <h2>You don't have favourite Dentist.</h2>
        }
      </div>
    </>
  );
};

export default Favs;