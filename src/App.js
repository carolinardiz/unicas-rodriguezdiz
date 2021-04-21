import { Navbar } from "./components/navbar/navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  const titulos = [
    { label: "Home", link: "//google.com" },
    { label: "Productos", link: "www.google.com" },
    { label: "Recursos", link: "www.google.com" },
    { label: "Contacto", link: "www.google.com" },
  ];

  return (
    <div className="App">
      <Navbar titulos={titulos} />
      <ItemListContainer greeting="Aprovecha nuestras promos!" />
    </div>
  );
}

export default App;
