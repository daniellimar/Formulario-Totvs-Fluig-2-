function beforeTaskSave(colleagueId, nextSequenceId, userList) {
    var anexos = hAPI.listAttachments();
    var temAnexos = false;

    for (var i = 0; i < anexos.size(); i++) {
        var anexoAtual = anexos.get(i);

        if (anexoAtual.getDocumentDescription() == 'Proposta Comercial.pdf') {
            temAnexos = true;
        }
    }

    if (!temAnexos) {
        throw "Proposta comercial não foi anexada";
    }
}