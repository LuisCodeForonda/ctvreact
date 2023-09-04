import { useState } from "react";

function Counter(){

    const [count, setCounter] = useState(0);


    return (
        // <iframe src="https://player.castr.com/live_0ca881f0475b11ee9047054a084436a6" width="100%" height="360" ></iframe>
        <iframe src="https://player.castr.com/live_ee320c904b4811ee8f1ce31a70b7b1e0" width="100%" height={340} allow="autoplay" ></iframe>
    );
}

export default Counter;