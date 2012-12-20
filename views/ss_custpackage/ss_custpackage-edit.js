
ReleaseManagement.ss_CustPackageEdit = function(params) {

    return {
        ss_custpackage: new ReleaseManagement.ss_CustPackageViewModel(),

        handleSave: function() {
            if(params.id !== undefined)
                this.update();            
            else
                this.insert();
        },

        load: function() {
            var self = this;
            ReleaseManagement.db.ss_CustPackage.byKey(params.id).done(function(data) {
                self.ss_custpackage.fromJS(data);
            });
        },

        update: function(){
            ReleaseManagement.db.ss_CustPackage.update(params.id, this.ss_custpackage.toJS()).done(function() {
                ReleaseManagement.app.navigate("ss_CustPackageDetails/" + params.id);
            });
        },

        insert: function() {
            ReleaseManagement.db.ss_CustPackage.insert(this.ss_custpackage.toJS()).done(function() {
                ReleaseManagement.app.navigate("ss_CustPackage");
            });
        },

        viewShown: function() {
             if(params.id !== undefined)
                this.load();
         }
    };        
};
