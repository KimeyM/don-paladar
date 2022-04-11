import './footer.css'
import { BsLinkedin } from 'react-icons/bs';


export default function Footer(){

    return(
        <div className='footer'>
            <span> © 2022 Don Paladar. All Rights Reserved.</span>
            <span>
                Desarrollado por <br />
                <a href="https://kimey-mastrangelo.vercel.app" target="_blank" style={{ textDecoration: 'none', color: '#fff'}}>Kimey Mastrángelo</a>
                <a href="https://www.linkedin.com/in/kimey-mastrangelo" target="_blank" style={{ textDecoration: 'none', color: '#fff'}}><BsLinkedin /></a>
            </span> 
        </div>
    )}