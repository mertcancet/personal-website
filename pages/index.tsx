import type { NextPage } from 'next';

import { Layout, PersonalInafo } from 'src/components';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="h-screen">
        <div className="flex justify-center items-center  h-full ">
          <PersonalInafo />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
