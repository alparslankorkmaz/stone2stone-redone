const title1 = "Conversation starters for MSP’s";
const title2 = "Lead generation for cyber security companies";
const title3 = "Feeding reseller sales teams";
const title4 = "Opening doors for distributors";

export const titles = [title1, title2, title3, title4];

const titleByIndex = (index) => titles[index % titles.length];

const text1 =
  "We love a long conversation, especially about technology. Whether you are in IT strategy, cloud consulting or network security, we’d love to show you how we can take what you have to offer to new heights.";
const text2 =
  "We use a wide variety of tactics to generate exceptional, dedicated leads. Achieving this through ABM, Direct marketing, Social Media marketing & more, we know how to get the numbers without compromising quality.";
const text3 =
  "With a dedicated team of B2B experts, we are where you are, when needed. No campaign is too big, no vision too grand – why not give your sales team a taste.";
const text4 =
  "Years of working with leading UK distributors has given us a true understanding of the IT channel. Working with their marketing departments, we work together to open doors for sales teams.";

export const texts = [text1, text2, text3, text4];

const textByIndex = (index) => texts[index % texts.length];

const img1 = "/images/why_s2s/1.png";
const img2 = "/images/why_s2s/2.png";
const img3 = "/images/why_s2s/3.png";
const img4 = "/images/why_s2s/4.png";

export const imgs = [img1, img2, img3, img4];

const imgByIndex = (index) => imgs[index % imgs.length];

export { titleByIndex, textByIndex, imgByIndex };
