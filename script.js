"use script";
  
let body = document.getElementById('Button6')

body.innerHTML = 'Start';

body.addEventListener ("click", function() {
    window.location.href = 'first.html';
   });

   function timeControl() {
    setTimeout('nextPage()' , 2000);
   }
   //function userCheckup() {
    //var id=setTimeout('nextPage()',12000);
    //if (confirm("This Page will disapear after 20 seconds, You must choose."));
  // }
   function nextPage() {
    window.location.href = 'Scavenge.html';
   }

   

   function timecontrol() {
    setTimeout('nextpage()' , 2000);
   }
   function nextpage() {
    window.location.href = 'Surroundings.html'
   }

   function timecontrolthree () {
   setTimeout('nextpagethree()' , 2000);
   }
   function nextpagethree() {
    window.location.href = 'Yes.html'
   }

   function control() {
    setTimeout('page()' , 2000);
   }
   function page() {
    window.location.href = "Camp.html"
   }