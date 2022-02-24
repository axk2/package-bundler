import "./scss/app.scss"
import { Header, H1, P } from "./components/Header"


function App() {
    const app = document.getElementById("app")
    H1.innerHTML = "my parcel app"
    P.innerHTML = "This is a boilerplate for a simple vanilla JS workflow using the Parcel bundler"
    Header.appendChild(H1)
    Header.appendChild(P)
    app.appendChild(Header)
}


App()