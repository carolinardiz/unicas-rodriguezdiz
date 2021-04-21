import logo from '../../logo.png';
import '../../App.css'
import  { Cart } from "../navbar/CartWidget"

export const Navbar = (props) => {
    return (
        <header className="topbar">
            <img src={logo} className="logo" />
            <nav>
                <ul>
                    {listItems(props.titulos)}
                    <li >
                        <Cart/>
                    </li>
                </ul>
            </nav>

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
        </header>

    )

}

const listItems = function (titulos) {
    return titulos.map(function (titulo) {
        return (<li className="link">
                <a href={titulo.link}> {titulo.label}</a>
            </li>)
    })
}