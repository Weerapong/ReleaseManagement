
(function() {
    var endpointSelector = new DevExpress.EndpointSelector(ReleaseManagement.config.endpoints);

    var serviceConfig = $.extend(true, {}, ReleaseManagement.config.services, {
        db: {
            url: endpointSelector.urlFor("db"),
			// To enable JSONP support, uncomment the following line
            jsonp: true,

            errorHandler: handleServiceError
        }
    });

    function handleServiceError(error) {
        if(window.WinJS) {
            try {
                new Windows.UI.Popups.MessageDialog(error.message).showAsync();
            } catch(e) {
                // Another dialog is shown
            }
        } else {
            alert(error.message);
        }
    }

    // Enable partial CORS support for IE < 10
    if($.browser.msie)
        $.support.cors = true;
    
    ReleaseManagement.db = new DevExpress.data.ODataContext(serviceConfig.db);
    

}());
