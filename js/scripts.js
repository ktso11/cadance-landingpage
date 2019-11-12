$(document).ready(function() {

  const navbar = $('nav');
  const logo = $('.navbar__logo');
  const menu_icon = $(".menu__group");
  const innovation_icon = $(".innovation__article");
  let navPosition = navbar.offsetTop;
  let lastScroll = window.pageYOffset;

  const design_zone = [
    {
      img: "assets/find-and-fix.png",
      title: "Find and Fix System Hot Spots",
      action: "Watch Video"
    },
    {
      img: "assets/soc.png",
      title: "Build 7nm SoCs 3 months",
      action: "Read More"
    },
    {
      img: "assets/ai_edge.png",
      title: "Intelligence at the Edge",
      action: "Watch Video"
    }
  ];

  const sliders = [
    {
      img: "assets/intern-showcase.png",
      description:
        "Learn more about this Intern Showcase event https://bit.ly/2Yfzb1M",
      date: "Oct 13"
    },
    {
      img: "assets/ceo.png",
      description:
        "Cadence CEO Lip-Bu Tan gave a keynote at the imec FutureSummits event where he shared his vision for the industry and semiconductor design and highlighted the collaboration between IMEC and #Cadence.",
      date: "Oct 07"
    },
    {
      img: "assets/stem.png",
      description:
        "In support of #WomeninSTEM, #Cadence sponsors conferences like VerveCon and IEEE Women in Engineering ILC. Cadences Meera Collier reflects on her experiences at these events in this blog post: https://bit.ly/2YSCkkk #WomenatCadence",
      date: "Oct 03"
    }
  ];


  // Append articles
  function appendSlider() {
    for (i = 0; i <= sliders.length; i++) {
      $(".slider__row").append(
        `<article class="slider__article">
          <div class="slider__header">
            <img class="slider__cadence-logo " src="assets/icons/slider-cadence-logo.png">
            <label class="slider__date">${sliders[i].date}</label>
          </div>
          <div class="slider__article-img-container">
            <img class="img-fluid slider__article-img" alt="article image" src="${sliders[i].img}">
          </div>
          <div class="">
            <p>${sliders[i].description}</p>
          </div>
          <footer class="slider__interactions">
              <i class="fas fa-reply slider__interactions-icons"></i>
              <i class="fas fa-recycle slider__interactions-icons"></i>
              <i class="fas fa-heart slider__interactions-icons"></i>
              <i class="fas fa-external-link-alt slider__interactions-icons"></i>
          </footer>
        </article>`
      );
    }
  };

  function appendDesignZone() {
    design_zone.map((design, i) => {
      $(".design-zone__append-area").append(
        `<article class="col-lg-4 design-zone__article-wrapper">
          <div class="design-zone__article">
            <img class="design-zone__article-img" src="${design.img}" alt="${design.title}">
            <label class="design-zone__label">${design.title}</label>
            <a href="#">${design.action}</a>
          </div>
        </article>`
      );
    });
  }
  
  function stickyNav() {
    if (window.innerWidth > 770 && window.pageYOffset > lastScroll){
      navbar.addClass('sticky')
      $('.sticky').css({ height: '3em'});
      logo.css({opacity: "0"})
    } else {
      logo.css({opacity: "1"})
      $('.sticky').css({ height: '5em'});
    }
    lastScroll = window.pageYOffset;
  };


  //Fade In Content Effect
  function isVisible(el) {
    let position = el.getBoundingClientRect();
    let positionFromTop = -100;

    //if the element is visible positiontop - innerheight will be positive int
    if(position.top - window.innerHeight < positionFromTop){
      return true;
    } else {
      return false;
    }
  };

  function scanEl(){
    let sections = document.querySelectorAll('.hidden');
    sections.forEach(function(section){
      if(isVisible(section)){
        //if el location to viewport is true, remove hidden class
        section.classList.remove('hidden')
      }
    })
  };

  document.addEventListener("scroll", function(){
    scanEl()
    stickyNav()
  });

  appendDesignZone();
  appendSlider();
});
