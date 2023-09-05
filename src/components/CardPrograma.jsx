function CardPrograma(props){
    return(
        <div className="shadow-xl rounded-xl overflow-hidden w-full max-w-sm mx-auto border-2 border-gray-400">
            <img src={props.img} alt="" className="w-full h-48 object-fill" />
            <div className="p-4 text-center text-gray-900">
              <h3 className="text-2xl font-bold">{props.title}</h3>
              <p className="text-lg py-2">{props.horario}</p>
              <p className="leading-7">
                {props.description}
              </p>
          
              <div className="flex flex-row justify-center gap-8 text-2xl mt-2">
                <a href="" className="hover:text-red-700"></a>
                <a href="" className="hover:text-red-700"></a>
                <a href="" className="hover:text-red-700"></a>
                <a href="" className="hover:text-red-700"></a>
                <a href="" className="hover:text-red-700"></a>
              </div>
            </div>
        </div>
    );
}

export default CardPrograma;