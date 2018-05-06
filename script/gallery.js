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

  document.querySelector('section header img').onclick=function (event){
    var tar=event.target.parentNode.nextElementSibling;
    tar.setAttribute('style','display:block');
  }
}
