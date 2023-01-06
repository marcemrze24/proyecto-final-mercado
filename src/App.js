import { Container } from "react-bootstrap";
import ItemCount from "./Components/ItemCount";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";

function App() {
    return (
        <Container fluid>
            <NavBar />
            <ItemListContainer />
            <ItemCount />
        </Container>
    );
}

export default App;
