import React, { useState } from "react";

const Pokemon = () => {
	const [pokemon, setPokemon] = useState([]);

	const onClickHandler = () => {
		fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=20")
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setPokemon([...pokemon, ...res.results]);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<button type="button" onClick={onClickHandler}>
				Get Pokemon
			</button>
			{pokemon.length ? pokemon.map((pokemon, i) => <li key={i}>{pokemon.name}</li>) : null}
		</div>
	);
};

export default Pokemon;
