function ListGroup() {
  const items = [
    "Washington",
    "New York",
    "San Francisco",
    "Las Vegas",
    "California",
  ];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
