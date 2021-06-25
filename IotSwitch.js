var SwitchStatus = [];
var res;
const url = "https://script.google.com/macros/s/AKfycbyn2h7Fet7vkbThSxAHJWwBf_ODRIWLQPy9-hMMWc4TmihxyZ-ijxmqVVIIaMEH-S9V/exec"

window.onload = function() {  
    
    getAPIData();    
    
};


function setStatus() 
{
   
   const switch1 = document.getElementById("switchin1");
   switch1.checked = SwitchStatus[1];
   const switch2 = document.getElementById("switchin2");
   switch2.checked = SwitchStatus[2];
   const switch3 = document.getElementById("switchin3");
   switch3.checked = SwitchStatus[3];
   const switch4 = document.getElementById("switchin4");
   switch4.checked = SwitchStatus[4];

}

function setSwitchDataOnClick(switchnumber)
{
        switchnumber = parseInt(switchnumber);
        var switchID = "switchin" + switchnumber;
        SwitchStatus[switchnumber] = document.getElementById(switchID).checked ;
        setStatus(); 

}

function getAPIData()
{   
    
    fetch(url)
    .then(d => d.json())
    .then(d =>{
         res = d.data;
         SwitchStatus = res.map(x => x[1]);
         setStatus();
    });
    
     
}

function postAPIData()
{
    

}



