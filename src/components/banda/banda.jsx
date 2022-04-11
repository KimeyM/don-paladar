import './banda.css'
import voz from '../../img/voz.jpg'
import guitarra from '../../img/guitarra.jpg'
import bajo from '../../img/bajo.jpg'
import teclado from '../../img/teclado.jpg'
import saxo from '../../img/saxo.jpg'
import bateria from '../../img/bateria.jpg'
import separador from '../../img/sep2.png'

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('izq')
    let posicionObj1 = animacion.getBoundingClientRect().top
    let tamañoPantalla = window.innerHeight

    if (posicionObj1 < tamañoPantalla){
        animacion.style.animation = 'slide-in-left 2s ease-out'
    }
})
window.addEventListener('scroll', function(){
    let animacion = document.getElementById('izq2')
    let posicionObj1 = animacion.getBoundingClientRect().top
    let tamañoPantalla = window.innerHeight

    if (posicionObj1 < tamañoPantalla){
        animacion.style.animation = 'slide-in-left 1s ease-out'
    }
})
window.addEventListener('scroll', function(){
    let animacion = document.getElementById('izq3')
    let posicionObj1 = animacion.getBoundingClientRect().top
    let tamañoPantalla = window.innerHeight

    if (posicionObj1 < tamañoPantalla){
        animacion.style.animation = 'slide-in-left 1s ease-out'
    }
})
window.addEventListener('scroll', function(){
    let animacion = document.getElementById('der')
    let posicionObj1 = animacion.getBoundingClientRect().top
    let tamañoPantalla = window.innerHeight

    if (posicionObj1 < tamañoPantalla){
        animacion.style.animation = 'slide-in-right 2s ease-out'
    }
})
window.addEventListener('scroll', function(){
    let animacion = document.getElementById('der2')
    let posicionObj1 = animacion.getBoundingClientRect().top
    let tamañoPantalla = window.innerHeight

    if (posicionObj1 < tamañoPantalla){
        animacion.style.animation = 'slide-in-right 2s ease-out'
    }
})
window.addEventListener('scroll', function(){
    let animacion = document.getElementById('der3')
    let posicionObj1 = animacion.getBoundingClientRect().top
    let tamañoPantalla = window.innerHeight

    if (posicionObj1 < tamañoPantalla){
        animacion.style.animation = 'slide-in-right 2s ease-out'
    }
})

export default function Banda() {
    return (
        <div id="musicos">
            <img className='separador' src={separador} alt="" />
            <div className="banda">
                <div id='izq' className='div1'>
                    <img className='miembro' src={voz} alt="" />
                    <div className='miembrotxt'>
                        <h1>Willy Laporta</h1>
                        <h2>Guitarra y voz</h2>
                    </div>
                </div>
                <div id='der' className='div2'>
                    <div className='miembrotxt'>
                        <h1>Marcos Martinelli</h1>
                        <h2>Batería</h2>
                    </div>
                    <img className='miembro' src={bateria} alt="" />
                </div>
                <div id='izq2' className='div3'>
                    <img className='miembro' src={saxo} alt="" />
                    <div className='miembrotxt'>
                        <h1>Gabriel Ibarra</h1>
                        <h2>Saxo</h2>
                    </div>
                </div>
                <div id='der2' className='div4'>
                    <div className='miembrotxt'>
                        <h1>Lucas Urraco</h1>
                        <h2>Guitarra</h2>
                    </div>
                    <img className='miembro' src={guitarra} alt="" />
                </div>
                <div id='izq3' className='div5'>
                    <img className='miembro' src={bajo} alt="" />
                    <div className='miembrotxt'>
                        <h1>Ciro Ríos</h1>
                        <h2>Bajo</h2>
                    </div>
                </div>
                <div id='der3' className='div6'>
                    <div className='miembrotxt'>
                        <h1>Charly Yac</h1>
                        <h2>Teclado</h2>
                    </div>
                    <img className='miembro' src={teclado} alt="" />
                </div>
            </div>
        </div>
    )}