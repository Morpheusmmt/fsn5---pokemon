import { useState, useEffect } from 'react';
import './PokemonAvancado.css';

//vai traduzir os nomes das estatisticas do pokemon
const traducoes = {
    hp: "vida",
    attack: "ataque",
    defense: "defesa",
    "special-attack": "ataque especial",
    "special-defense": "defesa especial",
    speed: "velocidade"
}

export default function PokemonAvancado() {
  const [pokemon, setPokemon] = useState(null); //armazena os dados do pokemon
  const [carregando, setCarregando] = useState(true); //indica se os dados estão sendo carregados
  const [erro, setErro] = useState(null); //armazena mensagens de erro

  //useEffect para buscar os dados do pokemon quando o componente é montado
  useEffect(() => {
    const buscarPokemon = async () => {
      try {
        const numeroPokemon = Math.round(Math.random() * 151); // Gera um número aleatório entre 0 e 151 
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${numeroPokemon}`);
        
        //verifica a resposta da api
        if (!resposta.ok) throw new Error("Erro ao buscar Pokémon");
        

        //converte a resposta em JSON
        const dados = await resposta.json();
        setPokemon(dados);
      } catch (err) {
        setErro(err.message);
      } finally {
        setCarregando(false);
      }
    };

    //Chama a função para buscar os dados do pokemon
    buscarPokemon();
  }, []);

  if (carregando) return <div className="carregando">Carregando Pokémon...</div>;
  if (erro) return <div className="erro">Erro: {erro}</div>;
  if (!pokemon) return null;

  return (
    <div className='Card'>
      <h1>{pokemon.name} #{pokemon.id}</h1>
      
      <img //exibe a imagem do pokemon
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} 
        alt={pokemon.name} 
      /> 

      {/*Mapeia os tipos de pokemon*/}
      <div className="tipos"> 
        {pokemon.types.map((tipo, index) => (
          <span key={index} className={`tipo-${tipo.type.name}`}>
            {tipo.type.name}
          </span>
        ))}
      </div>
      
      {/*Mostra os detalhes do pokemon*/}
      <div className="detalhes">
        <p>Altura: {(pokemon.height / 10).toFixed(1)} m</p>
        <p>Peso: {(pokemon.weight / 10).toFixed(1)} kg</p>
      </div>
      
      {/*Mapeia as habilidades do pokemon*/}
      <div className="habilidades">
        <h3>Habilidades:</h3>
        <ul>
          {pokemon.abilities.map((habilidade, index) => (
            <li key={index}>
              {habilidade.ability.name.replace('-', ' ')}
              {habilidade.is_hidden && " (oculta)"}
            </li>
          ))}
        </ul>
      </div>
      
      {/*Mapeia as estatisticas do pokemon e faz a tradução de acordo com o const que fiz la em cima*/}
      <div className="stats">
        <h3>Estatísticas Base:</h3>
        <ul>
          {pokemon.stats.map((stat, index) => (
            <li key={index}>
              <span>{traducoes[stat.stat.name] || stat.stat.name}:</span>
              <span>{stat.base_stat}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}