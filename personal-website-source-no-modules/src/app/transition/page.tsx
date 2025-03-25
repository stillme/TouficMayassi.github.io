import Link from 'next/link';

export default function TransitionPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-heading">Career Transition</h1>
        
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4 text-[#2c3e50]">My Journey from Academia to Industry</h2>
            <p className="mb-4">
              After a successful academic career in immunology research, I am leveraging my scientific expertise, analytical skills, and industry knowledge to transition into life sciences consulting or equity research. This page outlines my approach to this transition, highlighting how my background prepares me for these roles and the steps I'm taking to bridge any skill gaps.
            </p>
            <p>
              My goal is to apply my deep scientific knowledge and analytical capabilities to help biotechnology companies make strategic decisions or provide investors with informed analyses of scientific approaches and market opportunities in the life sciences sector.
            </p>
          </div>
        </section>
        
        {/* Why Consulting/Equity Research Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-[#2c3e50]">Why Consulting & Equity Research?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-[#3498db]">Life Sciences Consulting</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">What Attracts Me:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Opportunity to work on diverse strategic challenges across the life sciences sector</li>
                    <li>Ability to bridge scientific expertise with business strategy</li>
                    <li>Collaborative team environment with exposure to industry leaders</li>
                    <li>Potential to influence strategic decisions that advance healthcare innovation</li>
                    <li>Structured approach to problem-solving and project management</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">How My Background Fits:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Deep scientific expertise in immunology and biotechnology</li>
                    <li>Experience analyzing complex datasets and extracting actionable insights</li>
                    <li>Strong communication skills developed through scientific presentations</li>
                    <li>Project management experience from leading research initiatives</li>
                    <li>Ability to quickly learn new scientific areas and technologies</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-[#3498db]">Equity Research</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">What Attracts Me:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Opportunity to evaluate scientific approaches and their commercial potential</li>
                    <li>Ability to influence investment decisions through rigorous analysis</li>
                    <li>Continuous learning about emerging technologies and therapeutic approaches</li>
                    <li>Combination of scientific evaluation and financial analysis</li>
                    <li>Independence and ownership of research coverage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">How My Background Fits:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Ability to critically evaluate scientific approaches and clinical data</li>
                    <li>Experience synthesizing complex information into clear narratives</li>
                    <li>Strong writing skills developed through scientific publications</li>
                    <li>Analytical mindset and attention to detail</li>
                    <li>Understanding of drug development process and challenges</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skill Development Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-[#2c3e50]">My Transition Strategy</h2>
          
          <div className="card">
            <h3 className="text-xl font-semibold mb-4 text-[#3498db]">Skill Development Plan</h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Skill Area</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Level</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Target Level</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Development Approach</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Business Fundamentals</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Basic</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Advanced</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <ul className="list-disc pl-5">
                        <li>MBA-level business courses (online)</li>
                        <li>Case studies from consulting firms</li>
                        <li>Industry reports and market analyses</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Financial Analysis</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Basic</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Intermediate</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <ul className="list-disc pl-5">
                        <li>Financial modeling courses</li>
                        <li>Biotech valuation workshops</li>
                        <li>Practice with company financial statements</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Case Interview Skills</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Novice</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Advanced</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <ul className="list-disc pl-5">
                        <li>Case interview preparation books</li>
                        <li>Practice with case partners</li>
                        <li>Mock interviews with feedback</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Industry Knowledge</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Intermediate</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Expert</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <ul className="list-disc pl-5">
                        <li>Industry conferences and webinars</li>
                        <li>Biotech/pharma news and publications</li>
                        <li>Informational interviews with professionals</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        
        {/* Portfolio Development Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-[#2c3e50]">Portfolio Development</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-[#3498db]">Consulting Portfolio</h3>
              <p className="mb-4">
                I am developing a consulting portfolio that demonstrates my ability to analyze business problems in the life sciences sector and provide strategic recommendations:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Case Studies:</strong> Creating sample case studies that showcase my approach to consulting problems, including market entry strategies, portfolio prioritization, and competitive analyses
                </li>
                <li>
                  <strong>Industry Analyses:</strong> Developing analyses of emerging trends in immunotherapy, spatial biology, and microbiome therapeutics
                </li>
                <li>
                  <strong>Slide Decks:</strong> Preparing professional presentations that communicate complex scientific concepts and strategic recommendations
                </li>
              </ul>
              <div className="mt-4">
                <Link href="/projects" className="text-[#3498db] hover:text-[#2980b9] font-medium">
                  View Sample Case Study →
                </Link>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-[#3498db]">Equity Research Portfolio</h3>
              <p className="mb-4">
                I am building an equity research portfolio that demonstrates my ability to evaluate biotechnology companies and their scientific approaches:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Company Analyses:</strong> Creating sample research reports on biotechnology companies, including scientific assessment, competitive positioning, and investment thesis
                </li>
                <li>
                  <strong>Therapeutic Area Overviews:</strong> Developing comprehensive overviews of therapeutic areas like immunotherapy, autoimmune diseases, and microbiome therapeutics
                </li>
                <li>
                  <strong>Clinical Data Analyses:</strong> Preparing critical evaluations of clinical trial results and their implications for company valuations
                </li>
              </ul>
              <div className="mt-4">
                <Link href="/projects" className="text-[#3498db] hover:text-[#2980b9] font-medium">
                  View Sample Research Report →
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Networking Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-[#2c3e50]">Networking & Professional Development</h2>
          
          <div className="card">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#3498db]">Professional Organizations</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Life Sciences Consulting Network:</strong> Participating in events and webinars focused on consulting careers
                  </li>
                  <li>
                    <strong>Biotechnology Innovation Organization (BIO):</strong> Attending industry conferences and networking events
                  </li>
                  <li>
                    <strong>CFA Institute:</strong> Exploring resources for equity research careers
                  </li>
                  <li>
                    <strong>PhD Career Development Programs:</strong> Engaging with university career services and alumni networks
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#3498db]">Informational Interviews</h3>
                <p className="mb-4">
                  I am actively conducting informational interviews with professionals in life sciences consulting and equity research to:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Gain insights into day-to-day responsibilities and career paths</li>
                  <li>Understand firm-specific cultures and hiring processes</li>
                  <li>Identify the most valuable skills and experiences for success</li>
                  <li>Build relationships with potential mentors and referrals</li>
                  <li>Refine my transition strategy based on industry feedback</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Link href="/contact" className="btn-primary">
            Contact Me to Discuss Opportunities
          </Link>
        </div>
      </div>
    </div>
  );
}
