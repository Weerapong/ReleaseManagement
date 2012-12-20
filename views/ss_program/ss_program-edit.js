
ReleaseManagement.ss_ProgramEdit = function(params) {

    return {
        ss_program: new ReleaseManagement.ss_ProgramViewModel(),

        handleSave: function() {
            if(params.id !== undefined)
                this.update();            
            else
                this.insert();
        },

        load: function() {
            var self = this;
            ReleaseManagement.db.ss_Program.byKey(params.id).done(function(data) {
                self.ss_program.fromJS(data);
            });
        },

        update: function(){
            ReleaseManagement.db.ss_Program.update(params.id, this.ss_program.toJS()).done(function() {
                ReleaseManagement.app.navigate("ss_ProgramDetails/" + params.id);
            });
        },

        insert: function() {
            ReleaseManagement.db.ss_Program.insert(this.ss_program.toJS()).done(function() {
                ReleaseManagement.app.navigate("ss_Program");
            });
        },

        viewShown: function() {
             if(params.id !== undefined)
                this.load();
         }
    };        
};
