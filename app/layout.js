import { use } from 'react';

import './globals.css'
import Navbar from './shared/Navbar'
import { fetchSocials } from '@/utils/fetchSocials';

async function getSocials() {
  const socials = await fetchSocials();
  return socials;
}

// head
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  // fetching serverSideProps
  const socials = use(getSocials());
  console.log(socials);
  return (
    <html lang="en">
      <head metadata={metadata}/>
      <body>
        <header>
          <Navbar socials={socials} />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  )
}
