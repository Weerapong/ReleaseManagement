
ReleaseManagement.ss_UserEdit = function(params) {

    return {
        ss_user: new ReleaseManagement.ss_UserViewModel(),

        handleSave: function() {
            if(params.id !== undefined)
                this.update();            
            else
                this.insert();
        },

        load: function() {
            var self = this;
            ReleaseManagement.db.ss_User.byKey(params.id).done(function(data) {
                self.ss_user.fromJS(data);
            });
        },

        update: function(){
            ReleaseManagement.db.ss_User.update(params.id, this.ss_user.toJS()).done(function() {
                ReleaseManagement.app.navigate("ss_UserDetails/" + params.id);
            });
        },

        insert: function() {
            ReleaseManagement.db.ss_User.insert(this.ss_user.toJS()).done(function() {
                ReleaseManagement.app.navigate("ss_User");
            });
        },

        viewShown: function() {
             if(params.id !== undefined)
                this.load();
         }
    };        
};
