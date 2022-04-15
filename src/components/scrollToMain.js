const scrollToMain = function () {
  document.querySelector(".main-container").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default scrollToMain;
