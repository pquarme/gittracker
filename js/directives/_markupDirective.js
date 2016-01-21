app.directive('markdown', function (npmAPI) {
    return {
        restrict: 'A',
        scope: {
            content: '='
        },
        link: function (scope, elem, attr) {
            var body = {};
            body.text = scope.content;
            body.mode = 'gfm';

            npmAPI.getMarkdown(body).success(function (res) {
               elem.append(res.substr(0, 140) + '...');
            });
        }
    };
});