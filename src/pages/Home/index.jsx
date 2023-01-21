import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios'
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import {ImSearch, ImCheckmark} from 'react-icons/im';
import {HiFilter} from 'react-icons/hi';
import { Container, Category } from './styles';
import { useEffect, useState } from 'react';

export function Home() {
	const [isFilterActived, setIsFilterActived] = useState(false);
	const [categoriesSelected, setCategoriesSelected] = useState([]);
	const [page, setPage] = useState(0);
	const [allPokemonsData, setAllPokemonsData] = useState([]);
	const [pokemons, setPokemons] = useState([]);
	const [searchInputValue, setSearchInputValue] = useState('');
	const [searchParams, setSearchParams] = useSearchParams();

	async function handleSearch(e) {
		let searchText = "";
		let searchPage = 1;

		if (e.preventDefault) {
			e.preventDefault();
			searchParams.set('search', searchInputValue);
			setSearchParams(searchParams);
			searchText = searchInputValue;
			searchPage = 1;
			setPage(1);
		} else {
			searchText = e.searchText ? e.searchText : "";
			searchPage = e.searchPage ? Number(e.searchPage) : 1;

			if (searchPage < 1) {
				setPage(1);
				searchPage =  1;
			}
		}

		try {
			let pokemonsArray = [];
			let FilteredPokemonsArray = [];
			let pokemonsData = [];
			let finalPage = 0;

			if (allPokemonsData.length <= 0) {
				const {data} = await axios.get(
					`https://pokeapi.co/api/v2/pokemon?limit=1280`
				);
					
				pokemonsData = data; 
				setAllPokemonsData(pokemonsData);
			} else {
				pokemonsData = allPokemonsData;
			}

			if (!isNaN(searchText)) {
				FilteredPokemonsArray = pokemonsData.results.filter(pokemon => 
					pokemon.url
						.replace("https://pokeapi.co/api/v2/pokemon/", "")
						.replace("/", "")
						.startsWith(searchText)
				);
			} else {
				FilteredPokemonsArray = pokemonsData.results.filter(pokemon => 
					pokemon.name.startsWith(searchText)
				);
			}

			if (categoriesSelected.length > 0) {
				console.log(pokemonsArray);

				for (let i = 0; i < FilteredPokemonsArray.length; i++) {
					const {data: pokemonData} = await axios.get(FilteredPokemonsArray[i].url);
					
					categoriesSelected.forEach(category => {
						pokemonData.types.every(type => {
							if (category === type.type.name) {								
								pokemonsArray.push({
									id: pokemonData.id,
									name: pokemonData.name,
									types: pokemonData.types,
									sprite: pokemonData.sprites.other['official-artwork'].front_default
								});
								
								return false;
							}
						});
					});
				}
			} else {
				if (searchPage >= (FilteredPokemonsArray.length / 20).toFixed(0)) {
					if ((FilteredPokemonsArray.length / 20).toFixed(0) >= 1) {
						setPage((FilteredPokemonsArray.length / 20).toFixed(0));
						searchPage = (FilteredPokemonsArray.length / 20).toFixed(0);
					} else {
						setPage(1);
						searchPage = 1;
					}

					finalPage = FilteredPokemonsArray.length;
				} else {
					finalPage = searchPage * 20;
				}

				for (let i = (searchPage - 1) * 20; i < finalPage; i++) {
					const {data: pokemonData} = await axios.get(FilteredPokemonsArray[i].url);
					
					pokemonsArray.push({
						id: pokemonData.id,
						name: pokemonData.name,
						types: pokemonData.types,
						sprite: pokemonData.sprites.other['official-artwork'].front_default
					});
				}
			}

			setPokemons(pokemonsArray);
		} catch (error) {
			console.log(error);
			toast.error('Pokémon não encontrado');
		}
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
		if (searchParams.get('categories')) {
			setCategoriesSelected(searchParams.get('categories').split('+'));
		}

		if (searchParams.get('search')) {
			setSearchInputValue(searchParams.get('search'));
		}
		
		if (searchParams.get('page') && searchParams.get('page') >= 1) {
			setPage(searchParams.get('page'));
		} else {
			console.log("EXECUTEI", searchParams.get('page'));
			setPage(1);
		}
	}, []);
	
	useEffect(() => {
		if (page >= 1) {
			searchParams.set('page', page);
			setSearchParams(searchParams);	

			if (searchParams.get('search')) {
				handleSearch({searchPage: page, searchText: searchParams.get('search')});
			} else {
				handleSearch({searchPage: page});
			}

		} else if (searchParams.get('page') && page < 0) {
			searchParams.set('page', 1);
			setSearchParams(searchParams);
		}
	}, [page]);

	useEffect(() => {
		if (categoriesSelected.length !== 0) {
			searchParams.set('categories', `${categoriesSelected.join('+')}`);
			setSearchParams(searchParams);
		} else {
			searchParams.delete('categories');
			setSearchParams(searchParams);
		}
	}, [categoriesSelected]);

	return (
		<Container isFilterActived={isFilterActived}>
			<h1>Pokédex</h1>
			<p>Procure o Pokémon por nome ou usando o Número Nacional da Pokédex</p>

			<section className='searchAndFilterContainer'>
				<form 
					className='searchContainer'
					onClick={() => document.getElementById('searchInput').focus()}
					onSubmit={(e) => handleSearch(e)}	
				>
					<input
						id='searchInput'
						type='text'
						name='search'
						placeholder='Qual pokémon está procurando?'
						value={isFilterActived ? "Selecione as categorias" : searchInputValue}
						autoComplete='off'
						disabled={isFilterActived}
						onChange={(e) => setSearchInputValue(e.target.value)}
					/>
					
					<button type='submit'>
						{ isFilterActived 
							? <ImCheckmark/>
							: <ImSearch/>
						}
					</button>
				</form>

				<button
					type='button'
					className='filterButton'
					onClick={handleOpenFilter}
				> 
					<HiFilter size={15}/> 
				</button>
			</section>

			<section className='categoriesContainer'>
				<article>
					<Category 
						onClick={() => handleSelectCategory('bug')}
						backgroundColor='#90C12C'
						enable={categoriesSelected.indexOf('bug') !== -1}
						logoUrl='https://archives.bulbagarden.net/media/upload/9/9c/Bug_icon_SwSh.png'
					/>

					<Category 
						onClick={() => handleSelectCategory('dark')}
						backgroundColor='#5B5366'
						enable={categoriesSelected.indexOf('dark') !== -1}
						logoUrl='https://upload.wikimedia.org/wikipedia/commons/0/09/Pokémon_Dark_Type_Icon.svg'
					/>

					<Category 
						onClick={() => handleSelectCategory('dragon')}
						backgroundColor='#0A6DC4'
						enable={categoriesSelected.indexOf('dragon') !== -1}
						logoUrl='https://archives.bulbagarden.net/media/upload/7/70/Dragon_icon_SwSh.png'
					/>
					
					<Category
						onClick={() => handleSelectCategory('electric')}
						backgroundColor='#FBD100'
						enable={categoriesSelected.indexOf('electric') !== -1}
						logoUrl='https://upload.wikimedia.org/wikipedia/commons/a/a9/Pokémon_Electric_Type_Icon.svg'
					/>
					
					<Category
						onClick={() => handleSelectCategory('fairy')}
						backgroundColor='#FB8AEC'
						enable={categoriesSelected.indexOf('fairy') !== -1}
						logoUrl='https://upload.wikimedia.org/wikipedia/commons/0/08/Pokémon_Fairy_Type_Icon.svg'
					/>
					
					<Category
						onClick={() => handleSelectCategory('fighting')}
						backgroundColor='#E12C6A'
						enable={categoriesSelected.indexOf('fighting') !== -1}
						logoUrl='https://upload.wikimedia.org/wikipedia/commons/b/be/Pokémon_Fighting_Type_Icon.svg'
					/>
					
					<Category
						onClick={() => handleSelectCategory('fire')}
						backgroundColor='#FF9C54'
						enable={categoriesSelected.indexOf('fire') !== -1}
						logoUrl='https://archives.bulbagarden.net/media/upload/a/ab/Fire_icon_SwSh.png'
					/>
					
					<Category
						onClick={() => handleSelectCategory('flying')}
						backgroundColor='#8FA8DD'
						enable={categoriesSelected.indexOf('flying') !== -1}
						logoUrl='https://archives.bulbagarden.net/media/upload/b/b5/Flying_icon_SwSh.png'
					/>
					
					<Category
						onClick={() => handleSelectCategory('ghost')}
						backgroundColor='#5269AC'
						enable={categoriesSelected.indexOf('ghost') !== -1}
						logoUrl='https://archives.bulbagarden.net/media/upload/0/01/Ghost_icon_SwSh.png'
					/>
				</article>

				<article>
					<Category
						onClick={() => handleSelectCategory('grass')}
						backgroundColor='#63BB5B'
						enable={categoriesSelected.indexOf('grass') !== -1}
						logoUrl='https://archives.bulbagarden.net/media/upload/a/a8/Grass_icon_SwSh.png'
					/>
					
					<Category
						onClick={() => handleSelectCategory('ground')}
						backgroundColor='#E97333'
						enable={categoriesSelected.indexOf('ground') !== -1}
						logoUrl='https://upload.wikimedia.org/wikipedia/commons/8/8d/Pokémon_Ground_Type_Icon.svg'
					/>
					
					<Category 
						onClick={() => handleSelectCategory('ice')}
						backgroundColor='#4BD2C1'
						enable={categoriesSelected.indexOf('ice') !== -1}
						logoUrl='https://upload.wikimedia.org/wikipedia/commons/8/88/Pokémon_Ice_Type_Icon.svg'
					/>
					
					<Category
						onClick={() => handleSelectCategory('normal')}
						backgroundColor='#929BA3'
						enable={categoriesSelected.indexOf('normal') !== -1}
						logoUrl='https://upload.wikimedia.org/wikipedia/commons/a/aa/Pokémon_Normal_Type_Icon.svg'
					/>
					
					<Category
						onClick={() => handleSelectCategory('poison')}
						backgroundColor='#B567CE'
						enable={categoriesSelected.indexOf('poison') !== -1}
						logoUrl='https://upload.wikimedia.org/wikipedia/commons/c/c4/Pokémon_Poison_Type_Icon.svg'
					/>
					
					<Category
						onClick={() => handleSelectCategory('psychic')}
						backgroundColor='#FF6676'
						enable={categoriesSelected.indexOf('psychic') !== -1}
						logoUrl='https://upload.wikimedia.org/wikipedia/commons/a/ab/Pokémon_Psychic_Type_Icon.svg'
					/>
					
					<Category
						onClick={() => handleSelectCategory('rock')}
						backgroundColor='#C9B787'
						enable={categoriesSelected.indexOf('rock') !== -1}
						logoUrl='https://upload.wikimedia.org/wikipedia/commons/b/bb/Pokémon_Rock_Type_Icon.svg'
					/>
					
					<Category 
						onClick={() => handleSelectCategory('steel')}
						backgroundColor='#5A8FA3'
						enable={categoriesSelected.indexOf('steel') !== -1}
						logoUrl='https://upload.wikimedia.org/wikipedia/commons/3/38/Pokémon_Steel_Type_Icon.svg'
					/>
					
					<Category
						onClick={() => handleSelectCategory('water')}
						backgroundColor='#3393DD'
						enable={categoriesSelected.indexOf('water') !== -1}
						logoUrl='https://upload.wikimedia.org/wikipedia/commons/0/0b/Pokémon_Water_Type_Icon.svg'
					/>
				</article>
			</section>

			<section className='pokemonCardContainer'>
				{pokemons.map(pokemon => (
					<PokemonCard
						id={`${pokemon.id}`}
						name={pokemon.name}
						img={pokemon.sprite}
						types={pokemon.types}
						key={pokemon.id}
					/>
				))}
			</section>
		</Container>
	)
}