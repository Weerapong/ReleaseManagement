
(function() {
    ReleaseManagement.ss_CustPackageViewModel = function(data) {
            this.CustPackageRID = ko.observable();
            this.PackageRID = ko.observable();
            this.CustomerRID = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(ReleaseManagement.ss_CustPackageViewModel.prototype, {
        toJS: function() {
            return {
                CustPackageRID: this.CustPackageRID(),
                PackageRID: this.PackageRID(),
                CustomerRID: this.CustomerRID(),
            };
        },

        fromJS: function(data) {
            if(data) {
                this.CustPackageRID(data.CustPackageRID);
                this.PackageRID(data.PackageRID);
                this.CustomerRID(data.CustomerRID);

            }
        }
    });
})();