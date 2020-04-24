
//this appends the information about the phones (Needs to be out of the json * needs to be refurbished);
$("#button1").click(function()
    {
        append();
    }
);

$("#button2").click(function()
    {
        append2();
    }
);

$("#button3").click(function()
    {
        append3();
    }
);

function append() {
    $.ajax({
        dataType: "json",
        url: "http://localhost:5000/api/sales/phoneContract=1",
        success: function (data) {
            console.log(data);
            $("#phone1body").append(JSON.stringify(data));
        }
    });
}

function append2() {
    $.ajax({
        dataType: "json",
        url: "http://localhost:5000/api/sales/phoneContract=2",
        success: function (data) {
            console.log(data);
            $("#phone2body").append(JSON.stringify(data));
        }
    });
}

function append3() {
    $.ajax({
        dataType: "json",
        url: "http://localhost:5000/api/sales/phoneContract=3",
        success: function (data) {
            console.log(data);
            $("#phone3body").append(JSON.stringify(data));
        }
    });
}

