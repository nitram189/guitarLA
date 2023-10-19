import Header from '@/components/Header';
import './globals.css';
import Footer from '@/components/Footer';
import { GuitarProvider } from './GuitarContext';


export const metadata = {
  title: 'GuitarLA',
  description: 'Discover your perfect guitar at our shop - Unbeatable deals for musicians, from amateurs to professionals',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">

      <body className='bg-gray-100'>
        <Header />
        <GuitarProvider>
          {children}
        </GuitarProvider>
        <Footer />
      </body>
    </html>
  )
}
