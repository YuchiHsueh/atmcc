'use client';
import Image from 'next/image';

const Sponsors = () => {
  return (
    
    <div className="w-full bg-white py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Nuestros Sponsors</h2>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-8 items-center justify-center">
          {["city", "donic", "donic2", "wang", "yinhe"].map((num) => (
            <div key={num} className="flex-shrink-0">
              <Image
                src={`/sponsors/${num}.png`}
                alt={`Sponsor ${num}`}
                width={250}
                height={150}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors; 