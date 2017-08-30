/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewUserPermission.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.UserPermission.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.UserPermission." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

