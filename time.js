//javascript

//call to jQuery ready function
//make sure html and css aare loaded

$(document).ready(function () {
    console.log("ready");
    
    //hide tool tip
    $('h5').hide();
    
    //class tool tip
    $('#class h2,#class img').hover(function(){
        $('#class h5').show();
    },function() {
        $('#class h5').hide();
    });
    
    //home tool tip
    $('#home h2,#home img').hover(function(){
        $('#home h5').show();
    },function() {
        $('#home h5').hide();
    });
    
    //work tool tip
    $('#work h2,#work img').hover(function(){
        $('#work h5').show();
    },function() {
        $('#work h5').hide();
    });
    
    //transit tool tip
    $('#transit h2,#transit img').hover(function(){
        $('#transit h5').show();
    },function() {
        $('#transit h5').hide();
    });
    


    //click funtions
    //see details --> reveals list of times and activities
    
    
    // show class list 
    $('#class p').click(function () {
        $('#class li').css('visibility','visible')/*.animate({height:'toggle'})*/;
        return false;
    });

    // show home list
    $('#home p').click(function () {
        $('#home li').css('visibility', 'visible')/*.animate({height:'toggle'})*/;
        return false;
    });

    
    // show work list
    $('#work p').click(function () {
        $('#work li').css('visibility', 'visible')/*.animate({height:'toggle'})*/;
        return false;
    });

    // show transit list
    $('#transit p').click(function () {
        $('#transit li').css('visibility', 'visible')/*.animate({height:'toggle'})*/;
        return false;
    });
});