function renderRequisitanteInputs() {
    return `
        <div class="row mb-3">
            <div class="col-md-6">
                <label for="nome">Nome</label>
                <input type="text" id="nome" name="nome" class="form-control">
            </div>
            <div class="col-md-4">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" class="form-control">
            </div>
            <div class="col-md-2">
                <label for="telefone">Telefone</label>
                <input type="text" id="telefone" name="telefone" class="form-control">
            </div>
        </div>
    `;
}
