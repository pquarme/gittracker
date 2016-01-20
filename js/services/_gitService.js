app.factory('npmAPI', function ($http) {
    return {
        getIssues: function (pageNum) {
            return $http({
                url: 'https://api.github.com/repos/npm/npm/issues?per_page=25&page=' + pageNum,
                method: 'GET'
            });
        }
    }
});