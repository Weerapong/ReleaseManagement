
ReleaseManagement.ss_Release = function(params) {
    return {
        dataSource: {
            store: ReleaseManagement.db.ss_Release,
            map: function(item) {
                return new ReleaseManagement.ss_ReleaseViewModel(item);
            }
        }
    };   
};
