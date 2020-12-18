function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Botao clicado")
}

function redirecionar(){
    window.open("https://google.com")
    //window.location.href = "https://google.com";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*
function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5, 10));

var validar = 0;

function validaIdade(idade){
    if(idade >= 18){
        validar = true 
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaidade(idade)
console.log(validar);
*/


//var d = new Date();
//alert(d.getMonth()+1);
//getDay
//getHours
//getMinutes




/*
var count;
for(count=0; count <= 5; count ++)
    alert(count);
*/


/*var count = 0;
while(count <= 5){
    console.log(count);
    count ++;
};
*/

/*
var idade = prompt("Qual sua idade?")
if (idade >= 18){
    alert("maior de idade")
}else{
    alert("menor de idade")
}
*/





/*var frutas = [{nome: "maça", cor: "vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome)*/

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" - "));


/* var nome = "Pedro Henrique";
var n1 = 5;
var n2 = 3;
var frase = "França é o melhor time do mundo";
alert(nome + " tem " + idade + " anos ");
alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
alert(frase.replace("França", "Brasil"));
*/