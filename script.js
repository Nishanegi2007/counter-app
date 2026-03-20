let showCounter=document.querySelector('#showCounter')
        let plus=document.querySelector('#plus')
        let minus=document.querySelector('#minus')
        let reset =document.querySelector('#reset')

        let counter=0;

        function increaseFn(){
            if(counter<1000){
                counter=counter+1 ;
            }
            showCounter.innerText=counter
        }

        function decreaseFn(){
            if (counter>0){
                counter=counter-1 ;   
            }
            showCounter.innerText=counter
        }

        function resetFn(){
            counter=0;
            showCounter.innerText=counter
        }

        reset.addEventListener('click',resetFn)
        plus.addEventListener('click',increaseFn)
        minus.addEventListener('click',decreaseFn)