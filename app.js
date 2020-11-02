const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
 
app.get('/reservas', function (peticion, respuesta) {
  respuesta.json({respuesta: 'Soy un Get'});
});

app.post('/reservas', function (peticion, respuesta) {
    let datos = peticion.body;

    if(datos.nombre==undefined){

        respuesta.status(400).json({
            mensaje:"Nombre es necesario"                
        });

    }else{  
        respuesta.json({reserva: datos});
    }

    
});
 
app.put('/reservas/:id', function (peticion, respuesta) {
    let identificador = peticion.params.id;
    respuesta.json({respuesta: 'Soy un Put y voy a editar a la reserva con: ' + identificador});
});

app.delete('/reservas:/id', function (peticion, respuesta) {
    let identificador = peticion.params.id;
    respuesta.json({respuesta: 'Soy un Delete y voy a eliminar a la reserva con: ' + identificador});
});

app.listen(3000,()=>{
    console.log("Servidor Encendido puerto 3000")
});