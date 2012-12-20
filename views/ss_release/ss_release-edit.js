
ReleaseManagement.ss_ReleaseEdit = function(params) {

    return {
        ss_release: new ReleaseManagement.ss_ReleaseViewModel(),

        handleSave: function() {
            if(params.id !== undefined)
                this.update();            
            else
                this.insert();
        },

        load: function() {
            var self = this;
            ReleaseManagement.db.ss_Release.byKey(params.id).done(function(data) {
                self.ss_release.fromJS(data);
            });
        },

        update: function(){
            ReleaseManagement.db.ss_Release.update(params.id, this.ss_release.toJS()).done(function() {
                ReleaseManagement.app.navigate("ss_ReleaseDetails/" + params.id);
            });
        },

        insert: function() {
            ReleaseManagement.db.ss_Release.insert(this.ss_release.toJS()).done(function() {
                ReleaseManagement.app.navigate("ss_Release");
            });
        },

        viewShown: function() {
            if (params.id !== undefined)
                this.load();
         }
    };        
};
