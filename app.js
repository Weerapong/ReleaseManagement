
$(function() {
    
    ReleaseManagement.app = new DevExpress.framework.html.HtmlApplication({
        ns: ReleaseManagement,
        viewPortNode: document.getElementById("viewPort"),
        defaultLayout: ReleaseManagement.config.defaultLayout,
        navigation: ReleaseManagement.config.navigation
    });

    ReleaseManagement.app.router.register(":view/:id", { view: "MainForm", id: undefined });
    ReleaseManagement.app.router.register(":view/:id", { view: "ss_Customer", id: undefined });
    ReleaseManagement.app.router.register(":view/:id", { view: "ss_Package", id: undefined });
    ReleaseManagement.app.router.register(":view/:id", { view: "ss_Program", id: undefined });
    ReleaseManagement.app.router.register(":view/:id", { view: "ss_Release", id: undefined });
    ReleaseManagement.app.router.register(":view/:id", { view: "About", id: undefined });
});
