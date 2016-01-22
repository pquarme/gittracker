app.controller('detailController', function ($scope, npmAPI, $routeParams) {
    var issueNum = $routeParams.id;
    var totalComment = 0; //total number of comments

    //get issue info
    npmAPI.getIssueInfo(issueNum).success(function (res) {
        $scope.issue = res;
        totalComment = res.comments;
        setMaxPage();
    });

    //get comments
    var maxPage = 0;
    function setMaxPage() { //set the maximum number of pages for comments
        maxPage = Math.ceil(totalComment / 25);
        if (maxPage < 1) {
            maxPage = 1;
        }
    }
    
    
    var currPage = 1; //val for the current page in comments

    $scope.comments = [];
    $scope.isBusy = false;

    $scope.getComment = function () {
        if ($scope.isBusy) { //if a list of comments is being retreived return null
            return;
        }

        $scope.isBusy = true;
        npmAPI.getComment(issueNum, currPage).success(function (res) {
            for(var i = 0; i < res.length; i++) {
                $scope.comments.push(res[i]);
            }
            
            /*
             *if the curr page equals the max page, busy is set to true //stop user from requesting more comments)
             */
            (currPage === maxPage) ? $scope.isBusy = true : $scope.isBusy = false;
            
            currPage++;
            
        });
    }
    
    $scope.getComment(); //get initial list of comments
});