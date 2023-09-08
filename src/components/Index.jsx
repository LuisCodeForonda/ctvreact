import { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Layout from "./Layouts";
import ImageSlider from "./ImageSlider";

function Index() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setTitle('CTV Bolivia')
        setDescription('Sintoniza nuestro canal de televisi贸n en Bolivia y disfruta de la mejor programaci贸n. Desde noticias y deportes hasta entretenimiento y series de televisi贸n.')
    },[]);

    return (
        <Layout>
            <HelmetProvider>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                </Helmet>
            </HelmetProvider>
            <div>
                <ImageSlider />
            </div>
        </Layout>
    );
}

export default Index;