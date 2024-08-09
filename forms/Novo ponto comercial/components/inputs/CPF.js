function inputCPF(name = 'cpf', id = 'cpf', label = 'CPF', placeholder = 'Informe o CPF', value = '', type = 'text') {
    return `
        <label for="${id}">${label}</label>
        <input type="${type}" name="${name}" id="${id}" class="form-control" value="${value}" placeholder="${placeholder}">
    `;
}