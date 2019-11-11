$(document).ready(function() {
  const menu_icon = $(".menu__group");
  const innovation_icon = $(".innovation__article");

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
  }

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

  // Event Listeners
  menu_icon.each(function() {
    $(this).mouseover(function() {
      $(this)
        .children("a")
        .css("background-color", "yellow");
    });
    $(this).mouseout(function() {
      $(this)
        .children("a")
        .css("background-color", "var(--white-color)");
    });
  });

  innovation_icon.each(function() {
    $(this).mouseover(function() {
      $(this)
        .children(".innovation__article-label")
        .addClass("innovation-hover");
    });
    $(this).mouseout(function() {
      $(this)
        .children(".innovation__article-label")
        .removeClass("innovation-hover");
    });
  });



  appendDesignZone();
  appendSlider();
});
