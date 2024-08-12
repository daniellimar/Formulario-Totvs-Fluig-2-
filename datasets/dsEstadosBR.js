function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();

    dataset.addColumn("Sigla");
    dataset.addColumn("Estado");
    dataset.addColumn("Capital");
    dataset.addColumn("Area");

    dataset.addRow(new Array("AC", "Acre", "Rio Branco", 164123));
    dataset.addRow(new Array("AL", "Alagoas", "Maceió", 27767));
    dataset.addRow(new Array("AP", "Amapá", "Macapá", 142828));
    dataset.addRow(new Array("AM", "Amazonas", "Manaus", 1570746));
    dataset.addRow(new Array("BA", "Bahia", "Salvador", 564692));
    dataset.addRow(new Array("CE", "Ceará", "Fortaleza", 148920));
    dataset.addRow(new Array("DF", "Distrito Federal", "Brasília", 5779));

    return dataset;
}