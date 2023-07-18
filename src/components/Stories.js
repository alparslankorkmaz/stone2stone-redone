import { getSortedStoriesData } from "../../lib/success-stories";

export default function Stories() {
  const stories = getSortedStoriesData();
  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold dark:text-white/90">Stories</h2>
      <ul className="w-full">
        {stories.map((story) => {
          JSON.stringify(story);
        })}
      </ul>
    </section>
  );
}
