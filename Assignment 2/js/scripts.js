window.onload = function()
{
    document.getElementById("highlighter").onmouseover = function() {mouseOver()};
    document.getElementById("highlighter").onmouseout = function() {mouseOut()};

    function mouseOver()
    {
        document.getElementById("highlighter").className = "highlight";
    }

    function mouseOut()
    {
        document.getElementById("highlighter").className = "";
    }
}