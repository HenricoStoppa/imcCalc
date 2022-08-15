var body = document.body
var tittle = document.getElementById('tittle')
var txtP = document.getElementById('txtpeso')
var txtA = document.getElementById('txtalt')

function calc(){
    var peso = Number(txtP.value)
    var alt = Number(txtA.value)

    var IMC = (peso / (alt / 100)**2).toFixed(2)

    if (IMC >= 1 && IMC <= 18.5) {
        tittle.innerHTML = `${IMC} = Abaixo do peso`

        body.style.background = '#FF7F50'
    } else if (IMC <= 24.9) {
        tittle.innerHTML = `${IMC} = Peso normal`

        body.style.background = '#556B2F'
    } else if (IMC <= 29.9) {
        tittle.innerHTML = `${IMC} = Sobrepeso`

        body.style.background = '#FF7F50'
    } else if (IMC >= 30 && IMC < 40) {
        tittle.innerHTML = `${IMC} = Obesidade`

        body.style.background = '#FF4500'
    } else if (IMC >= 40) {
        tittle.innerHTML = `${IMC} = Obesidade grave`

        body.style.background = '#B22222'
    }
}