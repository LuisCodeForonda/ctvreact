import { useState } from "react";

function Counter(){

    const [count, setCounter] = useState(0);


    return (
        // <iframe src="https://player.castr.com/live_0ca881f0475b11ee9047054a084436a6" width="100%" height="360" ></iframe>
        <iframe src="https://5525-45-163-19-10.ngrok-free.app" width="100%" height={340} allow="autoplay" allowFullScreen="allowFullScreen"></iframe>
    );
}

export default Counter;