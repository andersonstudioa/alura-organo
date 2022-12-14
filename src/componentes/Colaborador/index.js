import "./Colaborador.css"

//Operador de desestruturação do JS (diferente do props)
const Colaborador = ({nome, imagem, cargo, corPrimaria}) => {
    
    const cssCabecalho = {backgroundColor: corPrimaria}

    return (
        <div className="colaborador">
            <div className="cabecalho" style={cssCabecalho}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className="rodape-colaborador">
                <h4>{nome}</h4>
                <p>{cargo}</p>
            </div>
        </div>
    )
}

export default Colaborador