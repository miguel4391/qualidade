let Fuc = function getDossier(nomeFuc, grauFuc, callback){
	var sql = require('./dbconnection.js');
	sql.query("Select * from Qualidade.fucs where fucs  = " + nomeFuc  + " and nomeCe like ='%" + grauFuc + "´order by nomeUCPt ASC;", (err, result){
		if(err){
			console.log(err);
		}else{
			console.log('UC: ', result);
			callback(null, result);
		}
	});
}

module.exports = Fuc
