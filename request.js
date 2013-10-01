(function() {

    window.request = function( url ) {
        
        if ( !window.jQuery ) {
            
            console.log( 'This snippet needs jQuery to run.' );
            return;
        }
        
        jQuery.ajax({
            url: url,
            success: function( response ) {
                
                console.log( 'Success:' );
                console.log( response );
                console.log( '------');
            },
            error: function( response ) {
                
                console.log( 'Error:' );
                console.log( response );
                console.log( '------');
            }
        });
    }

})();