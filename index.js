const texto = document.getElementById('text')
const viewletramaius = document.querySelector('#viewmaiuscula')
const viewletraminus = document.querySelector('#viewminuscula')
const viewqtdcaracteres = document.querySelector('#qtdcaracteres')
const buttonenviar = document.querySelector('#btnenviar')
const buttonlimpar = document.querySelector('#btnlimpar')
const textobaseviewletramaius = viewletramaius.textContent
const textobaseviewletraminus = viewletraminus.textContent
const textobaseviewqtdcaracteres = viewqtdcaracteres.textContent

buttonenviar.onclick = function () {
    if (texto.value != "") {
        viewletramaius.textContent = texto.value.toUpperCase()
        viewletraminus.textContent = texto.value.toLowerCase()
        viewqtdcaracteres.textContent = texto.value.replaceAll(" ", "").length

    } else {
        alert("Preencha a caixa de Reclamação")
    }
}
buttonlimpar.onclick = function limpar() {
    texto.value = ""
    viewletramaius.textContent = textobaseviewletramaius + ""
    viewletraminus.textContent = textobaseviewletraminus + ""
    viewqtdcaracteres.textContent = textobaseviewqtdcaracteres + ""
}
