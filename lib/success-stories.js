import fs from "fs";
import path from "path";
import matter from "gray-matter";

const storiesDirectory = path.join(process.cwd(), "success-stories");

export function getSortedStoriesData() {
  // Get file names under /stories
  const fileNames = fs.readdirSync(storiesDirectory);
  const allStoriesData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(storiesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the stories metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.title,
    };
  });
  // Sort stories by date
  return allStoriesData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
