'use strict';
const previous = document.querySelector(".left");
const main = document.querySelector(".main-image");
const mainImage = document.querySelector(".main-image > img");
const descr = document.querySelector(".description");
const h2 = document.querySelector(".description > h2");
const p = document.querySelector(".description > p");
const after = document.querySelector(".right");
const thumbnailContainer = document.querySelector(".thumbnails-nav");
const thumbnailImage = document.createElement("img");
const images = [
  { path: "images/25636.jpg", alt: "Lake at the base of the hill", description: "Bacon ipsum dolor amet fatback sirloin pastrami, chislic ham pork loin capicola meatloaf landjaeger boudin. Pork loin doner ham hock tri-tip flank kielbasa ribeye, turkey strip steak filet mignon prosciutto picanha cupim kevin tail. Capicola flank pancetta frankfurter cupim. Hamburger meatloaf short ribs sirloin burgdoggen, shankle fatback andouille jowl pork chislic. Drumstick shank boudin, beef cupim spare ribs bresaola tri-tip picanha strip steak leberkas. Pork belly landjaeger pancetta, strip steak t-bone hamburger brisket kevin fatback." },
  { path: "images/14229.jpg", alt: "City view", description: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! \"Now fax quiz Jack!\" my brave ghost pled." },
  { path: "images/25637.jpg", alt: "Mountain lake", description: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues." },
  { path: "images/25638.jpg", alt: "Winter mountain lake", description: "The best taco bowls are made in Trump Tower Grill. I love Hispanics! My text is long and beautiful, as, it has been well documented, are various other parts of my website. Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website. I think the only card she has is the Lorem card. I think the only difference between me and the other placeholder text is that I’m more honest and my words are more beautiful." },
  { path: "images/25643.jpg", alt: "Peaks", description: "I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively. I will write some great, great text on your website’s Southern border, and I will make Google pay for that text. Mark my words. All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That's to be expected. You’re disgusting. Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?!" },
  { path: "images/25646.jpg", alt: "View from a stream", description: "Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! " },
  { path: "images/25648.jpg", alt: "Winter lake and pines", description: "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { path: "images/25649.jpg", alt: "Night sky", description: "Lookout flogging bilge rat main sheet bilge water nipper fluke to go on account heave down clap of thunder. Reef sails six pounders skysail code of conduct sloop cog Yellow Jack gunwalls grog blossom starboard. Swab black jack ahoy Brethren of the Coast schooner poop deck main sheet topmast furl marooned.Lookout flogging bilge rat main sheet bilge water nipper fluke to go on account heave down clap of thunder. Reef sails six pounders skysail code of conduct sloop cog Yellow Jack gunwalls grog blossom starboard. " }
];
let index = 0;

main.onclick = () => descr.classList.toggle("description-in");
main.onclick = () => descr.classList.toggle("description-out");

function newMainImage() {
  mainImage.src = `${images[index].path}`;
  h2.innerText = `${images[index].alt}`;
  p.innerText = `${images[index].description}`;
}

//creating the thumbnails
images.forEach(e => {
  const thumbnail = document.createElement("div");
  thumbnail.setAttribute("class", "thumbnail-container");
  thumbnail.innerHTML = `<img src=${e.path} alt="${e.alt}">`;
  thumbnail.onclick = () => {
    index = images.indexOf(e);
    newMainImage();
  };
  thumbnailContainer.appendChild(thumbnail);
});

previous.onclick = () => {
  if (index > 0) {
    index--;
  } else {
    index = images.length - 1;
  }
  newMainImage();
}

after.onclick = () => {
  if (index < images.length - 1) {
    index++;
  } else {
    index = 0;
  }
  newMainImage();
}
