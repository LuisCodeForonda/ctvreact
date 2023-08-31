import { useState } from "react";

function Counter(){

    const [count, setCounter] = useState(0);


    return (
        <iframe src="https://player.castr.com/live_0ca881f0475b11ee9047054a084436a6" width="100%" height={300}  allowfullscreen></iframe>
    );
}

export default Counter;