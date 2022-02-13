import PokemonCard from "../../components/PokemonCard/PokemonCard";
import {ImSearch} from "react-icons/im";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <h1>Pokédex</h1>
      <p>Procure por pokémon por nome ou usando o Número Nacional da Pokédex</p>

      <section className="inputContainer" onClick={() => document.getElementById("searchInput").focus()}>
        <ImSearch/>
        <input type="text" id="searchInput" placeholder="Qual pokémon está procurando?"/>
      </section>

      <PokemonCard id="1" name="bulbasaur" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" types={["grass", "poison"]} />
      <PokemonCard id="4" name="charmander" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" types={["fire"]} />
      <PokemonCard id="7" name="squirtle" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" types={["water"]} />
      <PokemonCard id="10" name="metapod" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png" types={["bug"]} />
      <PokemonCard id="16" name="pidgey" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png" types={["normal", "flying"]} />
      <PokemonCard id="21" name="spearow" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png" types={["flying", "normal"]} />
      <PokemonCard id="23" name="ekans" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png" types={["poison"]} />
      <PokemonCard id="25" name="pikachu" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" types={["electric"]} />
      <PokemonCard id="28" name="sandslash" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png" types={["ground"]} />
      <PokemonCard id="35" name="claifairy" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png" types={["fairy"]} />
      <PokemonCard id="52" name="meowth" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png" types={["dark"]} />
      <PokemonCard id="57" name="pikachu" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png" types={["fighting"]} />
      <PokemonCard id="63" name="abra" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png" types={["psychic"]} />
      <PokemonCard id="92" name="gastly" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png" types={["ghost", "poison"]} />
      <PokemonCard id="147" name="dratini" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png" types={["dragon"]} />
      <PokemonCard id="185" name="sudowoodo" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/185.png" types={["rock"]} />
      <PokemonCard id="305" name="lairon" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/305.png" types={["steel"]} />
      <PokemonCard id="361" name="snorunt" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/361.png" types={["ice"]} />
    </Container>
  )
}