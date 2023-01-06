import { Button, Badge } from "react-bootstrap";

//
function CartWidget() {
    return (
        <Button variant="primary">
            Cart{" "}
            <Badge bg="danger" pill>
                0
            </Badge>{" "}
        </Button>
    );
}

export default CartWidget;
