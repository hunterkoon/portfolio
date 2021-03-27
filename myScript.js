



    function recolher () {
var listseq = document.querySelectorAll('section');
const sequeCheck = [listseq[5],listseq[7],listseq[9],listseq[11]];

for (var i = 0; i < 4; i++ ) {    
    if(sequeCheck[i].style.display === 'block'){
        sequeCheck[i].style.display = 'none'; 
    }   
    console.log(sequeCheck[i]); 
    }
} 





 function showText(event) {
    const section = event.querySelectorAll('section');

        if(section[1].style.display === 'none') {

    section[1].style.display ='block';

    }else 
    section[1].style.display = 'none';
   


}