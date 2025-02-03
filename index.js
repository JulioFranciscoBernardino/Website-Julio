function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    return idade;
}

document.addEventListener("DOMContentLoaded", function() {
    const dataNascimento = '2005-07-31'; // Insira sua data de nascimento aqui (ano-mês-dia)
    const idade = calcularIdade(dataNascimento);
    document.getElementById('idade').textContent = idade;
});
