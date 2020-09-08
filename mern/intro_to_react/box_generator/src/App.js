import React, { useState } from "react";
// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [box, setBoxes] = useState([]);
	const [color, setColor] = useState("");
	const [size, setSize] = useState("20");

	const handleSubmit = (e) => {
		e.preventDefault();
		const newBox = { color: color, size: size };
		setBoxes([...box, newBox]);
		setColor("red");
		setSize("20");
	};

	return (
		<div className="App w-75 mx-auto">
			<form onSubmit={handleSubmit}>
				<div class="row">
					<div class="col-sm-3">
						<label>Color</label>
						<input type="text" value={color} className="form-control" onChange={(e) => setColor(e.target.value)} />
					</div>
					<div class="col-sm-3">
						<label>Size</label>
						<input type="text" value={size} className="form-control" onChange={(e) => setSize(e.target.value)} />
					</div>
					<input type="submit" value="Create Box" className="w-25 mx-auto btn btn-outline-dark btn-block" />
				</div>
			</form>
			<div className="mt-5 jumbotron w-100 d-flex flex-wrap">
				{box.map((box, i) => (
					<div
						key={i}
						style={{
							backgroundColor: box.color,
							width: box.size + "px",
							height: box.size + "px",
							margin: "10px",
						}}
					></div>
				))}
			</div>
			<button className="w-25 mx-auto btn btn-outline-dark btn-block" onClick={() => setBoxes([])}>
				Clear
			</button>
		</div>
	);
}

export default App;
