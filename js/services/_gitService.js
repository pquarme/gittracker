app.factory('npmAPI', function ($http) {
    return {
        getIssues: function (pageNum) {
            return $http({
                url: 'https://api.github.com/repos/npm/npm/issues?access_token=88f619a32eb427d205466e6679bb7798a841f1a1&per_page=25&page=' + pageNum,
                method: 'GET'
            });
        },
        getMarkdown: function (data) {
            return $http({
                url: 'https://api.github.com/markdown?access_token=88f619a32eb427d205466e6679bb7798a841f1a1',
                method: 'POST',
                data: data
            });
        }
    }
});