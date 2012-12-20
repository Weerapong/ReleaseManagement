
ReleaseManagement.ss_CustomerEdit = function(params) {

    return {
        ss_customer: new ReleaseManagement.ss_CustomerViewModel(),

        handleSave: function() {
            if(params.id !== undefined)
                this.update();            
            else
                this.insert();
        },

        load: function() {
            var self = this;
            ReleaseManagement.db.ss_Customer.byKey(params.id).done(function(data) {
                self.ss_customer.fromJS(data);
            });
        },

        update: function(){
            ReleaseManagement.db.ss_Customer.update(params.id, this.ss_customer.toJS()).done(function() {
                ReleaseManagement.app.navigate("ss_CustomerDetails/" + params.id);
            });
        },

        insert: function() {
            ReleaseManagement.db.ss_Customer.insert(this.ss_customer.toJS()).done(function() {
                ReleaseManagement.app.navigate("ss_Customer");
            });
        },

        viewShown: function() {
             if(params.id !== undefined)
                this.load();
         }
    };        
};
