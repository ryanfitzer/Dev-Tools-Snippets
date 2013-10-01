(function(){
    
    window.totalNodes = function( wrapper, tag ) {
    
    var scope = wrapper || document
        , nodes = scope.getElementsByTagName( tag || '*' ).length
        ;
    
    console.log( 'Total nodes:', nodes );
}
    
})();