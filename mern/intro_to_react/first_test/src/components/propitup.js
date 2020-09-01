import React, { Component } from "react";

class PropItUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: this.props.firstName,
			lastName: this.props.lastName,
			age: this.props.age,
			hairColor: this.props.hairColor,
		};
		this.ageUp = this.ageUp.bind(this);
	}

	ageUp() {
		this.setState((prevState) => {
			return {
				age: prevState.age++,
			};
		});
	}
	render() {
		return (
			<div>
				<h1>
					{this.state.lastName}, {this.state.firstName}
				</h1>
				<p>Age: {this.state.age}</p>
				<p>Hair Color: {this.state.hairColor}</p>
				<button onClick={this.ageUp}>
					Birthday for {this.state.firstName} {this.state.lastName}
				</button>
			</div>
		);
	}
}

export default PropItUp;
