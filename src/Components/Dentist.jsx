import "../Styles/Dentist.css";

const DentistDetail = ({ navigate, dentist }) => {
  return (
    <>
      <h1>Detail Dentist</h1>
      <div className="dentist-details">
        <ul>
          <li>
            <span className="info" >Name:</span> {dentist.name ? dentist.name : "Loading..."}
          </li>
          <li>
            <span className="info" >Email:</span> {dentist.email ? dentist.email : "Loading..."}
          </li>
          <li>
            <span className="info" >Phone:</span> {dentist.phone ? dentist.phone : "Loading..."}
          </li>
          <li>
            <span className="info" >Website:</span> {dentist.website ? dentist.website : "Loading..."}
          </li>
        </ul>
      </div>
      <div className="navigation-button-container">
        <button className="go-back" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <button className="go-back" onClick={() => navigate("/")}>
          Go to Home
        </button>
      </div>
    </>
  );
};

export default DentistDetail;
