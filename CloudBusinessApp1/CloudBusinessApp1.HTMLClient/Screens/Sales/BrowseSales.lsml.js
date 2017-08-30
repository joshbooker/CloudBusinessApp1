/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.BrowseSales.TotalCommision_postRender = function (element, contentItem) {
    // Write code here.
    /*
    function updateTotal() {
        contentItem.screen.TotalCommision = totalCommision(contentItem.screen.Sales);
    }

    contentItem.dataBind("screen.Sales.count", function(newValue){
        //if (newValue == true) {
        if (contentItem.screen.Sales.isLoaded == true) {
            updateTotal();
        }
    });
    contentItem.dataBind("screen.Sales._search", function (newValue) {
        //if (newValue == true) {
        if (contentItem.screen.Sales.isLoaded == true) {
            updateTotal();
        }
    });
    */
}

function totalCommision(SalesDetail) {
    var TotalCommisionSum = 0;
    var SaleDetail = SalesDetail.data;

    SaleDetail.forEach(function (record) {
        TotalCommisionSum += parseFloat(record.Commision);
    });

    return TotalCommisionSum;
};
myapp.BrowseSales.created = function (screen) {
    // Write code here.
    myapp.myPerms = [];
    screen.getMyPermissions()
        .then(function (results)
        {
            console.log(results);
            results.data.forEach(
            function (d)
            {
                myapp.myPerms.push(d.Permission.Name);
            });
            console.log(myapp.myPerms);
        });

    screen.Sales.addEventListener("collectionchange", function () {
        screen.TotalCommision = totalCommision(screen.Sales.data);
    });
    function totalCommision(data) {
        var TotalCommisionSum = 0;

        data.forEach(function (record) {
            TotalCommisionSum += parseFloat(record.Commision);
        });

        return TotalCommisionSum;
    };
};
myapp.BrowseSales.SaleList_postRender = function (element, contentItem) {
    // Write code here.

};