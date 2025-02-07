import profileimage from '../images/profile.jpg';
import levi from '../images/levi.jpg';

const DigitalThinkersSection = () => {
  return (
    <div className="container mx-auto px-5 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="relative">
            {/* Star decoration */}
            <div className="absolute -top-6 -left-6">
              <svg
                className="w-12 h-12 text-lime-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L14.645 9.355L24 12L14.645 14.645L12 24L9.355 14.645L0 12L9.355 9.355L12 0Z" />
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Digital thinkers.
              <br />
              Small studios build
              <br />
              awesome design.
            </h2>
          </div>

          {/* Team Images Grid - Left Side */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {/* Levi Kigunda */}
            <div className="group relative overflow-hidden rounded-3xl aspect-square">
              <img
                src={levi}
                alt="Levi Kigunda"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-xl">Levi Kigunda</h3>
                  <p className="text-gray-200">Lead Designer</p>
                </div>
              </div>
            </div>

            {/* Elvis Karani */}
            <div className="group relative overflow-hidden rounded-3xl aspect-square">
              <img
                src={profileimage}
                alt="Elvis Karani"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-xl">Elvis Karani</h3>
                  <p className="text-gray-200">Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <p className="text-lg text-gray-700 max-w-xl">
            Despite being a small team, we believe that our size gives us
            an advantage, allowing us to be nimble, adaptable, and able to
            work closely with our clients to deliver truly awesome designs.
          </p>

          {/* Team Images Grid - Right Side */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {/* Michael Njuguna */}
            <div className="group relative overflow-hidden rounded-3xl aspect-square">
              <img
                src={profileimage}
                alt="Michael Njuguna"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-xl">Michael Njuguna</h3>
                  <p className="text-gray-200">Designer</p>
                </div>
              </div>
            </div>

            {/* Leo Muguchia */}
            <div className="group relative overflow-hidden rounded-3xl aspect-square">
              <img
                src={profileimage}
                alt="Leo Muguchia"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-xl">Leo Muguchia</h3>
                  <p className="text-gray-200">Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalThinkersSection;