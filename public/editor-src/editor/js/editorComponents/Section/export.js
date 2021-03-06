import $ from "jquery";

function getArrow(src, className) {
  return (
    '<div class="brz-slick-slider__arrow ' +
    className +
    '"><svg class="brz-icon-svg"><use xlink:href=' +
    src +
    " /></svg></div>"
  );
}

$(".brz-slick-slider, .brz-carousel__slider").each(function() {
  var $this = $(this);
  var data = $this.data();
  var slidesToShow = data.slidesToShow;
  var slidesToScroll = data.slidesToScroll;
  var dots = data.dots;
  var dotsClass = data.dotsClass;
  var arrows = data.arrows;
  var nextArrow = data.nextArrow;
  var prevArrow = data.prevArrow;
  var fade = data.fade;
  var vertical = data.vertical;
  var autoPlay = data.autoPlay;
  var autoPlaySpeed = data.autoPlaySpeed;
  var swipe = data.swipe;

  $this.slick({
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    swipe: swipe,
    draggable: swipe,
    dots: dots,
    dotsClass: dotsClass,
    arrows: arrows,
    nextArrow: nextArrow && getArrow(nextArrow, "brz-slick-slider__arrow-next"),
    prevArrow: prevArrow && getArrow(prevArrow, "brz-slick-slider__arrow-prev"),
    fade: fade,
    vertical: vertical,
    autoplay: autoPlay,
    autoplaySpeed: autoPlaySpeed,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
