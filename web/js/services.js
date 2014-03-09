'use strict';

/* Services */

var ulboraCmsAdminServices = angular.module('ulboraCmsAdminServices', ['ngResource', 'ngCookies']);

ulboraCmsAdminServices.factory('Challenge', ['$resource',
    function($resource) {
        return $resource(siteUrl + "/user/getChallenge", {}, {
            getChallenge: {method: 'GET', params: {languageCode: "en_US"}, isArray: false}
        });
    }]);

ulboraCmsAdminServices.factory('Login', ['$resource',
    function($resource) {
        return $resource(siteUrl + "public/login", {}, {
        });
    }]);

ulboraCmsAdminServices.factory('ArticleValues', ['$resource',
    function($resource) {
        return $resource(siteUrl + "article/values", {}, {
            getValues: {method: 'GET', cache : false, params: {}, isArray: false}
        });
    }]);


ulboraCmsAdminServices.factory('ArticleList', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "article/list", {}, {
            getArticleList: {method: 'POST', cache : false, isArray: true}
        });
    }]);

ulboraCmsAdminServices.factory('Article', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "article", {}, {
            get: {method: 'GET', cache : false, isArray: false},
            save: {method: 'POST', cache : false, isArray: false},
            update: {method: 'PUT', cache : false, isArray: false},
            delete: {method: 'DELETE', cache : false, isArray: false}
        });
    }]);
//delete: {method: 'DELETE', cache : false, isArray: false, headers: {Authorization: 'Basic ' + getToken()}}

ulboraCmsAdminServices.factory('SectionList', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "section/list", {}, {
            getSectionList: {method: 'GET', cache : false, isArray: true}
        });
    }]);

ulboraCmsAdminServices.factory('Section', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "section", {}, {
            //get: {method: 'GET', isArray: false, headers: {Authorization: 'Basic ' + getToken()}},
            save: {method: 'POST', cache : false, isArray: false},
            //update: {method: 'PUT', isArray: false, headers: {Authorization: 'Basic ' + getToken()}},
            delete: {method: 'DELETE', cache : false, isArray: false}
        });
    }]);

ulboraCmsAdminServices.factory('CategoryList', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "category/list", {}, {
            getCategoryList: {method: 'GET', cache : false, isArray: true}
        });
    }]);



ulboraCmsAdminServices.factory('Category', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "category", {}, {
            //get: {method: 'GET', isArray: false, headers: {Authorization: 'Basic ' + getToken()}},
            save: {method: 'POST', cache : false, isArray: false},
            //update: {method: 'PUT', isArray: false, headers: {Authorization: 'Basic ' + getToken()}},
            delete: {method: 'DELETE', cache : false, isArray: false}
        });
    }]);







ulboraCmsAdminServices.factory('LanguageList', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "language/list", {}, {
            getLanguageList: {method: 'GET', cache : false, isArray: true}
        });
    }]);



ulboraCmsAdminServices.factory('Language', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "language", {}, {
            get: {method: 'GET', cache : false, isArray: false},
            save: {method: 'POST', cache : false, isArray: false},
            update: {method: 'PUT', cache : false, isArray: false},
            delete: {method: 'DELETE', cache : false, isArray: false}
        });
    }]);


ulboraCmsAdminServices.factory('LocationList', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "location/list", {}, {
            getLocationList: {method: 'GET', cache : false, isArray: true}
        });
    }]);



ulboraCmsAdminServices.factory('Location', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "location", {}, {
            get: {method: 'GET', cache : false, isArray: false},
            save: {method: 'POST', cache : false, isArray: false},
            update: {method: 'PUT', cache : false, isArray: false},
            delete: {method: 'DELETE', cache : false, isArray: false}
        });
    }]);


ulboraCmsAdminServices.factory('LinkList', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "link/list", {}, {
            getList: {method: 'GET', cache : false, isArray: true}
        });
    }]);



ulboraCmsAdminServices.factory('Link', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "link", {}, {
            get: {method: 'GET', cache : false, isArray: false},
            save: {method: 'POST', cache : false, isArray: false},
            update: {method: 'PUT', cache : false, isArray: false},
            delete: {method: 'DELETE', cache : false, isArray: false}
        });
    }]);



ulboraCmsAdminServices.factory('ConfigurationList', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "configuration/list", {}, {
            getList: {method: 'GET', cache : false, isArray: true}
        });
    }]);



ulboraCmsAdminServices.factory('Configuration', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "configuration", {}, {
            get: {method: 'GET', cache : false, isArray: false},
            save: {method: 'POST', cache : false, isArray: false},
            update: {method: 'PUT', cache : false, isArray: false},
            delete: {method: 'DELETE', cache : false, isArray: false}
        });
    }]);

ulboraCmsAdminServices.factory('ProductList', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "product/list", {}, {
            getList: {method: 'GET', cache : false, isArray: true}
        });
    }]);

ulboraCmsAdminServices.factory('Product', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "product", {}, {
            get: {method: 'GET', cache : false, isArray: false},
            save: {method: 'POST', cache : false, isArray: false},
            update: {method: 'PUT', cache : false, isArray: false},
            delete: {method: 'DELETE', cache : false, isArray: false}
        });
    }]);

ulboraCmsAdminServices.factory('MediaList', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "media/list", {}, {
            getMediaList: {method: 'GET', cache : false, isArray: true}
        });
    }]);

ulboraCmsAdminServices.factory('MediaUpload', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "media/upload", {}, {
            addMedia: {method: 'POST', cache : false, isArray: false, headers: {'Content-Type': 'multipart/form-data'}}
        });
    }]);

ulboraCmsAdminServices.factory('Media', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "media", {}, {
            get: {method: 'GET', cache : false, isArray: false},
            save: {method: 'POST', cache : false, isArray: false},
            update: {method: 'PUT', cache : false, isArray: false},
            delete: {method: 'DELETE', cache : false, isArray: false}
        });
    }]);

ulboraCmsAdminServices.factory('DownloadableFileList', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "downloadableFile/list", {}, {
            getList: {method: 'GET', cache : false, isArray: true}
        });
    }]);

ulboraCmsAdminServices.factory('DownloadableFile', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "downloadableFile", {}, {
            get: {method: 'GET', cache : false, isArray: false},
            save: {method: 'POST', cache : false, isArray: false},
            update: {method: 'PUT', cache : false, isArray: false},
            delete: {method: 'DELETE', cache : false, isArray: false}
        });
    }]);

ulboraCmsAdminServices.factory('UserList', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "ulboraUser/list", {}, {
            getUserList: {method: 'GET', cache : false, isArray: true}
        });
    }]);

ulboraCmsAdminServices.factory('UserRoleList', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "ulboraUser/roles", {}, {
            getUserRoleList: {method: 'GET', cache : false, isArray: true}
        });
    }]);

ulboraCmsAdminServices.factory('Password', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "ulboraUser/pw", {}, {
            change: {method: 'POST', cache : false, isArray: false}
        });
    }]);

ulboraCmsAdminServices.factory('User', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "ulboraUser", {}, {
            get: {method: 'GET', cache : false, isArray: false},
            save: {method: 'POST', cache : false, isArray: false},
            update: {method: 'PUT', cache : false, isArray: false},
            delete: {method: 'DELETE', cache : false, isArray: false}
        });
    }]);

ulboraCmsAdminServices.factory('AdminSummary', ['$resource', 
    function($resource) {
        return $resource(siteUrl + "admin/summary", {}, {
            get: {method: 'GET', cache : false, isArray: false}           
        });
    }]);