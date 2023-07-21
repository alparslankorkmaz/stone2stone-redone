const title1 = "We Target People";
const title2 = "Seeing is Believing";
const title3 = "If I Had a Little Money";
const title4 = "Want to Know our Specials?";

export const titles = [title1, title2, title3, title4];

const titleByIndex = (index) => titles[index % titles.length];

const text1 =
  "Ok, that sounds a little intense. What we mean is our B2B marketing agency uses a data – first approach in order to target the best leads for your campaign.";
const text2 =
  "Stone2Stone sees no campaign as too complex, when done right. We’ll make you believe again.";
const text3 =
  "Your budget, no matter how small, can be used efficiently and effectively in the right hands. A.K.A ours.";
const text4 =
  "Your market is our speciality. Our team is built on top of technology creatives, who are ready to cross the finish line with you. We’ll even carry you if we have to.";

export const texts = [text1, text2, text3, text4];

const textByIndex = (index) => texts[index % texts.length];

const img1 = "/images/company/carousel/1.png";
const img2 = "/images/company/carousel/2.png";
const img3 = "/images/company/carousel/3.png";
const img4 = "/images/company/carousel/4.png";

export const imgs = [img1, img2, img3, img4];

const imgByIndex = (index) => imgs[index % imgs.length];

export { titleByIndex, textByIndex, imgByIndex };
