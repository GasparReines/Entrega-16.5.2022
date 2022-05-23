import React from 'react';
import '../styles/componentes/pages/RugbyPage.css'
import wc2007 from './imagenes/wc2007.png';
import wc2011 from './imagenes/wc2011.png';
import wc2015 from './imagenes/wc2015.jfif';
import wc2019 from './imagenes/wc2019.png';
const RugbyPage = (props) => {
    return (
        <section className="holder">
            <div className="Resumen">
                <p>
                    <h2>En que se basa el Rugby</h2>
                    Rugby es el nombre de un deporte que enfrenta a dos equipos formados por quince jugadores cada uno. El
                    objetivo es llevar una pelota (balón) ovalada hasta detrás de la línea que supone el final del campo, o
                    hacer pasar esta pelota entre dos postes y un travesaño que se ubican en la misma línea.

                    La denominación de este deporte está vinculada a la ciudad inglesa donde se inventó: Rugby, localidad que
                    pertenece al condado de Warwickshire.
                </p>
            </div>
            <div>
                Aca tengo que hagregar el selector de Js para dar el dato correcto de la divicion a la que tiene que ir segun su edad
            </div>
            
                <h2>Ultimos Mundiales</h2>
                <div class="mundiales">
                    <div class="m2007-2019">
                        <img src={wc2007} width="100" alt="img2007" />
                        <h2>Campeon: Sudafrica</h2>
                        <h3>Posicionamiento Arg: Tercer puesto</h3>
                        <p>Resumen: La sede fue Francia, se desarrolló desde el 7 de septiembre hasta el 20 de octubre de
                            2007. Esta fue la primera ocasión en que dicha competición se disputó en la Europa continental.
                            Compitieron
                            las 20 selecciones clasificadas tras la disputa de diferentes rondas clasificatorias que
                            comenzaron en 2004. Fueron un total de 48 partidos, en un total de 44 días. </p>

                    </div>
                    <div class="m2007-2019">
                        <img src={wc2011} width="100" alt="img2011" />
                        <h2>Campeon: Nueva Zelanda</h2>
                        <h3>Posicionamiento Arg: Descalificado en cuartos de final</h3 >
                        <p>Resumen: Fue la VII Copa Mundial de Rugby. Fue seleccionada Nueva Zelanda para albergar el
                            torneo. El torneo se desarrolló durante seis semanas a partir del 9 de septiembre, finalizando
                            con la disputa de la final el 23 de octubre.Los equipos participantes de este mundial al igual
                            que en la Copa Mundial de Rugby de 2007 fueron 20. Los primeros clasificados fueron los tres
                            primeros de cada grupo del anterior mundial. </p>
                    </div>
                    <div class="m2007-2019">
                        <img src={wc2015} width="100" alt="img2015" />
                        <h2>Campeon: Nueva Zelanda</h2>
                        <h3>Posicionamiento Arg: Cuarto puesto</h3>
                        <p>Resumen: Fue la VIII edición de la Copa del Mundo de Rugby. El campeonato tuvo lugar entre el 18
                            de septiembre y el 31 de octubre de 2015. En la reunión extraordinaria de la World Rugby (WR)
                            que tuvo lugar el 28 de julio de 2009 en Dublín se anunció que esta edición tendría lugar en
                            Inglaterra, aunque también se disputaron partidos en el Millennium Stadium de Cardiff, capital
                            de Gales.</p>
                    </div>
                    <div class="m2007-2019">
                        <img src={wc2019} width="100" alt="img2019" />
                        <h2> Campeon: Sudafrica</h2>
                        <h3> Posicionamiento Arg: Descalificado en cuartos de final</h3>
                        <p>Resumen: Fue la novena edición de la Copa del Mundo de Rugby, torneo internacional de rugby union
                            que se disputa cada cuatro años desde 1987. Esta edición fue la primera que se disputó en Asia.
                            Se realizó entre el 20 de septiembre y el 2 de noviembre de 2019. Fue la edición más exitosa a
                            nivel televisivo de la historia con más de 857 millones de espectadores, registrando un aumento
                            del 26% en relación a la edición de Inglaterra 2015.</p>
                    </div>
                </div>
            
        </section>
    );
}
export default RugbyPage;