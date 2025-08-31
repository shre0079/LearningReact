import ListGroup from "./components/ListGroup";

function App() {
    let items = [
        "Washington",
        "New York",
        "San Francisco",
        "Las Vegas",
        "California"
    ];
    return <div><ListGroup items={items} heading="Cities"/></div>;
}

export default App;