(function() {

    window.request = function( url ) {

        $.ajax({
            url: url,
            dataType: 'json',
            success: function( data ) {
                console.log( data );
            }
        });
    }

})();