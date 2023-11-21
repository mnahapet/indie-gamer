import Link from 'next/link';
import { getReviews } from '@/lib/reviews';
import Heading from '@/components/Heading';

export const metadata = {
  title: 'Reviews'
};

const ReviewsPage = async () => {
  const reviews = await getReviews();
  // console.log(reviews);
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map(({ slug, title, image }) => (
          <li
            className="bg-white border rounded shadow w-80 hover:shadow-xl"
            key={slug}>
            <Link href={`/reviews/${slug}`}>
              <img
                src={image}
                alt={title}
                width="320"
                height="180"
                className="rounded-t"
              />
              <h2 className="font-orbitron font-semibold py-1 text-center">
                {title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReviewsPage;
