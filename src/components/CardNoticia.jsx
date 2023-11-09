import { Link } from "react-router-dom";

function CardNoticia(props){
    return(
        <div className="bg-slate-100 border-2 w-full mx-auto rounded-t-xl shadow-xl overflow-hidden">
            <img loading="lazy" src={"http://localhost:8000/storage/"+props.noticia.image} alt="" className="w-full h-56" />
            <div className="p-2">
                <p>
                <span className="text-red-600 font-bold">
                   {props.noticia.categoria.titulo }
                </span> | <span className="fecha_noticia">{"publicado el " + props.noticia.fecha}</span></p>
                <Link to={`/noticias/${props.noticia.slug}`} className="font-bold text-2xl">
                    { props.noticia.titulo }
                </Link>
            </div>
        </div>
    );
}

export default CardNoticia;