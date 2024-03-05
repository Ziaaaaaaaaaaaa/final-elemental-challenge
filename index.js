$(document).ready(function () {
    var currentIndex = 0;
    function showSlide(index) {
      $(".interiorImg").hide();
      $(".interiorImg:eq(" + index + ")").fadeIn();
      $(".indicator").removeClass("active");
      $(".indicator:eq(" + index + ")").addClass("active");
    }
    function nextSlide() {
      currentIndex = (currentIndex + 1) % $(".interiorImg").length;
      showSlide(currentIndex);
    }
    showSlide(currentIndex);
    var intervalId = setInterval(function () {
      nextSlide();
    }, 6000);
    $(".next").on("click", function () {
      clearInterval(intervalId);
      nextSlide();
    });
    $(".autoplay-indicators .indicator").on("click", function () {
      clearInterval(intervalId);
      currentIndex = $(this).index();
      showSlide(currentIndex);
    });
  });