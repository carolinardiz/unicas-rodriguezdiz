import { Navbar } from "./components/Navbar";
import { ItemListContainer } from "./components/ItemListContainer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useState } from "react";


const mockProducts = [
  {
    img:
      "https://feelgoodfoodie.net/wp-content/uploads/2018/08/Quinoa-Burger-9.jpg",
    title: "Hamburguesas de Quinoa",
    price: "$30",
  },
  {
    img:
      "https://www.veggieboogie.com/wp-content/uploads/2017/06/hamburguesas-mijo-lentejas-2.jpg",
    title: "Hamburguesas de Mijo",
    price: "$35",
  },
  {
    img: "https://recetasveganas.pro/img/hamburguesa-de-lentejas-875.jpg",
    title: "Hamburguessa de Lentejas",
    price: "$33",
  },
  {
    img:
      "https://proveg.com/es/wp-content/uploads/sites/2/2020/02/buddha-bowl-1536x1024.jpg",
    title: "Buddha Bowl",
    price: "$30",
  },
  {
    img:
      "https://www.shoothecook.es/wp-content/uploads/como-hacer-buddha-bowl-vegano.jpg",
    title: "Green Salad",
    price: "$35",
  },
  {
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAK_oaoocHoBNdCDLnZzvYtXNF78cRkGfhwQ&usqp=CAU",
    title: "Funghi",
    price: "$33",
  },
  {
    img:
      "https://www.seasonsandsuppers.ca/wp-content/uploads/2019/07/mango-salad-5.jpg",
    title: "Tropical",
    price: "$30",
  },
  {
    img:
      "https://ifoodreal.com/wp-content/uploads/2019/04/FG-smoked-salmon.jpg",
    title: "Fisher",
    price: "$35",
  },
];

const getProducts = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve(mockProducts);
  }, 2000);
});

function App() {
  const titulos = [
    { label: "Home", link: "//google.com" },
    { label: "Productos", link: "www.google.com" },
    { label: "Recursos", link: "www.google.com" },
    { label: "Contacto", link: "www.google.com" },
  ];

  const [products, setProducts] = useState();

  getProducts
    .then(
      (res) => {
        console.log(`Resolved: ${res}`);
        setProducts(res);
      },
      (err) => {
        console.log(`Rejected: ${err}`);
      }
    )
    .finally(() => {
      console.log(`Finalizado`);
    });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar titulos={titulos} />
        <ItemListContainer products={products} />
      </ThemeProvider>
    </div>
  );
}

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#b7e4c7",
      main: "#95d5b2",
      dark: "#52b788",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

export default App;
