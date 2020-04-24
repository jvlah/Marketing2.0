//document.getElementById('submit').addEventListener('click',validate);
//document.getElementById('lock').addEventListener('click',lockAnswers);


function validate() {
   // if(!document.getElementById('whichphone').checked) {
   //     alert("Please check Which phone do you want");
   // }    
} //closing

function lockAnswers() {
    document.getElementById("whichphone").disabled = true;
    document.getElementById("budgetphone").disabled = true;
    document.getElementById("smTargetID").disabled = true;
    document.getElementById("smChannel").disabled = true; 
    document.getElementById("ggAdds").disabled = true;
    document.getElementById("keywords").disabled = true;
    
}

