import './mobile.css'
import { BsFacebook, BsInstagram, BsYoutube, BsSpotify, BsApple } from 'react-icons/bs';


export default function Mobile() {
  return (
      <div className="containerm">
        <div className="phone">
          <div className="conntent">
            
            <nav className='mobnav' role="navigation">
              <div id="menuToggle">
                <input type="checkbox" />
                  <span></span>
                  <span></span>
                  <span></span>
              <ul id="menu">
                <li>
                    <a className='mtxt' href="#home">Inicio</a>
                </li>
                <li>
                    <a className='mtxt' href="#videos">Videos</a>
                </li>
                <li>
                    <a className='mtxt' href="#musicos">Músicos</a>
                </li>
                <li>
                    <a className='mtxt' href="#fechas">Fechas</a>
                </li>
                <li>
                    <a className='mtxt' href="#contacto">Contacto</a>
                </li>
                <li>
                  <div className='micons'>
                  <a className='micon' href="https://es-la.facebook.com/donpaladarr/" target="_blank">
                      <BsFacebook />
                  </a>
                  <a className='micon' href="https://www.instagram.com/don_paladar/" target="_blank">
                      <BsInstagram />
                  </a>
                  <a className='micon' href="https://www.youtube.com/channel/UCDbWO7rPhOPOY7eKbl1VNSw" target="_blank">
                      <BsYoutube />
                  </a>
                  <a className='micon' href="https://open.spotify.com/artist/3dpsHxAoc6wo72j1n2zaB1" target="_blank">
                      <BsSpotify />
                  </a>
                  <a className='micon' href="https://music.apple.com/us/artist/don-paladar/1297672170" target="_blank">
                      <BsApple />
                  </a></div>
                </li>
              </ul>
            </div>
            </nav>
          </div>
        </div>
      </div>
  )}