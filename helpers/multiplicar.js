const fs = require('fs');

const crearArchivoTabla = async(num, listar = false, hasta) => {
    try{

        let salida = '';

        for (let index = 1; index <= hasta; index++) {
            salida += `${num} x ${index} = ${num * index}\n`;
        }

        if(listar){
            console.log(salida);
        }    

        fs.writeFileSync(`./salida/tabla-${num}.txt`, salida);

        return `tabla-${num}.txt creado`;
    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    crearArchivoTabla
}