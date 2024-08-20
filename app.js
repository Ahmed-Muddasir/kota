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
