const Square = ({value, clickEvent}) => {
    return (
      <button 
      className="square"
      onClick={clickEvent}
      >
        {value}
      </button>
    )
}
export default Square;