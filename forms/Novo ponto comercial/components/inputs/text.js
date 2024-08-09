function inputText(name = '', id = '', label = '', value = '', type = 'text') {
    return `
        <label for="${id}">${label}</label>
        <input type="${type}" name="${name}" id="${id}" class="form-control" value="${value}">
    `;
}