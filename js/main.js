const banner = document.querySelector('#banner')
const about = document.querySelector('#about')
const testimonials = document.querySelector('#testimonials')

// 視差背景
window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset
  const speed = 0.3
  banner.style.backgroundPosition = `0% ${scrollTop * speed}px`
  about.style.backgroundPosition = `0% ${scrollTop * speed}px`
  testimonials.style.backgroundPosition = `0% ${scrollTop * speed}px`
})

// slick
$('#carousel1').slick({
  // 寬
  focusOnSelect: true, // 點擊切換
  infinite: true,
  variableWidth: true,
  centerMode: true,
  responsive: [
    {
      // 窄
      breakpoint: 768,
      settings: {
        centerMode: false,
        variableWidth: false,
        slidesToShow: 1
      }
    }
  ],
  asNavFor: '#carousel2'
})
$('#carousel2').slick({
  fade: true,
  arrows: false,
  asNavFor: '#carousel1'
})

$('#carousel1').slick('slickGoTo', 0)

$('#carousel3').slick({
  dots: true,
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 2,
  mobileFirst: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: false
      }
    }
  ]
})

let screenWidth

const menuJudge = () => {
  screenWidth = $(window).width()
  if (screenWidth < 1180) {
    $('#menu').css({ background: '#29293a', height: '56px' })
  } else {
    if ($(window).scrollTop() > 0) {
      $('#menu').css({ background: '#29293a', height: '66px' })
    } else if ($(window).scrollTop() < 1) {
      $('#menu').css({ background: 'none', height: '155px' })
    }
  }
}

$('.big').css('height', ($('.big').width() * 5) / 7)
$(window).resize(function () {
  menuJudge()
  $('.big').css('height', ($('.big').width() * 5) / 7)
})

$(window).scroll(function () {
  menuJudge()
})
