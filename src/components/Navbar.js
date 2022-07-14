import { Link } from "react-router-dom";
import './Navbar.css'
import Searchbar from "./Searchbar";
import { useTheme } from "../hooks/useTheme";
export default function Navbar() {
    const {bgColor,changeColor}=useTheme()
return (
    <div className="navbar" style={{backgroundColor:bgColor}}>
        <nav onClick={()=>changeColor('#c44569')}>
            <Link to="/" className="brand" >
                <h1>PLVN Blog</h1>
            </Link>
            <Searchbar/>
            <Link to="/create">
                Our New Article
            </Link>
        </nav>
    </div>
)
}
