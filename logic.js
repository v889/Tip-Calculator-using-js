function TipIncrement(){

      var value=document.getElementById("tip").value;
      value++;
      document.getElementById("tip").value=value;
}
function TipDecrement(){

      var value=document.getElementById("tip").value;
      if(value<=0){
            alert("Enter postive number");
      }
      else{
      value--;
      document.getElementById("tip").value=value;
      }
}
function PeopleCountIncrement(){

      var value=document.getElementById("People").value;
      value++;
      document.getElementById("People").value=value;
}
function PeopleCountDecrement(){

      var value=document.getElementById("People").value;
      if(value<=0){
            alert("Enter postive number");
      }
      else{
      value--;
      document.getElementById("People").value=value;
      }
}
function calculate(){
      var tip=document.getElementById("tip").value;
      var people=document.getElementById("People").value;

      var bill=document.getElementById("Bill").value;
      if(people<=0){
            alert("Enter number of people");
      }
      else if(bill<=0){
            alert("Enter bill");
      }
      else{
      var TotalTip=(bill*tip)/100
      var TipPerPerson=(TotalTip)/people;
      //console.log(TipPerPerson);
      var TotalPerPerson=(parseFloat(bill)+parseFloat(TotalTip))/people;
      //console.log(TotalPerPerson);
      document.getElementById("TotalTip").innerHTML="₹"+TipPerPerson;
      document.getElementById("TotalResult").innerHTML="₹"+TotalPerPerson;
      }
}
function isNumber(e){
      var charCode=e.keyCode;
      if(charCode==46 || charCode==45 ){
            return false;
      }
}
function isPositive(e){
      var charCode=e.keyCode;
      if(charCode==45){
            return false;
      }
}