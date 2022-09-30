var counter = 0

function postFunction() {
    counter++;
    var inputData = document.getElementById("text1").value;
    sortData(inputData);
}

function sortData(inputData) {
    if (counter == 1) {
        dataChange("topic1", inputData);
        return;
    }
    if (counter == 2) {
        dataChange("comment1", inputData);
        return;
    }
    if (counter == 3) {
        dataChange("comment2", inputData);
        return;
    }
}

function dataChange(id, inputData) {
    var data = document.getElementById(id);
    data.innerHTML = inputData;
}

function clearFunction() {
    counter = 0;
    dataChange("topic1", "");
    dataChange("comment1", "");
    dataChange("comment2", "");
}