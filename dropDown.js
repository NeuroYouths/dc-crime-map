$(document).ready(function () {
    $('#map-ui-fbc li').hover(
        
        function () {
            //change the background of parent menu                
            $('ul', this).stop().slideDown(100);
                
        },
        
        function () {
            //change the background of parent menu
             $('ul', this).stop().slideUp(100);
                
        }
        
    );
        
});