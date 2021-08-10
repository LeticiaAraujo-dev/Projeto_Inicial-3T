import React from 'react';
import { Link } from 'react-router-dom';

import '../../Assents/styles/Home.css'

import logoHeader from '../../Assents/img/LogoHeader.png';

function deslogar(){
    localStorage.removeItem('usuario-login')
}

export default function Header(){
    return(
        <header>
            <section className="headers-menus">
                <img src={logoHeader} alt="Logo do senai"/>

                <div className="menu-info">
                    <nav className="menu">
                        {/*<a className="cadastro-header" href="#">Cadastro de salas</a>   font-weight: bold;   
    font-family: 'Georama', sans-serif;*/}
                        <Link className="cadastro-header" to="/" 
                        style={{ display:'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '400', fontSize: '25px' }}>Home</Link>
                        {/*<a className="sair-header" href="#">Sair</a>*/}
                        <Link className="sair-header" to="/login" onClick={() => deslogar()}
                         style={{ display:'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '400', fontSize: '25px' }}
                        >Sair</Link>
                    </nav>
                </div>
            </section>
        </header>
    )
}