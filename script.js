$(document).ready(function()
{
    $(".but-1").hover(function()
                            {
                                $(this).css({"background-color":"lightblue"});
                            },
                            function()
                            {
                                $(this).css("background-color","white");
                            });
    $(".back").hover(function()
                            {
                                $(this).css({"background-color":"red"});
                            },
                            function()
                            {
                                $(this).css("background-color","lightcoral");
                            });
    $(".equals").hover(function()
                            {
                                $(this).css({"background-color":"greenyellow"});
                            },
                            function()
                            {
                                $(this).css("background-color","lightgreen");
                            });
});
function myFunction(arg)
{
    if(typeof arg === "number")
    {
        $("#display").val($("#display").val()+arg.toString());
    }
    else if(arg != '<' && arg != '=')
    {
        $("#display").val($("#display").val()+arg);
    }
    else
    {
        if(arg == '<')
        {
            $("#display").val($("#display").val().slice(0,-1));
        }
        else
        {
            if(isNaN(eval($("#display").val())))
            {
                alert("Invalid Expression!")
            }
            else
            {
                $("#display").val(eval($("#display").val()));
            }
        }
    }
}