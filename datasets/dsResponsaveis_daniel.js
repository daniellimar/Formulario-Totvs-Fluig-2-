function createDataset(fields, constraints, sortFields) {
    var ds = DatasetBuilder.newDataset();
    ds.addColumn("login");
    ds.addColumn("nome");

    var filtroGrupo = DatasetFactory.createConstraint("colleagueGroupPK.groupId", "Responsaveis", "Responsaveis", ConstraintType.MUST);

    var datasetGrupos = DatasetFactory.getDataset("colleagueGroup", null, [filtroGrupo], null);
    var datasetColaborador = DatasetFactory.getDataset("colleague", null, null, null);

    for (var i = 0; i < datasetGrupos.rowsCount; i++) {
        var colabGrupo = datasetGrupos.getValue(i, "colleagueGroupPK.colleagueId");

        for (var j = 0; j < datasetColaborador.rowsCount; j++) {
            if (colabGrupo == datasetColaborador.getValue(j, "colleaguePK.colleagueId")) {
                ds.addRow([colabGrupo, datasetColaborador.getValue(j, "colleagueName")]);
            }
        }
    }

    return ds;
}