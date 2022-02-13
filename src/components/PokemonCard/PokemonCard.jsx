import { Container, TypeTag } from "./styles";


export default function PokemonCard({id, name, img, types}) {
  
  function normalizeId() {
    let string = "000" + id;
    return string.substring(string.length - 3);
  }

  function getCardColor(type) {
    let color = "";

    switch (type.toLowerCase()) {
      case "bug":
        color = "#88d16f";
        break;
      
      case "dark":
        color = "#6b6277";
        break;

      case "dragon":
        color = "#4a6fbe";
        break;
      
      case "electric":
        color = "#F2CB55";
        break;

      case "fairy":
        color = "#faaecd";
        break;
      
      case "fighting":
        color = "#EB4971";
        break;
      
      case "fire":
        color = "#f5a65c";
        break;
      
      case "flying":
        color = "#98bceb";
        break;

      case "ghost":
        color = "#926396";
        break;
      
      case "grass":
        color = "#74cf83";
        break;

      case "ground":
        color = "#F88551";
        break;
      
      case "ice":
        color = "#64bcc2";
        break;

      case "normal":
        color = "#77797c";
        break;
      
      case "poison":
        color = "#8e6cc4";
        break;

      case "psychic":
        color = "#e25f6c";
        break;
      
      case "rock":
        color = "#aa9b70";
        break;

      case "steel":
        color = "#868787";
        break;
      
      case "water":
        color = "#58ABF6";
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
        color = "#84c400";
        break;
      
      case "dark":
        color = "#5B5366";
        break;

      case "dragon":
        color = "#0070CA";
        break;
      
      case "electric":
        color = "#FBD200";
        break;

      case "fairy":
        color = "#FB8AEC";
        break;
      
      case "fighting":
        color = "#E12C6A";
        break;
      
      case "fire":
        color = "#FF983F";
        break;
      
      case "flying":
        color = "#8AACE4";
        break;

      case "ghost":
        color = "#4B6AB3";
        break;
      
      case "grass":
        color = "#35C04A";
        break;

      case "ground":
        color = "#E97333";
        break;
      
      case "ice":
        color = "#4BD2C1";
        break;

      case "normal":
        color = "#929BA3";
        break;
      
      case "poison":
        color = "#B667CF";
        break;

      case "psychic":
        color = "#FF6676";
        break;
      
      case "rock":
        color = "#C9B787";
        break;

      case "steel":
        color = "#5A8FA3";
        break;
      
      case "water":
        color = "#3393DD";
        break;

      default:
        break;
    }
    return color; 
  }

  function getTypeIcon(type) {
    let icon = "";

    switch (type.toLowerCase()) {
      case "bug":
        icon = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Pokémon_Bug_Type_Icon.svg";
        break;
      
      case "dark":
        icon = "https://upload.wikimedia.org/wikipedia/commons/0/09/Pokémon_Dark_Type_Icon.svg";
        break;

      case "dragon":
        icon = "https://upload.wikimedia.org/wikipedia/commons/a/a6/Pokémon_Dragon_Type_Icon.svg";
        break;
      
      case "electric":
        icon = "https://upload.wikimedia.org/wikipedia/commons/a/a9/Pokémon_Electric_Type_Icon.svg";
        break;

      case "fairy":
        icon = "https://upload.wikimedia.org/wikipedia/commons/0/08/Pokémon_Fairy_Type_Icon.svg";
        break;
      
      case "fighting":
        icon = "https://upload.wikimedia.org/wikipedia/commons/b/be/Pokémon_Fighting_Type_Icon.svg";
        break;
      
      case "fire":
        icon = "https://upload.wikimedia.org/wikipedia/commons/5/56/Pokémon_Fire_Type_Icon.svg";
        break;
      
      case "flying":
        icon = "https://upload.wikimedia.org/wikipedia/commons/e/e0/Pokémon_Flying_Type_Icon.svg";
        break;

      case "ghost":
        icon = "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pokémon_Ghost_Type_Icon.svg";
        break;
      
      case "grass":
        icon = "https://upload.wikimedia.org/wikipedia/commons/f/f6/Pokémon_Grass_Type_Icon.svg";
        break;

      case "ground":
        icon = "https://upload.wikimedia.org/wikipedia/commons/8/8d/Pokémon_Ground_Type_Icon.svg";
        break;
      
      case "ice":
        icon = "https://upload.wikimedia.org/wikipedia/commons/8/88/Pokémon_Ice_Type_Icon.svg";
        break;

      case "normal":
        icon = "https://upload.wikimedia.org/wikipedia/commons/a/aa/Pokémon_Normal_Type_Icon.svg";
        break;
      
      case "poison":
        icon = "https://upload.wikimedia.org/wikipedia/commons/c/c4/Pokémon_Poison_Type_Icon.svg";
        break;

      case "psychic":
        icon = "https://upload.wikimedia.org/wikipedia/commons/a/ab/Pokémon_Psychic_Type_Icon.svg";
        break;
      
      case "rock":
        icon = "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pokémon_Rock_Type_Icon.svg";
        break;

      case "steel":
        icon = "https://upload.wikimedia.org/wikipedia/commons/3/38/Pokémon_Steel_Type_Icon.svg";
        break;
      
      case "water":
        icon = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Pokémon_Water_Type_Icon.svg";
        break;

      default:
        break;
    }
    return icon; 
  }

  return (
    <Container color={getCardColor(types[0])}>
      <div className="containerLeft">
        <p>#{normalizeId()}</p>
        <strong>{name}</strong>

        <section>
          {types.map(type => {
            return (
              <TypeTag color={getTagColor(type)}>
                <img src={getTypeIcon(type)} alt={`type ${type} of ${name}`} />
                {type}
              </TypeTag>
            )
          })}
        </section>
      </div>

      <img src={img} alt={name}/>
    </Container>
  )
}