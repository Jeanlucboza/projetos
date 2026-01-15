const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues (){
    const inputCurrencyValue = document.querySelector(".input-currency").value 

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real

    const currencyValueToConverted = document.querySelector(".currency-value") //outras moedas

    console.log(currencySelect.value)

    const dolarToday = 5.37
    const euroToday =  6.25
    const libraToday = 7.25
    const bitcoinToday = 650000
    const realToday = 1

    
    if(currencySelect.value == "dolar"){ // Se o select estiver selecionado o valor de dolar entre aqui 
        currencyValueToConverted.innerHTML = new Intl.NumberFormat ("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
    }
    if(currencySelect.value == "euro"){ // se o select estiver selecionado o valor de euro entre aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if(currencySelect.value == "libra"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if(currencySelect.value == "bitcoin"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }
    if(currencySelect.value == "real"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }
    
     if(currencySelect.value == "libra"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

  
    


    

   console.log(convertedValue)
}

    function changeCurrency(){
        const currencyName = document.getElementById("currency-name")
        const currencyImg = document.querySelector(".currency-img")
        

        if(currencySelect.value == "dolar"){
            currencyName.innerHTML = "USD"
            currencyImg.src = "./assets/Dolar.png"
        }
        if(currencySelect.value == "euro"){
            currencyName.innerHTML = "EUR"
            currencyImg.src = "./assets/Euro.png"
        }
        if(currencySelect.value == "libra"){
            currencyName.innerHTML = "GBP"
            currencyImg.src = "./assets/libra.png"
        }
        if(currencySelect.value == "bitcoin"){
            currencyName.innerHTML = "BTC"
            currencyImg.src = "./assets/bitcoin.png"
        }
        if(currencySelect.value == "real"){
            currencyName.innerHTML = "BRL"
            currencyImg.src = "./assets/Real.png"
        }

        convertValues()
    }


    currencySelect.addEventListener ("change", changeCurrency)
    convertButton.addEventListener("click", convertValues)


