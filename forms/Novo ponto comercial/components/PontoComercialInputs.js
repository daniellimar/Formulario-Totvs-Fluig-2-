function renderPontoComercialInputs() {
    return `
        <div class="row mb-3">
            <div class="col-md-4">
                <label for="logradouro">Logradouro</label>
                <input type="text" id="logradouro" name="logradouro" class="form-control">
            </div>
            <div class="col-md-2">
                <label for="numero">Número</label>
                <input type="text" id="numero" name="numero" class="form-control">
            </div>
            <div class="col-md-2">
                <label for="cep">CEP</label>
<!--                <input type="text" id="cep" name="cep" class="form-control">-->
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-md-4">
                <label for="cidade">Cidade</label>
                <input type="text" id="cidade" name="cidade" class="form-control">
            </div>
            <div class="col-md-4">
                <label for="bairro">Bairro</label>
                <input type="text" id="bairro" name="bairro" class="form-control">
            </div>
        </div>
    `;
}
