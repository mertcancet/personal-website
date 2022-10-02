import React from 'react';
import Image from 'next/image';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="relative overflow-hidden min-h-screen bg-[#020414]">
      <div className="w-full h-full">
        {children}
        {/* Left top circle */}
        <div className="absolute top-[25%] left-[30%] z-0">
          <div className="relative w-[300px] h-[300px] z-0 ">
            <Image src="/images/Rectangle-2.png" layout="fill" alt="" />
          </div>
        </div>
        {/* Right bottom circle */}

        <div className="absolute bottom-[25%] right-[30%]  z-0">
          <div className="relative w-[300px] h-[300px] z-0 ">
            <Image src="/images/Rectangle-1.png" layout="fill" alt="" />
          </div>
        </div>
        {/* Yellow circle */}
        <div className="absolute top-[50%] left-[50%] z-0">
          <div className="relative w-[150px] h-[150px] z-0 ">
            <Image src="/images/Rectangle-3.png" layout="fill" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
