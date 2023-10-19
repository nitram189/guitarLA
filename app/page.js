import { HomeCourse, HomeGuitars, HomeHero, HomeBlog } from '@/components';

export const metadata = {
  title: 'GuitarLA - Home',
  description: 'Discover your perfect guitar at our shop - Unbeatable deals for musicians, from amateurs to professionals'
}

export default function Home() {

  return (
    <main>
      <HomeHero />
      <HomeGuitars/>
      <HomeCourse />
      <HomeBlog />
    </main>
  )
}
