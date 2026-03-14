import { MainLayout } from './layout/MainLayout';
import { Hero } from './sections/Hero/Hero';
import { About } from './sections/About/About';
import { Services } from './sections/Services/Services';
import { Portfolio } from './sections/Portfolio/Portfolio';
import { Contact } from './sections/Contact/Contact';

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Services />
      {/* <Portfolio /> */}
      <Contact />
    </MainLayout>
  );
}