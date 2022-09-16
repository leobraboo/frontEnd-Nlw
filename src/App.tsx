import { MagnifyingGlassPlus } from 'phosphor-react'

import './styles/main.css';
import logoImg from './assets/Logo.svg';


function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-10 '>
      <img src={logoImg} alt="" />


      <h1 className='text-6xl text-white font-black m-10'>Seu <span className='bg-duo-gradient text-transparent bg-clip-text'> duo</span>  está aqui.</h1>

      <div className='grid grid-cols-6 gap-6 mt-4'>
        <a href="" className='relative rounded-lg overflow-hidden '> 
        <img src="/image1.png" alt="" />

        <div className='w-full pt-16 pb-4 px-4 bg-ad-gradient absolute bottom-0 left-0 right-0'>
          <strong className='font-bold text-white block'> League of Legends</strong>
          <span className='text-zinc-300 text-sm block '>3 anúncios</span>
        </div>

        </a>
        
        <a href="" className='relative rounded-lg overflow-hidden ' >
        <img src="/image2.png" alt="" />

        <div className='w-full pt-16 pb-4 px-4 bg-ad-gradient absolute bottom-0 left-0 right-0'>
          <strong className='font-bold text-white block'> Dota 2</strong>
          <span className='text-zinc-300 text-sm block '>5 anúncios</span>
        </div>

        </a>

        <a href="" className='relative rounded-lg overflow-hidden ' >
        <img src="/image3.png" alt="" />

        <div className='w-full pt-16 pb-4 px-4 bg-ad-gradient absolute bottom-0 left-0 right-0'>
          <strong className='font-bold text-white block'> Counter Strike</strong>
          <span className='text-zinc-300 text-sm block '>2 anúncios</span>
        </div>

        </a>

        <a href="" className='relative rounded-lg overflow-hidden ' >
        <img src="/image5.png" alt="" />

        <div className='w-full pt-16 pb-4 px-4 bg-ad-gradient absolute bottom-0 left-0 right-0'>
          <strong className='font-bold text-white block'> Apex Legends</strong>
          <span className='text-zinc-300 text-sm block '>4 anúncios</span>
        </div>

        </a>

        <a href="" className='relative rounded-lg overflow-hidden ' >
        <img src="/image6.png" alt="" />

        <div className='w-full pt-16 pb-4 px-4 bg-ad-gradient absolute bottom-0 left-0 right-0'>
          <strong className='font-bold text-white block'> Fortnite</strong>
          <span className='text-zinc-300 text-sm block '>6 anúncios</span>
        </div>

        </a>

        <a href="" className='relative rounded-lg overflow-hidden ' >
        <img src="/image7.png" alt="" />

        <div className='w-full pt-16 pb-4 px-4 bg-ad-gradient absolute bottom-0 left-0 right-0'>
          <strong className='font-bold text-white block'> World of Warcraft</strong>
          <span className='text-zinc-300 text-sm block '>3 anúncios</span>
        </div>

        </a>

      </div>

      <div className='pt-1 bg-duo-gradient self-stretch rounded-lg overflow-hidden mt-4  '>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center  '>
          <div>
            <strong className='text-2xl text-white font-black'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar Anúncio
          </button>

        </div>
      </div>
    </div>
    
  )
}

export default App
