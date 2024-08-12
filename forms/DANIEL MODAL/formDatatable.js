function init() {
    $('#btMyModal').click(function () {
        FLUIGC.modal({
            title: 'DataTable',
            content: '<h1>Usuários</h1><div id="target"></div>',
            id: 'fluig-modal',
            size: 'large',
            actions: [{label: 'Save', bind: 'data-open-modal'}, {label: 'Close', autoClose: true}]
        }, function (err, data) {
            if (err) {
                return;
            }

            const datasetReturned = DatasetFactory.getDataset("colleague", null, null, null);
            if (datasetReturned && datasetReturned.values && datasetReturned.values.length > 0) {
                const records = datasetReturned.values;
                this.mydata = records.map(record => ({
                    id: record.userTenantId, name: record.colleagueName, email: record.mail
                }));
            }

            this.myTable = FLUIGC.datatable('#target', {
                dataRequest: this.mydata,
                renderContent: ['id', 'name', 'email'],
                header: [{title: 'Code', dataorder: 'name', size: 'col-md-4'}, {
                    title: 'Name', standard: true, size: 'col-md-4'
                }, {title: 'EMAIL', size: 'col-md-4', dataorder: 'ASC'}],
                search: {enabled: false},
                scroll: {target: ".target", enabled: true},
                actions: {enabled: false},
                navButtons: {enabled: false},
                draggable: {enabled: false}
            }, function (err, data) {
                if (err) {
                    FLUIGC.toast({message: err, type: 'danger'});
                }
            });

            this.myTable.on('fluig.datatable.loadcomplete', function () {
                if (!this.tableData) {
                    this.tableData = this.myTable.getData();
                }
            }.bind(this));
        });
    });
}

init();