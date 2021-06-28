var SwitchStatus = [];
var res;
const url = "https://script.google.com/macros/s/AKfycbxYGc5VYOxQuwLfSsunfWln7hvIAn0PB0xV-7pZ-EXndanBsjTURKPwEOhOXcdphhnZ/exec"

window.onload = function() {      
    getAPIData();        
};


function setStatus() 
{
   
   const switch1 = document.getElementById("Switch1");
   switch1.checked = SwitchStatus[0];
   const switch2 = document.getElementById("Switch2");
   switch2.checked = SwitchStatus[1];
   const switch3 = document.getElementById("Switch3");
   switch3.checked = SwitchStatus[2];
   const switch4 = document.getElementById("Switch4");
   switch4.checked = SwitchStatus[3];

}

function setSwitchDataOnClick(switchnumber)
{
        switchnumber = parseInt(switchnumber);
        var switchID = "Switch" + switchnumber;
        SwitchStatus[switchnumber-1] = document.getElementById(switchID).checked ;
        postAPIData(switchnumber, SwitchStatus[switchnumber-1]);
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

function postAPIData(switchID,state)
{

    var UPswitch = new Object();
    UPswitch.switchID = switchID;
    UPswitch.state = state;
   

    fetch(url,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        //redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(UPswitch) // body data type must match "Content-Type" header
      })

}



