
ReleaseManagement.ss_PackageDetails = function(params) {

    var hidePopup = function() {
        var popup = $("#deleteConfirmation").data("dxPopup");
        popup.hide();
    };

    return {
        id: params.id,

        ss_package: new ReleaseManagement.ss_PackageViewModel(),

        handleDelete: function() {
            var overlay = $("#deleteConfirmation").data("dxPopup");
            overlay.show();
        },

        handleConfirmDelete: function() {
            ReleaseManagement.db.ss_Package.remove(params.id).done(function() {
                ReleaseManagement.app.navigate("ss_Package", { target: "blank" });
            }).fail(hidePopup);
        },

        handleCancelDelete: function() {
            hidePopup();
        },

        viewShown: function() {
            ss_packageDetails = this;
            ReleaseManagement.db.ss_Package.byKey(params.id).done(function(data) {
                ss_packageDetails.ss_package.fromJS(data);
            });
        }
    };
};
