import PokemonCard from "../../components/PokemonCard/PokemonCard";
import {ImSearch} from "react-icons/im";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <h1>Pokédex</h1>
      <p>procure por pokémon por nome ou usando o Número Nacional da Pokédex</p>

      <section className="inputContainer" onClick={() => document.getElementById("searchInput").focus()}>
        <ImSearch/>
        <input type="text" id="searchInput" placeholder="Qual pokémon está procurando?"/>
      </section>

      <PokemonCard id="14" name="Kakuna" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png" />
    </Container>
  )
}