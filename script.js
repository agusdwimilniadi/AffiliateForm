function embedForm(params) {
  let height = {
    heightWindow: 460,

    set changeHeight(newHeight) {
      this.heightWindow = newHeight;
    },
  };
  if (screen.width <= 592) {
    height.changeHeight = 600;
  } else if (screen.width > 592) {
    height.changeHeight = 460;
  }
  window.onresize = () => {
    window.location.reload();
  };
  let embed =
    "" +
    "<embed" +
    '      type="text/html"' +
    `      src="https://www.hashmicro.com/id/embed-form/?id=${params.id}"` +
    '      width="100%"' +
    `      height="${height.heightWindow}px"` +
    "    />" +
    "";

  const para = document.createElement("div");
  para.setAttribute("id", "form-embed");
  document.body.appendChild(para);
  document.getElementById(`${params.idTarget}`).innerHTML = embed;
}
