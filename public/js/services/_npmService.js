app.factory('npmAPI', function ($http) {
    var accessToken = '88f619a32eb427d205466e6679bb7798a841f1a1';
    
    return {
        getIssues: function (pageNum) {
            return $http({
                url: 'https://api.github.com/repos/npm/npm/issues?per_page=25&page=' + pageNum + ((accessToken) ? ('&access_token='+accessToken) : ''),
                method: 'GET'
            });
        },
        getMarkdown: function (data) {
            return $http({
                url: 'https://api.github.com/markdown?' + ((accessToken) ? ('access_token='+accessToken) : ''),
                method: 'POST',
                data: data
            });
        },
        getRepoInfo: function () {
            return $http({
                url: 'https://api.github.com/repos/npm/npm?' + ((accessToken) ? ('access_token='+accessToken) : ''),
                method: 'GET'
            });
        },
        getIssueInfo: function (issueNum) {
            return $http({
                url: 'https://api.github.com/repos/npm/npm/issues/' + issueNum + ((accessToken) ? ('access_token='+accessToken) : ''),
                method: 'GET'
            });
        },
        getComment: function (issueNum, pageNum) {
            return $http({
                url: 'https://api.github.com/repos/npm/npm/issues/' + issueNum + '/comments?per_page=25&page=' + pageNum + ((accessToken) ? ('access_token='+accessToken) : ''),
                method: 'GET'
            });
        }
    }
});