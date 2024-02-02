import { useState } from "react";
import banner from '../assets/fondoctv.jpg'

function Counter(){

    const [count, setCounter] = useState(0);


    return (
        // <iframe src="https://player.castr.com/live_0ca881f0475b11ee9047054a084436a6" width="100%" height="360" ></iframe>
        
        <img src={banner} alt="" />
    );
}

export default Counter;