"use script";
  
let body = document.getElementById('Button6')

body.innerHTML = 'Start';

body.addEventListener ("click", function() {
    window.location.href = 'first.html';
   });

   function timeControl() {
    setTimeout('nextPage()' , 900000);
   }
   //function userCheckup() {
    //var id=setTimeout('nextPage()',12000);
    //if (confirm("This Page will disapear after 20 seconds, You must choose."));
  // }
   function nextPage() {
    window.location.href = 'Traverse.html';
   }