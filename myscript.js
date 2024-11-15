var slider = 
{
    loop : false,
    index : null,
    images : [],
    timeoutID: null,

    run : function()
    {
        var that = this;

        if(that.loop == false) { return; };

        if(that.index == null) that.index = 0;

        that.images = $("main section article img");

        var width = $("main section").width();
        var height = $("main section").height();
        var src = $(that.images[that.index]).attr('src');

        $("main .slider img").attr('src',src);
        $("main .slider img").css('width','100%');
        $("main .slider img").css('border-radius','10px');
        $("main .slider img").css('box-shadow','5px 5px 5px grey');
        
        $("main section").hide();
        $("main .slider").hide().fadeIn();

        if(that.index < that.images.length - 1)
        {
            that.index = that.index + 1;
        }
        else
        {
            that.index = 0;
        }

        that.timeoutID = setTimeout(function () 
        {
            that.run();
        }, 4000);


    },

    start : function(event)
    {
        console.log(event.target);

        this.loop = true;

        this.run();
    },

    stop : function()
    {
       

        clearTimeout(this.timeoutID);

        this.loop = false;

        $("main section").hide().fadeIn();
        $("main .slider").hide();


    }
}

$(document).ready(function()
{
    $("#burger").click(function()
    {
        $("#burger").hide();
        $("#menu").slideToggle(1500);
    });
    
    $("main .slider").click(function()
    {
        slider.stop();
    });

    $("main section").click(function(event)
    {
        slider.start(event);
    });

});

