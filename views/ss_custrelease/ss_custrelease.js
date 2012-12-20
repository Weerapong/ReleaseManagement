
ReleaseManagement.ss_CustRelease = function(params) {
    return {
        dataSource: {
            store: ReleaseManagement.db.ss_CustRelease,
            map: function(item) {
                return new ReleaseManagement.ss_CustReleaseViewModel(item);
            }
        }
    };   
};
