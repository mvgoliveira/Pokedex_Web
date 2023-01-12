import { useSearchParams } from "react-router-dom";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import {ImSearch} from "react-icons/im";
import {HiFilter} from "react-icons/hi";
import { Container, Category } from "./styles";
import { useEffect, useState } from "react";

export function Home() {
	const [isFilterActived, setIsFilterActived] = useState(false);
	const [categoriesSelected, setCategoriesSelected] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();

	async function handleSearch(e) {
		e.preventDefault();
		
	}

	function handleOpenFilter() {
		setIsFilterActived(!isFilterActived);
	}

	function handleSelectCategory(type) {
		if (categoriesSelected.indexOf(type) === -1) {
			setCategoriesSelected(oldArray => [...oldArray, type]);
		} else {
			setCategoriesSelected(
				categoriesSelected.filter(category => category !== type)
			);
		}
	}
	
	useEffect(() => {
		setCategoriesSelected(searchParams.get('categories').split("+"));
	}, []);

	useEffect(() => {
		if (categoriesSelected.length !== 0) {
			setSearchParams({'categories': `${categoriesSelected.join('+')}`})
		} else {
			setSearchParams('')
		}
	}, [categoriesSelected]);

	return (
		<Container isFilterActived={isFilterActived}>
			<h1>Pokédex</h1>
			<p>Procure por pokémon por nome ou usando o Número Nacional da Pokédex</p>

			<section className="searchAndFilterContainer">
				<form 
					className="searchContainer"
					onClick={() => document.getElementById("searchInput").focus()}
					onSubmit={handleSearch}	
				>
					<input type="text" id="searchInput" placeholder="Qual pokémon está procurando?"/>
					
					<button type="submit">
						<ImSearch/>
					</button>
				</form>

				<button
					type="button"
					className="filterButton"
					onClick={handleOpenFilter}
				> 
					<HiFilter size={15}/> 
				</button>
			</section>

			<section className="categoriesContainer">
				<article>
					<Category 
						onClick={() => handleSelectCategory("bug")}
						backgroundColor="#90C12C"
						enable={categoriesSelected.indexOf("bug") !== -1}
						logoUrl="https://archives.bulbagarden.net/media/upload/9/9c/Bug_icon_SwSh.png"
					/>

					<Category 
						onClick={() => handleSelectCategory("dark")}
						backgroundColor="#5B5366"
						enable={categoriesSelected.indexOf("dark") !== -1}
						logoUrl="https://upload.wikimedia.org/wikipedia/commons/0/09/Pokémon_Dark_Type_Icon.svg"
					/>

					<Category 
						onClick={() => handleSelectCategory("dragon")}
						backgroundColor="#0A6DC4"
						enable={categoriesSelected.indexOf("dragon") !== -1}
						logoUrl="https://archives.bulbagarden.net/media/upload/7/70/Dragon_icon_SwSh.png"
					/>
					
					<Category
						onClick={() => handleSelectCategory("electric")}
						backgroundColor="#FBD200"
						enable={categoriesSelected.indexOf("electric") !== -1}
						logoUrl="https://upload.wikimedia.org/wikipedia/commons/a/a9/Pokémon_Electric_Type_Icon.svg"
					/>
					
					<Category
						onClick={() => handleSelectCategory("fairy")}
						backgroundColor="#FB8AEC"
						enable={categoriesSelected.indexOf("fairy") !== -1}
						logoUrl="https://upload.wikimedia.org/wikipedia/commons/0/08/Pokémon_Fairy_Type_Icon.svg"
					/>
					
					<Category
						onClick={() => handleSelectCategory("fighting")}
						backgroundColor="#E12C6A"
						enable={categoriesSelected.indexOf("fighting") !== -1}
						logoUrl="https://upload.wikimedia.org/wikipedia/commons/b/be/Pokémon_Fighting_Type_Icon.svg"
					/>
					
					<Category
						onClick={() => handleSelectCategory("fire")}
						backgroundColor="#FF9C54"
						enable={categoriesSelected.indexOf("fire") !== -1}
						logoUrl="https://archives.bulbagarden.net/media/upload/a/ab/Fire_icon_SwSh.png"
					/>
					
					<Category
						onClick={() => handleSelectCategory("flying")}
						backgroundColor="#8FA8DD"
						enable={categoriesSelected.indexOf("flying") !== -1}
						logoUrl="https://archives.bulbagarden.net/media/upload/b/b5/Flying_icon_SwSh.png"
					/>
					
					<Category
						onClick={() => handleSelectCategory("ghost")}
						backgroundColor="#5269AC"
						enable={categoriesSelected.indexOf("ghost") !== -1}
						logoUrl="https://archives.bulbagarden.net/media/upload/0/01/Ghost_icon_SwSh.png"
					/>
				</article>

				<article>
					<Category
						onClick={() => handleSelectCategory("grass")}
						backgroundColor="#63BB5B"
						enable={categoriesSelected.indexOf("grass") !== -1}
						logoUrl="https://archives.bulbagarden.net/media/upload/a/a8/Grass_icon_SwSh.png"
					/>
					
					<Category
						onClick={() => handleSelectCategory("ground")}
						backgroundColor="#E97333"
						enable={categoriesSelected.indexOf("ground") !== -1}
						logoUrl="https://upload.wikimedia.org/wikipedia/commons/8/8d/Pokémon_Ground_Type_Icon.svg"
					/>
					
					<Category 
						onClick={() => handleSelectCategory("ice")}
						backgroundColor="#4BD2C1"
						enable={categoriesSelected.indexOf("ice") !== -1}
						logoUrl="https://upload.wikimedia.org/wikipedia/commons/8/88/Pokémon_Ice_Type_Icon.svg"
					/>
					
					<Category
						onClick={() => handleSelectCategory("normal")}
						backgroundColor="#929BA3"
						enable={categoriesSelected.indexOf("normal") !== -1}
						logoUrl="https://upload.wikimedia.org/wikipedia/commons/a/aa/Pokémon_Normal_Type_Icon.svg"
					/>
					
					<Category
						onClick={() => handleSelectCategory("poison")}
						backgroundColor="#B567CE"
						enable={categoriesSelected.indexOf("poison") !== -1}
						logoUrl="https://upload.wikimedia.org/wikipedia/commons/c/c4/Pokémon_Poison_Type_Icon.svg"
					/>
					
					<Category
						onClick={() => handleSelectCategory("psychic")}
						backgroundColor="#FF6676"
						enable={categoriesSelected.indexOf("psychic") !== -1}
						logoUrl="https://upload.wikimedia.org/wikipedia/commons/a/ab/Pokémon_Psychic_Type_Icon.svg"
					/>
					
					<Category
						onClick={() => handleSelectCategory("rock")}
						backgroundColor="#C9B787"
						enable={categoriesSelected.indexOf("rock") !== -1}
						logoUrl="https://upload.wikimedia.org/wikipedia/commons/b/bb/Pokémon_Rock_Type_Icon.svg"
					/>
					
					<Category 
						onClick={() => handleSelectCategory("steel")}
						backgroundColor="#5A8FA3"
						enable={categoriesSelected.indexOf("steel") !== -1}
						logoUrl="https://upload.wikimedia.org/wikipedia/commons/3/38/Pokémon_Steel_Type_Icon.svg"
					/>
					
					<Category
						onClick={() => handleSelectCategory("water")}
						backgroundColor="#3393DD"
						enable={categoriesSelected.indexOf("water") !== -1}
						logoUrl="https://upload.wikimedia.org/wikipedia/commons/0/0b/Pokémon_Water_Type_Icon.svg"
					/>
				</article>
			</section>

			<section className="pokemonCardContainer">
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
			</section>
		</Container>
	)
}