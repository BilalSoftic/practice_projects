import Title from './Title';
import { serviceArticles } from '../Data';
import Service from './Service';
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {serviceArticles.map((service) => {
          return <Service key={service.id} {...service} />;
        })}
      </div>
    </section>
  );
};
export default Services;
