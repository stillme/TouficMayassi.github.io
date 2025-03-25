import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-heading">About Me</h1>
        
        {/* Professional Bio Section */}
        <section className="mb-16">
          <div className="card">
            <h2 className="text-2xl font-semibold mb-6 text-[#2c3e50]">Professional Biography</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                I am an immunologist with a PhD from the University of Chicago and over 6 years of postdoctoral experience at leading research institutions. Currently, I serve as a Postdoctoral Associate at the Broad Institute of MIT and Harvard, where I investigate spatial organization of immune responses in the gut.
              </p>
              <p className="mb-4">
                My research has focused on understanding tissue-resident immunity, particularly γδ T cells in the context of celiac disease and mucosal immunology. This work has led to publications in prestigious journals including Nature and has provided insights into how the immune system functions in specific tissue environments.
              </p>
              <p className="mb-4">
                Throughout my scientific career, I've developed expertise in advanced laboratory techniques, computational analysis of complex datasets, and translating scientific findings into actionable insights. I've mentored graduate students, managed complex research projects, and collaborated with multidisciplinary teams.
              </p>
              <p className="mb-4">
                I am now leveraging my scientific expertise, analytical skills, and industry knowledge to transition into life sciences consulting or equity research. My background provides me with a unique perspective on biotechnology and pharmaceutical developments, allowing me to evaluate scientific approaches, clinical data, and market opportunities with both technical depth and strategic vision.
              </p>
            </div>
          </div>
        </section>
        
        {/* Education Timeline Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-[#2c3e50]">Education</h2>
          <div className="space-y-8">
            <div className="timeline-item">
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-[#2c3e50]">University of Chicago</h3>
                <p className="text-gray-600">Ph.D., Committee on Immunology | 2012 – 2018</p>
                <p className="mt-2">
                  <strong>Dissertation:</strong> Dietary gluten permanently reshapes the tissue-resident intraepithelial γδ T cell compartment in celiac disease
                </p>
                <p className="mt-2">
                  <strong>Advisor:</strong> Bana Jabri
                </p>
                <p className="mt-2">
                  <strong>Honors:</strong> Best Dissertation Award - Outstanding Performance in the Field of Immunology
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-[#2c3e50]">Old Dominion University</h3>
                <p className="text-gray-600">M.S., Biotechnology | 2010 – 2012</p>
                <p className="mt-2">
                  <strong>Advisor:</strong> David Gauthier
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-[#2c3e50]">University of Virginia</h3>
                <p className="text-gray-600">B.S., Biology | 2004 – 2008</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Career Objectives Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-[#2c3e50]">Career Objectives</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-[#3498db]">Life Sciences Consulting</h3>
              <p className="mb-4">
                I aim to leverage my scientific expertise to help biotechnology and pharmaceutical companies make strategic decisions about R&D investments, clinical development programs, and market opportunities. My goal is to bridge the gap between cutting-edge science and business strategy, providing insights that drive innovation and create value.
              </p>
              <p>
                My background in immunology positions me to contribute meaningfully to projects involving immunotherapies, autoimmune diseases, and novel therapeutic modalities, areas of significant investment and growth in the life sciences sector.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-[#3498db]">Equity Research</h3>
              <p className="mb-4">
                I seek to apply my scientific knowledge to evaluate biotechnology companies and their pipelines, providing investors with informed analyses of scientific approaches, clinical data, and market potential. My goal is to translate complex scientific concepts into clear investment theses that highlight both opportunities and risks.
              </p>
              <p>
                My experience analyzing and interpreting complex datasets, combined with my deep understanding of immunology and biotechnology, enables me to assess the scientific merit and commercial potential of novel therapeutic approaches.
              </p>
            </div>
          </div>
        </section>
        
        {/* Personal Interests Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-[#2c3e50]">Personal Interests</h2>
          <div className="card">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#2c3e50]">Community & Outreach</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#3498db] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>University of Chicago committee on immunology graduate recruitment talks</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#3498db] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Journal club establishment and maintenance</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#2c3e50]">Activities</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#3498db] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Intramural soccer</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#3498db] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Running club</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#3498db] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Hiking club</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Link href="/experience" className="btn-primary">
            View My Experience
          </Link>
        </div>
      </div>
    </div>
  );
}
