
(function() {
    ReleaseManagement.ss_UserViewModel = function(data) {
            this.user_id = ko.observable();
            this.user_name = ko.observable();
            this.passwd = ko.observable();
            this.cust_access_list = ko.observable();
            this.rcd_status = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(ReleaseManagement.ss_UserViewModel.prototype, {
        toJS: function() {
            return {
                user_id: this.user_id(),
                user_name: this.user_name(),
                passwd: this.passwd(),
                cust_access_list: this.cust_access_list(),
                rcd_status: this.rcd_status(),
            };
        },

        fromJS: function(data) {
            if(data) {
                this.user_id(data.user_id);
                this.user_name(data.user_name);
                this.passwd(data.passwd);
                this.cust_access_list(data.cust_access_list);
                this.rcd_status(data.rcd_status);

            }
        }
    });
})();