var unirest = require("unirest");

var req = unirest("GET", "https://bpdts-test-app-v3.herokuapp.com/city/London/users");

req.query({
	"url": "https://bpdts-test-app-v3.herokuapp.com/city/London/users"
});

req.headers({
	"x-rapidapi-host": "https://bpdts-test-app-v3.herokuapp.com/city/London/users",
	"x-rapidapi-key": "a326b03a86msh3a96f7cc6bd353dp1efbb0jsn72972e38bbff",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});/**
 * 
 */