
(function() {
    ReleaseManagement.ss_CustomerViewModel = function(data) {
            this.cust_code = ko.observable();
            this.cust_name = ko.observable();
            this.cust_name_e = ko.observable();
            this.pur_contact = ko.observable();
            this.phone = ko.observable();
            this.email = ko.observable();
            this.location = ko.observable();
            this.CustomerRID = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(ReleaseManagement.ss_CustomerViewModel.prototype, {
        toJS: function() {
            return {
                cust_code: this.cust_code(),
                cust_name: this.cust_name(),
                cust_name_e: this.cust_name_e(),
                pur_contact: this.pur_contact(),
                phone: this.phone(),
                email: this.email(),
                location: this.location(),
                CustomerRID: this.CustomerRID(),
            };
        },

        fromJS: function(data) {
            if(data) {
                this.cust_code(data.cust_code);
                this.cust_name(data.cust_name);
                this.cust_name_e(data.cust_name_e);
                this.pur_contact(data.pur_contact);
                this.phone(data.phone);
                this.email(data.email);
                this.location(data.location);
                this.CustomerRID(data.CustomerRID);

            }
        }
    });
})();