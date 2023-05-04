  let saldo = 200;

  function somaSaldo(valor) {
return valor + saldo;
  };

  function subtraiSaldo(valor) {
  return saldo - valor;
  };

  function multiplicaSaldo(valor) {
  return valor * saldo;
  };

  function divideSaldo(valor) {
  return saldo / valor;
  };
  

  console.log(somaSaldo(150));
  console.log(subtraiSaldo(70));
  console.log(multiplicaSaldo(7));
  console.log(divideSaldo(4));