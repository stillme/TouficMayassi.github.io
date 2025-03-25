import Link from 'next/link';

export default function SkillsPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-heading">Skills & Expertise</h1>
        
        {/* Technical Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-[#2c3e50]">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-[#3498db]">Computational & Data Analysis</h3>
              
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">R Programming</span>
                  <span>Expert</span>
                </div>
                <div className="skill-container">
                  <div className="skill-bar" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">LATEX</span>
                  <span>Advanced</span>
                </div>
                <div className="skill-container">
                  <div className="skill-bar" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Single-cell RNA-seq Analysis</span>
                  <span>Expert</span>
                </div>
                <div className="skill-container">
                  <div className="skill-bar" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Spatial Transcriptomics Analysis</span>
                  <span>Expert</span>
                </div>
                <div className="skill-container">
                  <div className="skill-bar" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mt-6 mb-2">Business Relevance:</h4>
                <p>
                  These computational skills enable me to analyze complex datasets, extract meaningful insights, and communicate findings effectively—essential capabilities for both consulting and equity research roles where data-driven decision making is critical.
                </p>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-[#3498db]">Laboratory & Experimental</h3>
              
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Flow Cytometry & Cell Sorting</span>
                  <span>Expert</span>
                </div>
                <div className="skill-container">
                  <div className="skill-bar" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Cell Isolation from Tissues</span>
                  <span>Expert</span>
                </div>
                <div className="skill-container">
                  <div className="skill-bar" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Immunofluorescence Microscopy</span>
                  <span>Expert</span>
                </div>
                <div className="skill-container">
                  <div className="skill-bar" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Cloning & Molecular Biology</span>
                  <span>Expert</span>
                </div>
                <div className="skill-container">
                  <div className="skill-bar" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mt-6 mb-2">Business Relevance:</h4>
                <p>
                  My technical expertise allows me to evaluate the scientific merit and feasibility of novel therapeutic approaches and research methodologies—valuable for assessing biotechnology companies and advising pharmaceutical clients on R&D strategies.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Domain Knowledge Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-[#2c3e50]">Domain Knowledge</h2>
          
          <div className="card">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#3498db]">Immunology & Biotechnology</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Mucosal Immunology:</strong> Deep expertise in tissue-resident immune cells and gut immunology</li>
                  <li><strong>Autoimmune Disease:</strong> Specialized knowledge of celiac disease mechanisms and immunopathology</li>
                  <li><strong>Spatial Biology:</strong> Advanced understanding of spatial organization of immune responses</li>
                  <li><strong>Microbiome:</strong> Knowledge of host-microbiome interactions and therapeutic applications</li>
                  <li><strong>Single-cell Genomics:</strong> Expertise in cutting-edge technologies for cellular analysis</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#3498db]">Industry Knowledge</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Therapeutic Development:</strong> Understanding of drug development process from discovery to clinical trials</li>
                  <li><strong>Biotechnology Landscape:</strong> Awareness of key players and emerging technologies in immunotherapy</li>
                  <li><strong>Research Methodologies:</strong> Ability to evaluate scientific approaches and experimental design</li>
                  <li><strong>Translational Research:</strong> Experience bridging basic science and clinical applications</li>
                  <li><strong>Academic-Industry Interface:</strong> Understanding of technology transfer and commercialization</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Business Relevance:</h4>
              <p>
                My domain expertise enables me to provide informed perspectives on scientific developments in immunology and biotechnology, assess the potential of novel therapeutic approaches, and identify emerging trends and opportunities in the life sciences sector.
              </p>
            </div>
          </div>
        </section>
        
        {/* Soft Skills Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-[#2c3e50]">Professional & Soft Skills</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-[#3498db]">Leadership & Management</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Project management and coordination</li>
                <li>Mentoring and team development</li>
                <li>Strategic planning and execution</li>
                <li>Resource allocation and prioritization</li>
                <li>Performance evaluation and feedback</li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-[#3498db]">Communication & Presentation</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Scientific writing and publication</li>
                <li>Conference presentations and public speaking</li>
                <li>Data visualization and storytelling</li>
                <li>Cross-functional communication</li>
                <li>Technical concept translation for non-specialists</li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-[#3498db]">Problem-Solving & Analysis</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Critical thinking and hypothesis testing</li>
                <li>Experimental design and methodology</li>
                <li>Data interpretation and statistical analysis</li>
                <li>Troubleshooting complex problems</li>
                <li>Synthesizing information from diverse sources</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 card">
            <h3 className="text-xl font-semibold mb-4 text-[#3498db]">Business Relevance of Soft Skills</h3>
            <p className="mb-4">
              These professional skills directly translate to the requirements of consulting and equity research roles:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">For Consulting:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Project management for client engagements</li>
                  <li>Team collaboration and leadership</li>
                  <li>Client communication and presentation</li>
                  <li>Problem structuring and hypothesis-driven analysis</li>
                  <li>Data-driven recommendations and storytelling</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">For Equity Research:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Critical evaluation of company pipelines and technologies</li>
                  <li>Research report writing and presentation</li>
                  <li>Financial modeling and scenario analysis</li>
                  <li>Synthesis of scientific, clinical, and market information</li>
                  <li>Communication of complex concepts to investors</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Link href="/projects" className="btn-primary">
            View My Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
