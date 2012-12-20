
(function() {
    ReleaseManagement.ss_PackageViewModel = function(data) {
            this.PackageRID = ko.observable();
            this.PackageName = ko.observable();
            this.PackagePlatform = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(ReleaseManagement.ss_PackageViewModel.prototype, {
        toJS: function() {
            return {
                PackageRID: this.PackageRID(),
                PackageName: this.PackageName(),
                PackagePlatform: this.PackagePlatform(),
            };
        },

        fromJS: function(data) {
            if(data) {
                this.PackageRID(data.PackageRID);
                this.PackageName(data.PackageName);
                this.PackagePlatform(data.PackagePlatform);

            }
        }
    });
})();