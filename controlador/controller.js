var con = require('../conexionbd');
const constantes = require('../constantes');


function obtenerListas(req,res){
      res.send(JSON.stringify(constantes.listas));
};

function obtenerListaDetalle(req,res){
      var id=req.params.id;
      console.log("llegmaos ahsta ca");
      var sql="select cod_articulo, descrip_arti, precio_vta  from articulos a, listas_items i where a.cod_articulo=i.articulo and i.lista_codi='2' and a.agru_1="+id+"and activo='S' order by cod_articulo ASC";
      con.query(sql,function(error,resultado,fields){
          if (error) {
                console.log(sql);
                console.log("Hubo un error en la consulta", error.message);
                return res.status(500).send("Hubo un error en la consulta");
          }
          res.send(JSON.stringify(resultado));
      })

}


function obtenerOfertas(req,res){
      var sql="select cod_articulo, descrip_arti, precio_vta, web_imagen  from articulos a, listas_items i where a.cod_articulo=i.articulo and i.lista_codi='2' and a.agru_1='25' and activo='S'";
      con.query(sql,function(error,resultado,fields){
            if (error) {
                  console.log("Hubo un error en la consulta", error.message);
                  return res.status(500).send("Hubo un error en la consulta");
            }
            res.send(JSON.stringify(resultado));
        });
      
}

module.exports ={
    obtenerListas:obtenerListas,
    obtenerListaDetalle:obtenerListaDetalle,
    obtenerOfertas:obtenerOfertas
}