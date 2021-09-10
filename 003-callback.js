const funcaoA = function (callback) {
    console.log("Funcao A rodou");
    console.log(callback);
    callback();
}

const funcaoB = function () {
    console.log("Função B rodando")
};

funcaoA(funcaoB);