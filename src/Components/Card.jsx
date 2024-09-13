import { Link } from "react-router-dom";
import "../Styles/Card.css"

const Card = ({ data, children }) => {
  return (
    <div className="card">
      <Link to={"/dentist/" + data.id}>
        <img
          className="card-img"
          src="/images/doctor.jpg"
          alt="profile-pic"
        />
        <div className="card-info">
          <h3>Name: {data.name}</h3>
          <h4>User: {data.username}</h4>
        </div>
      </Link>
      {children}
    </div>
  );
};

export default Card;