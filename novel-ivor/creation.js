let topicmobilecontentArr = [];

let keywordsgglsrc = [];
let demographicgglsrc = [];
let platformgglsearch = [];

let keywordsggldisplay = [];
let demographicggldisplay = [];
let platformggldisplay = [];

let phoneid;

//targeting mobile content
let fbpage;
let inpage;
let ytpage;

let fbcontent;
let incontent;
let ytcontent;

let namegooglesearch;
let locationgooglesearch;
let schedulegooglesearch;

let namegoogledisplay;
let locationgoogledisplay;
let schedulegoogledisplay;

let fbsmpages = [];
let instasmpages = [];
let ytsmpages = [];

let ppcgooglesearch;
let ppcgoogledisplay;

let placement = [];

//brandcontentnames
let smgn;
let nonSmartphoneRelated;
let ecoSystem;
let anni;
let random;
let environmental;

let plaftormdesktopsrc = "false";
let platformmobilesrc = "false";

let platformmobiledisplay = "false";
let platformdesktopdisplay = "false";


document.getElementById('mobilecontentsubmit').addEventListener('click',getWebsite);
document.getElementById('submitdisplay').addEventListener('click',getGoogle);;
document.getElementById('submitsocialmedia').addEventListener('click',getSocialPagesData);

function getWebsite() {

    smgn = $("#smgn").val();
    nonSmartphoneRelated = $("#nonSmartphoneRelated").val();
    ecoSystem = $("#ecoSystem").val();
    anni = $("#anni").val();
    random = $("#random").val();
    environmental = $("#environmental").val();
    
   /*  console.log("SMGN: " + smgn);
    console.log("NON RELATED: " + nonSmartphoneRelated);
    console.log("eco: " + ecoSystem);
    console.log("ani: " + anni);
    console.log("random: " + random);
    console.log("environmental: " + environmental); */


    //MOBILE CONTENT------------------------------------------------------------

    //2. Radio Button which phone
    phoneid = $("input[name='phone']:checked").val();

    //3. Keywords Mobile Content 

    $("#topicmobile:checked").each(function(){
        topicmobilecontentArr.push($(this).val());
    });

    //4. Targeting

    //PAGES TARGETING 

    fbpage = $("input[name='fbpages']:checked").val();
    inpage = $("input[name='inpages']:checked").val();
    ytpage = $("input[name='ytpages']:checked").val();

    //CONTENT TARGETING

    fbcontent = $("input[name='fbcontent']:checked").val();
    incontent = $("input[name='incontent']:checked").val();
    ytcontent = $("input[name='ytcontent']:checked").val();
    
    /* console.log("MOBILE CONTENT --------------------------");
    console.log("Phone id: " + phoneid);
    console.log("Topics: " + topicmobilecontentArr);
    console.log("Pages: " + fbpage+inpage+ytpage);
    console.log("Content: " + fbcontent+incontent+ytcontent);
    console.log("MOBILE CONTENT --------------------------"); */

    getAPIWebsite();

}


function getGoogle() {
     //GOOGLE ADS SEARCH------------------------------------------------------------

    //5. Name

    namegooglesearch = $("#campaignnamesearch").val();

    //6. Keywords

    $("#searchkeywords:checked").each(function(){
        keywordsgglsrc.push($(this).val());
    });

    //7. Demographic

    $("#demographicsearch:checked").each(function(){
        demographicgglsrc.push($(this).val());
    });

    //8. Location

    locationgooglesearch = $("#locationsearch").val();
    
    //9. Schedule

    schedulegooglesearch = $("#schedulesearch").val();

    //10. Platform checkbox
    
   /*  $("#devicessearch:checked").each(function(){
        platformgglsearch.push($(this).val());
    }); */

    if(document.getElementById("desktopsearchplatform").checked == true) {
        plaftormdesktopsrc = "true";
    }

    if(document.getElementById("mobilesearchplatform").checked == true) {
        platformmobilesrc = "true";
    }


    ppcgooglesearch = $("#ppcsearch").val();
    
   /*  console.log("GOOGLE SEARCH  --------------------------");
    console.log("NAME: " + namegooglesearch);
    console.log("KEYWORDS: " + keywordsgglsrc);
    console.log("DEMOGRAPHIC: " + demographicgglsrc);
    console.log("LOCATION: " + locationgooglesearch);
    console.log("SCHEDULE: " + schedulegooglesearch);
    console.log("PLATFORM: " + platformgglsearch);
    console.log("PPC: " + ppcgooglesearch);
    console.log("CLOSIGN GOOGLE SEARCH  --------------------------"); */

    //GOOGLE ADS DISPLAY------------------------------------------------------------

//name
namegoogledisplay = $("#campaignnamedisplay").val();

//display keywords
$("#displaykeywords:checked").each(function(){
    keywordsggldisplay.push($(this).val());
});

//demographic display
$("#demographicdisplay:checked").each(function(){
    demographicggldisplay.push($(this).val());
});

//location
locationgoogledisplay = $("#locationdisplay").val();

//schedule display
schedulegoogledisplay = $("#scheduledisplay").val();

//platform google display
$("#devicesdisplay:checked").each(function(){
    platformggldisplay.push($(this).val());
});

$("#placementdisplay:checked").each(function(){
    placement.push($(this).val());
});

if(document.getElementById("desktopdisplay").checked == true) {
    platformdesktopdisplay = "true";
}

if(document.getElementById("mobiledisplay").checked == true) {
    platformmobiledisplay = "true";
}

ppcgoogledisplay = $("#ppcdisplay").val();


//TEST GOOGLE DISPLAY: 
    
 /*    console.log("GOOGLE DISPLAY  --------------------------");
    console.log("NAME: " + namegoogledisplay);
    console.log("KEYWORDS: " + keywordsggldisplay);
    console.log("DEMOGRAPHIC: " + demographicggldisplay);
    console.log("LOCATION: " + locationgoogledisplay);
    console.log("SCHEDULE: " + schedulegoogledisplay);
    console.log("PLATFORM: " + platformggldisplay);
    console.log("Google Display: " + ppcgoogledisplay);
    console.log("Placement: " + placement);
    console.log("CLOSIGN GOOGLE DISPLAY  --------------------------"); */

    getAPIGoogle();

} //closing the google


function getSocialPagesData() {
//SOCIAL MEDIA PAGES------------------------------------------------------------

//16.FACEBOOK KEYWORDS
$("#fbpagekeywords:checked").each(function(){
    fbsmpages.push($(this).val());
});

//17.INSTAGRAM KEYWORDS
$("#inpagekeywords:checked").each(function(){
    instasmpages.push($(this).val());
});

//18.YOUTUBE KEYWORDS
$("#ytpagekeywords:checked").each(function(){
    ytsmpages.push($(this).val());
});

/* console.log("PAGES DATA  --------------------------");
console.log("fb: " + fbsmpages);
console.log("INS: " + instasmpages);
console.log("YT: " + ytsmpages);
console.log("CLOSING PAGES DATA --------------------------");
*/

getAPISocialMedia();

} //get social pages data;

function getAPIWebsite() {
    fetch('http://localhost:5000/api/wc/phone=1')
    .then(function(res){
        return res.json();
    })
    .then(function(dataweb){
        postDataWebsite(dataweb);
        console.log("DataWeb");
        console.log(dataweb);
    });
}

function getAPIGoogle() {
    fetch('http://localhost:5000/api/gac/phone=1')
    .then(function(res){
        return res.json();
    })
    .then(function(datagoogle){
       postDataGoogle(datagoogle);
       console.log("DataGoogle");
       console.log(datagoogle);
    });
}

function getAPISocialMedia() {
    fetch('http://localhost:5000/api/smnc/phone=1')
    .then(function(res){
        return res.json();
    })
    .then(function(datasocial){
       postDataSocialMedia(datasocial);
       console.log("DataSocial");
       console.log(datasocial);
    });
}

//posting the data. 
function postDataWebsite(dataweb) {

    dataweb.brand.smgt = smgn;
    dataweb.brand.nonSmartphoneRelated = nonSmartphoneRelated;
    dataweb.brand.ecoSystem = ecoSystem;
    dataweb.brand.anni = anni;
    dataweb.brand.random = random;
    dataweb.brand.environmental = environmental;
    dataweb.mobile.content.facebook = fbcontent;
    dataweb.mobile.content.youtube = ytcontent;
    dataweb.mobile.content.insta = incontent;
    dataweb.mobile.post.phoneID = phoneid;
    dataweb.mobile.post.topic = topicmobilecontentArr;
    dataweb.mobile.post.page.facebook = fbpage;
    dataweb.mobile.post.page.youtube = ytpage;
    dataweb.mobile.post.page.insta = inpage;
    ajaxStringWebsite = JSON.stringify(dataweb);
    $.ajax({
        type: "POST",
        url: 'http://localhost:5000/api/wc/phone=1',
        dataType:'json',
        data: ajaxStringWebsite,
        contentType: 'application/json',
        success: function(){
            alert("THIS WAS POSTED: " + ajaxStringWebsite);
        },
    });
}

function postDataGoogle(datagoogle) {

    datagoogle.search.name = namegooglesearch;
    datagoogle.search.keywords = keywordsgglsrc;
    datagoogle.search.demographics = demographicgglsrc;
    datagoogle.search.location = locationgooglesearch;
    datagoogle.search.schedule = schedulegooglesearch;
    datagoogle.search.devices.desktop = plaftormdesktopsrc;
    datagoogle.search.devices.mobile = platformmobilesrc;
    datagoogle.search.ppc = ppcgooglesearch;

    datagoogle.display.name = namegoogledisplay;
    datagoogle.display.keywords = keywordsggldisplay;
    datagoogle.display.demographics = demographicggldisplay;
    datagoogle.display.location = locationgoogledisplay;
    datagoogle.display.schedule = schedulegoogledisplay;
    datagoogle.display.devices.desktop = platformdesktopdisplay;
    datagoogle.display.devices.mobile = platformmobiledisplay;
    datagoogle.display.ppc = ppcgoogledisplay;
    datagoogle.display.placements = placement;
    ajaxstringgoogle = JSON.stringify(datagoogle);

    $.ajax({
        type: "POST",
        url: 'http://localhost:5000/api/gac/phone=1',
        dataType:'json',
        data: ajaxstringgoogle,
        contentType: 'application/json',
        success: function(){
            alert("THIS WAS POSTED: " + ajaxstringgoogle);
        },
    });
} //closing the postdata google

function postDataSocialMedia(datasocial) {
    datasocial.post.fbPage = fbsmpages;
    datasocial.post.ytPage = ytsmpages;
    datasocial.post.instaPage = instasmpages;
    ajaxstringsocial = JSON.stringify(datasocial);
    $.ajax({
        type: "POST",
        url: 'http://localhost:5000/api/smnc/phone=1',
        dataType:'json',
        data: ajaxstringsocial,
        contentType: 'application/json',
        success: function(){
            alert("THIS WAS POSTED: " + ajaxstringsocial);
        },
    });
}









