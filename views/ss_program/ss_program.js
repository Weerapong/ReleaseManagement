
ReleaseManagement.ss_Program = function(params) {
    return {
        dataSource: {
            store: ReleaseManagement.db.ss_Program,
            map: function(item) {
                return new ReleaseManagement.ss_ProgramViewModel(item);
            }
        }
    };   
};
