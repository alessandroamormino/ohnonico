const clip = document.querySelectorAll('.clip');
const text = document.querySelectorAll('.text');


for(let i=0; i<text.length; i++){
    text[i].addEventListener('mouseenter', function(e){
        for(let j=0; j<clip.length; j++){
            clip[i].play();
        }
    })
    text[i].addEventListener('mouseleave', function(e){
        for(let j=0; j<clip.length; j++){
            clip[i].load();
        }
    })
}