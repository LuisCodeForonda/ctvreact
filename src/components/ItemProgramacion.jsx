function ItemProgramacion(props) {
    return (
        <div className="flex flex-row justify-between text-xs sm:text-sm item__list">
            <strong
                className="inline-block border-t-4 border-red-600 p-4">{ props.hora }</strong>
            <p className="inline-block border-t-4 border-red-300/50 w-full p-4">{ props.nombre }</p>
        </div>
    );s
}

export default ItemProgramacion;