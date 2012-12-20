
ReleaseManagement.ss_UserDetails = function(params) {

    var hidePopup = function() {
        var popup = $("#deleteConfirmation").data("dxPopup");
        popup.hide();
    };

    return {
        id: params.id,

        ss_user: new ReleaseManagement.ss_UserViewModel(),

        handleDelete: function() {
            var overlay = $("#deleteConfirmation").data("dxPopup");
            overlay.show();
        },

        handleConfirmDelete: function() {
            ReleaseManagement.db.ss_User.remove(params.id).done(function() {
                ReleaseManagement.app.navigate("ss_User", { target: "blank" });
            }).fail(hidePopup);
        },

        handleCancelDelete: function() {
            hidePopup();
        },

        viewShown: function() {
            ss_userDetails = this;
            ReleaseManagement.db.ss_User.byKey(params.id).done(function(data) {
                ss_userDetails.ss_user.fromJS(data);
            });
        }
    };
};
