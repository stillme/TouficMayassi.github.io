import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-heading">Projects & Portfolio</h1>
        
        {/* Research Projects Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-[#2c3e50]">Research Projects</h2>
          
          <div className="space-y-8">
            <div className="card hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-[#2c3e50]">Spatial Mapping of Gut Immune Responses</h3>
                  <p className="text-gray-600 mb-2">Broad Institute of MIT and Harvard</p>
                  <p className="text-gray-600">2020 - Present</p>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#3498db] mb-2">Project Overview:</h4>
                    <p className="text-gray-700">
                      Developed and applied spatial transcriptomics approaches to map immune cell populations and their interactions across different regions of the intestine, revealing how spatial organization influences immune function and response to microbiome.
                    </p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#3498db] mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Established novel computational pipelines for integrating single-cell and spatial transcriptomic data</li>
                      <li>Identified distinct immune niches with specialized functions in different intestinal regions</li>
                      <li>Characterized region-specific interactions between immune cells and microbiome</li>
                      <li>Published findings in Nature (2024)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3498db] mb-2">Business Relevance:</h4>
                    <p className="text-gray-700">
                      This project demonstrates my ability to lead complex research initiatives, integrate cutting-edge technologies, and extract actionable insights from large datasets—skills directly applicable to consulting and equity research roles requiring analysis of scientific approaches and therapeutic opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-[#2c3e50]">Tissue-Resident γδ T Cells in Celiac Disease</h3>
                  <p className="text-gray-600 mb-2">University of Chicago</p>
                  <p className="text-gray-600">2012 - 2020</p>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#3498db] mb-2">Project Overview:</h4>
                    <p className="text-gray-700">
                      Investigated how dietary gluten permanently reshapes the tissue-resident intraepithelial γδ T cell compartment in celiac disease, providing insights into mechanisms of autoimmunity and tissue-specific immune responses.
                    </p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#3498db] mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Characterized T cell receptor repertoire changes in response to environmental triggers</li>
                      <li>Identified molecular mechanisms regulating tissue-resident immune cell function</li>
                      <li>Developed novel cell isolation methods for studying rare immune cell populations</li>
                      <li>Received Best Dissertation Award for this research</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3498db] mb-2">Business Relevance:</h4>
                    <p className="text-gray-700">
                      This project showcases my ability to tackle complex scientific questions, develop innovative methodologies, and translate findings into potential therapeutic applications—valuable skills for evaluating biotechnology companies and advising pharmaceutical clients on autoimmune disease programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Consulting Portfolio Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-[#2c3e50]">Consulting Portfolio</h2>
          
          <div className="card">
            <h3 className="text-xl font-semibold mb-4 text-[#3498db]">Sample Case Study: Immunotherapy Market Entry Strategy</h3>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Project Overview:</h4>
              <p className="text-gray-700 mb-4">
                A hypothetical case study demonstrating my approach to a consulting engagement for a biotechnology company evaluating market entry for a novel γδ T cell-based immunotherapy platform.
              </p>
              
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h5 className="font-semibold mb-2">Client Challenge:</h5>
                <p className="text-gray-700">
                  A clinical-stage biotechnology company with a proprietary γδ T cell engineering platform needs to determine which indication(s) to prioritize for their lead asset and how to position their technology in the competitive immuno-oncology landscape.
                </p>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Approach & Analysis:</h4>
              <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                <li>
                  <strong>Market Assessment:</strong> Analyzed market size, growth projections, and competitive landscape across potential oncology indications
                </li>
                <li>
                  <strong>Scientific Evaluation:</strong> Assessed biological rationale for γδ T cell therapy in different tumor types based on immune microenvironment characteristics
                </li>
                <li>
                  <strong>Competitive Positioning:</strong> Compared client's technology to other cell therapy approaches (CAR-T, TILs, NK cells) on efficacy, safety, manufacturing, and commercial parameters
                </li>
                <li>
                  <strong>Clinical Development Strategy:</strong> Evaluated clinical trial design options, including patient selection strategies and biomarker development
                </li>
                <li>
                  <strong>Commercial Model:</strong> Developed revenue projections and market penetration scenarios for prioritized indications
                </li>
              </ol>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Recommendations & Impact:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Prioritized two lead indications (colorectal cancer and pancreatic cancer) based on unmet need, scientific rationale, and competitive positioning</li>
                <li>Recommended biomarker strategy focusing on tumor microenvironment characteristics to enable patient selection</li>
                <li>Proposed strategic partnerships with diagnostic companies for companion diagnostic development</li>
                <li>Outlined clinical development roadmap with go/no-go decision points and resource requirements</li>
              </ul>
            </div>
            
            <div className="mt-6 text-center">
              <Link href="/transition" className="btn-secondary">
                View Full Case Study
              </Link>
            </div>
          </div>
        </section>
        
        {/* Equity Research Portfolio Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-[#2c3e50]">Equity Research Portfolio</h2>
          
          <div className="card">
            <h3 className="text-xl font-semibold mb-4 text-[#3498db]">Sample Analysis: Clinical-Stage Immunotherapy Company</h3>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Research Overview:</h4>
              <p className="text-gray-700 mb-4">
                A hypothetical equity research report demonstrating my approach to analyzing a clinical-stage biotechnology company developing novel immunotherapies for autoimmune diseases.
              </p>
              
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h5 className="font-semibold mb-2">Company Profile:</h5>
                <p className="text-gray-700">
                  ImmunoTarget Therapeutics (Hypothetical) - A clinical-stage biotechnology company with a pipeline of small molecule and antibody therapeutics targeting tissue-resident immune cells for the treatment of autoimmune diseases.
                </p>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Analysis Components:</h4>
              <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                <li>
                  <strong>Scientific Assessment:</strong> Evaluation of the company's therapeutic approach, mechanism of action, and supporting preclinical data
                </li>
                <li>
                  <strong>Clinical Pipeline Analysis:</strong> Review of ongoing clinical trials, including study design, patient populations, and interim results
                </li>
                <li>
                  <strong>Competitive Landscape:</strong> Comparison with other approaches targeting similar pathways or indications
                </li>
                <li>
                  <strong>Market Opportunity:</strong> Analysis of target indications, patient populations, and pricing considerations
                </li>
                <li>
                  <strong>Financial Analysis:</strong> Review of cash position, burn rate, and financing needs
                </li>
                <li>
                  <strong>Risk Assessment:</strong> Identification of key clinical, regulatory, and commercial risks
                </li>
              </ol>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Investment Thesis & Valuation:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Positive assessment of lead program targeting tissue-resident T cells in celiac disease based on strong preclinical data and Phase 1 safety profile</li>
                <li>Concerns about second program due to challenging competitive landscape and limited differentiation</li>
                <li>Valuation model based on risk-adjusted NPV of pipeline programs with sensitivity analysis for key clinical milestones</li>
                <li>Recommendation based on current valuation relative to peer companies and upcoming catalysts</li>
              </ul>
            </div>
            
            <div className="mt-6 text-center">
              <Link href="/transition" className="btn-secondary">
                View Full Analysis
              </Link>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Link href="/transition" className="btn-primary">
            Learn About My Career Transition
          </Link>
        </div>
      </div>
    </div>
  );
}
