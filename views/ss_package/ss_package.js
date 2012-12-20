
ReleaseManagement.ss_Package = function(params) {
    return {
        dataSource: {
            store: ReleaseManagement.db.ss_Package,
            map: function(item) {
                return new ReleaseManagement.ss_PackageViewModel(item);
            }
        }
    };   
};
