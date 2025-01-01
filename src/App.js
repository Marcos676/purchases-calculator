import "./App.css";
import Header  from "./components/Header";
import ProductList  from "./components/ProductList";
import TotalPrice from "./components/TotalPrice";


function App() {
  return (
    <div className="App">
      <Header />
      <main> 
        <ProductList />
        <TotalPrice />
      </main>
    </div>
  );
}

export default App;
