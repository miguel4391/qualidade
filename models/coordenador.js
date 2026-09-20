let Coordenador = function getDossier(coordenador, callback){
	var sql = require('./dbconnection.js');
	sql.query("Select * from Qualidade.Dados_pessoais where idDadosPessoais  = " + coordanador + ";", (err, result){
		if(err){
			console.log(err);
		}else{
			console.log('Coordenador: ', result);
			callback(null, result);
		}
	});
}

module.exports = Coordenador
