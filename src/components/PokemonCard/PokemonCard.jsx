import { Container, TypeTag } from "./styles";


export default function PokemonCard({id, name, img}) {
  
  function normalizeId() {
    let string = "000" + id;
    return string.substring(string.length - 3);
  }

  function getCardColor(type) {
    let color = "";

    switch (type.toLowerCase()) {
      case "bug":
        color = "80db60";
        break;
      
      case "dark":
        color = "88d16f";
        break;

      case "dragon":
        color = "88d16f";
        break;
      
      case "electric":
        color = "88d16f";
        break;

      case "fairy":
        color = "88d16f";
        break;
      
      case "fighting":
        color = "88d16f";
        break;
      
      case "fire":
        color = "88d16f";
        break;
      
      case "flying":
        color = "88d16f";
        break;

      case "ghost":
        color = "88d16f";
        break;
      
      case "grass":
        color = "88d16f";
        break;

      case "ground":
        color = "88d16f";
        break;
      
      case "ice":
        color = "88d16f";
        break;

      case "normal":
        color = "88d16f";
        break;
      
      case "poison":
        color = "88d16f";
        break;

      case "psychic":
        color = "88d16f";
        break;
      
      case "rock":
        color = "88d16f";
        break;

      case "steel":
        color = "88d16f";
        break;
      
      case "water":
        color = "88d16f";
        break;

      default:
        break;
    }
    return color; 
  }

  function getTagColor(type) {
    let color = "";

    switch (type.toLowerCase()) {
      case "bug":
        color = "47a327";
        break;
      
      case "dark":
        color = "88d16f";
        break;

      case "dragon":
        color = "88d16f";
        break;
      
      case "electric":
        color = "88d16f";
        break;

      case "fairy":
        color = "88d16f";
        break;
      
      case "fighting":
        color = "88d16f";
        break;
      
      case "fire":
        color = "88d16f";
        break;
      
      case "flying":
        color = "88d16f";
        break;

      case "ghost":
        color = "88d16f";
        break;
      
      case "grass":
        color = "88d16f";
        break;

      case "ground":
        color = "88d16f";
        break;
      
      case "ice":
        color = "88d16f";
        break;

      case "normal":
        color = "88d16f";
        break;
      
      case "poison":
        color = "863ebd";
        break;

      case "psychic":
        color = "88d16f";
        break;
      
      case "rock":
        color = "88d16f";
        break;

      case "steel":
        color = "88d16f";
        break;
      
      case "water":
        color = "88d16f";
        break;

      default:
        break;
    }
    return color; 
  }

  return (
    <Container color={getCardColor("bug")}>
      <div className="containerLeft">
        <p>#{normalizeId()}</p>
        <strong>{name}</strong>

        <section>
          <TypeTag color={getTagColor("bug")}>bug</TypeTag>
          <TypeTag color={getTagColor("poison")}>poison</TypeTag>
        </section>
      </div>

      <img src={img} alt={name}/>
    </Container>
  )
}