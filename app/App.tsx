import { MainLayout } from './layout/MainLayout';
import { Hero } from './sections/Hero/Hero';
import { About } from './sections/About/About';
import { AboutMe } from './sections/AboutMe/AboutMe';
import { Services } from './sections/Services/Services';
import { ServicesTecnic } from './sections/ServicesTecnic/ServicesTecnic';
import { Portfolio } from './sections/Portfolio/Portfolio';
import { Contact } from './sections/Contact/Contact';
import { Testimonials } from './sections/Testimonials/Testimonials';

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Services />
      <AboutMe />
      <ServicesTecnic />
      <Portfolio />
      <Testimonials />
      <Contact />
    </MainLayout>
  );
}