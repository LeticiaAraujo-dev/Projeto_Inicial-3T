import React from "react"
import { useParams } from "react-router"
import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from 'react-bootstrap';
import { useHistory } from "react-router";

import '../../Assents/styles/Equipamento.css'
import { Button } from "bootstrap";

export default function Equipamentos()
{
    const { id } = useParams();

    const history = useHistory();

    const [ minhaSala, setMinhaSala ] = useState( [] );

    const [ meusEquipamentos, setMeusEquipamentos ] = useState( [] );

    const [ listaTipoEqui, setListaTipoEqui ] = useState( [] );

    // CADASTRO
    
    const [ nome , setNome ] = useState( '' );

    const [ andar , setAndar ] = useState( '' );

    const [ metragem , setMetragem ] = useState(  );

    const [ idEdit, setIdEdit ] = useState( 0 );
;
    const [ isLoading , setIsLoading ] = useState( false );

    // CADASTRO EQUIPAMENTOS

    const [ idEquip, setIdEquip ] = useState(  );

    const [ idTipo , setIdTipo ] = useState(  );

    const [ marca , setMarca ] = useState( '' );

    const [ desc , setDesc ] = useState( '' );

    const [ serie , setSerie ] = useState(  );

    const [ patrimo , setPatrimo ] = useState(  );


    function bucarUnicaSala(){
        axios(`http://localhost:5000/api/sala/${id}`)

        .then(resposta => {
            if (resposta.status === 200) {
                let dados = resposta.data
                setMinhaSala(dados)
                console.log(minhaSala)
            };
        })

        .catch(erro => console.log(erro));
    };

    function buscaEquepamentos(){
        axios(`http://localhost:5000/api/Equipamento/minhas/${id}`)

        .then(resposta => {
            if (resposta.status === 200) {
                let dados = resposta.data
                setMeusEquipamentos(dados)
                console.log(dados)
            };
        })

        .catch(erro => console.log(erro));
    }

    function buscaTiposEquipamentos(){
        axios(`http://localhost:5000/api/TipoEquipamento`)

        .then(resposta => {
            if (resposta.status === 200) {
                let dados = resposta.data
                setListaTipoEqui(dados)
                console.log(dados)
            };
        })

        .catch(erro => console.log(erro));
    }

    function atualizaSala(event){
        event.preventDefault();

        setIsLoading( true );

        axios.put(`http://localhost:5000/api/sala/${id}`, {

            nome: nome,
            andar: andar,
            metragem: metragem
        })
        .then(resposta => {
            if (resposta.status === 204) {
                bucarUnicaSala();
                setIsLoading( false );
                console.log('Sala editada')
            }
        })

        .catch(erro => console.log(erro));
    };

    function excluirSala(sala){
        sala.preventDefault();

        setIsLoading( true );

        axios.delete(`http://localhost:5000/api/sala/${id}`)

        .then(resposta => {
            if (resposta.status === 204) {
                setIsLoading( false );
                console.log('sala excluida com sucesso')
                history.push('/')              
            }
        })

        .catch(erro => console.log(erro));

    }

    function excluirEquipamento(equip){

        setIsLoading( true );

        axios.delete(`http://localhost:5000/api/Equipamento/${equip}`)

        .then(resposta => {
            if (resposta.status === 204) {
                buscaEquepamentos();
                setIsLoading( false );
                console.log('equipamento excluido com sucesso')
                              
            }
        })

        .catch(erro => console.log(erro));

    }

    useEffect( bucarUnicaSala, [] );

    useEffect( buscaEquepamentos, [] );

    useEffect(  buscaTiposEquipamentos, [] );

    function cadastrarEquipamentos(event){
        event.preventDefault();

        setIsLoading( true );

        if (idEdit === 0) {
            
            axios.post('http://localhost:5000/api/Equipamento', {

            idTipoEquipamento: idTipo,
            idSala: id,
            marca: marca,
            descricao: desc,
            numeroPatrimonio: patrimo,
            numeroSerie: serie
        })

        .then(resposta => {
            if (resposta.status === 201) {
                console.log('Equipamento cadastrado');
                buscaEquepamentos();
                setIsLoading( false );
                limpaStates();
            }
        })
        
        .catch(erro => console.log(erro));

        } else {
    
            axios.put(`http://localhost:5000/api/Equipamento/${idEquip}`, {
    
                marca: marca,
                descricao: desc,
                numeroPatrimonio: patrimo,
                numeroSerie: serie
            })
            .then(resposta => {
                if (resposta.status === 204) {
                    buscaEquepamentos();
                    setIsLoading( false );
                    console.log('Equipamento editado')
                    limpaStates();
                }
            })
    
            .catch(erro => console.log(erro));
        }
    }

    function buscaIdEqupamentoEdit(equip){
        setIdEdit(equip.idEquipamento)

        setIdEquip(equip.idEquipamento)
        setIdTipo(equip.idTipoEquipamento)
        setMarca(equip.marca)
        setDesc(equip.descricao)
        setPatrimo(equip.numeroPatrimonio)
        setSerie(equip.numeroSerie)
    }

    function mudaStatus(equip){
        setIsLoading( true )

        axios.patch(`http://localhost:5000/api/Equipamento/usar/${equip}`)

        .then(resposta => {
            if (resposta.status === 204) {
                buscaEquepamentos();
                setIsLoading( false );
                console.log('status mudado')
                              
            }
        })

        .catch(erro => console.log(erro));
    }

    function limpaStates(){
        setIdEdit( 0 )
        setIdEquip(  )
        setIdTipo( 0 )
        setMarca( '' )
        setDesc( '' )
        setPatrimo( '' )
        setSerie( '' )
    }


    return(
        <main>
            <section className="sala">
                <div className="sala-container">
                    <div className="sala-conteudo">

                        <Card key={minhaSala.idSala} className="sala-vizual">
                            <Card.Body style={{ width: '17vw', height: '5vh'}}>
                                <Card.Title style={{ fontSize:'26px', fontWeight: '600', textAlign: 'start'}}>{minhaSala.nome}</Card.Title>
                            </Card.Body>
                            
                            <Card.Body className="sala-vizual-container" style={{  height: '1vh' }}>
                                <Card.Text>{minhaSala.andar}° Andar</Card.Text>
                                <Card.Text>{minhaSala.metragem}m²</Card.Text>
                            </Card.Body>
                        </Card>
                    
                        <form onSubmit={atualizaSala} className="formulario">
                            <div className="sala-botao">
                                <button type="submit" className="editar">Editar</button>

                                <button onClick={(sala) => excluirSala(sala)} className="excluir">Excluir</button>
                            </div>

                            <div className="sala-input">
                                <input 
                                type="text"
                                placeholder="Nome novo"
                                value={nome}
                                onChange={(event) => setNome(event.target.value)}
                                
                                />

                                <input 
                                type="text"
                                placeholder="Andar novo"
                                value={andar}
                                onChange={(event) => setAndar(event.target.value)}
                                />

                                <input 
                                type="text"
                                placeholder="Metragem nova"
                                value={metragem}
                                onChange={(event) => setMetragem(event.target.value)}
                                
                                />
                            </div>
                        </form>
                    </div>
                </div>
        </section>

            <section className="equipamentos">
                <div className="equipamento-container">

                    {
                        meusEquipamentos.map( (equip) => {
                            return(
                                <div key={equip.idEquipament} className="card-equipamento">
                                    <div className="equipamento">
                                        <div className="nome">
                                            <h2>{equip.marca}</h2>
                                        </div>

                                        <div className="dados-equipamento">
                                            <div className="equi-dados1">
                                                <p>{equip.idTipoEquipamentoNavigation.nomeTipo}</p>
                                                <p>{equip.numeroSerie}</p>
                                                <p>{equip.numeroPatrimonio}</p>
                                            </div>
    
                                            <div className="equi-dados2">
                                                <p>{equip.descricao}</p>
                                            </div>
                                        </div>

                                        <div className="div-botao">

                                            {
                                                equip.statu === true &&
                                                <button className="status-botao" onClick={() => mudaStatus(equip.idEquipamento)}>Ativo</button>
                                            }

                                            {
                                                equip.statu === false &&
                                                <button className="status-botao"  onClick={() => mudaStatus(equip.idEquipamento)} style={{ backgroundColor: "#FF0000" }}
                                                >Inativo</button>
                                            }
                                        

                                        </div>
                                    </div>

                                    <div className="botao-equip">
                                        <button onClick={() => buscaIdEqupamentoEdit(equip)} className="editar eqp">Editar</button>


                                        <button 
                                        className="excluir eqp"
                                        onClick={() => excluirEquipamento(equip.idEquipamento)}
                                        >Excluir</button>
                                    </div>
                                </div>
                            )
                        } )
                    }

                </div>
            </section>

            <section className="cadastro-equip">
                <form onSubmit={cadastrarEquipamentos} className="cadastro-equip-campo">
                    <h2>{idEdit === 0 ? 'Cadastro de equipamento' : 'Atualização de equipamento'}</h2>

                    <div className="campo-equip">

                        <div className="tipoEqp">
                            <select className="Marca" 
                                    name="idTipoEquipamento"
                                    value={idTipo}
                                    onChange={(event) => setIdTipo(event.target.value)}
                                    >

                                    {
                                        listaTipoEqui.map( (tipo) => {
                                            return(
                                                <option key={tipo.idTipoEquipamento} 
                                                        value={tipo.idTipoEquipamento}
                                                        
                                                >{tipo.nomeTipo}</option>
                                            )
                                        } )
                                    }

                                    <option value="0" >Selecione o tipo de equipamento</option>
                            </select>
                        </div>

                        <div className="marca">
                            <input type="text" 
                            placeholder="Marca"
                            value={marca}
                            onChange={(event) => setMarca(event.target.value)}
                            
                            />
                        </div>

                        <div className="numeroSerie">
                            <input type="text" 
                            placeholder="Numero de serie"
                            value={serie}
                            onChange={(event) => setSerie(event.target.value)}
                            />
                        </div>

                        <div className="patrimonio">
                            <input type="text" 
                            placeholder="Numero de patrimonio"
                            value={patrimo}
                            onChange={(event) => setPatrimo(event.target.value)}

                            />
                        </div>

                        <div className="descricao">
                            <input type="text" 
                            placeholder="Descricao"
                            value={desc}
                            onChange={(event) => setDesc(event.target.value)}

                            />
                        </div>


                    </div>

                    <button type='submit' className="botao-cadastro">{idEdit === 0 ? 'Cadastrar' : 'Atualizar'}</button>
                </form>
            </section>


        </main>
    )
}