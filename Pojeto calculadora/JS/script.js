let operacao = '';

function acrescentarNumero(number) {
  operacao += number;
  atualizarResultado();
}

function acrescentarOperacao(operation) {
    operacao += ` ${operation} `;
  atualizarResultado();
}

function atualizarResultado() {
  document.getElementById('result').value = operacao;
}

function limparResultado() {
    operacao = '';
    atualizarResultado();
}

function calcular() {
  try {
    operacao = eval(operacao).toString();
    atualizarResultado();
  } catch {
    operacao = 'Erro';
    atualizarResultado();
  }
}
