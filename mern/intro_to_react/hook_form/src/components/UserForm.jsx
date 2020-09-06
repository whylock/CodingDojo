import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const UserForm = (props) => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const createUser = (e) => {
		e.preventDefault();
		const newUser = { username, email, password };
	};

	return (
		<Container>
			<Form>
				<Form.Group controlId="formUsername">
					<Form.Label>Username</Form.Label>
					<Form.Control type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Enter a username" />
				</Form.Group>
				<Form.Group controlId="formEmail">
					<Form.Label>Email Address</Form.Label>
					<Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
				</Form.Group>
				<Form.Group controlId="formPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
				</Form.Group>
				<Button variant="outline-dark" type="submit">
					Create User
				</Button>
			</Form>
			<div>
				<p>{username}</p>
				<p>{email}</p>
			</div>
		</Container>
	);
};

export default UserForm;
