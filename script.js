btns=document.querySelectorAll('.btn');
counter=document.querySelector('.counter');
let count=0;
btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
          console.log("dd");
      if(e.target.innerHTML==='lower'){
       count--;
      }

else if(e.target.innerHTML==='above'){
    count++;
      }
      counter.textContent=count;

      if(count<0){
        counter.style.color='red';
      }

     else if(count>0){
        counter.style.color='green';
      }

    //     if(btn.classList.contains('.lower')){
    // count--;   
    // }
    // else if(btn.classList.contains('.above')){
    //     count++;   
    //     }
    //     counter.textContent=count;
       
    })
})