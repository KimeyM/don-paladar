import Home from "../home/home"
import Banda from "../banda/banda"
import Musica from "../musica/musica"
import Fechas from "../fechas/fechas"
import Up from "../up/up"
import Footer from "../footer/footer"
import Contact from "../contacto/contacto"

export default function Index() {
    return (
        <div>
            <Home />
            <Musica />
            <Banda />
            <Fechas />
            <Contact />
            <Up />
            <Footer /> 
        </div>
    )}