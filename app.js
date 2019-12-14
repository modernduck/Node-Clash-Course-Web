function onClicked(e){
    e.preventDefault();
    if(validate()){
        //
        console.log('pass')
    }else{
        alert("กรอกผิด");
    }
    
}

function validate(){
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var citizenId = document.getElementById('citizenId').value;
    var createDate = document.getElementById('createDate').value;
    var accidentType = document.getElementById('accidentType').value;

    console.log("Data", firstName, lastName, citizenId, createDate, accidentType)
    if(Number(citizenId) > 10)
        return true;
    else
        return false;
    //return true;
}