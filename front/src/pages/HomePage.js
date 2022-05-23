import React from 'react';
import '../styles/componentes/pages/HomePage.css'
const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
              
            </div>
            <div className="columnas">
                <div className="explicacion left">
                    <h2>¿Cuando surgio el deporte?</h2>
                    <p>El origen de la palabra deporte es latino . En castellano, en el siglo XIII de denominaba:
                        depuerto
                        que significaba deportarse, lo que quiere decir divertirse o descansar. En inglés la palabra
                        deporte
                        proviene del término disport, lo que quería decir juego.
                        En el siglo XIII ya existía una palabra que hablará del deporte y de juego como acción realizada
                        por las
                        personas.Pero como resulta evidente, mucho antes de acuñar este término, aunque quizás sin hacer
                        referencia a un término específico, ya existía el deporte como acto.

                        Todo ello hace, que el deporte desde su origen refleje una serie de valores básicos del marco
                        cultural
                        en el que se desarrolla que son muy característicos. Por esta razón, actúa como ritual cultural
                        o como
                        transmisor de cultura.</p>
                    <h2>¿Como influye en la vida de las personas?</h2>
                    <p> El deporte y la actividad física son factores que influyen positivamente en la salud física:
                        prevención
                        en riesgos cardiovasculares, enfermedades crónicas, obesidad, cáncer, osteoporosis y
                        enfermedades
                        degenerativas como la demencia y la enfermedad Alzhéimer; y en la salud mental: ansiedad,
                        depresión y
                        disminución del estrés; mejora en las capacidades cognitivas, habilidades sociales, autoconcepto
                        y
                        resiliencia. Generando de esta forma bienestar en múltiples contextos donde se desarrollan las
                        personas,
                        como resultado del conocimiento de sí mismo y las habilidades internas mediante los cuales el
                        individuo
                        regula sus acciones. Concluyendo que la práctica del deporte y la actividad física como habito
                        saludable
                        puede favorecer progresos a nivel terapéutico y preventivo basados en la promoción de estilos de
                        vida
                        saludable.</p>
                </div>
                <div className="testimonios right">
                    <h2>Autores de la informacion</h2>
                    <span className="autor 1"> Mundo Etrenamiento, David.</span>
                    <span className="autor 2 ">Sergio Humberto Barbosa Granados y Ángela María Urrea Cuéllar.</span>
                </div>
            </div>
        </main >
    );
}
export default HomePage;