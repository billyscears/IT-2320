
$(document).ready(function () 
{
    $("#add").click(function()
    {
        $("div.acctInfoLowerCenter").append("<input type="text" name="element2" id="element2" required><br> <input type="submit" id="add" value="Add" class="button">");
    });

});

$("#login").click(function(){
    $("p").replaceWith("Hello world!");
});