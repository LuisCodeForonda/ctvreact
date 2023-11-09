import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ShowNoticia from "../components/show-noticia";

function Noticia() {

    const { slug } = useParams();
    const [noticia, setNoticia] = useState(null);
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

    const fetchNoticia = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/noticias/${slug}`);
            const data = await response.json();
            setNoticia(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchNoticia();
        fetchNoticias();
        document.title = 'CTV Bolivia - noticia';
    }, [slug]);

    return (
        <div className="p-4">
            <ShowNoticia noticia={noticia} />
            <h3 className="text-2xl font-bold">Ultimas Noticias</h3>
            <ul>
            {noticias.map((item) => (
                <li key={item.id} className="text-xl font-semibold p-2 my-2 border-l-2 border-red-700 hover:text-red-700">
                    <Link to={`/noticias/${item.slug}`} className="">{item.titulo}</Link>
                </li> 
            ))}
            </ul>
        </div>
    );
}

export default Noticia;