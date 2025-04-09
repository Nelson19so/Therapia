import React from "react";

const TherapistPlatform = () => {
  return (
    <div className="font-poppins">
      {/* Section 1: Hero with Image */}
      <section className="w-full min-h-screen bg-white py-10 px-5 md:px-10 lg:px-20 xl:px-40 flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Left Text Content */}
          <div className="lg:w-1/2 xl:w-[45%] space-y-6">
            <div className="text-[40px] md:text-[48px] font-bold text-gray-800">
              <h1>
                Find Your Perfect Therapist{" "}
                <span className="text-black block text-[32px] md:text-[36px] font-semibold mt-2">
                  Book Your Session with Ease
                </span>
              </h1>
              <h2 className="text-[30px] md:text-[32px] font-semibold text-green-400 mt-6">
                Prioritize Your Mental Well-Being{" "}
                <span className="text-black font-medium">Our Mind Matters.</span>
              </h2>
            </div>

            <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed">
              The "Schedule Sessions" page empowers you to connect with licensed therapists 
              tailored to your unique needs. With an intuitive interface, you can effortlessly 
              filter through options, ensuring you find the right match for your therapeutic 
              journey. Experience the comfort of booking at your convenience, all while being 
              supported in a safe and nurturing environment.
            </p>

            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold text-[16px] md:text-[18px] py-3 px-8 md:py-4 md:px-10 rounded-full transition-colors duration-300">
              Start Your Therapeutic Journey
            </button>
          </div>

          {/* Image Container */}
          <div className="lg:w-1/2 xl:w-[55%] relative flex justify-center">
            <img
              src="/images/schedulling1.png"
              alt="Therapy Session"
              className="rounded-lg object-cover w-full max-w-2xl xl:max-w-3xl transform -translate-y-8"
            />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-green-500/20 rounded-full blur-lg" />
          </div>
        </div>
      </section>

      {/* Section 2: Discovery Banner */}
      <section className="w-full py-20 px-5 md:px-10 lg:px-20 xl:px-40 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Your Ideal Therapist Today
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
            Embrace Your Mental Wellness Journey with personalized support
          </p>
          
          <div className="h-1 w-20 bg-purple-500 mx-auto mb-12"></div>
          
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Right Your Healing Experience
          </h2>
        </div>
      </section>

      {/* Section 3: Features Grid */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Find Your Perfect Therapist</h1>
            <p className="text-xl text-gray-600">Book Your Session with Ease</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-purple-600 text-3xl mb-4">👤</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personalised Therapist Matching</h3>
              <p className="text-gray-600">
              Easily find a therapist who resonates with your needs and preferences, enhancing your therapeutic journey.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-purple-600 text-3xl mb-4">⏱️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Accessible Anytime, Anywhere</h3>
              <p className="text-gray-600">
              Connect with licensed therapists from the comfort of your home or on the go, ensuring support is always within reach.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-purple-600 text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Advanced Filtering Options</h3>
              <p className="text-gray-600">
              Refine your search based on specialty, availability, and therapy methods to find the perfect fit for your personal growth.</p>
</div>

            {/* Feature Card 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-purple-600 text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600">
              Choose appointment times that fit your lifestyle, making mental health support convenient and adaptable.
              </p>
            </div>

            {/* Feature Card 5 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-purple-600 text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Secure and Confidential</h3>
              <p className="text-gray-600">
              Your privacy is our priority. All communications are secure, ensuring a safe space for your discussions.
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-purple-600 text-3xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Supportive Community Access</h3>
              <p className="text-gray-600">
                Join a network of individuals on similar journeys, forming connections and understanding in your healing process.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
              Get Started Today
            </button>
          </div>
          <section className="w-full py-20 px-5 md:px-10 lg:px-20 xl:px-40 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Connect with Your Ideal Therapist Instantly
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The "schedule sessions" page is meticulously crafted to facilitate your journey toward mental wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Our intuitive platform enables you to seamlessly discover and filter through a diverse range of licensed therapists who are ready to support your unique emotional needs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With user-friendly navigation, you can effortlessly arrange appointments tailored to your schedule, ensuring that the assistance you seek is always accessible in a warm and secure environment.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Nurture Your Mental Health Journey
                </h3>
                <p className="text-gray-600">
                  Expert Guidance and Support at Your Fingertips
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Explore Diverse Therapist Options
                </h3>
                <p className="text-gray-600">
                  Tailored Matches for Your Unique Needs
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Book Appointments with Confidence
                </h3>
                <p className="text-gray-600">
                  Your Safe Spaces for Mental Wellness
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 px-5 md:px-10 lg:px-20 xl:px-40 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Client Testimonials
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Experience transformed mental wellness through Therapia.
          </p>
          <div className="w-16 h-1 bg-purple-500 mx-auto mb-12"></div>

          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              A Life-Changing Experience
            </h2>
            <blockquote className="text-gray-600 italic mb-6 text-lg">
              "Thanks to Therapia, I found the support I needed in a therapist who truly understands my journey. The platform made it effortless to connect and schedule sessions that fit my life!"
            </blockquote>
            <p className="font-semibold text-gray-800">- Emily Carter</p>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Contact Form */}
      <section className="w-full py-20 px-5 md:px-10 lg:px-20 xl:px-40 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Connect with a Therapist
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Connect with a Therapist Who Understands You
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Our office</h3>
                <p className="text-gray-600">master.comate</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Us Via Email</h3>
                <p className="text-gray-600">info@therapists.com</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h3>
                <p className="text-gray-600">(20) 366-8422</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Seamlessly Schedule Your Therapy Session
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Full name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">E-mail</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Your Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Seamlessly Schedule Your Therapy Session
              </button>
            </form>
          </div>
        </div>
      </section>
        </div>
      </section>
    </div>
  );
};

export default TherapistPlatform;