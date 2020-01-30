function ordenSuperior(time1, time2, time3, time4, callback) {
    let tiempo = []
    tiempo.push(time1)
    tiempo.push(time2)
    tiempo.push(time3)
    tiempo.push(time4)

    callback(tiempo)
}

function masDeDosHoras(tiempo) {
    let result = []
    tiempo.forEach(element => { 
        if(element >= 120){
        result.push(element)
        }
    } 
    )
    return console.log(result);
}

ordenSuperior(120, 80, 200, 100, masDeDosHoras)