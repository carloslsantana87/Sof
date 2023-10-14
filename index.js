const soap = require('soap');

const url = 'https://apphom.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';

soap.createClient( url,(err, client) => {
    if (err) {
        console.log(err);
    }else{
        client.consultaCEP({
            cep: '50770720'
        }, (err, res) => {
            console.log(res);
        })
       
    }
} );