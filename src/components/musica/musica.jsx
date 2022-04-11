import './musica.css'
import separador from '../../img/sep2.png'
import YouTube from 'react-youtube';
import { useState } from 'react';
import mml from '../../img/mml.jpg'
import lm from '../../img/lunn.png'
import Pagination from './Pagination2.jsx';


window.addEventListener('scroll', function(){
    let animacion = document.getElementById('yt')
    let posicionObj1 = animacion.getBoundingClientRect().top
    let tamañoPantalla = window.innerHeight

    if (posicionObj1 < tamañoPantalla){
        animacion.style.animation = 'slide-in-left 1s ease-out'
    }
})
window.addEventListener('scroll', function(){
    let animacion = document.getElementById('carrusel')
    let posicionObj1 = animacion.getBoundingClientRect().top
    let tamañoPantalla = window.innerHeight

    if (posicionObj1 < tamañoPantalla){
        animacion.style.animation = 'slide-in-right 1s ease-out'
    }
})
export default function Musica() {
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        }}

    const allVideos = [
        {
            "nombre":"Lunática Mimbí",
            "img":lm,
            "value":"xDBwl7NswTM"
        },
        {
            "nombre":"Galaxia",
            "img":mml,
            "value":"VtL0N2L3iYs"

        },
        {
            "nombre":"Violetas",
            "img":mml,
            "value":"mq069tz23_U"

        },
        {
            "nombre":"Al Diablo",
            "img":mml,
            "value":"KIfY2oks9XY"

        },
        {
            "nombre":"Chiquilines pura sangre",
            "img":mml,
            "value":"0mpV2HD3EGk"
        },
        {
            "nombre":"10 balazos",
            "img":mml,
            "value":"-fmbI8csnQQ"

        },
        {
            "nombre":"Madre Música y Locura",
            "img":mml,
            "value":"nCpzS8IvnCY"

        },
        {
            "nombre":"Correte",
            "img":mml,
            "value":"fc-2E9lHYgk"

        },
        {
            "nombre":"Vieja Costa Rica",
            "img":mml,
            "value":"0tefCdwpiw4"
        },
        {
            "nombre":"Sam, Sam",
            "img":mml,
            "value":"y-3YXIbWciw"

        },
        {
            "nombre":"Rumbo al Alma Zen",
            "img":mml,
            "value":"RHXotggsYlg"

        },
        {
            "nombre":"Azucena",
            "img":mml,
            "value":"WkTcDV5q8hg"

        }
    ]

    const numberPage =[];
    const [page, setPage] = useState(1);
    const videosPerPage =3;
    let pages = Math.ceil(allVideos.length/videosPerPage);
        for (let i = 1; i <= pages; i++) {
            numberPage.push(i);
        }
        const lastIndex = page*videosPerPage;
        const index = lastIndex - videosPerPage;
        const videoss = allVideos.slice(index, lastIndex);
    
    const [id, setId] = useState('xDBwl7NswTM');


    function video(e){
        setId(e.target.value)
        console.log(e)
        console.log(e.target)
        console.log(e.target.value)
    }

    return (
        <div id='videos'>
            <img className='separador' src={separador} alt="" />
            <div id='yt' className='yt'><YouTube videoId={id} opts={opts} /></div>
            <div id='carrusel' className="carrusel">
            {
                videoss.map(e => {
                    console.log(e.value)
                    return (
                        <div className='thecard'>
                            <div className="card"  >
                                <img className='portada' src={e.img} />
                                <button className='btnyt' value={e.value} onClick={e => video(e)}>
                                ▸
                                </button>
                            </div>
                            <div className='nombre'>{e.nombre}</div> 
                        </div>
                        
                    
                    )
                })
            }
            </div>
            <Pagination
                numberPage={numberPage}
                page={page}
                setPage={setPage}
            />
        </div>
    )}