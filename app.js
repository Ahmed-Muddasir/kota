// const move = document.getElementsByClassName("move");

// for (let i = 0; i < move.length; i++) {
//   document.body.onpointermove = (event) => {
//     const { clientX, clientY } = event;

//     move[i].animate(
//       {
//         left: `${clientX}px`,
//         top: `${clientY}px`,
//       },
//       { duration: 1000, fill: "forwards" }
//     );
//   };
// }

const moveElements = document.getElementsByClassName("move");

document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;

  for (let i = 0; i < moveElements.length; i++) {
    moveElements[i].animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 1000, fill: "forwards" }
    );
  }
};

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', function() {
      const accordionItem = this.parentElement;
      const symbol = accordionItem.querySelector('.accordion-symbol');
      
      accordionItem.classList.toggle('active');
      symbol.textContent = accordionItem.classList.contains('active') ? '×' : '+';
  });
});

var hamburger = document.getElementsByClassName("hamburger")[0];
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
});

hamburger.addEventListener("click", () => {
  var toggle = document.getElementById("toggle");
  toggle.classList.toggle("transform");
  toggle.classList.toggle("transformpart2");
});

var fixedFontSize = 150;
var scale = 1;
var crntFontSize = 50;
var image = document.getElementsByClassName("imghit")[0];
var scale = document.getElementsByClassName("scale")[0];
var text = document.getElementsByClassName("sticky")[0];
var id = document.getElementById("idd");
var stickyy = document.getElementsByClassName("stickyy")[0];
var card1 = document.getElementsByClassName("crd1")[0];
var card2 = document.getElementsByClassName("crd1")[1];
var card3 = document.getElementsByClassName("crd1")[2];

var card11 = document.getElementsByClassName("crd11")[0];
var card22 = document.getElementsByClassName("crd22")[0];
var card33 = document.getElementsByClassName("crd33")[0];

// var card2 = document.getElementsByClassName("crd2")[1];
// var card3 = document.getElementsByClassName("crd1")[2];
// var card3 = document.getElementsByClassName("crd2")[2];
let cards = document.getElementById("jsid");
let cardss = document.getElementById("jsidd");
let svg = document.getElementsByClassName("svgg");

window.addEventListener("scroll", () => {
  var f = cards.getBoundingClientRect().top;

  if (f > -726) {
    card2.style.opacity = "1";
    // card2.style.opacity = "0";
  } else if (f > -1500) {
    card3.style.opacity = "1";
  }

  if (f >= -700) {
    card2.style.opacity = "0";
  } else if (f < -700) {
    card2.style.opacity = "1";
  }
  if (f >= -1429.03125) {
    card3.style.opacity = "0";
  } else if (f < -1429.03125) {
    card3.style.opacity = "1";
  }
  // console.log(f);
});
window.addEventListener("scroll", () => {
  var i = text.getBoundingClientRect();
  var u = id.getBoundingClientRect().top;
  if (u < 400) {
    id.classList.remove("scale");
    id.classList.remove("scale1");
    id.classList.remove("scale2");
  } else if (u < 550) {
    id.classList.add("scale");
    id.classList.remove("scale1");
    id.classList.remove("scale2");
  } else if (u < 700) {
    id.classList.remove("scale");
    id.classList.add("scale2");
    id.classList.remove("scale1");
  } else {
    id.classList.add("scale1");
    id.classList.remove("scale");
    id.classList.remove("scale2");
  }

  if (u > 390) {
    // console.log("true");
  } else if (u < 390) {
    // console.log("false");
  }

  let screenScrolled = window.scrollY;
  if (
    text.getBoundingClientRect().bottom >= image.getBoundingClientRect().top
  ) {
    text.classList.add("d-none");
    stickyy.classList.add("sticky-active");
  } else if (screenScrolled <= 50) {
    text.classList.remove("d-none");
    stickyy.classList.remove("sticky-active");
  }

  if (fixedFontSize == crntFontSize) {
  }
});

window.addEventListener("scroll", () => {
  var get = document.getElementById("getid");
  var t = get.getBoundingClientRect().top;
  if (t <= -40) {
    svg[0].style.width = "50px";
    // svgg.style.opgettcity = "d-none";
  } else if (t > -40) {
    svg[0].style.width = "0";
  }
  if (t <= -240) {
    svg[1].style.width = "50px";
    // svgg.style.opgettcity = "d-none";
  } else if (t > -240) {
    svg[1].style.width = "0";
  }
  if (t <= -440) {
    svg[2].style.width = "50px";
    // svgg.style.opgettcity = "d-none";
  } else if (t > -440) {
    svg[2].style.width = "0";
  }
  if (t <= -640) {
    svg[3].style.width = "50px";
    // svgg.style.opgettcity = "d-none";
  } else if (t > -640) {
    svg[3].style.width = "0";
  }
  if (t <= -840) {
    svg[4].style.width = "50px";
    // svgg.style.opgettcity = "d-none";
  } else if (t > -840) {
    svg[4].style.width = "0";
  }
  if (t <= -1000) {
    svg[5].style.width = "50px";
    // svgg.style.opgettcity = "d-none";
  } else if (t > -1000) {
    svg[5].style.width = "0";
  }
});

window.addEventListener("scroll", () => {
  var r = cardss.getBoundingClientRect().top;
  var heading = document.getElementsByClassName("card-h")[0];
  var number = document.getElementsByClassName("index-number")[0];
  var h = document.getElementsByClassName("heading-2")[0];
  var image = document.getElementsByClassName("imageru")[0];

  // console.log(f);

  // if (r <= -577) {
  //   card22.style.opacity = "1";
  // } else if (r > -577) {
  //   card22.style.opacity = "0";

  // }

  // if (r <= -577) {
  //   h.innerHTML = "Enhanced risk mitigation";
  //   card11.innerHTML =
  //     "Digital Gravity seeks to maintain traditional infrastructure risk profiles while delivering enhanced returns by leveraging its deep domain expertise and operational specialism in the rapidly growing and evolving digital infrastructure sector";
  //   number.innerHTML = "02";
  // } else if (r - 577) {
  //   number.innerHTML = "01";
  //   h.innerHTML = "Targeting higher infrastructure returns";
  //   card11.innerHTML =
  //     "Digital Gravity is a digital infrastructure specialist investing in growth, mid-cap control opportunities by identifying sub-layers of macro tailwinds, leveraging its differentiated partner ecosystem and constructing portfolios that accelerate convergence value";
  // } else if (r >= -620) {
  //   // console.log("triggered");

  //   number.innerHTML = "03";
  //   h.innerHTML = "Targeting higher infrastructure returns";
  //   card11.innerHTML =
  //     "Digital Gravity is a digital infrastructure specialist investing in growth, mid-cap control opportunities by identifying sub-layers of macro tailwinds, leveraging its differentiated partner ecosystem and constructing portfolios that accelerate convergence value";
  // }

  var pgrsbr = document.getElementsByClassName("progress-bar-custom");
  if (r > -400) {
    number.innerHTML = "01";
    image.src = "ball.png";
    // console.log(image.src);
    pgrsbr[1].style.color = "";
    pgrsbr[2].style.color = "";
    h.innerHTML = "Targeting higher infrastructure returns";
    card11.innerHTML =
      "Digital Gravity is a digital infrastructure specialist investing in growth, mid-cap control opportunities by identifying sub-layers of macro tailwinds, leveraging its differentiated partner ecosystem and constructing portfolios that accelerate convergence value";
  } else if (r <= -400 && r > -819) {
    image.src = "tick.png";
    number.innerHTML = "02";
    pgrsbr[1].style.color = "#00d7d2";
    pgrsbr[2].style.color = "";
    h.innerHTML = "Enhanced risk mitigation";
    card11.innerHTML =
      "Digital Gravity seeks to maintain traditional infrastructure risk profiles while delivering enhanced returns by leveraging its deep domain expertise and operational specialism in the rapidly growing and evolving digital infrastructure sector";
  } else if (r < -820) {
    image.src = "bulb.png";
    number.innerHTML = "03";
    pgrsbr[1].style.color = "#00d7d2";
    pgrsbr[2].style.color = "#00d7d2";
    h.innerHTML = "Sustainable and digital inclusion mandate";
    card11.innerHTML =
      "Digital Gravity integrates targets and policies to enhance the sustainability of digital infrastructure and to promote digital inclusivity and transformation";
  }
});

// function myFunction() {
//   let screenHeight =
//     (window.scrollY /
//       (document.documentElement.scrollHeight - window.innerHeight)) *
//     100;

//   document.getElementById("myBar").style.width = screenHeight + "%";

// }
var circle = document.getElementsByClassName("rounded-circle");
window.addEventListener("scroll", () => {
  let screenHeight =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;

  document.getElementById("myBar").style.height = screenHeight + "%";

  // Math.floor(screenHeight) ;

  if (Math.floor(screenHeight) == 23) {
    console.log("1");
    // console.log(circle);
    circle[1].style.backgroundColor = "#00d7d2";
  } else if (Math.floor(screenHeight) == 47) {
    console.log("2");
    circle[2].style.backgroundColor = "#00d7d2";
  } else if (Math.floor(screenHeight) == 70) {
    console.log("3");
    circle[3].style.backgroundColor = "#00d7d2";
  } else if (Math.floor(screenHeight) == 93) {
    console.log("4");
    circle[4].style.backgroundColor = "#00d7d2";
  } else if (screenHeight <= 23) {
    circle[1].style.backgroundColor = "grey";
  } else if (screenHeight <= 47) {
    circle[2].style.backgroundColor = "grey";
  } else if (screenHeight <= 70) {
    circle[3].style.backgroundColor = "grey";
  } else if (screenHeight <= 93) {
    circle[4].style.backgroundColor = "grey";
  }
});

const movingObject = document.getElementsByClassName("moving-object");
const dancingObjectt = document.getElementsByClassName("dancing-objectt")[0];
// dancingObject.addEventListener("mousemove", function (e) {
//   const x = e.clientX;
//   const y = e.clientY;

//   dancingObject.style.transform = `translate(${x / 40}px, ${y / 10}px)`;
// });

// dancingObject.addEventListener("mouseleave", function () {
//   dancingObject.style.transform = `translate(0px, 0px)`;
// });
// dancingObjectt.addEventListener("mousemove", function (e) {
//   const x = e.clientX;
//   const y = e.clientY;

//   dancingObjectt.style.transform = `translate(${x / 900}px, ${y / 50}px)`;
// });

// dancingObjectt.addEventListener("mouseleave", function () {
//   dancingObjectt.style.transform = `translate(0px, 0px)`;
// });

for (let i = 0; i < movingObject.length; i++) {
  movingObject[i].addEventListener("mousemove", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    movingObject[i].style.transform = `translate(${x / (i == 1 ? 900 : 40) }px, ${y / (i == 1 ? 50 : 10 )}px)`;
  });

  movingObject[i].addEventListener("mouseleave", function () {
    movingObject[i].style.transform = `translate(0px, 0px)`;
  });
}


// var card1 = document.getElementsByClassName("card-js-rec")[0];
// var card2 = document.getElementsByClassName("card2")[0];
// var card3 = document.getElementsByClassName("card3")[0];

// card2.getBoundingClientRect().top;
// console.log(card2.getBoundingClientRect().top);

// if (card2 >= 583) {
//   card2.style.opacity = 0;O
// }

// else if (card2 <= 583) {
//   card2.style.opacity = 1;
// }\\

document.querySelectorAll('.accordion-title').forEach(item => {
  item.addEventListener('click', () => {
      const parent = item.parentNode;
      const content = parent.querySelector('.accordion-content');
      const icon = item.querySelector('.icon');

      if (parent.classList.contains('open')) {
          content.style.display = 'none';
          icon.textContent = '+';
      } else {
          document.querySelectorAll('.accordion-item').forEach(i => {
              i.querySelector('.accordion-content').style.display = 'none';
              i.classList.remove('open');
              i.querySelector('.icon').textContent = '+';
          });
          content.style.display = 'block';
          icon.textContent = '×';
      }

      parent.classList.toggle('open');
  });
});

var card1 = document.getElementsByClassName("card1")[0];
var card2 = document.getElementsByClassName("card2")[0];
var card3 = document.getElementsByClassName("card3")[0];
var card4 = document.getElementsByClassName("bounding")[0];
var parentcard = document.getElementById("boundingrec");
var card0 = document.getElementsByClassName("card0")[0];

// Get the top position of card2 relative to the viewport
document.addEventListener("scroll", () => {
  var card2Top = parentcard.getBoundingClientRect().top;
  console.log(card2Top);

  if (card2Top <= -89) {
    card0.classList.add("scale-custom");
    console.log("one");
  } else if (-89 < card2Top) {
    card0.classList.remove("scale-custom");
    console.log("Two");
  }

  if (card2Top <= -930) {
    card1.classList.add("scale-custom");
    console.log("one");
    card0.style.opacity = "0";
  } else if (-930 < card2Top) {
    card1.classList.remove("scale-custom");
    console.log("Two");
    card0.style.opacity = "1";
  }

  if (card2Top <= -1834) {
    card2.classList.add("scale-custom");
    console.log("one");
    card1.style.opacity = "0";
  } else if (-1834 < card2Top) {
    card2.classList.remove("scale-custom");
    console.log("Two");
    card1.style.opacity  = "1";
  }
});

// Set opacity based on card2's position
// if (card2Top <= 583) {
//   card2.style.opacity = 0;
// } else if (card2Top >= 583) {
//   card2.style.opacity = 1;
// }
// if (card2Top <= 583) {
//   card2.style.opacity = 0;
// } else if (card2Top >= 583) {
//   card2.style.opacity = 1;
// }
