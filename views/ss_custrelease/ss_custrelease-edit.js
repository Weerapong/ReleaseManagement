
ReleaseManagement.ss_CustReleaseEdit = function(params) {

    return {
        ss_custrelease: new ReleaseManagement.ss_CustReleaseViewModel(),

        handleSave: function() {
            if(params.id !== undefined)
                this.update();            
            else
                this.insert();
        },

        load: function() {
            var self = this;
            ReleaseManagement.db.ss_CustRelease.byKey(params.id).done(function(data) {
                self.ss_custrelease.fromJS(data);
            });
        },

        update: function(){
            ReleaseManagement.db.ss_CustRelease.update(params.id, this.ss_custrelease.toJS()).done(function() {
                ReleaseManagement.app.navigate("ss_CustReleaseDetails/" + params.id);
            });
        },

        insert: function() {
            ReleaseManagement.db.ss_CustRelease.insert(this.ss_custrelease.toJS()).done(function() {
                ReleaseManagement.app.navigate("ss_CustRelease");
            });
        },

        viewShown: function() {
             if(params.id !== undefined)
                this.load();
         }
    };        
};
