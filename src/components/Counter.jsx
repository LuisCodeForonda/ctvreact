import { useState } from "react";

function Counter(){

    const [count, setCounter] = useState(0);


    return (
        // <iframe src="https://player.castr.com/live_0ca881f0475b11ee9047054a084436a6" width="100%" height="360" ></iframe>
        <iframe src="https://player.castr.com/live_26c1c7604de411eeb1d24bdf39be09f2" width="100%" height={340} allow="autoplay" allowFullScreen="allowFullScreen" ></iframe>
    );
}

export default Counter;