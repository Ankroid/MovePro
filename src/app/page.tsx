import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-300">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                {/* W Logo */}
                <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center mr-3">
                  <div className="text-white font-bold text-xl">W</div>
                </div>
                <h1 className="text-2xl font-bold text-blue-800">Western Packers & Movers</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                <Link href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-b from-orange-100 to-orange-300 relative overflow-hidden">
        {/* Background stars pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-2 h-2 bg-orange-400 rounded-full"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-orange-500 rounded-full"></div>
          <div className="absolute top-32 left-1/4 w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
          <div className="absolute top-40 right-1/3 w-2 h-2 bg-orange-500 rounded-full"></div>
          <div className="absolute top-60 left-1/2 w-1 h-1 bg-orange-400 rounded-full"></div>
          <div className="absolute top-80 right-1/4 w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-6">
                Western Packers
                <span className="block text-5xl md:text-7xl">& Movers</span>
              </h1>
              <p className="text-xl text-blue-700 mb-8">
                Trusted packers and movers with professional service. 
                We make your relocation stress-free and seamless across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-900 transition duration-300">
                  Get Free Quote
                </button>
                <button className="border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 hover:text-white transition duration-300">
                  Call Now
                </button>
              </div>
            </div>
            <div className="relative">
              {/* Cartoon Mover Illustration */}
              <div className="absolute -top-10 -right-10 z-10">
                <div className="relative">
                  {/* Mover Character */}
                  <div className="w-32 h-40 relative">
                    {/* Head */}
                    <div className="w-16 h-16 bg-orange-200 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                    {/* Cap */}
                    <div className="w-20 h-8 bg-red-500 rounded-t-full absolute -top-2 left-1/2 transform -translate-x-1/2"></div>
                    {/* Body */}
                    <div className="w-12 h-20 bg-red-500 absolute top-12 left-1/2 transform -translate-x-1/2"></div>
                    {/* Arms */}
                    <div className="w-4 h-12 bg-orange-200 absolute top-14 -left-2"></div>
                    <div className="w-4 h-12 bg-orange-200 absolute top-14 -right-2"></div>
                    {/* Legs */}
                    <div className="w-6 h-16 bg-red-500 absolute top-28 left-1/2 transform -translate-x-1/2"></div>
                    {/* Belt */}
                    <div className="w-12 h-2 bg-black absolute top-28 left-1/2 transform -translate-x-1/2"></div>
                  </div>
                  
                  {/* Hand Truck with Boxes */}
                  <div className="absolute top-20 -left-8">
                    <div className="w-16 h-20 relative">
                      {/* Hand truck base */}
                      <div className="w-12 h-2 bg-blue-600 absolute bottom-0"></div>
                      {/* Hand truck handle */}
                      <div className="w-1 h-16 bg-blue-600 absolute right-0 top-0"></div>
                      {/* Hand truck vertical support */}
                      <div className="w-1 h-8 bg-blue-600 absolute right-0 bottom-2"></div>
                      {/* Wheel */}
                      <div className="w-4 h-4 bg-black rounded-full absolute -bottom-1 left-2"></div>
                      {/* Boxes */}
                      <div className="w-10 h-8 bg-amber-600 absolute -top-8 left-1"></div>
                      <div className="w-10 h-8 bg-amber-700 absolute -top-16 left-1"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Quote</h3>
                <form className="space-y-4">
                  <div>
                    <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Select Service</option>
                      <option>Household Shifting</option>
                      <option>Local Moving</option>
                      <option>Domestic Moving</option>
                      <option>Car Transport</option>
                      <option>Bike Transport</option>
                      <option>Warehousing</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition duration-300">
                    Get Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Services</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Professional moving services across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-orange-200 hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Household Shifting</h3>
              <p className="text-gray-600">Complete residential moving services with professional packing and unpacking.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-orange-200 hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Local Moving</h3>
              <p className="text-gray-600">Efficient local relocation services within your city.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-orange-200 hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Domestic Moving</h3>
              <p className="text-gray-600">Long-distance moving services across India with safe transportation.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-orange-200 hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1a1 1 0 001-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Car Transport</h3>
              <p className="text-gray-600">Safe and secure car transportation services across India.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-orange-200 hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Bike Transport</h3>
              <p className="text-gray-600">Professional motorcycle and bike transportation services.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-orange-200 hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Warehousing Facility</h3>
              <p className="text-gray-600">Secure storage facilities for short and long-term storage needs.</p>
            </div>
          </div>
          
          {/* Service Coverage */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-orange-100 to-orange-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Service Coverage</h3>
              <p className="text-xl text-blue-700 font-semibold">ALL OVER INDIA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">We&apos;re committed to making your move stress-free</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed and insured for your peace of mind</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">On-Time Service</h3>
              <p className="text-gray-600">We value your time and always deliver on schedule</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Experienced Team</h3>
              <p className="text-gray-600">Professional movers with years of experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Don&apos;t just take our word for it</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">&quot;Excellent service! The team was professional and handled everything with care. Highly recommended!&quot;</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">S</div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Home Owner</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">&quot;They moved our entire office efficiently with minimal disruption to our business operations.&quot;</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">M</div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Mike Chen</p>
                  <p className="text-sm text-gray-500">Business Owner</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">&quot;Affordable prices and excellent service. Everything was packed and moved safely.&quot;</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">L</div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Lisa Rodriguez</p>
                  <p className="text-sm text-gray-500">Apartment Resident</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-blue-100">Ready to start your move? Contact us today!</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              {/* Contact Persons */}
              <div className="space-y-6 mb-8">
                <div className="bg-blue-700 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-2">Debilal Agarwal</h4>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-200 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-blue-100">9834858851</span>
                  </div>
                </div>
                
                <div className="bg-blue-700 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-2">Shivkumar Agarwal</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-blue-200 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-blue-100">7015399166</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-blue-200 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-blue-100">9881990902</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Website */}
              <div className="mb-6">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-200 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  <span className="text-pink-400 font-semibold">www.westernpackers.com</span>
                </div>
              </div>
              
              {/* Address */}
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-200 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-blue-100">
                  <p>Row House No. 1, Ganesh Puram Society,</p>
                  <p>Ganesh Nagar, Dapodi, Pune-411012.</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-white mb-4">Business Hours</h4>
                <div className="text-blue-100">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <div className="text-white font-bold text-lg">W</div>
                </div>
                <h3 className="text-2xl font-bold text-blue-400">Western Packers & Movers</h3>
              </div>
              <p className="text-gray-300">Professional moving services you can trust. Making your relocation stress-free and seamless across India.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="#" className="hover:text-blue-400">Household Shifting</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Local Moving</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Domestic Moving</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Car Transport</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Bike Transport</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Warehousing Facility</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="#" className="hover:text-blue-400">About Us</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Our Team</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Careers</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-300 hover:text-blue-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-300 hover:text-blue-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-300 hover:text-blue-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Western Packers & Movers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
