import "./App.css";
import Header  from "./components/Header";
import Modal from "./components/Modal";
import ProductList  from "./components/ProductList";
import TotalPrice from "./components/TotalPrice";


function App() {
  return (
    <div className="App">
      <Modal />
      <Header />
      <main> 
        <ProductList />
        <TotalPrice />
      </main>
    </div>
  );
}

export default App;
