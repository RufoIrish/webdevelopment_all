
$(document).ready(function () {
    var item = $("#item");
    var qty = $("#qty");
    var priority = $("#priority");
    $("#addItem").click(function () {
        $("#showTable").hide();
        $("#showForm").show();
    })

    $("#addToList").click(function (e) {
        e.preventDefault();
        console.log(item.val() + qty.val() + priority.val() );
        $("#showTable").show();
        $("#showForm").hide();
        $("#tbody").append("<tr style ='text-align:center'><td>" + item.val() + "</td><td>" + qty.val() + "</td><td>" + priority.val() + "</td></tr>");
    })  
})
