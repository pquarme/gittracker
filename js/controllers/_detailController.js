app.controller('detailController', function ($scope, npmAPI, $routeParams) {
    var issueNum = $routeParams.id;
    var totalComment = 0; //total number of comments

    //get issue info
    npmAPI.getIssueInfo(issueNum).success(function (res) {
        $scope.issue = res;
        totalComment = res.comment;
    });

    //get comments
    var maxPage = totalComment / 25;
    var currPage = 1;

    $scope.comments = [];
    $scope.isBusy = false;

    $scope.getComment = function () {
        if ($scope.isBusy) {
            return;
        }

        $scope.isBusy = true;
        npmAPI.getComment(issueNum, currPage).success(function (res) {
            for(var i = 0; i < res.length; i++) {
                $scope.comments.push(res[i]);
            }
            
            (currPage === maxPage) ? $scope.isBusy = true : $scope.isBusy = false;
            
            currPage++;
        });
    }
    
    $scope.getComment();
});