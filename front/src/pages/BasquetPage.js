import React from 'react';
import '../styles/componentes/pages/BasquetPage.css';
import bas2010 from './imagenes/bas2010.jfif';
import bas2014 from './imagenes/bas2014.jfif';
import bas2019 from './imagenes/bas2019.jfif';
import bas2023 from './imagenes/bas2023.jfif';
const RugbyPage = (props) => {
    return (
        <section className="holder">
            <div className="Resumen">
                <p>
                    <h2>En que se basa el Basquet</h2>
                    El baloncesto, basquetbol o básquetbol (del inglés basketball; de basket, ‘canasta’, y ball, ‘pelota’), o
                    simplemente básquet, es un deporte de equipo que se puede desarrollar tanto en pista cubierta como en
                    descubierta, en el que dos conjuntos de cinco jugadores cada uno, intentan anotar puntos, también llamados
                    canastas o dobles y/o triples introduciendo un balón en un aro colocado a 3,05 metros del suelo del que
                    cuelga una red, lo que le da un aspecto de cesta o canasta.

                    Fue inventado por James Naismith profesor de la Universidad de Illinois (Massachusetts) y nació como una
                    respuesta a la necesidad de realizar alguna actividad deportiva durante el invierno, en la escuela de YMCA
                    en Massachusetts. James Naismith, (un profesor de educación física) le fue encargada la misión, en 1891, de
                    idear un deporte que se pudiera jugar bajo techo, pues los inviernos en esa zona dificultaban la realización
                    de alguna actividad al aire libre. Se juega con dos equipos de cinco personas, durante 4 períodos o cuartos
                    de 10 minutos.
                </p>
            </div>
            <div>
                Aca tengo que hagregar el selector de Js para dar el dato correcto de la divicion a la que tiene que ir segun su edad
            </div>
            <div className="mundiales">
                <div className="mundial">
                    <img src={bas2010} width="75" alt="2010"/>
                    <h2>Campeon: Estados Unidos</h2>
                    <h3>Posicionamiento Arg: Quinto puesto</h3>
                    <p>Resumen: El XVI Campeonato Mundial de Baloncesto tuvo lugar en Turquía desde el 28 de agosto
                        hasta el 12 de septiembre de 2010 y compitieron 24 selecciones nacionales.El certamen fue
                        organizado por la FIBA, la Federación Turca de Baloncesto y el Comité
                        organizador del campeonato de 2010. Estados Unidos obtuvo así su cuarto título mundial mientras
                        que Turquía consiguió su primera medalla en un campeonato del mundo.</p>
                </div>
                <div className="mundial">
                    <img src={bas2014} width="75" alt="2014"/>
                    <h2>Campeon: United States</h2>
                    <h3>Posicionamiento Arg: Decimo primer puesto</h3>
                    <p>Resumen: La Copa Mundial de la FIBA España 2014 fue la XVII edición de la Copa Mundial de
                        Baloncesto masculino. Tuvo lugar en España desde el 30 de agosto hasta el 14 de septiembre, y
                        compitieron 24 países, organizado por la FIBA, la Federación Española de Baloncesto, y el comité
                        organizador del campeonato. Con un récord perfecto de 9 victorias, Estados Unidos alcanzó su
                        quinto título mundial e igualó a la ya mencionada Yugoslavia como la selección más laureada en
                        esta competición. Además, en su condición de campeón mundial, se clasificó para los Juegos
                        Olímpicos de Río de Janeiro de 2016.</p>
                </div>
                <div className="mundial">
                    <img src={bas2019} width="75" alt="2019"/>
                    <h2>Campeon: España</h2>
                    <h3>Posicionamiento Arg: Segundo puesto</h3>
                    <p>Resumen: La Copa Mundial de Baloncesto de la FIBA de 2019 fue la decimoctava edición de la Copa
                        Mundial de Baloncesto masculino organizada por la FIBA. El 7 de agosto de 2015 se eligió como
                        sede, entre seis candidatos, a China. Fue la primera edición en la historia que se disputó con
                        32 selecciones y, además, se disputó bajo un nuevo calendario tras ser reprogramada de 2018 a
                        2019, sacando el campeonato de los años coincidentes con otros grandes eventos como la Copa
                        Mundial de Fútbol o los Juegos Olímpicos de Invierno. España derrotó en la final a Argentina
                        95-75, consiguiendo el segundo título de su historia. El defensor del título, Estados Unidos,
                        fue eliminado en cuartos de final a manos de Francia, que ganó la medalla de bronce.</p>
                </div>
                <div className="mundial">
                    <img src={bas2023} width="75" alt="2023"/>
                    <h2>Campeon:.....</h2>
                    <h3>Posicionamiento Arg:.....</h3>
                    <p>Resumen: La XIX Copa Mundial de Baloncesto Masculino se celebrará conjuntamente en Filipinas,
                        Japón e Indonesia entre el 25 de agosto y el 10 de septiembre de 2023, bajo la organización de
                        la Federación Internacional de Baloncesto (FIBA), la Federación Filipina de Baloncesto, la
                        Federación Japonesa de Baloncesto y la Federación Indonesia de Baloncesto.1​ La edición de 2023
                        del evento bandera de FIBA hará historia al ser la primera vez que se realice en más de un país.
                        Un total de 32 selecciones nacionales de cinco confederaciones continentales competirán por el
                        título mundial, cuyo actual portador es el equipo de España, vencedor del Mundial de 2019.</p>
                </div>
            </div>
        </section>
    );
}
export default RugbyPage;