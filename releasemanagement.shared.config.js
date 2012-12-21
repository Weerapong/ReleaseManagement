
// NOTE object below must be a valid JSON
window.ReleaseManagement = $.extend(true, window.ReleaseManagement, {
    "config": {
        "endpoints": {
            "db": {
                "local": "http://192.168.13.201/SpReleaseService/DataService.svc",
                "production": "http://192.168.13.201/SpReleaseService/DataService.svc"
            }
        },
        "services": {
            "db": {
                "entities": {
					"ss_Customer": { 
						key: "CustomerRID", 
						keyType: "Int32" 
					},
					"ss_CustPackage": { 
						key: "CustPackageRID", 
						keyType: "Int32" 
					},
					"ss_CustRelease": { 
						key: "CustReleaseRID", 
						keyType: "Int32" 
					},
					"ss_Package": { 
						key: "PackageRID", 
						keyType: "Int32" 
					},
					"ss_Program": { 
						key: "ProgramRID", 
						keyType: "Int32" 
					},
					"ss_Release": { 
						key: "ReleaseRID", 
						keyType: "Int32" 
					},
					"ss_User": { 
						key: "user_id", 
						keyType: "String" 
					},
                }
            }
        }
    }
});
