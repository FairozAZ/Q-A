let mainDiv = document.querySelector('.main');
let love = document.querySelector('.love');
let back = document.querySelector('.back');

// checkbox
let negative = document.querySelectorAll('.negative');
let positive = document.querySelectorAll('.positive');

// answer option
let positiveResult = document.querySelector('#positiveResult');
let negativeResult = document.querySelector('#negativeResult');
let defaultResult = document.querySelector('#defaultResult');

// defaultResult condition
let anyNegative = false;
let anyPosetive = false;


// when click love img
function contentOpen(){
    love.style.display = "none";
    mainDiv.style.display = "flex";
}

// when click back
back.onclick = function(){
    mainDiv.style.display = "none";
    love.style.display = "flex";
}


// when user click submit
function showResult() {
    
    // positiveResult condition
    for(x of positive){
        if(x.checked){
            positiveResult.style.display = "flex";
            negativeResult.style.display = "none";
            defaultResult.style.display = "none";
        }
    }
    

    // negativeResult condition
    for(y of negative){
        if(y.checked){
            negativeResult.style.display = "flex";
            positiveResult.style.display = "none";
            defaultResult.style.display = "none";
        }
    }


//  defaultResult condition   
 for(i =0; i< negative.length; i++){
    if(negative[i].checked ){
         anyNegative = true;
    }
    if(positive[i].checked){
      anyPosetive = true;
    }
    
}
 if(!negative[0].checked && !negative[1].checked){
    anyNegative = false; 
 }
 if(!positive[0].checked && !positive[1].checked ){
   anyPosetive = false;
 }

if(anyNegative && anyPosetive ){
    negativeResult.style.display = "none";
    positiveResult.style.display = "none";
    defaultResult.style.display = "flex";
}
   
}

