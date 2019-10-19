
$(document).ready(function(){
    console.log("irsh");
    $("button").click(function(){
        var result=0;
        alert(result);
        result=$(this).text();
    })
    $.ajax({
        url: "/rate",
        type: "post",
        crossDomain: true,
        data: {rate: result ,province: "bohol"},
        success: function(data) {
            $("#rate").text(data);
        }
      });
})
