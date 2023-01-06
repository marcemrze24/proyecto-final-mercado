import { useState } from "react";
import { Button } from "react-bootstrap";

function ItemCount() {
    let [counter, setCounter] = useState(1);
    return (
        <div>
            <Button
                variant="secondary"
                onClick={() => {
                    counter > 0 && setCounter(counter - 1);
                }}
            >
                Decreace
            </Button>
            <Button
                variant="primary"
                onClick={() => {
                    counter < 10 && setCounter(counter + 1);
                }}
            >
                Increace
            </Button>
            <p>{counter}</p>
        </div>
    );
}

export default ItemCount;
