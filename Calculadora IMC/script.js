    const inputPeso = document.querySelector(".input-peso")
    const inputAltura = document.querySelector(".input-altura")
    const btnCalcular = document.querySelector(".btn-calcular")
    const mostrarImc = document.querySelector(".imc")
    const mostrarClassificacao = document.querySelector(".classificacao")



    function calcular(){
        
        const peso = inputPeso.value;
        const altura = inputAltura.value;
        if (peso === "" || altura === "") {
            alert("Preencha Todos os Campos!")
        return
        }
        const imc = peso / (altura * altura);
        mostrarImc.innerText = imc.toFixed(2);
        

        if(imc < 18.5 ){
            mostrarClassificacao.innerHTML = "abaixo do Peso"
        }
        else if (imc < 25){
        mostrarClassificacao.innerHTML = "Peso Normal"
        }
        else if (imc < 30){
            mostrarClassificacao.innerHTML = "SobrePeso"
        }
        else{
            mostrarClassificacao.innerHTML = "Obesidade"
        }
        
    }


    btnCalcular.addEventListener("click", calcular);