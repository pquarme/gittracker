app.filter('cleanURL', function() { 
    return function(string) {
        return string.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9_-]/g,'').replace(/\(/g,"").replace(/\)/g,"");
    }
});