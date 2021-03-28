
        
    
            
            let image = document.getElementsByName('imagem');  
            const classRotate = document.getElementsByClassName('section_rotate');

            for (let i = 0 ; i < image.length ; i++){        

                classRotate[i].addEventListener('click',
                function(e){
                    recolher ()
                    if(image[i].style.transform != 'rotate(90deg)'){
                        image[i].style.transform = 'rotate(90deg)';
            
            } else {
                        image[i].style.transform = 'rotate(0deg)';

                }
                }
                )

            }

  


function recolher () {
    
    var listseq = document.querySelectorAll('section');
    
    const sequeCheck = [listseq[5],listseq[7],listseq[9],listseq[11]];
    
    for (let i = 0; i < 4; i++ ) {    
        
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

    } else  { 
    section[1].style.display = 'none'; } 
    
    section[0].animate([
    // keyframes
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-10px)' }
  ], {
    // timing options
    duration: 300,
    iterations: 1,
  });



}

console.log("hello world!")

