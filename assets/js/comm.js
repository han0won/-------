AOS.init();

document.addEventListener('mousemove', (e) => {
  let mouseX = e.pageX - 25; 
  let mouseY = e.pageY - 20; 

  let defaultCursor = document.querySelector('.default-cursor');
  defaultCursor.style.left = mouseX + 'px';
  defaultCursor.style.top = mouseY + 'px';
})

// 헤더
document.addEventListener("DOMContentLoaded", function() {
  if(window.innerWidth >=1201) {
    const gnb = document.getElementById("gnb");
    const depth2Bg = document.querySelector(".depth2-bg");

    gnb.addEventListener("mouseover", function() {
        depth2Bg.style.display = "block";
    });
    gnb.addEventListener("mouseout", function() {
        depth2Bg.style.display = "none";
    });
  }
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

// role, dev 페이지
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;

  var rolePage = document.querySelector('.role-page');
  var roleBg = document.querySelector('.role-area');
  var roleTitle = document.querySelector('.role-title');
  
  var rolePageTop = rolePage.offsetTop;
  var rolePageHeight = rolePage.offsetHeight;
  var rolePageBottom = rolePageTop + rolePageHeight;
  
  if (scrollPosition >= rolePageTop && scrollPosition <= rolePageBottom) {
    roleBg.classList.add('page-fixed');
    roleTitle.classList.add('title-fixed');
  } else {
    roleBg.classList.remove('page-fixed');
    roleTitle.classList.remove('title-fixed');
  }
  
  var devPage = document.querySelector('.dev-page');
  var devBg = document.querySelector('.dev-area');
  var devTitle = document.querySelector('.dev-title');

  var devPageTop = devPage.offsetTop;
  var devPageHeight = devPage.offsetHeight;
  var devPageBottom = devPageTop + devPageHeight;

  if (scrollPosition >= devPageTop && scrollPosition <= devPageBottom) {
    devBg.classList.add('page-fixed');
    devTitle.classList.add('title-fixed');
  } else {
    devBg.classList.remove('page-fixed');
    devTitle.classList.remove('title-fixed');
  }
});

// years 페이지
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;

  var yearsPage = document.querySelector('.years-page');
  var yearsBg = document.querySelector('.years-area');
  var yearsTitle = document.querySelector('.btn-wrap');
  
  var yearsPageTop = yearsPage.offsetTop;
  var yearsPageHeight = yearsPage.offsetHeight;
  var yearsPageBottom = yearsPageTop + yearsPageHeight;

  if (scrollPosition >= yearsPageTop && scrollPosition <= yearsPageBottom) {
    yearsBg.classList.add('page-fixed');
    yearsTitle.classList.add('title-fixed');
  } else {
    yearsBg.classList.remove('page-fixed');
    yearsTitle.classList.remove('title-fixed');

  }
});

// 연구분야 섹션 커서 이미지
document.addEventListener('DOMContentLoaded', function() {
  var hoverImgs = document.querySelectorAll('.hover-img'); 

  hoverImgs.forEach(function(link) {
    var cursor = link.querySelector('.img-cursor'); 
    var cursorImg = cursor.querySelector('img');

    link.addEventListener('mouseenter', function() {
      cursorImg.style.display = 'block'; 
    });

    link.addEventListener('mouseleave', function() {
      cursorImg.style.display = 'none'; 
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


