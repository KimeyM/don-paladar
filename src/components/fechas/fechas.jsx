import './fechas.css'
import separador from '../../img/sep2.png'
import { BsFacebook, BsInstagram, BsYoutube, BsSpotify, BsApple } from 'react-icons/bs';

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('cal')
    let posicionObj1 = animacion.getBoundingClientRect().top
    let tamañoPantalla = window.innerHeight

    if (posicionObj1 < tamañoPantalla){
        animacion.style.animation = 'slide-in-left 1s ease-out'
    }
})
window.addEventListener('scroll', function(){
    let animacion = document.getElementById('redes')
    let posicionObj1 = animacion.getBoundingClientRect().top
    let tamañoPantalla = window.innerHeight

    if (posicionObj1 < tamañoPantalla){
        animacion.style.animation = 'slide-in-right 1s ease-out'
    }
})


export default function Fechas(){

    return(
        <div id="fechas">
            <img className='separador' src={separador} alt="" />
            <div className='gridfechas'>
                <div id='cal' className='calendario'>
                    <iframe className='cal' src="https://calendar.google.com/calendar/embed?height=400&wkst=1&bgcolor=%23ffffff&ctz=America%2FArgentina%2FBuenos_Aires&hl=es_419&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=cmp1ZGExaG42ZW9qZXA3c3ZhbWFhNG81djhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZXMuYXIjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23D81B60&color=%237986CB" frameBorder="0" scrolling="no" />
                </div>
                <div id='redes' className='redes'>
                    <div className='noticias'>
                        <div className='titnot'>Para más noticias seguinos en nuestras redes</div>
                        <div className='rrss'> <a href="https://es-la.facebook.com/donpaladarr/" target="_blank"> <BsFacebook /> Facebook</a></div>
                        <div className='rrss'> <a href="https://www.instagram.com/don_paladar/" target="_blank"> <BsInstagram /> Instagram</a></div>
                    </div>
                    <div className='contenido'>
                        <div className='titnot'>Escuchanos en</div>
                        <div className='rrss'> <a href="https://www.youtube.com/channel/UCDbWO7rPhOPOY7eKbl1VNSw" target="_blank"> <BsYoutube /> Youtube</a></div>
                        <div className='rrss'> <a href="https://open.spotify.com/artist/3dpsHxAoc6wo72j1n2zaB1" target="_blank"> <BsSpotify /> Spotify</a></div>
                        <div className='rrss'> <a href="https://music.apple.com/us/artist/don-paladar/1297672170" target="_blank"> <BsApple /> Apple Music</a></div>
                    </div>
                </div>
            </div>
        </div>
    )}