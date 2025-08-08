const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-portfolio-light text-portfolio-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-portfolio-primary">My Certifications</h2>
        <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-1">
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
                <img 
                  src="/Bigdev.jpg" 
                  alt="Full Stack B-commerce Developer Certificate" 
                  className="w-full h-auto rounded-lg border-2 border-portfolio-primary shadow-md" 
                />
              </div>
              <div className="w-full sm:w-2/3 sm:pl-8">
                <h3 className="text-2xl font-bold text-portfolio-primary mb-2">Full Stack B-commerce Developer</h3>
                <p className="text-gray-600">
                  Certified as a Full Stack B-commerce Developer, demonstrating proficiency in building and deploying end-to-end e-commerce solutions. This certification covers both front-end and back-end technologies, including modern JavaScript frameworks, server-side logic, database management, and API integration.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
                <img 
                   src="/mern.png" 
                  alt="MERN Stack Crash Course Certificate" 
                  className="w-full h-auto rounded-lg border-2 border-portfolio-primary shadow-md" 
                />
              </div>
              <div className="w-full sm:w-2/3 sm:pl-8">
                <h3 className="text-2xl font-bold text-portfolio-primary mb-2">MERN Stack Crash Course</h3>
                <p className="text-gray-600">
                  Completed a comprehensive crash course on the MERN stack, covering MongoDB, Express.js, React, and Node.js. This course provided hands-on experience in building full-stack web applications, from creating RESTful APIs to developing dynamic user interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
