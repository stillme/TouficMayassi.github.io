import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2c3e50] to-[#3498db] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Toufic Mayassi, PhD
              </h1>
              <h2 className="text-xl md:text-2xl mb-6">
                Immunologist Transitioning to Life Sciences Consulting & Equity Research
              </h2>
              <p className="text-lg mb-8">
                Leveraging 6+ years of postdoctoral research experience and deep scientific expertise to deliver strategic insights in the life sciences sector.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/experience" className="btn-primary text-center">
                  View Experience
                </Link>
                <Link href="/contact" className="btn-secondary text-center">
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white p-2 rounded-full shadow-xl">
                {/* Placeholder for professional headshot */}
                <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Professional Photo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">Professional Summary</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-[#2c3e50]">Background & Expertise</h3>
              <p className="mb-4">
                Immunologist with a PhD from the University of Chicago and 6+ years of postdoctoral experience at prestigious institutions including the Broad Institute of MIT and Harvard. Specialized in γδ T cells, celiac disease, and mucosal immunology with publications in high-impact journals including Nature.
              </p>
              <p>
                Expert in advanced cell isolation methods, single-cell RNA-sequencing, spatial transcriptomics, and computational analysis of complex biological datasets.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-[#2c3e50]">Transferable Skills for Industry</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#3498db] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>Data Analysis:</strong> Processing and interpretation of complex multiomic datasets</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#3498db] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>Project Management:</strong> Led research initiatives and mentored 8 graduate students</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#3498db] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>Scientific Expertise:</strong> Deep knowledge of immunology and biotechnology</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#3498db] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>Communication:</strong> Presented research at international conferences</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#3498db] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>Problem-Solving:</strong> Designed novel experimental approaches to complex questions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">Featured Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-2 text-[#2c3e50]">Nature Publication</h3>
              <p className="text-sm text-gray-500 mb-4">November 2024</p>
              <p className="mb-4">
                "Spatially restricted immune and microbiota-driven adaptation of the gut" - Research with business implications for therapeutic targeting of tissue-specific immune responses.
              </p>
              <Link href="/publications" className="text-[#3498db] hover:text-[#2980b9] font-medium">
                Read More →
              </Link>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-2 text-[#2c3e50]">Consulting Case Study</h3>
              <p className="text-sm text-gray-500 mb-4">Sample Project</p>
              <p className="mb-4">
                Market entry strategy for a novel immunotherapy platform, demonstrating analytical approach to business problems in the life sciences sector.
              </p>
              <Link href="/projects" className="text-[#3498db] hover:text-[#2980b9] font-medium">
                View Project →
              </Link>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-2 text-[#2c3e50]">Career Transition</h3>
              <p className="text-sm text-gray-500 mb-4">Strategic Approach</p>
              <p className="mb-4">
                Learn about my journey from academic research to life sciences consulting and equity research, including preparation and transferable skills.
              </p>
              <Link href="/transition" className="text-[#3498db] hover:text-[#2980b9] font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">References</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-[#3498db] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    RX
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Ramnik Xavier, M.D., Ph.D.</h3>
                  <p className="text-sm text-gray-600 mb-2">Kurt J. Isselbacher Professor of Medicine, Broad Institute of MIT and Harvard</p>
                  <p className="italic text-gray-700">
                    "Reference quote would appear here with permission from Dr. Xavier."
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-[#3498db] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    BJ
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Bana Jabri, M.D., Ph.D.</h3>
                  <p className="text-sm text-gray-600 mb-2">Sarah and Harold Lincoln Thompson Professor, University of Chicago</p>
                  <p className="italic text-gray-700">
                    "Reference quote would appear here with permission from Dr. Jabri."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#2c3e50] to-[#3498db] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Opportunities?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            I'm eager to bring my scientific expertise and analytical skills to your organization. Let's connect to discuss how I can contribute to your team.
          </p>
          <Link href="/contact" className="inline-block bg-white text-[#2c3e50] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}
