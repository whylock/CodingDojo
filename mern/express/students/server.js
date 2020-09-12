const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const { response } = require("express");

app.use(cors());
app.use(express.json());

const instructors = [{ firstName: "Adrien", lastName: "Dion" }];
const students = [{ firstName: "Shawn", lastName: "Lockhart" }];

app.get("/", (req, res) => {
	res.json({
		message: "I am alive.",
	});
});

app.get("/instructors", (req, res) => {
	res.json({ results: instructors });
});

app.get("/students", (req, res) => {
	res.json({ results: students });
});

app.get("/create", (req, res) => {
	const instructor = res.body;
	console.log(instructor);
	res.json({ message: "Success" });
});

app.listen(port, () => console.log("Listening on port ${port}"));
