const scrollToHeader = function () {
  document.querySelector(".header").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default scrollToHeader;
