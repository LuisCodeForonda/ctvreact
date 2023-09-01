import React, { useEffect } from "react";
import Layout from "./Layouts";
import TabComponent from "./TabComponent";


function Programacion(){
    useEffect(() => {
        document.title = 'CTV Bolivia - programacion';
    }, []);


    return(
        <Layout>
            <TabComponent />
        </Layout>
    );
}

export default Programacion;