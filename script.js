const form = document.getElementById("form-transacao");  

form.addEventListener("submit", function(event) {  
event.preventDefault();  
const descricao = document.getElementById("descricao").value;  
const valor = document.getElementById("valor").value;  

console.log("Transação adicionada:", descricao, valor);  
  // Aqui você vai adicionar a lógica para mostrar na tela  
});  