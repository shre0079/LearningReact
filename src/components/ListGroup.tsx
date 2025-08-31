import {MouseEvent} from "react";

function ListGroup() {
    let items = [
        "Washington",
        "New York",
        "San Francisco",
        "Las Vegas",
        "California"
    ];
    let selectedIndex = 0;

    const [selectedIndex, setSelectedIndex] = useState(-1);


    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        onClick={handleClick} key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
