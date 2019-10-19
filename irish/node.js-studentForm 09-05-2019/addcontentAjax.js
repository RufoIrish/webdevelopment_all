    
function send() {
        var name = document.getElementById("name").value;
        var Class = document.getElementById("subject").value;
        $.ajax
        ({
            type: "POST",
            url: "http://localhost:8080",
            crossDomain:true, 
            data:JSON.stringify({name: name, Class: Class}),
            success: function ( data ) {
                if (data == "successful") {
                alert(name+ " is successfully added to class "+Class);
                } else {
                    alert(name+" was already in the class "+Class);
                }
            },
            error: function(error){
                alert("An error occured!");
            }
        });
}