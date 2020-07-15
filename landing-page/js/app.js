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

// function that makes the navigation bar shrink in height once the user has scrolled down for more than x pixels
shrinkNav = () => {
  if (
    document.documentElement.scrollTop > 100 ||
    document.body.scrollTop > 100
  ) {
    // shrink nav bar height
    document.querySelector(".navbar").style.padding = "3px 0";
    // shrink logo
    document.querySelector(".logo-img").style.transform = "scale(0.6)";
    document.querySelector(".page-title").style.fontSize = "18px";
  } else {
    document.querySelector(".navbar").style.padding = "15px 0";
    document.querySelector(".logo-img").style.transform = "scale(0.8)";
    document.querySelector(".page-title").style.fontSize = "24px";
  }
};

const navLinkCount = document.getElementsByTagName("li").length;
for (i = 1; i <= navLinkCount; i++) {
  let targetLink = [...document.getElementsByClassName("section" + i)];
  let targetSection = document.getElementById("section" + i);

  targetLink.forEach((el) => {
    el.addEventListener("click", () => {
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
}

const containerCount = document.querySelectorAll(".landing__container").length;

checkIfInViewport = () => {
  isInViewport = (el) => {
    let bounding = el.getBoundingClientRect();
    return (
      bounding.top >= -150 &&
      bounding.left >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  for (i = 1; i <= containerCount; i++) {
    let targetContainer = document.getElementById("section" + i);
    window.addEventListener(
      "scroll",
      () => {
        if (isInViewport(targetContainer)) {
          targetContainer.classList.add("your-active-class");
        } else {
          targetContainer.classList.remove("your-active-class");
        }
      },
      false
    );
  }
};

window.onscroll = () => {
  shrinkNav();
};
checkIfInViewport();
