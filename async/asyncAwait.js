function cronometro(segundos) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log (`Os segundos ${segundos} segundos finalizaram`);
            resolve(segundos);
        }, segundos * 1000)
    });
}

const executarCronometro = async (segundos) => {
    
    let responseAsyc = cronometro(2);
    console.log(`Não esperei os 2 segundos para aparecer: `)

    let response = await cronometro(3);
    console.log(`Esperei os ${response} segundos para aparecer`)
}

executarCronometro();

//exemplo do consumo api com sem promise dentro do async await

const consumirApi = async () => {

    let opts = {
        method: 'GET',
        headers: {}
    };
  
    let response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados', opts)
  
    let json = await response.json();
  
    console.log(json)
  }
  
  consumirApi();