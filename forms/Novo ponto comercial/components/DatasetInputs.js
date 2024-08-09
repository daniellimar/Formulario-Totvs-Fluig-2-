function renderDatasetInputs() {
    return `
        <div class="row mb-3">
            <div class="col-md-2">
                <div class="custom-radio custom-radio-primary">
                    <label for="moeda">Moeda <small>(dsFormMoedas2)</small></label>
                    <select name="moeda" id="moeda" class="form-control" dataset="dsFormMoedas2" datasetKey="moeda" datasetValue="simbolo"></select>
                </div>
            </div>
            <div class="col-md-2">
                <label for="valor">Valor</label>
                <input type="number" name="valor" id="valor" class="form-control">
            </div>
        </div>
        <div class="row mb-3 bg-lif">
            <div class="col-md-4">
                <div class="custom-radio custom-radio-primary">
                    <label for="dsResponsaveis_daniel">Responsáveis <small>(dsResponsaveis_daniel)</small></label>
                    <select name="dsResponsaveis_daniel" id="dsResponsaveis_daniel" class="form-control" dataset="dsResponsaveis_daniel" datasetKey="login" datasetValue="nome"></select>
                </div>
            </div>
            <div class="col-md-4">
                <div class="custom-radio custom-radio-primary">
                    <label for="colleague">Usuários <small>(colleague)</small></label>
                    <select name="colleague" id="colleague" class="form-control" dataset="colleague" datasetKey="login" datasetValue="colleagueName"></select>
                </div>
            </div>
            <div class="col-md-4">
                <div class="custom-radio custom-radio-primary">
                    <label for="colleagueGroup">Grupos <small>(colleagueGroup)</small></label>
                    <select name="colleagueGroup" id="colleagueGroup" class="form-control" dataset="colleagueGroup" datasetKey="colleagueId" datasetValue="groupId"></select>
                </div>
            </div>
        </div>
    `;
}
