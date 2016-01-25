app.directive('markdown', function (npmAPI, marked) {
    return {
        restrict: 'A',
        scope: {
            content: '=',
            preview: '='
        },
        link: function (scope, elem, attr) {
            /*
             *Markdown was originally implemented using the github markdown api 
             *Due to api rate limit, 403 errors were constantly being thrown
             *I decided to use a js plugin(marked) for the markup
            
            
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
            */

            var html = marked(scope.content);

            if (scope.preview) {
                elem.append(html.substr(0, 140) + '...');
            } else {
                elem.append(html);
            }

        }
    };
});