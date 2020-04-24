//event listener for the get data from the api method. 
document.getElementById('submit').addEventListener('click',getDataFromForm);


/**
 * Gets the data from the form and stores it in an array. 
 * Lol 
 */

let pricephone = [];
let keywords = [];

let socialMediaTarget = [];
let smChannels = [];
let gglAdds = [];

let promotedGeneral = 0;
let promotedSocialMedia = 0;
let promotedGoogleAdds = 0; 

let whichphone;
let budget;

function getDataFromForm() {

    //this gets the value for the phone
    whichphone = $("input[name='phone']:checked").val();

    budget = $("#budgetphone").val();
    
    $("#ggAdds:checked").each(function(){
        gglAdds.push($(this).val());
        promotedGoogleAdds = 1;
    });

    $("#smTargetID:checked").each(function(){
        socialMediaTarget.push($(this).val());
        promotedGeneral = 1;
    });

    $("#smChannel:checked").each(function(){
        smChannels.push($(this).val());
        promotedSocialMedia = 1;
    });
    
    //this gets the all keywords which are selected and stores them in an array. 
    $("#keyword:checked").each(function(){
        keywords.push($(this).val());
    });

    getDataFromApi();
}

function getDataFromApi() {
    fetch('http://localhost:5000/api/pc/phone='+ whichphone)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        postData(data);
    });
} 

function postData(data) {
    data.id = whichphone;
    data.sales = data.sales;
    data.budget = budget;
    data.promoted = promotedGeneral;
    data.gglAds.searchTargetKeywords = keywords;
    data.gglAds.displayTargetKeywords = keywords;
    data.gglAds.promoted = promotedGoogleAdds;
    data.gglAds.budget = budget;
    data.smChannels.fbPage = keywords;
    data.smChannels.ytPage = keywords;
    data.smChannels.instaPage = keywords;
    data.smChannels.fbContent = keywords;
    data.smChannels.ytContent = keywords;
    data.smChannels.instaContent = keywords;
    data.smChannels.promoted = promotedSocialMedia;
    data.smChannels.budget = budget;
    ajaxString = JSON.stringify(data);
    console.log(ajaxString);
$.ajax({
    type: "POST",
    url: 'http://localhost:5000/api/pc',
    dataType:'json',
    data: ajaxString,
    contentType: 'application/json',
    success: function(){
        alert("fuck yea");
    },
  });
}





