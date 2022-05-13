function embedForm(params) {
  let height = {
    heightWindow: 600,

    set changeHeight(newHeight) {
      this.heightWindow = newHeight;
    },
  };
  if (screen.width <= 592) {
    height.changeHeight = 780;
  } else if (screen.width > 592) {
    height.changeHeight = 600;
  }
  let embed =
    "" +
    "<embed" +
    '      type="text/html"' +
    `      src="https://www.hashmicro.com/id/embed-form/?id=${params.id}"` +
    '      width="100%"' +
    `      height="${height.heightWindow}px"` +
    "    />" +
    "";
  document.getElementById(`${params.selector}`).innerHTML = embed;
}
