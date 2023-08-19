const ShowButton = ({ onClick, show }) => {
  return (
    <button onClick={onClick} className="show-btn">
      {show == true ? "hide" : "show"}
    </button>
  );
};

export default ShowButton;
