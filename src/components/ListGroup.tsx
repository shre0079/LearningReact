import {MouseEvent} from "react";

function ListGroup() {
  let items = [
    "Washington",
    "New York",
    "San Francisco",
    "Las Vegas",
    "California",
  ];

  //event handling
  const handleClick = (event:MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
        {items.length===0 ? <p>No item found</p> : null}
        {items.length===0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" onClick={handleClick} key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
