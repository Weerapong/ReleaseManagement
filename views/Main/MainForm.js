ReleaseManagement.MainForm = function (params) {
    menus = [
    { text: "Customer list", view: "ss_Customer", width: 2, height: 1 },
    { text: "Sofware Package", view: "ss_Package", width: 2, height: 1 },
    { text: "Program Code", view: "ss_Program", width: 2, height: 1 },
    { text: "Software Release", view: "ss_Release", width: 2, height: 1 },
    ];

    itemRenderer = function(item) {
        return item.text;
    };

    itemClick = function (e) {
        ReleaseManagement.app.navigate(e.itemData.view);
    }

    var viewModel = {
        //  Put the binding properties here
    };

    return viewModel;


};