/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewSale.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Sale.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Sale." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

