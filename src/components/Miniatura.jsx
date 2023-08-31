function Miniatura(props){
    return(
        <picture className="w-3/5 h-24 mx-auto sm:w-2/4 md:w-2/5 lg:w-3/5">
              <img loading="lazy" src={ props.url } alt=""
                className="w-full h-full" />
        </picture>
    )
}

export default Miniatura;