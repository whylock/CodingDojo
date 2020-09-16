const Joke = require("../models/jokes.model");

module.exports = {
	index: (req, res) => {
		Joke.find()
			.then((jokes) => {
				res.json({ results: jokes });
			})
			.catch((err) => {
				console.log(err);
			});
	},
	create: (req, res) => {
		Joke.create(req.body)
			.then((joke) => {
				res.json({ results: joke });
			})
			.catch((err) => res.json(err.errors));
	},
	show: (req, res) => {
		Joke.findOne({ _id: req.params.id })
			.then((joke) => {
				res.json({ results: joke });
			})
			.catch((err) => res.json(err.errors));
	},
	update: (req, res) => {
		Joke.findByIdAndUpdate({ _id: req.params.id }, req.body,{runValidatorers:true})
			.then((joke) => {
				Joke.findOne({ _id: req.params.id })
			    	.then((joke) => {
						res.json({ results: joke });
					})
					.catch((err) => res.json(err.errors));
			})
			.catch((err) => res.json(err.errors));
	},
	delete: (req, res) => {
		Joke.deleteOne({ _id: req.params.id })
			.then(results => res.json({ results: result }))
			.catch(err => res.json(err.errors))
 	}
};
