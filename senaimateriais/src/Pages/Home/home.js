import { useHistory } from 'react-router';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';

import '../../Assents/styles/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//import logoHeader from '../../Assents/img/LogoHeader.png';
import caixa from '../../Assents/img/archive1.png';

import Header from "../../components/header/header"
import Rodape from "../../components/rodape/rodape"

export default function Home()
{
    let history = useHistory();

    const [ listaDeSalas, setListaDeSalas ] = useState( [] );

    // CADASTRO
    
    const [ nome , setNome ] = useState( '' );

    const [ andar , setAndar ] = useState( '' );

    const [ metragem , setMetragem ] = useState(  );

    const [ isLoading , setIsLoading ] = useState( false );

    function buscaSala(){
        setIsLoading( true );

        axios('http://localhost:5000/api/sala', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

        .then(resposta => {
            if (resposta.status === 200) {
                setListaDeSalas(resposta.data);
                setIsLoading( false );
                console.log(resposta.data)

            }
        })

        .catch(erro => console.log(erro));
    }

    useEffect( buscaSala, [] );

    function cadastrarSala(event){
        event.preventDefault();

        setIsLoading( true );

        axios.post('http://localhost:5000/api/sala', {

            nome: nome,
            andar: andar,
            metragem: metragem
        }, {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
        .then(resposta => {
            if (resposta.status === 201) {
                console.log('Sala cadastrada');
                buscaSala();
                setIsLoading( false );
                limpaStates();
            }
        })
        
        .catch(erro => console.log(erro));
    }

    function limpaStates(){
        setNome( '' )
        setAndar( '' )
        setMetragem( '' )

    }


    return(
        <>
        {/*<header>
            <section className="headers-menus">
                <img src={logoHeader} alt="Logo do senai"/>

                <div className="menu-info">
                    <nav className="menu">
                        <a className="cadastro-header" href="#">Cadastro de salas</a>
                        <a className="sair-header" href="#">Sair</a>
                    </nav>
                </div>
            </section>
        </header>*/}

        <Header/>

        <main>

            <section className="banner">
                <div className="banner-image">
                    <h1>Gerenciar patrimonio</h1>
                </div>
            </section>

            <section className="salas">          
                <div className='rolagem-sala'>

                    <Carousel itemsToShow={5}>

                        {
                            listaDeSalas.map( (sala) => { 
                                return(
                                    
                                    <Card key={sala.idSala} style={{ width: '300px', height: '350px', borderRadius:'30px'}}>

                                        <Card.Header style={{ width: '300px', height: '65px'}}>
                                            <Card.Img variant="center" src={caixa} style={{ width: '50px', height: '50px' }} />
                                        </Card.Header>

                                        <Card.Body className="cards" style={{width: '300px', height: '60px' }}> 

                                            <Card.Title style={{fontSize: '30px', fontFamily: 'Poppins', fontWeight: '200' }}>{sala.nome}</Card.Title>
                                        </Card.Body>

                                        <Card.Body style={{ width: '300px', height: '40px', display: 'flex', justifyContent: 'space-between', fontSize: '25px'}}>
                                            <Card.Text style={{ fontFamily: 'Poppins', fontWeight: '300' }} >{sala.andar} Andar</Card.Text>
                                            <Card.Text style={{ fontFamily: 'Poppins', fontWeight: '300' }} >{sala.metragem}m²</Card.Text>
                                        </Card.Body>

                                        <ListGroup>
                                            <Card.Body className="text-center">
                                                <Button
                                                style={{ fontFamily: 'Poppins', fontWeight: '200' }}
                                                variant="secondary"
                                                onClick={() => history.push(`/equipamentos/${sala.idSala}`)}
                                                >
                                                Equipamentos</Button>
                                                
                                                {/*<Link to={`/equipamentos/${sala.idSala}`}>clique aqui</Link>*/}
                                            </Card.Body>
                                        </ListGroup>
                                    </Card>
                                )
                            } )
                        }

                        

                    </Carousel>
                </div>

            </section>

            <section className="cadastro-salas">

                <form onSubmit={cadastrarSala} className="cadastro-salas-campo">
                    <h2>Cadastro de salas</h2>

                    <div className="campo-salas">

                        <div className="nome">
                            <input 
                            type="text"
                            placeholder="Nome"
                            value={nome}
                            onChange={(event) => setNome(event.target.value)}
                             />
                        </div>

                        <div className="andar">
                            <input 
                            type="text" 
                            placeholder="Andar"
                            value={andar}
                            onChange={(event) => setAndar(event.target.value)}
                            />
                        </div>

                        <div className="metragem">
                            <input 
                            type="text" 
                            placeholder="Metragem"
                            value={metragem}
                            onChange={(event) => setMetragem(event.target.value)}
                            
                            />
                        </div>
                    </div>

                    {
                        isLoading === false && 
                        <button type="submit" className="botao-cadastro" style={{ fontWeight: '400', fontSize: '28px' }} >Cadastrar</button>
                    }

                    {
                        isLoading === true &&
                        <button type="submit" disabled className="botao-cadastro" style={{ backgroundColor: '#000000', border: 'none', fontWeight: '400', fontSize: '28px'}}>Cadastrando....</button>
                    }
                </form>
            </section>
        </main>

        <Rodape/>
        </>
        
    )
}