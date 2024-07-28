import Image from "next/image";
import Menu from "../components/menu";
import Video from "../components/videoplayer"
import Carrusel from "../components/carrusel";
import Informacion from "@/components/informacion";
import Boletin from "@/components/boletin";
import Racing from "@/components/racing"
import Contactos from "@/components/contactos"
import Footer from "@/components/footer";



export default function Home() {
  return (
   <>
   <Menu />
   <Video />
   <Carrusel />
   <Informacion />
   <Boletin />
   <Racing />
   <Contactos />
   <Footer />
   </>
  );
}
