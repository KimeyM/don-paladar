import './menu.css'
import { BsFacebook, BsInstagram, BsYoutube, BsSpotify, BsApple } from 'react-icons/bs';


export default function Menu() {
    return (
        <>
            <nav className="menuu">
                <ol>
                    <li>
                        <a href="#videos">Videos</a>
                    </li>
                    <li>
                        <a href="#musicos">Músicos</a>
                    </li>
                    <li>
                        <a href="#fechas">Fechas</a>
                    </li>
                    <li>
                        <a href="#contacto">Contacto</a>
                    </li>
                </ol>
                <ol>
                    <li>
                        <a href="https://es-la.facebook.com/donpaladarr/" target="_blank">
                            <BsFacebook />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/don_paladar/" target="_blank">
                            <BsInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCDbWO7rPhOPOY7eKbl1VNSw" target="_blank">
                            <BsYoutube />
                        </a>
                    </li>
                    <li>
                        <a href="https://open.spotify.com/artist/3dpsHxAoc6wo72j1n2zaB1" target="_blank">
                            <BsSpotify />
                        </a>
                    </li>
                    <li>
                        <a href="https://music.apple.com/us/artist/don-paladar/1297672170" target="_blank">
                            <BsApple />
                        </a>
                    </li>
                </ol>
            </nav>
        </>
    )}