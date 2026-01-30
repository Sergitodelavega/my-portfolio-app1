import Head from 'next/head';
import ContainerBlock from './components/ContainerBlock';
import LatestCode from './components/LatestCode';
import FavoriteProjects from './components/FavoriteProjects';
import Hero from './components/Hero';
import Contact from './components/Contact';


export default function Home() {
  return (
    <ContainerBlock 
      title="Sergio Lissanou - Software Engineer | Full-Stack Developer | Tech Enthusiast"
      description="Welcome to the personal website of Sergio Lissanou, a passionate software engineer specializing in full-stack development. Explore my projects, blog posts, and latest code contributions."
    >
      <Hero />
      <LatestCode />
      <FavoriteProjects />
      <Contact />
    </ContainerBlock>
  );
}
