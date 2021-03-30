           
let image = document.getElementsByName('imagem');  
const classRotate = document.getElementsByClassName('section_rotate');
  
    for (let i = 0 ; i < image.length ; i++){        
       classRotate[i].addEventListener('click',function(){
           if(image[i].style.transform != 'rotate(90deg)'){               
                image[i].style.transition = '0.5s';
                image[i].style.transform = 'rotate(90deg)';
           } else {
               image[i].style.transform = 'rotate(0deg)';
            }
         })// FUNÇÃO FIM
}

// RECOLHE TEXTOS EXIBIDOS

function recolher () {
    
    var listseq = document.querySelectorAll('section');    
    const sequeCheck = [listseq[5],listseq[7],listseq[9],listseq[11]];
    
    for (let i = 0; i < 4; i++ ) {    
        
    if ( sequeCheck[i].style.display === 'block'){        
        sequeCheck[i].style.display = 'none'; 
    } 
    console.log(sequeCheck[i]); 
    }
} 



// MOSTRA TEXTOS SELECIONADOS

function showText(event) {
    //recolher ()
    const section = event.querySelectorAll('section');     
    if(section[1].style.display === 'none') {
        
        section[1].style.display ='block';
    } else  { 
        section[1].style.display = 'none'; } ;
        
        //Animação 
        
        section[0].animate([
            // keyframes
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-10px)' }
], {
    // timing options
    duration: 200,
    iterations: 1,

});

}

var section_1 = document.querySelectorAll('.empresas_list_section div');
var sectionPtext = document.querySelectorAll('.text_box section');

// 0-cheil, 1-dematec, 2-wv design, 3-digital




for (let i=0 ; i <= sectionPtext.length ; i++ ){
    
    section_1[i].addEventListener('click', function() {   
        if(sectionPtext[i].style.display === 'none'){ 
        sectionPtext[i].style.display = 'block'}else {
            sectionPtext[i].style.display = 'none'
        }
        console.log(sectionPtext[i]);  }
        )}

        
        function rec (a,b) {
        
            for (let i = 0; i <= a.length ; i++ ){    
                
            if( a[i].style.display === 'block'){        
                a[i].style.display = 'none'; 
            }   
            console.log(a[b]); 
            }
        } 
        