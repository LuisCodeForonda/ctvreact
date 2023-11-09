import { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ImageSlider from "./../components/ImageSlider";
import CardNoticia from "./../components/CardNoticia";

function Home() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [noticias, setNoticias] = useState([]);

    const fetchNoticias = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/noticias");
            const data = await response.json();
            setNoticias(data);
        } catch (error) {
            console.log(error);
        }
    } 

    useEffect(() => {
        // Realiza la solicitud fetch al endpoint de tu API
        setTitle('CTV Bolivia')
        setDescription('Sintoniza nuestro canal de televisión en Bolivia y disfruta de la mejor programación. Desde noticias y deportes hasta entretenimiento y series de televisión.')
    }, []);

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                </Helmet>
            </HelmetProvider>
            <div>
                <ImageSlider />
                {/* <h1 className="mt-6 text-3xl font-bold">Noticias</h1> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-900 my-6">
                    {noticias.map((noticia) => (
                        <div key={noticia.id}>
                            <CardNoticia noticia={noticia} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;