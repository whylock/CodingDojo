import React, { useState } from "react";
import axios from "axios";

const Pokemon = () => {
	const [pokemon, setPokemon] = useState([]);

	const onButtonClick = () => {
		// fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=20")
		axios.get("https://pokeapi.co/api/v2/pokemon?limit=897&offset=20")
			.then((res) => {
				console.log(res)
				return res
			})
			.then((res) => {
				setPokemon([...res.data.results]);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<button type="button" onClick={onButtonClick}>
				Get Pokemon
			</button>
			{pokemon.length ? pokemon.map((pokemon, i) => <li key={i}>{pokemon.name}</li>) : null}
		</div>
	);
};

export default Pokemon;
