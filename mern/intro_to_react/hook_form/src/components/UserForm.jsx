import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Feedback from "react-bootstrap/esm/Feedback";

const UserForm = (props) => {
	const [formState, setFormState] = useState({
		username: "",
		email: "",
		password: "",
		confirm_password: "",
	});

	const onChangeHandler = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const addUser = (e) => {
		e.preventDefault();
		setFormState({
			username: "",
			email: "",
			password: "",
			confirm_password: "",
		});
	};

	const [validated, setValidated] = useState(false);
	const basicValid = (input) => {
		if (input.length <= 2) {
			return false;
		}
		return true;
	};
	return (
		<Container>
			<Form noValidate validated={validated}>
				<Form.Group controlId="formUsername">
					<Form.Label>Username</Form.Label>
					<Form.Control type="text" name="username" id="username" onChange={onChangeHandler} placeholder="Enter a username" />
					{basicValid(formState.username) ? "" : <p className="ml-2 text-danger">Username should be more than 2 character</p>}
				</Form.Group>
				<Form.Group controlId="formEmail">
					<Form.Label>Email Address</Form.Label>
					<Form.Control type="email" name="email" onChange={onChangeHandler} required placeholder="name@example.com" />
					{basicValid(formState.email) ? "" : <p className="ml-2 text-danger">Email should be more than 2 character</p>}
				</Form.Group>
				<Form.Group controlId="formPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" name="password" onChange={onChangeHandler} required placeholder="Password" />
					{basicValid(formState.password) ? "" : <p className="ml-2 text-danger">Password should be more than 2 character</p>}
				</Form.Group>
				<Form.Group controlId="formPasswordConfrom">
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control type="password" name="confirm_password" onChange={onChangeHandler} required placeholder="Password" />
				</Form.Group>
				<Button variant="outline-dark" type="submit">
					Create User
				</Button>
			</Form>
			<div>
				<p>{formState.username}</p>
				<p>{formState.email}</p>
				<p>{formState.password}</p>
				<p>{formState.confirm_password}</p>
			</div>
		</Container>
	);
};

export default UserForm;
