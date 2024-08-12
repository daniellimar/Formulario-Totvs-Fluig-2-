function setSelectedZoomItem(selectedItem) {

    const NAME = "colleagueName";
    const EMAIL = "colleagueMail";
    const ID = "colleagueId";

    const FIELD = selectedItem.inputId;

    if (selectedItem.inputId == NAME) {
        setZoomData("colleagueMail", selectedItem["mail"]);
        setZoomData("colleagueId", selectedItem["colleagueId"]);

    } else if (selectedItem.inputId == EMAIL) {
        setZoomData("colleagueName", selectedItem["colleagueName"]);
        setZoomData("colleagueId", selectedItem["colleagueId"]);

    } else if (selectedItem.inputId == ID) {
        setZoomData("colleagueName", selectedItem["colleagueName"]);
        setZoomData("colleagueMail", selectedItem["mail"]);
    }
}

function setZoomData(instance, value) {
    window[instance].setValue(value);
}

function removedZoomItem(removedItem) {
    const NAME = "colleagueName";
    const EMAIL = "colleagueMail";
    const ID = "colleagueId";

    if (removedItem.inputId == NAME) {
        console.log("Retornando resultado removedZoomItem");
        console.log(removedItem);

        window[EMAIL].clear();
        window[ID].clear();
    }
}