var LastElement = {}
var CurrentElement = {};

function ToggleHighlight()
{
    var current = $(CurrentElement);
    console.log(current);
    var last = $(LastElement);
    console.log(last);


    if ($(current).hasClass("highlight piece red") && $(last).hasClass("highlight piece red"))
    {
        current.prop("class", "cell piece red");
    }
    else if ($(current).hasClass("cell piece red") && !$(last).hasClass("highlight piece black"))
    {
        last.prop("class", "cell");
        current.prop("class", "highlight piece red");
    }
    else if ($(current).hasClass("cell") && $(last).hasClass("highlight piece red"))
    {
        last.prop("class", "cell");
        current.prop("class", "cell piece red");
    }
    else if ($(current).hasClass("highlight piece black") && $(last).hasClass("highlight piece black"))
    {
        current.prop("class", "cell piece black");
    }
    else if ($(current).hasClass("cell piece black") && !$(last).hasClass("highlight piece red"))
    {
        current.prop("class", "highlight piece black");
    }
    else if (($(current).hasClass("cell") || $(current).hasClass("cell piece red")) && $(last).hasClass("highlight piece black")) {
        last.prop("class", "cell");
        current.prop("class", "cell piece black");
    }
}


$(document).ready(function ()
{
    var cells = $(".cell");
    var colorCount = 0;

    for (var i = 0; i < cells.length; i++)
    {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
    }


    $(".cell").click(function () {
        CurrentElement = this;
        console.log(CurrentElement);
        ToggleHighlight();
        LastElement = this;
        console.log(LastElement);
    });
});