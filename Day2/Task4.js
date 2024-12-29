
databaseSharing =() =>{
    console.log("Date Stored Successfully");
}
function submitForm(formMsg,dbs){
    setTimeout (()=>{
    dbs()
    console.log(formMsg)
    },10000)
}
submitForm("Form Submitted Successfullly",databaseSharing)
