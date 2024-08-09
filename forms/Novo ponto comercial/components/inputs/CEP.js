function inputCEP(name = 'cep', id = 'cep', label = 'CEP', placeholder = 'Informe o CEP', value = '', type = 'text') {
    // Gera o HTML do input
    const inputHtml = `
        <label for="${id}">${label}</label>
        <input type="${type}" name="${name}" id="${id}" class="form-control" value="${value}" 
               placeholder="${placeholder}">
    `;

    // Adiciona o HTML ao contêiner e aplica a máscara
    $(document).ready(function () {
        $(`#${id}`).mask('00000-000');

        // Evento de blur para buscar dados via CEP
        $(`#${id}`).blur(function () {
            $.getJSON('//viacep.com.br/ws/' + $(this).val() + '/json/', function (dados) {
                $('#logradouro').val(dados.logradouro);
                $('#bairro').val(dados.bairro);
                $('#cidade').val(dados.localidade);
                $('#estado').val(dados.uf);
            });
        });
    });

    return inputHtml;
}
