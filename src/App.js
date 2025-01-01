import "./App.css";
import Header  from "./components/Header";
import ProductList  from "./components/ProductList";
import TotalPrice from "./components/TotalPrice";


function App() {
  return (
    <div className="App">

    <div className="modal">

      <div className="container-modal-form">
        <form>
        <button className="btn-close">X</button>
          <h2 className="modal-title">Nuevo producto</h2>
          <input className="w-100" type="text" placeholder="Nombre"/>
          <input className="w-100" type="text"  placeholder="Descripciòn"/>
          <input className="w-100" type="number" placeholder="Precio"/>
          <input className="w-100" type="number" placeholder="Descuento %"/>
          <input className="w-100" type="number" placeholder="Cantidad"/>
          <button className="btn-save w-70">GUARDAR</button>
        </form>
      </div>

    </div>

      <Header />
      <main> 
        <ProductList />
        <TotalPrice />
      </main>
    </div>
  );
}

export default App;
