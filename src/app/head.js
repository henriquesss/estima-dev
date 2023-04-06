import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

function Head() {
  return (
    <>
      <div className={inter.className}>
        <div className='container mx-auto'>
          <div className='flex justify-around py-4'>
            <h1>estima.tech</h1>

            <div className=''>
              <a
                href="https://github.com/henriquesss/estima.tech"
                target="_blank"
                className='mx-2'
              >
                github
              </a>

              <a
                href="#"
                target="_blank"
                className='mx-3'
              >
                logar
              </a>

              <a className='p-2 bg-black text-white rounded cursor-pointer'>
                criar conta
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Head;