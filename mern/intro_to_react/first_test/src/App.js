import React from "react";
import logo from "./logo.svg";
import "./App.css";

import PropItUp from "./components/propitup";

function App() {
	return (
		<div className="App">
			<h1>Hello Dojo!</h1>
			<h3>Thing I need to do:</h3>
			<ul>
				<li>Learn React</li>
				<li>Climb Mt. Everest</li>
				<li>Run a marathon</li>
				<li>feed the dogs</li>
			</ul>

			<PropItUp firstName="Jane" lastName="Doe" age="45" hairColor="Black" />
			<PropItUp firstName="John" lastName="Smith" age="88" hairColor="Brown" />
			<PropItUp firstName="Millard" lastName="Fillmore" age="50" hairColor="Brown" />
			<PropItUp firstName="Maria" lastName="Smith" age="62" hairColor="Brown" />
		</div>
	);
}

export default App;
