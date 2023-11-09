import React, { useEffect } from "react";
import TabComponent from "./../components/TabComponent";


function Programacion(){
    useEffect(() => {
        document.title = 'CTV Bolivia - programacion';
    }, []);


    return(
        <div className="rounded-xl shadow-xl overflow-hidden">
            <TabComponent />
        </div>
    );
}

export default Programacion;