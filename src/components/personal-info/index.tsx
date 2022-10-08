import React from 'react';

import { PersolnalInfoContent } from '..';
import Avatar from '../avatar';
import Card from '../card';

const PersonalInfo = () => {
  return (
    <div className="relative mt-[-150px]">
      <Avatar />
      <Card className="max-w-[500px]  pt-[100px] ">
        <PersolnalInfoContent />
      </Card>
      {/* Left top circle */}
      <div className="absolute top-[-50%] left-[-35%] z-0 animate-[moveUp_12s_linear__infinite]">
        <div className="relative w-[300px] h-[300px] z-0 blur-2xl ">
          <img src="/ imgs/Rectangle-2.png" alt="" />
        </div>
      </div>
      {/* Right bottom circle */}
      <div className="absolute bottom-[-50%] right-[-35%]  z-0 animate-[moveUp2_15s_linear__infinite] ">
        <div className="relative w-[300px] h-[300px] z-0 blur-2xl  ">
          <img src="/ imgs/Rectangle-1.png" alt="" />
        </div>
      </div>
      {/* Yellow circle */}
      <div className="absolute top-[50%] left-[50%]  z-0 animate-[transformYellowCircle_10s_linear__infinite]">
        <div className="relative w-[150px] h-[150px] z-0 blur-2xl ">
          <img src="/ imgs/Rectangle-3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
