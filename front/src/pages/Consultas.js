const ConsultasPage  = (props) => {
    return (
        <main className="holder">
            <div className="columna contacto">
                <h2>Complete el siguiente formulario</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label>Nombre y Apellido</label>
                        <input type="text" name="nombre y apellido" />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="text" name="emeail" />
                    </p>
                    <p>
                        <label>Telefono</label>
                        <input type="text" name="telefono" />
                    </p>
                    <p>
                        <label>Consulta</label>
                        <textarea name="mensaje"></textarea>
                    </p>
                    <p className="centrar"><input type="submit"
                    value="Enviar"/></p>
                </form>
            </div>
            <div className="columna datos">
                <h2>Otras vias de contacto</h2>
                <p>Tambien se pueden utilizar los siguientes medios de contacto</p>
                <ul>
                    <li>Telefono</li>
                    <li>Email</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Skype</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </main>
    );
}
export default ConsultasPage ;