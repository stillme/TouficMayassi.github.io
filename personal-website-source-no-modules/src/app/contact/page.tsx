import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-heading">Contact Me</h1>
        
        {/* Contact Information Section */}
        <section className="mb-16">
          <div className="card">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-[#2c3e50]">Get In Touch</h2>
                <p className="mb-6">
                  I'm interested in opportunities in life sciences consulting and equity research where I can leverage my scientific expertise and analytical skills. Please feel free to reach out to discuss potential opportunities or to learn more about my background and qualifications.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-[#3498db]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-3 text-base">
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="mt-1 text-gray-700">tmayassi@broadinstitute.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-[#3498db]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-3 text-base">
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="mt-1 text-gray-700">(757) 725-3997</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-[#3498db]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-3 text-base">
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="mt-1 text-gray-700">Cambridge, Massachusetts</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4 text-[#2c3e50]">Connect With Me</h3>
                  <div className="flex space-x-6">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#3498db]">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="https://twitter.com/TouficMayassi" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#3498db]">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-[#2c3e50]">Contact Form</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-[#3498db] focus:border-[#3498db] border-gray-300 rounded-md"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-[#3498db] focus:border-[#3498db] border-gray-300 rounded-md"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-[#3498db] focus:border-[#3498db] border-gray-300 rounded-md"
                        placeholder="How can I help you?"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-[#3498db] focus:border-[#3498db] border-gray-300 rounded-md"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#3498db] hover:bg-[#2980b9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3498db]"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Availability Section */}
        <section>
          <div className="bg-[#2c3e50] rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 max-w-7xl mx-auto sm:px-6 lg:px-8 lg:py-16 text-center">
              <div className="space-y-6 text-white">
                <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Ready to discuss opportunities</h2>
                <p className="text-xl max-w-3xl mx-auto">
                  I'm currently exploring roles in life sciences consulting and equity research. I'm available for interviews and informational discussions about how my background and skills can add value to your organization.
                </p>
                <div className="mt-8 flex justify-center">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="mailto:tmayassi@broadinstitute.org"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#2c3e50] bg-white hover:bg-gray-50"
                    >
                      Email Me Directly
                    </a>
                  </div>
                  <div className="ml-3 inline-flex">
                    <Link
                      href="/MayassiCV.pdf"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#3498db] hover:bg-[#2980b9]"
                    >
                      Download CV
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
