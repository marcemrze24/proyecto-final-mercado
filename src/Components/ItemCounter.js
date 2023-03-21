import { Button, ButtonGroup } from "react-bootstrap";

const ItemCounter = ({ counter, handleSubs, handleSum }) => {
    return (
        <>
            <ButtonGroup
                aria-label="counter buttons"
                className="border border-secondary my-2 rounded-0"
            >
                <Button
                    onClick={handleSubs}
                    variant="outline-dark"
                    className="px-4 py-1 rounded-0 border border-end-0"
                >
                    <i className="fas fa-minus"></i>
                </Button>
                <Button
                    variant="light"
                    className="px-4 rounded-0 fw-bold"
                    disabled
                >
                    {counter}
                </Button>
                <Button
                    onClick={handleSum}
                    variant="outline-dark"
                    className="px-4 py-1 rounded-0 border border-start-0"
                >
                    <i className="fas fa-plus"></i>
                </Button>
            </ButtonGroup>
        </>
    );
};

export default ItemCounter;
