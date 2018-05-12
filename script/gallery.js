window.onload=function(){

  var allLi = document.querySelectorAll('.image li');
  for (i = 0; i < allLi.length; i++){
    var Button = allLi[i].appendChild(document.createElement('button'));
    Button.classList.add('close');
    Button.setAttribute('id', 'close');
    Button.innerHTML = "<span class='fa fa-times'aria-hidden='true'></span>";
  }

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

  document.querySelector('.main-gallery').onclick=function (event){
    var classesImage = document.querySelectorAll('.image');
    var tar=event.target.parentNode.nextElementSibling;
    var all_h1 = document.querySelectorAll('.main-gallery section h1');
    var i;
    for (i = 0; i < classesImage.length; i++){
      if (event.target.innerHTML === all_h1[i].innerHTML){
        tar.setAttribute('style','display:flex');
      }

      }
      
      if (event.target.localName === 'img' && event.target.parentNode.localName === 'li'){

        event.target.setAttribute( 'class','li-img-click');
        event.target.parentNode.setAttribute('class', 'li-click');
        event.target.nextElementSibling.setAttribute('style', 'display:block');

       
        event.target.nextElementSibling.onclick=function(){
          event.target.classList.remove('li-img-click');
          event.target.parentNode.classList.remove('li-click');
          event.target.nextElementSibling.setAttribute('style', 'display:none');
        }
      }
      if (event.target.className === 'image') {
        event.target.setAttribute('style', 'display:none');
      }
  }
 

    var scrolled;
    var time;
    
    document.querySelector('.to-top').onclick = function() {
        scrolled = window.pageYOffset;
        scrollUp();
    }
    function scrollUp(){
        if (scrolled > 0){
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 150;
            time = setTimeout(scrollUp, 20);
        }
        else{
            clearTimeout(time);
            window.scrollTo(0, 0)
        }
    }
    
  
}
