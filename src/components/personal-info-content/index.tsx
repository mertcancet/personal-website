import React from 'react';
import Link from 'next/link';
import { FaGithubSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const icons = [
  { icon: <FaGithubSquare size={42} />, link: 'https://github.com/mertcancet' },
  { icon: <FaTwitterSquare size={42} />, link: 'https://twitter.com/MertcanCet' },
  { icon: <FaLinkedin size={42} />, link: 'https://www.linkedin.com/in/mertcancet/' },
  { icon: <RiInstagramFill size={42} />, link: 'https://www.instagram.com/mertcancet/' },
];

const PersonalInfoContent: React.FC = () => {
  return (
    <div className="flex  flex-col justify-between h-full">
      <div className="flex flex-col gap-2 text-xl ">
        <span className="text-4xl "> Hi, I&apos;m Mertcan.</span>
        <span>
          I&apos;m frontend developer{' '}
          <Link href="https://tokensuite.io/">
            <a
              className="bg-clip-text bg-gradient-to-r from-purple-900 to-purple-700 text-transparent cursor-pointer z-30"
              target="_blank"
              rel="noreferrer"
            >
              @TokenSuite
            </a>
          </Link>
          - based in Turkey.
        </span>
        <span>If you have any questions, you can reach me from the links below.👋</span>
      </div>
      <div className="flex justify-evenly mt-5">
        {icons.map((icon, index) => (
          <Link href={icon.link} key={index}>
            <a className="cursor-pointer z-30" target="_blank" rel="noreferrer">
              {icon.icon}{' '}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PersonalInfoContent;
