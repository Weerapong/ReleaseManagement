
ReleaseManagement.ss_ProgramDetails = function(params) {

    var hidePopup = function() {
        var popup = $("#deleteConfirmation").data("dxPopup");
        popup.hide();
    };

    return {
        id: params.id,

        ss_program: new ReleaseManagement.ss_ProgramViewModel(),

        handleDelete: function() {
            var overlay = $("#deleteConfirmation").data("dxPopup");
            overlay.show();
        },

        handleConfirmDelete: function() {
            ReleaseManagement.db.ss_Program.remove(params.id).done(function() {
                ReleaseManagement.app.navigate("ss_Program", { target: "blank" });
            }).fail(hidePopup);
        },

        handleCancelDelete: function() {
            hidePopup();
        },

        viewShown: function() {
            ss_programDetails = this;
            ReleaseManagement.db.ss_Program.byKey(params.id).done(function(data) {
                ss_programDetails.ss_program.fromJS(data);
            });
        }
    };
};
