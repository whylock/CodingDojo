import React from "react";
// import logo from './logo.svg';
import "./App.css";
import PersonCard from "./components/personCard.jsx";

function App() {
	const personOne = {
		firstName: "Jane",
		lastName: "Doe",
		age: 45,
		hairColor: "Black",
	};
	const personTwo = {
		firstName: "John",
		lastName: "Smith",
		age: 88,
		hairColor: "Brown",
	};
	const personThree = {
		firstName: "Millard",
		lastName: "Fillmore",
		age: 50,
		hairColor: "Brown",
	};
	const personFour = {
		firstName: "Maria",
		lastName: "Smith",
		age: 62,
		hairColor: "Brown",
	};
	return (
		<div className="App">
			<PersonCard person={personOne} />
			<PersonCard person={personTwo} />
			<PersonCard person={personThree} />
			<PersonCard person={personFour} />
		</div>
	);
}

export default App;
