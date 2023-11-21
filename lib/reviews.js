import { readFile, readdir } from 'node:fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';

const getReview = async slug => {
  const text = await readFile(`./content/reviews/${slug}.md`, 'utf-8');
  const {
    content,
    data: { title, image, date }
  } = matter(text);
  const body = marked(content);
  return { slug, title, image, date, body };
};

const getSlugs = async () => {
  const files = await readdir('./content/reviews');
  const slugs = files
    .filter(file => file.endsWith('.md'))
    .map(file => file.slice(0, -'.md'.length));
  // console.log(files, slugs);
  return slugs;
};

const getReviews = async () => {
  const slugs = await getSlugs();

  let reviews = [];
  for (const slug of slugs) {
    const review = await getReview(slug);
    reviews.push(review);
  }

  reviews.sort((a, b) => b.date.localeCompare(a.date));
  return reviews;
};

const getFeaturedReview = async () => {
  const reviews = await getReviews();
  return reviews[0];
};

export { getReview, getSlugs, getReviews, getFeaturedReview };
