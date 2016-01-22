app.controller('homeController', function (npmAPI, $scope, $location, $anchorScroll) {
    
    $scope.pagination = { //default page for pagination
        current: 1
    };
    
    if($location.search().page) { //if page number is set in url, replace the default value
        $scope.pagination.current = $location.search().page;
    }
    
    
    //get repository details for 'open_issues_count'
    npmAPI.getRepoInfo().success( function (res) {
        $scope.totalIssues = res.open_issues_count; //total issue count
    });

    //returns a list of issues
    function getIssues(pageNum) {
        npmAPI.getIssues(pageNum).success(function (res) {
            $scope.issues = []; //list of issues
            $scope.issues = res;
            //console.log(res);
        }).error(function (res) {
            console.log('error - ' + res);
        });
    }

    $scope.pageChanged = function (newPage) {
        $location.search('page', newPage); 
        getIssues(newPage);
        $anchorScroll(); //scroll to top of page after fetching results
        
        $scope.issues = null;
    };

    getIssues($scope.pagination.current); //get initial results onload
});