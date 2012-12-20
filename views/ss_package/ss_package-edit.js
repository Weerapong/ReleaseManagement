
ReleaseManagement.ss_PackageEdit = function(params) {

    return {
        ss_package: new ReleaseManagement.ss_PackageViewModel(),

        handleSave: function() {
            if(params.id !== undefined)
                this.update();            
            else
                this.insert();
        },

        load: function() {
            var self = this;
            ReleaseManagement.db.ss_Package.byKey(params.id).done(function(data) {
                self.ss_package.fromJS(data);
            });
        },

        update: function(){
            ReleaseManagement.db.ss_Package.update(params.id, this.ss_package.toJS()).done(function() {
                ReleaseManagement.app.navigate("ss_PackageDetails/" + params.id);
            });
        },

        insert: function() {
            ReleaseManagement.db.ss_Package.insert(this.ss_package.toJS()).done(function() {
                ReleaseManagement.app.navigate("ss_Package");
            });
        },

        viewShown: function() {
             if(params.id !== undefined)
                this.load();
         }
    };        
};
