function adicionar() {
    var caixa1 = window.document.getElementById("caixa")
    var caixaCheck = document.createElement("input")
    var lista = document.createElement("input")
    var containerCaixa = document.createElement("div")

    containerCaixa.classList.add("task-1")


    caixaCheck.setAttribute("type", "checkbox")
    caixaCheck.classList.add("chk")

    lista.setAttribute("type", "text")
    lista.setAttribute("placeholder", "Escreva aqui")
    lista.classList.add("texto")
    

    containerCaixa.appendChild(caixaCheck)
    containerCaixa.appendChild(lista)
    caixa1.appendChild(containerCaixa)
    lista.focus()
} 