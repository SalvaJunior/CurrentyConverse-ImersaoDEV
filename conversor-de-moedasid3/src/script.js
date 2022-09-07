function ConverterMoeda() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);

  var valorEmReal = valorNumerico * document.getElementById("moedas").value;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
//Aprendendo aos poucos, mas vejo uma grande oportunidade aqui, gostei muito de passar por este desafio.
// Learning a little bit, but i see a big opportunite in here, i really like to pass  this challenge.
