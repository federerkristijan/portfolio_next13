import Image from 'next/image';
import Intro from "./container/Intro";

export default function Home() {
  return (
    <div className='text-slate-500 myh overflow-y-scroll overflow-x-hidden z-0 snap-mandatory snap-y scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-purple-500'>
      <section id="intro" className="myh snap-center">
        <Intro />
      </section>
    </div>
  )
}
