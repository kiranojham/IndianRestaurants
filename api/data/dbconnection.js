var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://localhost:27017/meanrestaurant';

var _connection = null;

var open = function(){
	//set _connection
	MongoClient.connect(dburl, function(err, db){
		if(err){
			console.log("DB connection is failed");
			return;
		}
		_connection = db;
		console.log("DB connection is open", db);
	});
};

var get = function(){
	return _connection;
};

module.exports = {
	open : open,
	get : get
};