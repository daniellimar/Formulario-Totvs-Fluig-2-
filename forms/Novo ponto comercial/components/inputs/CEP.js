function inputCEP(options = {}) {
    const defaults = {
        name: 'cep', id: 'cep', label: 'CEP', placeholder: 'Informe o CEP', value: '', type: 'text', divPai: ''
    };

    const settings = {...defaults, ...options};

    const inputHtml = `
        <label for="${settings.id}">${settings.label}</label>
        <input type="${settings.type}" name="${settings.name}" id="${settings.id}" class="form-control" value="${settings.value}" 
               placeholder="${settings.placeholder}">
    `;

    $(document).ready(function () {
        $(`#${settings.id}`).mask('00000-000');

        $(`#${settings.id}`).blur(function () {
            // Mostrar mensagem de carregamento
            const myLoading2 = FLUIGC.loading(`#${settings.divPai}`);
            myLoading2.show();

            $.getJSON('//viacep.com.br/ws/' + $(this).val() + '/json/', function (dados) {
                $('#logradouro').val(dados.logradouro);
                $('#bairro').val(dados.bairro);
                $('#cidade').val(dados.localidade);
                $('#estado').val(dados.uf);

                setTimeout(() => {
                    myLoading2.hide();
                }, 500);
            }).fail(function () {
                setTimeout(() => {
                    myLoading2.hide();
                }, 500);
            });
        });
    });

    return inputHtml;
}
