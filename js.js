// poner algo antes

let pregunta1 = ""
let pregunta2 = ""
let pregunta3 = ""
let contador = 0
let nombre = prompt("Cual es tu nombre?").toUpperCase()

do {
    if (pregunta1 != 10 && contador < 3) {
        pregunta1 = Number(prompt("Cuál es el resultado del siguiente calculo: [1-(3+4*2)]:(-1)?"))
        if (pregunta1 != 10) {
            contador++
            if (contador === 3) { alert(nombre + " has desaprobado la autoevaluación.") }
        }
            continue
        }
        else if (pregunta2 != 1) {
            pregunta2 = Number(prompt("Cuál es el resultado de sen (0) + cos(0)?"))
            if (pregunta2 != 1) {
                contador++
                if (contador === 3) { alert(nombre + " has desaprobado la autoevaluación.") }
            }
                continue
            }
        else if (pregunta3 != 2) {
            pregunta3 = Number(prompt("Cuál es el resultado de ln (e)^2?"))
            if (pregunta3 != 2) {
                contador++
                if (contador === 3) { alert(nombre + " has desaprobado la autoevaluación.") }
            }
                continue
            }
    }
    while (contador < 3 && (pregunta1 != 10 || pregunta2 != 1 || pregunta3 != 2))
        if (contador < 3) { alert(nombre + " has aprobado la autoevaluación.") }