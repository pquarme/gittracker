app.controller('detailController', function ($scope, npmAPI, $routeParams) {
    //get issue info
    npmAPI.getIssueInfo($routeParams.id).success( function (res) {
        $scope.issue = res;
    });
});