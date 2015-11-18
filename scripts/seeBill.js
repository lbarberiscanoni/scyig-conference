var billList = new Firebase("https://yig-bill-tracker.firebaseio.com/bills");
//first, let's figure which bill we are dealing with
var thisBillTitle = $("h1").text();

//let's run to through the DB to find the bill and print it for the user
billList.on("child_added", function(snapshot) {
    var bill = snapshot.val();
    if (bill.billTitle == thisBillTitle) {
        var thisBillID = bill.id;
        var billText = bill.billText;
        console.log(billText.split("<br>"));
        $(".container").append("<h3 class='text-center'>" + "BE IT HEREBY ENACTED BY THE YMCA MODEL LEGISLATURE OF SOUTH CAROLINA" + "</h3>");
        $(".container").append("<div class='row amendable' id='billText'>/div>");
        $("#billText").html(billText);
    };
});
