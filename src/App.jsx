import CardMenu from "./components/cardMenu/CardMenu"
import menu from "./components/cardMenu/menu"
import NavBar from "./components/NavBar/NavBar"

const App = () => {
  return (
    <div>
      <header>
      <NavBar />
      </header>
      <section className="Card-menu">
      {menu.map((menuu) =>(
        <CardMenu
        key={menuu.id}
        img={menuu.img}
        imgText={menuu.imgText}
        txtComida={menuu.txtcomida}
        precio={menuu.precio}
        />
      ))
      }
      
      </section>
    </div>
  )
}

export default App
