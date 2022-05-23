import React from 'react';
import '../styles/componentes/pages/ConsultasPage.css';

const ConsultasPage = (props) => {
    return(
        <main className='holder'>
            <div className='columna contacto'>
                <h2>Deje aqui sus consultas</h2>
                <form action=""  method="" className='formulario'>
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre"/>
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="text" name="email"/>
                    </p> 
                    <p>
                        <label>Telefono</label>
                        <input type="text" name="telefono"/>
                    </p>
                    <p>
                        <label>Comentario</label>
                        <textarea name='mensaje'></textarea>
                    </p>
                    <p className='centrar'><input type="submit" value="Enviar"/></p>
                </form>               
            </div>
            <div className='columnna datos'>
                <h2>Otras vias de contacto</h2>
                <p>Tambien puede contactarse con nosotros utilizando los siguientes medios:</p>
                <ul>
                    <li>Telefono:1172273889</li>
                    <li>Email: Deportespopulares@gmail.com</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Skype</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </main>
    )
}
export default ConsultasPage;