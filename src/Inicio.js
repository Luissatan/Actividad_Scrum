import React from 'react';
import './Inicio.css';

function Inicio() {
    return(
        <>
            <header>
                <nav>
                    <a href='#'
                    className='rojo'>
                        Incio
                        </a>
                    <a href='#'>
                        Blog
                    </a>
                    <img 
                    src='https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png'
                    width='100px'>
                    </img>
                    <a href='#'>
                        Nosotros
                    </a>
                    <a href='#'>
                        Contacto
                    </a>
                </nav>
            </header>
            <div className='container'>
                <div className='cartas'>
                    <div className='carta'>
                        <img src='/img/flat_3.png'></img>
                        <div className='texto'>
                            <p>lorem ipsum</p>
                        </div>
                    </div>
                    <div className='carta'>
                        <img src='/img/flat_3.png'></img>
                        <div className='texto'>
                            <p>lorem ipsum</p>
                        </div>
                    </div>
                    <div className='carta'>
                        <img src='/img/flat_3.png'></img>
                        <div className='texto'>
                            <p>lorem ipsum</p>
                        </div>
                    </div>
                </div>
                <aside>
                    <h4>Promociones</h4>
                    <img src='/img/flat_3.png'></img>
                </aside>
            </div>
            <footer>
                <h3>Footer</h3>
            </footer>
        </>
    );
}
export default Inicio;
