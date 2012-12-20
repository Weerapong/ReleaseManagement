
ReleaseManagement.ss_ReleaseDetails = function(params) {

    var hidePopup = function() {
        var popup = $("#deleteConfirmation").data("dxPopup");
        popup.hide();
    };

    return {
        id: params.id,

        ss_release: new ReleaseManagement.ss_ReleaseViewModel(),

        handleDelete: function() {
            var overlay = $("#deleteConfirmation").data("dxPopup");
            overlay.show();
        },

        handleConfirmDelete: function() {
            ReleaseManagement.db.ss_Release.remove(params.id).done(function() {
                ReleaseManagement.app.navigate("ss_Release", { target: "blank" });
            }).fail(hidePopup);
        },

        handleCancelDelete: function() {
            hidePopup();
        },

        viewShown: function() {
            ss_releaseDetails = this;
            ReleaseManagement.db.ss_Release.byKey(params.id).done(function(data) {
                ss_releaseDetails.ss_release.fromJS(data);
            });
        }
    };
};
