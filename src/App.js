import { Navbar } from "./components/Navbar";
import { ItemListContainer } from "./components/ItemListContainer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useState } from "react";

const mockProducts = [
  {
    img:
      "https://feelgoodfoodie.net/wp-content/uploads/2018/08/Quinoa-Burger-9.jpg",
    title: "Hamburguesa de Quinoa",
    price: "$30",
  },
  {
    img:
      "https://feelgoodfoodie.net/wp-content/uploads/2018/08/Quinoa-Burger-9.jpg",
    title: "Hamburguesa de Mijo",
    price: "$35",
  },
  {
    img:
      "https://feelgoodfoodie.net/wp-content/uploads/2018/08/Quinoa-Burger-9.jpg",
    title: "Hamburguesa de Lentejas",
    price: "$33",
  },
  {
    img:
      "https://feelgoodfoodie.net/wp-content/uploads/2018/08/Quinoa-Burger-9.jpg",
    title: "Hamburguesa de Quinoa",
    price: "$30",
  },
  {
    img:
      "https://feelgoodfoodie.net/wp-content/uploads/2018/08/Quinoa-Burger-9.jpg",
    title: "Hamburguesa de Mijo",
    price: "$35",
  },
  {
    img:
      "https://feelgoodfoodie.net/wp-content/uploads/2018/08/Quinoa-Burger-9.jpg",
    title: "Hamburguesa de Lentejas",
    price: "$33",
  },
  {
    img:
      "https://feelgoodfoodie.net/wp-content/uploads/2018/08/Quinoa-Burger-9.jpg",
    title: "Hamburguesa de Quinoa",
    price: "$30",
  },
  {
    img:
      "https://feelgoodfoodie.net/wp-content/uploads/2018/08/Quinoa-Burger-9.jpg",
    title: "Hamburguesa de Mijo",
    price: "$35",
  },
  {
    img:
      "https://feelgoodfoodie.net/wp-content/uploads/2018/08/Quinoa-Burger-9.jpg",
    title: "Hamburguesa de Lentejas",
    price: "$33",
  },
  {
    img:
      "https://feelgoodfoodie.net/wp-content/uploads/2018/08/Quinoa-Burger-9.jpg",
    title: "Hamburguesa de Lentejas",
    price: "$33",
  },
  {
    img:
      "https://feelgoodfoodie.net/wp-content/uploads/2018/08/Quinoa-Burger-9.jpg",
    title: "Hamburguesa de Lentejas",
    price: "$33",
  },
  {
    img:
      "https://feelgoodfoodie.net/wp-content/uploads/2018/08/Quinoa-Burger-9.jpg",
    title: "Hamburguesa de Lentejas",
    price: "$33",
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
