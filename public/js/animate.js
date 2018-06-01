$('#myCarousel').carousel({
    interval: 10000
  })
  
  $('.carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    if (next.next().length>0) {
      next.next().children(':first-child').clone().appendTo($(this));
    }
    else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
  });

var lock =0;
function animateprog(){
    var delay = 100;

var object1 ;
if( $(window).width() == 375){ //iphone 6
    object1 = { "#skillbar1":19, "#divider_prg1":1, 
                "#skillbar2":19, "#divider_prg2":1,
                "#skillbar3":19, "#divider_prg3":1,
                "#skillbar4":19, "#divider_prg4":1,
                "#skillbar5":20, 
                "#android-prog":70, "#java-prog":80, "#javascript-prog":40, "#python-prog":40, "#cpp-prog":100, "#csharp-prog":40, "#react-prog":20, "#angular-prog":20, "#php-prog":20    } ;
}
else{
    object1 = { "#skillbar1":11.5, "#divider_prg1":.5, 
                "#skillbar2":11.5, "#divider_prg2":.5,
                "#skillbar3":11.5, "#divider_prg3":.5,
                "#skillbar4":11.5, "#divider_prg4":.5,
                "#skillbar5":12, 
                "#android-prog":30, "#java-prog":45, "#javascript-prog":20, "#python-prog":40, "#cpp-prog":60, "#csharp-prog":20, "#react-prog":15,"#angular-prog":10, "#php-prog":10    } ;
}
   
    for (var namer in object1){   
        $(namer).animate( { width: object1[namer] + '%' }, delay+=25 );    
    }
}

function resetprog(){
    var delay = 100;
    var object1 = {"#android-prog":0, "#java-prog":0, "#javascript-prog":0, "#python-prog":0, "#cpp-prog":0, "#csharp-prog":0, "#react-prog":0, "#angular-prog":0, "#php-prog":0    } ;
    for (var namer in object1){   
        $(namer).attr('width', "0%");    
    }
}



function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}
$(window).scroll(function() {
    if (isScrolledIntoView('#progress-bars')) {
        if (inView) { return; }
        inView = true;
        animateprog();//new Chart(document.getElementById("canvas").getContext("2d")).Pie(data);
    } else {
        inView = false;  
        resetprog();
    }
});


 



 



// function isInViewport(element) {
   
//     var rect = element.getBoundingClientRect();
//     var html = document.documentElement;
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || html.clientHeight) &&
//       rect.right <= (window.innerWidth || html.clientWidth)
//     );
//   }

// window.addEventListener('scroll', function(e) {

//   var rect = (document.getElementById("android-prog")).getBoundingClientRect();
//  // if (rect.top<-1   
//   //alert(rect.top)
// //   last_known_scroll_position = window.scrollY;
// //   alert(last_known_scroll_position)

// //  alert( (document.getElementById("android-prog")).scrollY)
// //   if(isInViewport((document.getElementById("android-prog")))){     
//     //   animateprog();
//     // }

  
  
// }); 