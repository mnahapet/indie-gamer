import { getReview, getSlugs } from '@/lib/reviews';
import Heading from '@/components/Heading';
import ShareLinkButton from '@/components/ShareLinkButton';

export async function generateMetadata({ params: { slug } }) {
  const { title } = await getReview(slug);
  return {
    title
  };
}

export async function generateStaticParams() {
  const slugs = await getSlugs();
  // [
  //   { slug: 'hollow-knight' },
  //   { slug: 'stardew-valley' }
  // ]
  return slugs.map(slug => ({ slug }));
}

const ReviewPage = async ({ params: { slug } }) => {
  console.log('[ReviewPage] rendering', slug);
  const { title, image, date, body } = await getReview(slug);
  return (
    <>
      <Heading>{title}</Heading>
      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2">{date}</p>
        <ShareLinkButton />
      </div>
      <img
        src={image}
        alt={title}
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: body }}
        className=" max-w-screen-sm prose prose-slate"
      />
    </>
  );
};

export default ReviewPage;
