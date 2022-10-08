import type { NextPage } from 'next';

import { Layout, PersonalInfo } from 'src/components';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="h-screen">
        <div className="flex justify-center items-center  h-full ">
          <PersonalInfo />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
