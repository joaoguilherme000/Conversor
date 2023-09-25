const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit)

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');

const result = document.getElementById('result');

const moedaElement = document.getElementById('moeda'); // Elemento HTML para exibir a moeda

let valueConverted = 0;

function handleSubmit(e) {
    e.preventDefault();
    if(!inputValue.value || inputValue.value < 0){
        alert("INFORME UM VALOR CORRETO");
        return;
    } else if (!selectedCurrency.value){
        alert("INFORME UMA MOEDA");
        return;
    }
    converter();
};

function converter(){
    if(selectedCurrency.value === 'eur'){
        valueConverted = inputValue.value * 5.26;
        result.innerHTML = valueConverted.toFixed(2); // Arredonde para 2 casas decimais
        moedaElement.innerHTML = "EUROS"; // Atualize o elemento com o nome da moeda

    } else if( selectedCurrency.value === 'dol'){
        valueConverted = inputValue.value * 4.94;
        result.innerHTML = valueConverted.toFixed(2); // Arredonde para 2 casas decimais
        moedaElement.innerHTML = "DOLARES"; // Atualize o elemento com o nome da moeda

    }
};

function valueFormatter(){

}