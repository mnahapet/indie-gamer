import Link from 'next/Link';
import { getFeaturedReview } from '@/lib/reviews';
import Heading from '@/components/Heading';

const HomePage = async () => {
  const { slug, image, title } = await getFeaturedReview();
  console.log('[HomePage] rendering');
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed fro you</p>
      <div className="bg-white border rounded shadow w-80 sm:w-full hover:shadow-xl">
        <Link href={`/reviews/${slug}`} className="flex flex-col sm:flex-row">
          <img
            src={image}
            alt="Hollow Knight"
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="font-orbitron font-semibold py-1 text-center sm:px-2">
            {title}
          </h2>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
