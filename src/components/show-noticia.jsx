

export default function ShowNoticia({ noticia }) {

    if(noticia == null){
        return (
            <div>
                Cargando...
            </div>
        );
    }else{
        return (
            <div>
                <div className="text-gray-900">
                    <h1 className="text-3xl font-bold mb-2">{noticia.titulo}</h1>
                    <p className="font-semibold mb-2 text-gray-700">Publicado el: <span className="fecha_noticia">{noticia.fecha}</span></p>
                    <img loading="lazy" src={`http://localhost:8000/storage/${noticia.image}`} alt="" className="w-full h-80" />
                    <div className="noticiaestilos my-6 px-2" dangerouslySetInnerHTML={{ __html: noticia.body }} />
                </div>
            </div>
        );
    }
    


}