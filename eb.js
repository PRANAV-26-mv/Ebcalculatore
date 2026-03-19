
var five=document.getElementById("five");
function result(){
    var three = Number(document.getElementById("three").value);
    if(three==""){
      five.innerHTML="please enter the value"
    }
  else if (three <= 100){
    five.innerHTML=" \u20B9 0"
  }
  else if(three<=200) {
   var two= (three -100);
   two=two*2.35;
   five.innerHTML="\u20B9 "+two.toFixed(2);
  }
  else if(three<=400){
    var four=(three-200)
    four=four*4.7+(100*2.35)
    five.innerHTML="\u20B9 "+four.toFixed(2)
  }
  else if(three<=500){
    var six=(three-400)
    six=six*6.3+(100*2.35)+(200*4.7)
    five.innerHTML="\u20B9 "+six.toFixed(2)
  }
  else {
    var seven=(three-500)
    seven=seven*8.4+(100*2.35)+(200*4.7)+(400*6.3)
    five.innerHTML="\u20B9 "+seven.toFixed(2)
  }
}