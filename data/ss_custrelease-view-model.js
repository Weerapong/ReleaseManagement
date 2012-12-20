
(function() {
    ReleaseManagement.ss_CustReleaseViewModel = function(data) {
            this.CustReleaseRID = ko.observable();
            this.ReleaseRID = ko.observable();
            this.CustomerRID = ko.observable();
            this.DeployBy = ko.observable();
            this.DeployDate = ko.observable();
            this.UpdateID = ko.observable();
            this.UpdateDate = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(ReleaseManagement.ss_CustReleaseViewModel.prototype, {
        toJS: function() {
            return {
                CustReleaseRID: this.CustReleaseRID(),
                ReleaseRID: this.ReleaseRID(),
                CustomerRID: this.CustomerRID(),
                DeployBy: this.DeployBy(),
                DeployDate: this.DeployDate(),
                UpdateID: this.UpdateID(),
                UpdateDate: this.UpdateDate(),
            };
        },

        fromJS: function(data) {
            if(data) {
                this.CustReleaseRID(data.CustReleaseRID);
                this.ReleaseRID(data.ReleaseRID);
                this.CustomerRID(data.CustomerRID);
                this.DeployBy(data.DeployBy);
                this.DeployDate(data.DeployDate);
                this.UpdateID(data.UpdateID);
                this.UpdateDate(data.UpdateDate);

            }
        }
    });
})();