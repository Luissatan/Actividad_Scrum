import React from 'react';
import './Header.css';
function Header() {
    return(
        <div>
        <nav className="menu">
            <a href="#">Inicio</a>
            <a href="#">Nosotros</a>
            <a href="#">Productos</a>
            <a href="#">Contacto</a>
        </nav>
        <header className="cabecera">
            <img src="https://es.rankiapro.com/wp-content/uploads/2019/08/fondo-tecnologico-preferido-selectores.jpg"/>
        </header>   
        </div>
    );
}
export default Header;