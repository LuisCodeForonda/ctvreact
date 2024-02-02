import { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Layout from "./Layouts";
import ImageSlider from "./ImageSlider";
import CardNoticia from "./CardNoticia";

function Index() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        // Realiza la solicitud fetch al endpoint de tu API
        fetch('http://localhost:8000/api/noticias')
            .then((response) => response.json())
            .then((data) => {
            setNoticias(data);
        }).catch((error) => {
            console.error('Error al obtener los registros:', error);
        });
        setTitle('CTV Bolivia')
        setDescription('Sintoniza nuestro canal de televisión en Bolivia y disfruta de la mejor programación. Desde noticias y deportes hasta entretenimiento y series de televisión.')
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-900 my-6">
                    {noticias.map((noticia) => (
                        <div key={noticia.id}>
                            <CardNoticia noticia={noticia} />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default Index;