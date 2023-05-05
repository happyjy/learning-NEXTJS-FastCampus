import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import { useRouter } from 'next/router';

// url -> http://localhost:3000/category/food
// url -> http://localhost:3000/category/food1
// url -> http://localhost:3000/category/food2
// url -> http://localhost:3000/category/foo d3?from=event
// url -> http://localhost:3000/category/food3?from=event&page=111
// url -> http://localhost:3000/category/food3?from=event&page=111&slug=hhhhi    ⭐️qury string에 있는 slug는 무시!

export default function CategorySlug() {
  const router = useRouter();
  console.log('router: ', router);
  const { slug, from } = router.query;
  return (
    <>
      <h1>{`Category Slug`}</h1>
      <h1>{`slug: ${slug}`}</h1>
      <h1>{`router.query Object : ${JSON.stringify(router.query)}`}</h1>
    </>
  );
}

CategorySlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
