
ReleaseManagement.ss_CustPackage = function(params) {
    return {
        dataSource: {
            store: ReleaseManagement.db.ss_CustPackage,
            map: function(item) {
                return new ReleaseManagement.ss_CustPackageViewModel(item);
            }
        }
    };   
};
