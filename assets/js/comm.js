AOS.init();

document.addEventListener('mousemove', (e) => {
  let mouseX = e.pageX - 25; 
  let mouseY = e.pageY - 20; 

  let defaultCursor = document.querySelector('.default-cursor');
  defaultCursor.style.left = mouseX + 'px';
  defaultCursor.style.top = mouseY + 'px';
})

// 헤더
$(document).ready(function(){
  $(".gnb-bar").click(function() {
    $(".depth1").toggle();
  });
  $('.depth1 > li').click(function(){
      $(this).children('.depth2').toggle();
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

// role, dev, years 페이지
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;

  const pages = [
    {
      pageClass: '.role-page',
      bgClass: '.role-area',
      titleClass: '.role-title'
    },
    {
      pageClass: '.dev-page',
      bgClass: '.dev-area',
      titleClass: '.dev-title'
    },
    {
      pageClass: '.years-page',
      bgClass: '.years-area',
      titleClass: '.btn-wrap'
    },
  ];

  pages.forEach(function(page) {
    const pageElement = document.querySelector(page.pageClass);
    const bgElement = document.querySelector(page.bgClass);
    const titleElement = document.querySelector(page.titleClass);

    const pageTop = pageElement.offsetTop;
    const pageHeight = pageElement.offsetHeight;
    const pageBottom = pageTop + pageHeight;

    if (scrollPosition >= pageTop && scrollPosition <= pageBottom) {
      bgElement.classList.add('page-fixed');
      titleElement.classList.add('title-fixed');
    } else {
      bgElement.classList.remove('page-fixed');
      titleElement.classList.remove('title-fixed');
    }
  })
});

// 연구분야 섹션 커서 이미지
document.addEventListener('DOMContentLoaded', function() {
  const hoverImgs = document.querySelectorAll('.hover-img'); 

  hoverImgs.forEach(function(link) {
    const cursor = link.querySelector('.img-cursor'); 
    const cursorImg = cursor.querySelector('img');

    link.addEventListener('mouseenter', function() {
      cursorImg.style.display = 'block'; 
    });

    link.addEventListener('mouseleave', function() {
      cursorImg.style.display = 'none'; 
    });

    document.addEventListener('mousemove', function(e) {
      const x = e.clientX;
      const y = e.clientY;

      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    });
  });
});

// 컨테스트 섹션 슬라이드
$(document).ready(function() {
  $('.contest-slide').slick({
    // autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
  });
});


