app.controller('homeController', function (npmAPI, $scope) {
    console.log('here');


    $scope.totalIssues = 1858; //total issue count


    //returns a list of issues
    function getIssues(pageNum) {
        npmAPI.getIssues(pageNum).success(function (res) {
            $scope.issues = []; //list of issues
            $scope.issues = res;
            console.log(res);
        }).error(function (res) {
            console.log('error - ' + res);
        });
    }

    $scope.pagination = {
        current: 1
    };

    $scope.pageChanged = function (newPage) {
        getIssues(newPage);
    };

    getIssues(1); //get initial results onload

});