(function(){
    
    window.styleStats = function() {
    
        var styleSheets = document.styleSheets
            , totalStyleSheets = styleSheets.length
            ;

        for (var j = 0; j < totalStyleSheets; j++){
        
            var totalRulesInStylesheet,
                styleSheet = styleSheets[j],
                rules = styleSheet.cssRules || styleSheet.rules,
                totalRulesInStylesheet = rules.length,
                totalSelectorsInStylesheet = 0;
        
            for ( var i = 0, len = totalRulesInStylesheet; i < len; i++ ) {
                
                if ( rules[i].cssRules ) {
                    totalRulesInStylesheet += rules[i].cssRules.length
                }
                
                if ( rules[i].selectorText ) {
                    totalSelectorsInStylesheet += rules[i].selectorText.split( ',' ).length;
                }
            }
            
            console.log( 'Stylesheet: ' + ( styleSheet.href || 'Inline <style> element' ) );
            console.log( 'Total rules.length: ' +  styleSheet.rules.length );
            console.log( 'Total rules recursive: ' +  totalRulesInStylesheet );
            console.log( 'Total selectors: ' + totalSelectorsInStylesheet );
            console.log( '------\n' );
        }
    }
    
})();