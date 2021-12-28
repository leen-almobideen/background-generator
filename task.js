

const validateEmail = (email) => {
  const isValid= String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!isValid) alert ('username invalid')
    return isValid;
};

const validateUsername = (username) => {
    debugger;
    let regexp=/^[a-z]+(\.|\-)[a-z]+$/
     const isValid=String(username)
     .toLowerCase()
     .match(
         regexp    );

     if (!isValid) alert('username invalid')  
         return isValid ;
};



const validatepassword = (password) => {
  debugger;
  let regexp="^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z@$!%*?&]{7,}$"

 const isValid=String(password)
   .toLowerCase()
   .match(
       regexp    );

   if (!isValid) alert('password invalid')  
       return isValid ;

};


function testPassword(pass2){
  var pass1=document.getElementById('pw');
 // var pass2=document.getElementById('repw');
  if (pass1==pass2)
  {
      alert('password match')
  }
       else
       {
           alert('password not match')
       }

  }


  function check_date()
  {
    debugger;
  var chkdate = document.getElementById("dbth").value;
  
  var edate = chkdate.split("-");
  var spdate = new Date();
  var sdd = spdate.getDate();
  var smm = spdate.getMonth();
  var syyyy = spdate.getFullYear();
  var today = new Date(syyyy,smm,sdd).getTime();
  var e_date = new Date(edate[0],edate[1]-1,edate[2]).getTime();
  if(e_date > today)
   {
      alert("Date is not valid");
      return false;
   }
  }


  function check_date2(bday) {
    if (new Date(bday) > new Date())
    
    {
      alert ("not valid")
      return false;
    }
    

  }