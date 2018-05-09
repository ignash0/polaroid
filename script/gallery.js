window.onload=function(){

  var color=document.querySelector('.colorFilm');
  var blackWhite=document.querySelector('.black-whiteFilm');

  document.getElementById('color').onclick = function(){
    color.setAttribute('style','display:flex');
    blackWhite.setAttribute('style','display:none');
        document.querySelector('.colorPolaroid').setAttribute('style', '  filter: grayscale(0)');
  }


  document.getElementById('black-white').onclick = function(){
    blackWhite.setAttribute('style','display:flex');
    color.setAttribute('style','display:none');
    document.querySelector('.colorPolaroid').setAttribute('style', '    filter: grayscale(0.9)');

  }

  document.querySelector('.main-gallery ').onclick=function (event){
    var classesImage = document.querySelectorAll('.image');
    var tar=event.target.parentNode.nextElementSibling;
    var all_h1 = document.querySelectorAll('.main-gallery section h1');
    var i;
    for (i = 0; i < classesImage.length; i++){
      if (event.target.innerHTML === all_h1[i].innerHTML){
        tar.setAttribute('style','display:flex');
      }
      else{
        classesImage[i].setAttribute('style','display:none')
      }
    }
    
  }
}
