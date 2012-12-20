
ReleaseManagement.ss_Customer = function(params) {
    return {
        dataSource: {
            store: ReleaseManagement.db.ss_Customer,
            map: function(item) {
                return new ReleaseManagement.ss_CustomerViewModel(item);
            }
        }
    };   
};
