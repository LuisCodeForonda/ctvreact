import { useState } from "react";

function Counter(){

    const [count, setCounter] = useState(0);


    return (
        // <iframe src="https://player.castr.com/live_0ca881f0475b11ee9047054a084436a6" width="100%" height="360" ></iframe>
        <iframe src="https://player.castr.com/live_7f6ca670482911eeaec79b4387ad352d" width="100%" height="360" target="_parent"  allow="autoplay" ></iframe>
    );
}

export default Counter;