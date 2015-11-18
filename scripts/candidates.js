var candidatesInfo = new Firebase("https://yig-bill-tracker.firebaseio.com/candidates");
$(document).ready(function() {
    candidatesInfo.on("child_added", function(snapshot) {
        var candidateDB = snapshot.val();
        var candidateOffice = candidateDB.office;
        candidateOffice = candidateOffice.toLowerCase().replace(" ", "");
        candidateOffice = candidateOffice.replace(" ", "");
        candidateOffice = candidateOffice.replace(" ", "");
        var bro = $("#" + candidateOffice).append("<button class='btn btn-default form-control' id='candidate'>" + candidateDB.name + "</button>");
        $("button#candidate:last").click(function() {
            var showCandidateInfo = function(nameToBeSearched) {
                candidatesInfo.on("child_added", function(snapshot) {
                    var candidateBeingLookedUp = snapshot.val();
                    if (candidateBeingLookedUp.name == nameToBeSearched) {
                        page = window.open();
                        var boostrap = "<link rel='stylesheet', href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css'>"
                        var responsiveMetaTags = "<meta charset='utf-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name='viewport' content='width=device-width, initial-scale=1'>"
                        page.document.write(
                            "<!DOCTYPE html><html><head>" + responsiveMetaTags + boostrap + "</head><body>" + 
                            "<div class='container'>" + 
                            "<a href='candidates.html' class='btn btn-default'>BACK</a>" + 
                            "<h1 class='text-center'>" + nameToBeSearched + "</h1>" + 
                            "<div class='row'><h3>Running for</h3><p>" + candidateBeingLookedUp.office + "</p></div>" + 
                            "<div class='row'><h3>Slogan</h3><p>" + candidateBeingLookedUp.slogan + "</p></div>" + 
                            "<div class='row'><h3>School</h3><p>" + candidateBeingLookedUp.school + "</p></div>" + 
                            "<div class='row'><h3>Statement</h3><p>" + candidateBeingLookedUp.statement + "</p></div>" + 
                            //"<div class='row'><h3>Graduation Year</h3><p>" + candidateBeingLookedUp.graduation-year + "</p></div>" + 
                            //"<div class='row'><h3>Role This Year</h3><p>" + candidateBeingLookedUp.conference-role + "</p></div>" + 
                            "</div></body>"
                        );
                    };
                });
            };

            var selectedCandidate = $(this).text();
            showCandidateInfo(selectedCandidate);
        });
    });
});
