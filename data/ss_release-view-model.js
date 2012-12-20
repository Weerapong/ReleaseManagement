
(function() {
    ReleaseManagement.ss_ReleaseViewModel = function(data) {
            this.ReleaseRID = ko.observable();
            this.ReleaseDate = ko.observable();
            this.ReleaseBy = ko.observable();
            this.PackageRID = ko.observable();
            this.ProgramRID = ko.observable();
            this.ReleaseVersion = ko.observable();
            this.ReleaseDesc = ko.observable();
            this.Instruction = ko.observable();
            this.SourceFilePath = ko.observable();
            this.ReleaseType = ko.observable();
            this.RecordID = ko.observable("test");
            this.RecordDate = ko.observable(Date());
            this.UpdateID = ko.observable("test");
            this.UpdateDate = ko.observable(Date());
            if(data)
                this.fromJS(data);
    };

    $.extend(ReleaseManagement.ss_ReleaseViewModel.prototype, {
        toJS: function() {
            return {
                ReleaseRID: this.ReleaseRID(),
                ReleaseDate: this.ReleaseDate(),
                ReleaseBy: this.ReleaseBy(),
                PackageRID: this.PackageRID(),
                ProgramRID: this.ProgramRID(),
                ReleaseVersion: this.ReleaseVersion(),
                ReleaseDesc: this.ReleaseDesc(),
                Instruction: this.Instruction(),
                SourceFilePath: this.SourceFilePath(),
                ReleaseType: this.ReleaseType(),
                RecordID: this.RecordID(),
                RecordDate: this.RecordDate(),
                UpdateID: this.UpdateID(),
                UpdateDate: this.UpdateDate(),
            };
        },

        fromJS: function(data) {
            if(data) {
                this.ReleaseRID(data.ReleaseRID);
                this.ReleaseDate(data.ReleaseDate);
                this.ReleaseBy(data.ReleaseBy);
                this.PackageRID(data.PackageRID);
                this.ProgramRID(data.ProgramRID);
                this.ReleaseVersion(data.ReleaseVersion);
                this.ReleaseDesc(data.ReleaseDesc);
                this.Instruction(data.Instruction);
                this.SourceFilePath(data.SourceFilePath);
                this.ReleaseType(data.ReleaseType);
                this.RecordID(data.RecordID);
                this.RecordDate(data.RecordDate);
                this.UpdateID(data.UpdateID);
                this.UpdateDate(data.UpdateDate);

            }
        }
    });
})();