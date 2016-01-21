app.directive('markdown', function (npmAPI) {
    return {
        restrict: 'A',
        scope: {
            content: '=',
            preview: '='
        },
        link: function (scope, elem, attr) {
            var body = {};
            body.text = scope.content;
            body.mode = 'gfm';

            npmAPI.getMarkdown(body).success(function (res) {
                if(scope.preview) {
                    elem.append(res.substr(0, 140) + '...');
                } else {
                    elem.append(res);
                }
            });
        }
    };
});