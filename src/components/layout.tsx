import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="relative overflow-hidden min-h-screen bg-[#020414]">
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default Layout;
