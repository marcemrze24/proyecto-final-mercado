import { Container } from "react-bootstrap";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
    return (
        <Container fluid>
            <NavBar />
            <ItemListContainer />
        </Container>
    );
}

export default App;
