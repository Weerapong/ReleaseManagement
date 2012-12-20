
ReleaseManagement.ss_CustReleaseDetails = function(params) {

    var hidePopup = function() {
        var popup = $("#deleteConfirmation").data("dxPopup");
        popup.hide();
    };

    return {
        id: params.id,

        ss_custrelease: new ReleaseManagement.ss_CustReleaseViewModel(),

        handleDelete: function() {
            var overlay = $("#deleteConfirmation").data("dxPopup");
            overlay.show();
        },

        handleConfirmDelete: function() {
            ReleaseManagement.db.ss_CustRelease.remove(params.id).done(function() {
                ReleaseManagement.app.navigate("ss_CustRelease", { target: "blank" });
            }).fail(hidePopup);
        },

        handleCancelDelete: function() {
            hidePopup();
        },

        viewShown: function() {
            ss_custreleaseDetails = this;
            ReleaseManagement.db.ss_CustRelease.byKey(params.id).done(function(data) {
                ss_custreleaseDetails.ss_custrelease.fromJS(data);
            });
        }
    };
};
