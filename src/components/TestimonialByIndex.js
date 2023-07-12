const testi1 =
  "We have always found that the team at Stone2Stone possesses the right balance of professionalism, knowledge and creativity to suit our needs. Stone2Stone listens to our briefs, understands the challenges and has always created solutions that hit the spot.";
const testi2 =
  "I have used Stone2Stone for a year now and would highly recommend them. They are responsive, adaptable, reliable and creative. A real pleasure to work with.";
const testi3 =
  "Working with Stone2Stone has been an absolute game-changer for our marketing initiatives. From the very beginning, their team demonstrated an in-depth understanding of our unique needs, challenges, and target audience.";
const testi4 =
  "Working with this great team has been a pleasure. Their fab creative approach and brilliant responsiveness make every collaboration enjoyable and successful.";
const testi5 =
  "Stone2Stone is an exceptional partner, demonstrating deep understanding of the IT channel. Their delivery of fantastic creative work has made working with them a great experience.";
const testi6 =
  "Stone2Stone are reactive, imaginative, and fun to work with. Their creativity and responsiveness deliver exceptional results. A truly enjoyable partnership.";

export const testimonials = [testi1, testi2, testi3, testi4, testi5, testi6];

const testimonialByIndex = (index) => testimonials[index % testimonials.length];

const rev1 = "Amisha Shah, Senior Manager, International Marketing, ECI";
const rev2 = "Jen Falasca, Senior Marketing Director, ECI";
const rev3 = "Luke Day, Partner Account Manager, Red Hat";
const rev4 = "Chris Hepple, International Marketing Director, Forescout";
const rev5 = "Neil Langridge, Marketing Director, e92 plus";
const rev6 = "Andreea Caesar, Senior Marketing Manager, Trend Micro";

export const reviewers = [rev1, rev2, rev3, rev4, rev5, rev6];

const reviewerByIndex = (index) => reviewers[index % reviewers.length];

export { testimonialByIndex, reviewerByIndex };
