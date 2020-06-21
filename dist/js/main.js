jQuery(document).ready(function(){
	jQuery(".news-list").owlCarousel({
		loop:true,
		nav: true,
		dots: false,
		navText : true,
		autoHeight: true,
		items: 1
	});

  jQuery(".service-slider").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    navText : true,
    autoHeight: true,
    items: 1
  });
});

//Soft scroll
jQuery('.scroll').find("a[href^='#']").click(function(){
  var _href = jQuery(this).attr("href");
  jQuery("html, body").animate({scrollTop: jQuery(_href).offset().top}, 1500);
  return false;
});
jQuery("a.scroll[href^='#']").click(function(){
  var _href = jQuery(this).attr("href");
  jQuery("html, body").animate({scrollTop: jQuery(_href).offset().top}, 1500);
  return false;
});

//Burger menu
jQuery(".hamburger").click(function(){
  jQuery(".main-nav").addClass("active");
  jQuery("body").addClass("overflow-hidden");
  jQuery("html").addClass("overflow-hidden");
});

//Функция закрытия меню
function closeMenu(){
  jQuery("body").removeClass("overflow-hidden");
  jQuery("html").removeClass("overflow-hidden");
  jQuery(".main-nav").removeClass("active");
};

//Событие по клику на overlay
jQuery(".overlay").click(function(){
  closeMenu(); 
});

//Событие по клику на крестик
jQuery(".close-button").click(function(){
  closeMenu(); 
}); 

jQuery(window).scroll(function(){
  //Фиксация указателя разделов
  var pointer = jQuery('.pointer-list');
  var pointerTop = jQuery('.services-content').offset().top;
  var pointerBlockBottom = jQuery('.section-pointer').offset().top + jQuery('.section-pointer').height();
  if (    (jQuery(window).scrollTop() < pointerTop)) {
    pointer.removeClass('fixed');
    pointer.removeClass('bottom_sticked');
  }
  else if((jQuery(window).scrollTop() > pointerTop) &&
          (pointerBlockBottom - 40 > jQuery(window).scrollTop() + pointer.height()) ) 
  {
    pointer.addClass('fixed');
    pointer.removeClass('bottom_sticked');
  }
  else{
    pointer.removeClass('fixed');
    pointer.addClass('bottom_sticked');
  };

  //Указатель текущего раздела
  var srvList = jQuery(".services-content").find(".services-list").children('.item');
  var count = srvList.length;
  var pointerList = pointer.children('.item');
  for (var i = 0; i < count; i++) {
    scrnTop = jQuery(window).scrollTop();

    curSrv = jQuery(srvList[i]);
    nextSrv = jQuery(srvList[i+1]);
    curSrvHeight = jQuery(srvList[i]).height();

    curPointer = jQuery(pointerList[i]);
    nextPointer= jQuery(pointerList[i+1]);

    if ( (curSrv.offset().top - 200 < scrnTop) && (scrnTop < curSrv.offset().top + curSrvHeight - 65) )
    {
      curSrv.addClass('active');
      curPointer.addClass('active');
    } else {
      curSrv.removeClass('active');
      curPointer.removeClass('active');
    }
  };
});
