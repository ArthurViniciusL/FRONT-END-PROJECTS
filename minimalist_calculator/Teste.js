//soma = window.prompt();
//n = eval(soma)

//console.log(n)

function contar() {
    let inicio = document.querySelector(".entrada");
    let resultdo = document.querySelector(".result");

    let converteParaUsar = String(inicio.value);

    let soma = eval(converteParaUsar)

    //resultdo.innerHTML = `${converteParaUsar}`;
    resultdo.innerHTML = `${soma}`;
    //resultdo.innerHTML += `${n}`;

    console.log(converteParaUsar)
    console.log(soma)
}