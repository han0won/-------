// 헤더
document.addEventListener("DOMContentLoaded", function() {
  const gnb = document.getElementById("gnb");
  const depth2Bg = document.querySelector(".depth2-bg");

  gnb.addEventListener("mouseover", function() {
      depth2Bg.style.display = "block";
  });

  gnb.addEventListener("mouseout", function() {
      depth2Bg.style.display = "none";
  });
});

// 타이틀 섹션 텍스트 나타나는 효과
$(document).ready(function() {
  $(window).scroll(function() {
    var windowTop = $(this).scrollTop();
    var titlePageTop = $('.title-page').offset().top;

    if (windowTop >= titlePageTop) {
      $('.ani-title').each(function(index) {
        $(this).delay($(this).data('delay')).queue(function(){
          $(this).addClass('animate-in');
        });
      });
    }
  }).scroll(); 
});


// 연구분야 섹션 커서 이미지
document.addEventListener('DOMContentLoaded', function() {
  var hoverImgs = document.querySelectorAll('.hover-img'); // 모든 hover-img 클래스를 가진 요소를 선택합니다.

  hoverImgs.forEach(function(link) {
    var cursor = link.querySelector('.img-cursor'); // 현재 요소 내의 img-cursor 클래스를 가진 요소를 선택합니다.
    var cursorImg = cursor.querySelector('img');

    link.addEventListener('mouseenter', function() {
      cursorImg.style.display = 'block'; // 이미지를 보이도록 설정
    });

    link.addEventListener('mouseleave', function() {
      cursorImg.style.display = 'none'; // 이미지를 숨김
    });

    document.addEventListener('mousemove', function(e) {
      var x = e.clientX;
      var y = e.clientY;

      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    });
  });
});

// 컨테스트 섹션 슬라이드
$(document).ready(function() {
  $('.contest-slide').slick({
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
});