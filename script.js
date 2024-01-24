// 1- Crie uma variável chamada “food”. Esta variável deve
// receber uma string com o nome de uma comida. Após, crie uma
// estrutura condicional switch que receba esta variável e que
// possua três casos: caso lasanha, retorne no
// console: “Não vendemos esta comida aqui”. Caso pizza, retorne: “Estamos com escassez de pizza” e
// caso salada, retorne: “Aqui está, são 3 reais”. Teste com estas
// três opções e verifique o console do seu navegador. Crie também um default , que
// retornará uma mensagem de erro no console.

function comida() {
  const caixaDeTexto = document.querySelector("#textoDoInput").value;
  // const food = input.value;

  switch (caixaDeTexto) {
    case "lasanha":
      alert("Não vendemos esta comida aqui");
      break;
    case "Lasanha":
      alert("Não vendemos esta comida aqui");
      break;
    case "pizza":
      alert("Estamos com escassez de pizza");
      break;
    case "Pizza":
      alert("Estamos com escassez de pizza");
      break;
    case "salada":
      alert("Aqui está, são 3 reais");
      break;
    case "Salada":
      alert("Aqui está, são 3 reais");
      break;
    default:
      alert("Erro, não temos esta comida no cardápio");
  }
}
