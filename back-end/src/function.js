const evenOddVerify = num => {
    let result = '';
    num % 2 === 0 ? (result = `O seu número ${num} é par`) : (result = `O seu número ${num} é ímpar`);
    return result;
};

module.exports = evenOddVerifier();
