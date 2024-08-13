function validateForm(form) {
    const requiredFields = [{
        field: "nome", message: "Preencha o campo nome."
    }, {
        field: "setor", message: "Preencha o campo setor."
    }];

    for (var i = 0; i < requiredFields.length; ++i) {
        if (valueIsEmpty(form.getValue(requiredFields[i].field))) {
            throw requiredFields[i].message;
        }
    }
}

function valueIsEmpty(value) {
    return value == null || value == "";
}