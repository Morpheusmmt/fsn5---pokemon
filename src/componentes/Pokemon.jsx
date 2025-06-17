import'./Pokemon.css'

export default function Pokemon() {

    let NumeroPokemon = Math.round(Math.random() * 151);
    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${NumeroPokemon}.png`;
    return (
        <div className='Card'>
            <h1>Você é o pokémon #{NumeroPokemon}</h1>
            <img src={url} alt={`Pokemon ${NumeroPokemon}`}/>
        </div>
    )
}