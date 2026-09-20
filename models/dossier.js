let Dossier = function getDossier(idCurso, callback){
	var sql = require('./dbconnection.js');
	sql.query("Select * from Qualidade.fucs where curso_sigla = '" + idCurso + "';", (err, result)=> {
		if(err){
			console.log(err);
		}else{
			console.log('Dossier: ', result);
			callback(null, result);
		}
	});
}

module.exports = Dossier
