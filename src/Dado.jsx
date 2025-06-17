import './Dados.css'

export default function Dado() {
    let ValorDado = Math.round(Math.random() * 6);
    return (
        <h2 className = 'fundoAmarelo'>Número do dado: {ValorDado}</h2>
    )
}