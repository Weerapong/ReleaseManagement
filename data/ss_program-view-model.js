
(function() {
    ReleaseManagement.ss_ProgramViewModel = function(data) {
            this.ProgramRID = ko.observable();
            this.ProgramCode = ko.observable();
            this.ProgramName = ko.observable();
            this.SourceFilePath = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(ReleaseManagement.ss_ProgramViewModel.prototype, {
        toJS: function() {
            return {
                ProgramRID: this.ProgramRID(),
                ProgramCode: this.ProgramCode(),
                ProgramName: this.ProgramName(),
                SourceFilePath: this.SourceFilePath(),
            };
        },

        fromJS: function(data) {
            if(data) {
                this.ProgramRID(data.ProgramRID);
                this.ProgramCode(data.ProgramCode);
                this.ProgramName(data.ProgramName);
                this.SourceFilePath(data.SourceFilePath);

            }
        }
    });
})();