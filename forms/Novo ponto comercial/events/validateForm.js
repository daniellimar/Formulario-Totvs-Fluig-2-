function validateForm(form) {
    if (form.getValue("nome") == '') {
        throw "Campo nome é obrigatório";
    }

    if (form.getValue("email") == '') {
        throw "Campo Email é obrigatório";
    }

    if (form.getValue("telefone") == '') {
        throw "Campo Telefone é obrigatório";
    }

    if (form.getValue("documentoIdentidade") == '') {
        throw "Campo CPF é obrigatório";
    }

    if (form.getValue("dataNascimento") == '') {
        throw "Campo Data de Nascimento é obrigatório";
    }

    if (form.getValue("tipoPonto") == '') {
        throw "Campo Tipo do Ponto Comercial é obrigatório";
    }

    if (form.getValue("cep") == '') {
        throw "Campo CEP é obrigatório";
    }

    if (form.getValue("logradouro") == '') {
        throw "Campo Logradouro é obrigatório";
    }

    if (form.getValue("numero") == '') {
        throw "Campo Número é obrigatório";
    }

    if (form.getValue("bairro") == '') {
        throw "Campo Bairro é obrigatório";
    }

    if (form.getValue("cidade") == '') {
        throw "Campo Cidade é obrigatório";
    }

    if (form.getValue("estado") == '') {
        throw "Campo Estado é obrigatório";
    }
}
