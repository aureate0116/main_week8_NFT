$(function() {
  
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
   //slidesPerView: "auto",
    spaceBetween: 24,
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 0,  // y軸旋轉角度
      stretch: 0,  //每个slide之间的拉伸值，越大slide靠得越紧
      depth: 0, //slide的位置深度。值越大z轴距离越远，看起来
      modifier: 1, //depth和rotate和stretch的倍率
      slideShadows: false, //是否开启slide阴影
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        centeredSlides: false,
        slidesPerView: 1,
      },
      992: {
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 24,
      }
    }

  });
});


//search bar
$(function(){
  $(".flip").click(function(){
      // $(".form-control").slideToggle("slow");
      $(".form-control").toggle();
      //$(".search").toggleClass("form-control");
      // $(".xs2").toggle();
  });

});


