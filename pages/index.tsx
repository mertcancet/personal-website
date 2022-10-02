import type { NextPage } from 'next';

import { Card, Layout } from 'src/components';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="h-screen">
        <div className="flex justify-center items-center  h-full ">
          <Card>Mertcan Cetinkaya</Card>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
