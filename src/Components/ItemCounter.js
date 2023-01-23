import { Button } from "react-bootstrap";

const ItemCounter = ({ counter, setCounter, max }) => {
    const handleSubs = () => {
        counter > 1 && setCounter(counter - 1);
    };
    const handleSum = () => {
        counter < max && setCounter(counter + 1);
    };
    const handleReset = () => {
        setCounter(1);
    };
    return (
        <div className="my-3">
            <Button onClick={handleSubs} variant="outline-primary">
                -
            </Button>
            <span className="mx-4">{counter}</span>
            <Button onClick={handleSum}>+</Button>
            <Button variant="danger" onClick={handleReset} className="mx-4">
                Reset Counter
            </Button>
        </div>
    );
};

export default ItemCounter;
