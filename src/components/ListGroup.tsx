import message from "../Message";

function ListGroup() {
  let items = [
    "Washington",
    "New York",
    "San Francisco",
    "Las Vegas",
    "California",
  ];

  items=[]

  return (
    <>
      <h1>List</h1>
        {items.length===0 ? <p>No item found</p> : null}
        {items.length===0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" onClick={()=>console.log("Clicked")} key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
