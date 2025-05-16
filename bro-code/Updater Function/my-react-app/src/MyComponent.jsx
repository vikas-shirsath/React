import React,{ useState } from "react";

function MyComponent() {

    const [count, setCount] = useState(0);

    function increment() {
        // Takes the PENDING state to calculate NEXT state.
        // React puts your updater function in a queue (waiting in line)
        // During the next render, it will call them in the same order.
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    function decrement() {
        setCount(c => c - 1);
    }

    function reset() {
        setCount(0);
    }


    return(
        <>
            <p>Count: {count}</p>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
            <button onClick={reset}>reset</button>

        </>
    );
}

export default MyComponent;