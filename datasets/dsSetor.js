function createDataset(fields, constraints, sortFields) {
    const dataset = DatasetBuilder.newDataset();

    dataset.addColumn("descricao_setor");

    dataset.addRow(new Array("Tecnlogia da Informação"));
    dataset.addRow(new Array("Financeiro"));
    dataset.addRow(new Array("Logística"));
    
    return dataset;
}