const router = require("express").Router();
const { Task } = require("../models/Task");
const auth = require("../middlewares/auth");

router.get("/", auth, async (req, res) => {
	const search = req.query.search;
	if (search !== "") {
		const Tasks = await Task.find({
			name: { $regex: search, $options: "i" },
		}).limit(10);
		const result = { Tasks };
		res.status(200).send(result);
	} else {
		res.status(200).send({});
	}
});

module.exports = router;
