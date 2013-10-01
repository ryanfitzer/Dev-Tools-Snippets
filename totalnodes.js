(function(){
    
    window.totalnodes = function( wrapper, tag ) {
        
        var nodes
            , nodeSymbol
            , all = '*'
            ;
                
        if ( !tag && typeof wrapper === 'string' ) tag = wrapper;
        else if ( !tag ) tag = all;
        
        if ( !wrapper || typeof wrapper === 'string' ) wrapper = document;
        
        nodeSymbol = tag === all ? '' : '<' + tag + '> ';
        nodes = wrapper.getElementsByTagName( tag ).length;
        
        console.log( 'Scope: ', wrapper )
        console.log( 'Total ' + nodeSymbol + 'nodes:', nodes );
        console.log( '------' );
    }
})();