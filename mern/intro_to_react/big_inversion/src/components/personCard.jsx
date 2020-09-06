import React from "react";

const PersonCard = (props) => {
	if ("person" in props) {
		const { person } = props;
		return (
			<div>
				<h1>
					{person.lastName}, {person.firstName}
				</h1>
				<p>Age: {person.age}</p>
				<p>Hair Color: {person.hairColor}</p>
			</div>
		);
	} else {
		const { firstName, lastName, age, hairColor } = props;
		return (
			<div>
				<h1>
					{lastName}, {firstName}
				</h1>
				<p>Age: {age}</p>
				<p>Hair Color: {hairColor}</p>
			</div>
		);
	}
};

export default PersonCard;
