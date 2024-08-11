import React from 'react';
import Image from 'next/image';

const Main = () => {
  return (
    <section className="relative w-full h-screen">
      <Image
        src="/main.jpg"
        objectFit="cover"
        layout="fill"
        className="p-0 m-0"
        alt="image"
      />
      <div className="absolute w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-70">
        <h1 className="text-8xl tracking-tighter font-sans bg-gradient-to-r from-amber-200 to-amber-900 text-transparent bg-clip-text">
          crop sense
        </h1>
        <div className="flex items-center text-2xl justify-center">
          <p className="text-center mt-9 text-xl font-sans text-amber-100 max-w-lg">
            Revolutionize your fields with smart farming solutions,
            Empower your harvest with precision technology,
            Grow more, waste less, and thrive sustainably.
          </p>
        </div>
        <div className="mt-6">
          <button className="h-9 w-20 bg-transparent text-amber-100 border border-amber-100">
            Sign in
          </button>
        </div>
      </div>
    </section>
    
  );
};

export default Main;