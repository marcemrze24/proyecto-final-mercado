import { Button, ButtonGroup } from "react-bootstrap";

const ItemCounter = ({ counter, handleSubs, handleSum }) => {
    return (
        <ButtonGroup
            aria-label="counter buttons"
            className="border border-secondary my-3 rounded-0"
        >
            <Button
                onClick={handleSubs}
                variant="light"
                className="px-4 btn-sm rounded-0 fw-bolder"
            >
                -
            </Button>
            <Button variant="light" className="px-4 btn-sm rounded-0" disabled>
                {counter}
            </Button>
            <Button
                onClick={handleSum}
                variant="light"
                className="px-4 btn-sm rounded-0 fw-bolder"
            >
                +
            </Button>
        </ButtonGroup>
    );
};

export default ItemCounter;
