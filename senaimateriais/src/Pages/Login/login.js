import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { parseJwt } from '../../Services/auth';

// SERVICES
import { auth } from '../../Services/auth';

// CSS
import '../../Assents/styles/Login.css'

// IMAGES
import imagemDeFundo from '../../Assents/img/imagemLogin.png';
import logo from '../../Assents/img/logo.png'


export default function Login()
{
    const [ email, setEmail ] = useState('');

    const [ senha, setSenha] = useState('');

    const [ errorMensa, setErroMensa ] = useState('');

    const [ isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    function fazerlogin(event){
        event.preventDefault();

        setErroMensa('')
        setIsLoading(true)

        axios
            .post('http://localhost:5000/api/login', {
                email : email,
                senha : senha
            })
            .then((res) => {
                if (res.status === 200) {
                    localStorage.setItem('usuario-login', res.data.token);
                    console.log(parseJwt(res.data.token).jti)

                    setIsLoading(false);

                    if ([auth().jti !== null]) {
                        history.push('/')
                    } else{
                        history.push('/login')
                    }
                }
            })
            .catch(() => {
                setErroMensa('E-mail e/ou senha inválidos! Tente novamente');
                setIsLoading(false);
            })
    };


    return(
        <div className="main">
            <section className="login">
                <div className="imagem">
                    <img src={imagemDeFundo} alt=""/>
                </div>

                <div className="login-campos">
                    
                        <form onSubmit={fazerlogin} className="login-campos-container">
                            <img src={logo} alt="Imagem da logo do senai"/>

                            <span style={{color: 'red', fontSize: '20px'}}>{errorMensa}</span>

                            <div className="email">
                                <input type="text" 
                                placeholder="Email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>

                            <div className="senha">
                                <input type="password"
                                placeholder="Senha"
                                value={senha}
                                onChange={(event) => setSenha(event.target.value)}
                                />
                            </div>
                            {
                                isLoading === (true) && 
                                <button className="botao-login" disabled 
                                style={{backgroundColor: 'black', color: 'white'}}
                                >Loading...</button>
                            }

                            {
                                isLoading === (false) &&
                                <button className="botao-login"
                                type="submit"
                                style={{ fontWeight: '400', fontSize: '28px' }}
                                >Login</button>
                            }
                            {/*<button className="botao-login">Login</button>*/}
                        </form>
                
                </div>
            </section>
        </div>
    )
}