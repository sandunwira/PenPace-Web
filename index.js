const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"), (_, res, next) => {
	res.status(404);
	res.redirect("/");
});

app.listen(8080);