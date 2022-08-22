/* Functions */
function openNav(el) {
  el.classList.add("open");
}
function closeNav(el) {
  el.classList.remove("open");
}
function nextSlider(el, cOrder, images) {
  el.classList.remove(`image-${cOrder}`);
  if (cOrder + 1 <= images) {
    el.classList.add(`image-${cOrder + 1}`);
  } else {
    el.classList.add(`image-1`);
  }
}
function prevSlider(el, cOrder, images) {
  el.classList.remove(`image-${cOrder}`);
  if (cOrder > 1) {
    el.classList.add(`image-${cOrder - 1}`);
  } else {
    el.classList.add(`image-${images}`);
  }
}
function nextTextSlider(titleE, descE, cOrder, detailsObj) {
  if (cOrder < detailsObj.length) {
    titleE.textContent = detailsObj[cOrder].title;
    descE.textContent = detailsObj[cOrder].desc;
  } else {
    titleE.textContent = detailsObj[0].title;
    descE.textContent = detailsObj[0].desc;
  }
}
function prevTextSlider(titleE, descE, cOrder, detailsObj) {
  if (cOrder > 1) {
    titleE.textContent = detailsObj[cOrder - 2].title;
    descE.textContent = detailsObj[cOrder - 2].desc;
  } else {
    titleE.textContent = detailsObj[detailsObj.length - 1].title;
    descE.textContent = detailsObj[detailsObj.length - 1].desc;
  }
}
/* End Functions */

/* Handle Navbars */
let mainNav = document.getElementById("main_nav");
let btnOpenMNav = document.getElementById("open_main_nav");
let btnCloseMNav = document.getElementById("close_main_nav");

btnOpenMNav.onclick = () => openNav(mainNav);
btnCloseMNav.onclick = () => closeNav(mainNav);
/* End Handle Navbars */
/* Handle Sliders */
let mainSliderOrder = 1;
let mainSlider = document.getElementById("main_slider");
let mainSliderTitle = document.getElementById("main_slider_title");
let mainSliderDesc = document.getElementById("main_slider_desc");
let btnPrevMSlider = document.getElementById("prev_main_slider");
let btnNextMSlider = document.getElementById("next_main_slider");
let imagesObj = [
  {
    title: "Discover innovative ways to decorate",
    desc: `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`,
  },
  {
    title: "We are available all across the globe",
    desc: `With stores all over the world, it's easy for you
    to find furniture for your home or place of business. Locally, we’re in most major cities
    throughout the country. Find the branch nearest you using our store locator. Any questions?
    Don't hesitate to contact us today.`,
  },
  {
    title: "Manufactured with the best materials",
    desc: `Our modern
    furniture store provide a high level of quality. Our company has invested in advanced technology
    to ensure that every product is made as perfect and as consistent as possible. With three
    decades of experience in this industry, we understand what customers want for their home and
    office.`,
  },
];
btnNextMSlider.onclick = () => {
  nextSlider(mainSlider, mainSliderOrder, imagesObj.length);
  nextTextSlider(mainSliderTitle, mainSliderDesc, mainSliderOrder, imagesObj);
  mainSliderOrder < imagesObj.length ? mainSliderOrder++ : (mainSliderOrder = 1);
};
btnPrevMSlider.onclick = () => {
  prevSlider(mainSlider, mainSliderOrder, imagesObj.length);
  prevTextSlider(mainSliderTitle, mainSliderDesc, mainSliderOrder, imagesObj);
  mainSliderOrder > 1 ? mainSliderOrder-- : (mainSliderOrder = 3);
};
/* End Handle Sliders */
