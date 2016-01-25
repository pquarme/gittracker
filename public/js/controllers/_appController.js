var app = angular.module('npm', ['ngRoute', 'angularUtils.directives.dirPagination', 'hc.marked']);

app.config(['markedProvider', function (markedProvider) {
  markedProvider.setOptions({gfm: true});
}]);