const About = () => {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-8">
        <div className="flex flex-col lg:flex-row items-center max-w-6xl w-full shadow-xl rounded-3xl backdrop-blur-sm bg-white/70 p-10">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">
              About Us
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold text-gray-900">Computer Intelligence</span> is the only invention mankind will ever need to build.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Shouldn’t everyone get a fair chance to understand, use, and create it?
            </p>
            <p className="text-lg text-gray-700 mb-4">
              That’s exactly what we help with.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold text-gray-900">Fulcrum</span> pivots potential from under-resourced regions in the right direction toward learning about and shaping the future of artificial intelligence.
            </p>
            <p className="text-lg text-gray-700">
              We support individuals through global mentorship, free learning resources, and by bridging the gap between rural communities and the frontiers of AI.
            </p>
          </div>
  
          {/* Image / Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-M_r7bEyuBQzUODeKwobumjZ2bnoB_uelw&s" // Change to your own image or illustration
              alt="AI illustration"
              className="w-4/5 max-w-md object-contain animate-fade-in"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  