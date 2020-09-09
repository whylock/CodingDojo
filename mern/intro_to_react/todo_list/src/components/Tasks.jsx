import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Task = (props) => {
	const [state, setState] = useState([]);
	const [text, setText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const newTask = { task: text, completed: false };
		setState((task) => [...task, newTask]);
	};

	const onTabClick = (e, i) => {
		// thisTask.completed = !thisTask.completed;
		// setState((prevState) => [...prevState, thisTask]);
		let t = { ...state[i] };
		t.completed = !t.completed;
		setState([...state.slice(0, i), t].concat(state.slice(i + 1)));
	};

	const taskDelete = (e, i) => {
		let t = { ...state[i] };
		setState([...state.slice(0, i)].concat(state.slice(i + 1)));
	};

	return (
		<div className="container">
			<div className="jumbotron">
				<h1>TODO LIST</h1>
			</div>
			<div cla ssName="content d-flex">
				<form onSubmit={handleSubmit} className="text-left">
					<label htmlFor="addTask">Add a Task:</label>
					<input type="text" name="addTask" className="form-control" onChange={(e) => setText(e.target.value)} />
					<input type="submit" value="Add" className="btn btn-outline-dark btn-block" />
				</form>
				<div className="w-100 d-flex flex-wrap">
					{state.map((item, i) => (
						<div>
							<div className="m-5" onClick={(e) => onTabClick(e, i)}>
								<p key={i} className="col-sm">
									{item.task}
								</p>
								<p>Completed: {item.completed == false ? "False" : "True"}</p>
							</div>
							<button className="btn btn-danger" onClick={(e) => taskDelete(e, i)}>
								Delete
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Task;
