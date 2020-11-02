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
    }else if(datos.apellido==undefined){
        respuesta.status(400).json({
            mensaje:"Apellido es nesesario"
        });
    }else if(datos.telefono==undefined){
        respuesta.status(400).json({
            mensaje:"Telefono es nesesario"
        });
    }else if(datos.fechaInicioReserva==undefined){
        respuesta.status(400).json({
            mensaje:"Fecha del inicio de la reserva es nesesario"
        });
    }else if(datos.fechaFinReserva==undefined){
        respuesta.status(400).json({
            mensaje:"Fecha del final de la reserva es nesesario"
        });
    }else if(datos.numeroPersonas==undefined){
        respuesta.status(400).json({
            mensaje:"Definir la cantidad de personas es nesesario"
        });
    }else if(datos.tipoReserva==undefined){
        respuesta.status(400).json({
            mensaje:"Defirnir el tipo de reserva es nesesario"
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