
ReleaseManagement.ss_User = function(params) {
    return {
        dataSource: {
            store: ReleaseManagement.db.ss_User,
            map: function(item) {
                return new ReleaseManagement.ss_UserViewModel(item);
            }
        }
    };   
};
