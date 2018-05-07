
    window.onload = function(){

      "use strict"
      var widthAticle=document.querySelector('.main-history article ').clientWidth;
      var widthImg, name,  leftImg,  x;

      document.querySelector('.main-history article ').onclick=function (event){function1(), function2()};
         function function1(){
          widthImg=event.target.parentNode.parentNode.getBoundingClientRect().width;

          leftImg=event.target.parentNode.parentNode.getBoundingClientRect().left;

          name =event.target.localName;

          if (name==='img'||'iframe'){
            x = (widthAticle/2 - (widthImg + leftImg) + widthImg/2);
            var delay = 20, i = 0;
            var id = setInterval(frame, delay);
            function frame() {
              if (i < delay) {
                document.querySelector('.main-history article ').scrollBy(-x/delay, 0);
                i++;
              }
              else {
                clearInterval(id);
              }
            }
          }
        };

        function function2(){
          name =event.target.localName;
          var newClass = event.target.parentNode.previousElementSibling;
          var select = document.querySelectorAll('.header-section-hisrory')

          if (name==='img'||'iframe'){
            var p=0;
            for (p = 0; p < select.length; p++){
              if ( select[p].innerText === newClass.innerText ){

                newClass.setAttribute('style','display:flex');
              }
              else{
                select[p].setAttribute('style','display:none');
              }
            }
          }
        };

        var media = window.matchMedia("(min-width: 620px)");
        function Scroll(media)  {
          if (media.matches) {
            document.querySelector('.main-history article').addEventListener('wheel', function(event) {
              if (event.deltaMode == event.DOM_DELTA_PIXEL) {
                var modifier = 1;
                // иные режимы возможны в Firefox
              } else if (event.deltaMode == event.DOM_DELTA_LINE) {
                var modifier = parseInt(getComputedStyle(this).lineHeight);
              } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
                var modifier = this.clientHeight;
              }
              if (event.deltaY != 0) {

                // замена вертикальной прокрутки горизонтальной
                this.scrollLeft += modifier * event.deltaY;
                event.preventDefault();
              }
            })
          }
        }
        Scroll(media)
        media.addListener(Scroll)
  }
