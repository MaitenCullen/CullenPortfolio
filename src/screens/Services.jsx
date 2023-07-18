import React from "react";
import { ServicesInfo } from "../components/ServicesInfo";



export const Services = () => {
    return(
        <section id='servicios'>
            <div className="div-services">
                <h1>Servicios</h1>
                <h3 className="title-service">Podemos armar tu web desde</h3>
                <ServicesInfo/>
            </div>
        </section>
   
    );
}