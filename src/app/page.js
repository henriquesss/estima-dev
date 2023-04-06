'use client'

import { useState } from 'react'
import { Button } from '@nextui-org/react'
import EstimativeCard from "@/components/EstimativeCard"
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  const search = element => {
    if (event.key === 'Enter') {
      alert(element.target.value);
    }
  }

  return (
    <div className={inter.className}>
      <div className=' flex justify-center items-center h-[400px]'>
        <div className='flex flex-col items-center w-screen'>
          <h1 className='text-3xl mb-5'>
            O que você precisa entregar?
          </h1>

          <div className='flex felx-row items-center w-1/2'>
            <input
              className='bg-slate-300 w-full rounded-lg p-3 transition hover:bg-slate-200 focus:bg-slate-200 mx-2'
              onChange={event => setSearchTerm(event.target.value)}
              placeholder="Sistema de login com next.js..."
              onKeyDown={(event) => search(event)}
            />

            <button
              onClick={() => alert(searchTerm)}
            >
              <Image
                // loader={myLoader}
                src="/../public/search-icon.png"
                alt="Pesquisar"
                width={25}
                height={25}
              />
            </button>
          </div>

        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex justify-between items-center flex-wrap">
          <EstimativeCard />
          <EstimativeCard />
          <EstimativeCard />
          <EstimativeCard />
        </div>
      </div>
    </div>
  )
}
