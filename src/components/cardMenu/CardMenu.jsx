import "./cardMenu.css"

const CardMenu = ({img, imgText, txtComida, precio}) => {
  return (
    <div className="contenedor-padre">
      <div className="container-target">
        <img src= {img} alt={imgText}/>
        <div className="nombre-precio">
            <h3>{txtComida}</h3>
            <p>{precio}</p>
        </div>
            <button className="bton-carrito">Agregar al carrito</button>
      </div>
    </div>
  )
}

export default CardMenu
