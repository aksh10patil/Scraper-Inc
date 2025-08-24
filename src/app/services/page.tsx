import Image from "next/image";
import Navbar from "../../../public/components/Navbar";
import Footer from "../../../public/components/Footer";

interface ServiceSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  subtitle,
  description,
  image,
  reverse,
}) => {
  return (
    <>

    <section className={`flex flex-col md:flex-row items-center justify-between min-h-screen px-8 md:px-20 ${reverse ? "md:flex-row-reverse" : ""}`}>
      <div className="md:w-1/2 text-white space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold">
          {title} {subtitle && <span className="font-light italic">{subtitle}</span>}
        </h2>
        <p className="text-lg md:text-xl leading-relaxed opacity-90">{description}</p>
      </div>
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="drop-shadow-2xl"
        />
      </div>
    </section>
    
    
    
    </>
    
  );
};

export default function OurServicesPage() {
  return (
    <>

    <Navbar />
    <main className="bg-gradient-to-b from-black via-purple-900 to-black text-white overflow-x-hidden">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl">
          We help brands become <span className="text-purple-400">agents of change</span>, turning purpose into <span className="text-purple-400">experiences</span>.
        </h1>
      </section>

      {/* Services Sections */}
      <ServiceSection
        title="The brand as"
        subtitle="an experience"
        description="A strong brand excites, leaves an impression and stays relevant in every interaction. That's why we work from its essence and at every touch point to generate real connections."
        image="/heart.webp"
      />

      <ServiceSection
        title="We think"
        subtitle="strategically"
        description="We work on the essence of the brand to find its place in the world. We delve into who it is, who it speaks to, how, when and where. We define the right strategies for the brand to mobilize the business."
        image="/bubble.webp"
        reverse
      />

      {/* Add more sections here... */}
    </main>
    <Footer />

    </>
    
  );
}
