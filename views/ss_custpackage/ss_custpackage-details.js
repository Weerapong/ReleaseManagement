
ReleaseManagement.ss_CustPackageDetails = function(params) {

    var hidePopup = function() {
        var popup = $("#deleteConfirmation").data("dxPopup");
        popup.hide();
    };

    return {
        id: params.id,

        ss_custpackage: new ReleaseManagement.ss_CustPackageViewModel(),

        handleDelete: function() {
            var overlay = $("#deleteConfirmation").data("dxPopup");
            overlay.show();
        },

        handleConfirmDelete: function() {
            ReleaseManagement.db.ss_CustPackage.remove(params.id).done(function() {
                ReleaseManagement.app.navigate("ss_CustPackage", { target: "blank" });
            }).fail(hidePopup);
        },

        handleCancelDelete: function() {
            hidePopup();
        },

        viewShown: function() {
            ss_custpackageDetails = this;
            ReleaseManagement.db.ss_CustPackage.byKey(params.id).done(function(data) {
                ss_custpackageDetails.ss_custpackage.fromJS(data);
            });
        }
    };
};
