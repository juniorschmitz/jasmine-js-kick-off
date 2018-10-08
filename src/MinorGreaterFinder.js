function MinorGreaterFinder(){
        
    var minor;
    var greater;

    var finder = {
        feed : function (numbers) {

            minor = Number.MAX_VALUE;
            greater = Number.MIN_VALUE;

            numbers.forEach(function(number) {
                if (number < minor) minor = number;
                if (number > greater) greater = number;
            });
        },

        getMinor : function() { return minor; },

        getGreater : function() { return greater; }
    };
    
    return finder;
}