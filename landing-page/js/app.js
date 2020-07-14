const containerCount = document.querySelectorAll(".landing__container").length;
console.log(containerCount);
for (let i = 1; i <= containerCount; i++) {
  let targetItem = document.getElementById("section" + i);
  console.log(targetItem);
  let bounding = targetItem.getBoundingClientRect();
  console.log(bounding);

  targetItem.addEventListener("click", () => {
    targetItem.scrollIntoView({ behavior: "smooth" });
  });
}

const navLinkCount = document.getElementsByTagName("li").length;
console.log(navLinkCount);
for (let i = 1; i <= navLinkCount; i++) {
  let targetLink = [...document.getElementsByClassName("section" + i)];
  console.log(targetLink);
  targetLink.forEach((el) => {
    el.addEventListener("click", () => {
      let targetItem = document.getElementById("section" + i);
      targetItem.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// function that makes the navigation bar shrink in height once the user has scrolled down for more than x pixels
window.onscroll = () => shrinkNav();

shrinkNav = () => {
  if (
    document.documentElement.scrollTop > 100 ||
    document.body.scrollTop > 100
  ) {
    // shrink nav bar height
    document.querySelector(".navbar").style.padding = "10px 0";
    // shrink logo
    document.querySelector(".logo-img").style.transform = "scale(0.6)";
    document.querySelector(".page-title").style.fontSize = "18px";
  } else {
    document.querySelector(".navbar").style.padding = "20px 0";
    document.querySelector(".logo-img").style.transform = "scale(0.8)";
    document.querySelector(".page-title").style.fontSize = "24px";
  }
};

// function for the scroll progress bar located under the navigation bar
document.addEventListener(
  "scroll",
  () => {
    let scrollTop =
      document.documentElement["scrollTop"] || document.body["scrollTop"];
    let scrollBottom =
      (document.documentElement["scrollHeight"] ||
        document.body["scrollHeight"]) - document.documentElement.clientHeight;
    scrollPercent = (scrollTop / scrollBottom) * 100 + "%";

    document
      .querySelector(".progress")
      .style.setProperty("--scroll", scrollPercent);
  },
  { passive: true }
);

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
