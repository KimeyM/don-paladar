import Menu from "../menu/menu";
import './home.css'
import logo from '../../img/075843b16-a68a-4690-a973-a7c725caac21.png'
import Mobile from "../menu/mobile";

export default function Home() {
    return (
        <div id="home" className="all">
            <div className="me"><Menu /></div> 
            <div className="mo"><Mobile /></div> 
            <div className="divlogo">
                <img className="logo" src={logo} alt="Logo de la banda" />
            </div>
        </div>
    )}