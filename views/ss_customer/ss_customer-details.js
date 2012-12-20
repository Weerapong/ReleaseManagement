
ReleaseManagement.ss_CustomerDetails = function(params) {

    var hidePopup = function() {
        var popup = $("#deleteConfirmation").data("dxPopup");
        popup.hide();
    };

    return {
        id: params.id,

        ss_customer: new ReleaseManagement.ss_CustomerViewModel(),

        handleDelete: function() {
            var overlay = $("#deleteConfirmation").data("dxPopup");
            overlay.show();
        },

        handleConfirmDelete: function() {
            ReleaseManagement.db.ss_Customer.remove(params.id).done(function() {
                ReleaseManagement.app.navigate("ss_Customer", { target: "blank" });
            }).fail(hidePopup);
        },

        handleCancelDelete: function() {
            hidePopup();
        },

        viewShown: function() {
            ss_customerDetails = this;
            ReleaseManagement.db.ss_Customer.byKey(params.id).done(function(data) {
                ss_customerDetails.ss_customer.fromJS(data);
            });
        }
    };
};
