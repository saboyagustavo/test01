const validaNumero = numero => {
    let result = '';
    numero % 2 === 0 ? (result = `O seu número ${numero} é par`) : (result = `O seu número ${numero} é ímpar`);
    return result;
};
