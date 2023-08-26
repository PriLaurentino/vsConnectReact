//hooks
import { useState } from "react";

//estilização
import "./style.css";

//componentes
import CardServico from "../../components/CardServicos";

function ListaServicos() {
    //STATE SERVICOS
    const [servicos, setServicos] = useState<any[]>([]);

    const [skillDigitado, setSkillDigitado] = useState<string>("");

    //função onde pega o que o usuario digitou
    function verificarCampoSkill(event: any) {
        if (event.target.value === "") {
            ListaServicos();
        }
        setSkillDigitado(event.target.value);
    }

    function buscarServicoPorSkill(event: any) {
        //não recarrega a pagina
        event.preventDefault();

        //filtrar devs pela skill digitada no campo buscar
        const servicosFiltrados = servicos.filter((servico: any) => servico.techs.includes(skillDigitado.toLocaleUpperCase()));

        if (servicosFiltrados.length === 0) {
            alert("Nenhum desenvolvedor(a) com essa skill :(")
        } else {
            //atribui valor de devs filtrado, ao state ListaDevsFiltrados 
            setServicos(servicosFiltrados);
        }


    }

    return (
        <main id="main_listaservicos">
            <div className="container container_lista_servicos">
                <div className="lista_servicos_conteudo">
                    <h1>Lista de Serviços</h1>
                    <hr />
                    <form method="post" onSubmit={buscarServicoPorSkill}>
                        <div className="wrapper_form">
                            <label htmlFor="busca">Procurar serviços</label>
                            <div className="campo-label">
                                <input
                                    type="search"
                                    name="campo-busca"
                                    id="busca"
                                    placeholder="Buscar serviços por tecnologias..."
                                    onChange={verificarCampoSkill}
                                    autoComplete="off"
                                />
                                <button type="submit">Buscar</button>
                            </div>
                        </div>
                    </form>
                    <div className="wrapper_lista">
                        <ul>
                            {
                                servicos.map((servico: any, indice: number) => {
                                    return <li key={indice}>
                                        <CardServico
                                        idServicos={servico.id}
                                            proposta={servico.proposta}
                                            titulo={servico.titulo}
                                            descricao={servico.descricao}
                                            listaTechs={servico.techs}
                                        />
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ListaServicos;