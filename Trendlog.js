document.getElementById("button-dragndrop").addEventListener("click"); {
    var dest = parseInt($("#button-dragndrop").css("margin-left").replace("px", "")) + 100;
    if (dest > 500) {
        $("#button-dragndrop").animate({
            marginLeft: "10px"
          }, 500 );
    }
    else {
      $("#button-dragndrop").animate({
        marginLeft: dest + "px"
      }, 500 );
    }
});