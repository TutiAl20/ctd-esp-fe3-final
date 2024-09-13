import "../../Styles/Message.css"

const Message = ({ errors }) => {
    return (
      <div className="error-message">
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      </div>
    );
  };

export default Message