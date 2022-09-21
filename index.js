let listaDeParticipantes = ['Maria', 'Joao', 'Jose',];
let idade = 24;



    if (idade >= 18) {
        console.log(`Cadastrado. Participante possui ${idade} anos`);

    }

    else {
        console.log(`Cadastrado não realizado. Participante é menor de idade`)
    }

    if (listaDeParticipantes.length <= 100) {
        listaDeParticipantes.push('Francisco', 'Joaquim', 'Elizabeth')
        console.log(`Os participantes ${listaDeParticipantes.slice(0 , 5)} e ${listaDeParticipantes[5]} foram cadastrados com sucesso.`)

    }

    else {
        console.log(`Cadastrado não realizado. Pois foi ultrapassado o limite maximo de participantes.`)
    }


