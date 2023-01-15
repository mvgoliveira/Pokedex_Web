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
        color = "#ffb46e";
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
        color = "#90C12C";
        break;
      
      case "dark":
        color = "#5B5366";
        break;

      case "dragon":
        color = "#0A6DC4";
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
        color = "#FF9C54";
        break;
      
      case "flying":
        color = "#8FA8DD";
        break;

      case "ghost":
        color = "#5269AC";
        break;
      
      case "grass":
        color = "#63BB5B";
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
        color = "#B567CE";
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
        icon = "https://archives.bulbagarden.net/media/upload/9/9c/Bug_icon_SwSh.png";
        break;
      
      case "dark":
        icon = "https://upload.wikimedia.org/wikipedia/commons/0/09/Pokémon_Dark_Type_Icon.svg";
        break;

      case "dragon":
        icon = "https://archives.bulbagarden.net/media/upload/7/70/Dragon_icon_SwSh.png";
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
        icon = "https://archives.bulbagarden.net/media/upload/a/ab/Fire_icon_SwSh.png";
        break;
      
      case "flying":
        icon = "https://archives.bulbagarden.net/media/upload/b/b5/Flying_icon_SwSh.png";
        break;

      case "ghost":
        icon = "https://archives.bulbagarden.net/media/upload/0/01/Ghost_icon_SwSh.png";
        break;
      
      case "grass":
        icon = "https://archives.bulbagarden.net/media/upload/a/a8/Grass_icon_SwSh.png";
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
    <Container color={getCardColor(types[0].type.name)}>
      <div className="containerLeft">
        <p>#{normalizeId()}</p>
        <strong>{name}</strong>

        <section>
          {types.map((type, idx)=> {
            return (
              <TypeTag color={getTagColor(type.type.name)} key={idx}>
                <img src={getTypeIcon(type.type.name)} alt={`type ${type.type.name} of ${name}`} />
                {type.type.name}
              </TypeTag>
            )
          })}
        </section>
      </div>

      <img src={img} alt={name}/>
    </Container>
  )
}