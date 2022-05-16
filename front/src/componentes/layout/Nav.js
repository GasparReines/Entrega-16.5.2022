const Nav = (props) => {
    return ( 
        <nav>
            <div className="holder">
                <ul>
                <li><link to="/HomePage">Home</link></li>
                <li><link to="/Rugby">Rugby</link></li>
                <li><link to="/Basquet">Basquet</link></li>
                <li><link to="/Consultas">Consultas</link></li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;