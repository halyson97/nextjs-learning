import { useRouter } from 'next/router';
import Layout from '../components/MyLayout';
import { NextPage } from 'next';
import { FunctionComponent } from 'react';

const Content : FunctionComponent = () => {
  const router = useRouter();
  return (
    <>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </>
  );
};

const Page: NextPage = () => (
  <Layout>
    <Content />
  </Layout>
);

export default Page;