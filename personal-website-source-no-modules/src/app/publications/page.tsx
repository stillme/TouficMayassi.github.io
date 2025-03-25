import Link from 'next/link';

export default function PublicationsPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-heading">Publications & Presentations</h1>
        
        {/* Primary Publications Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-[#2c3e50]">Primary Publications</h2>
          
          <div className="space-y-8">
            <div className="card hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <span className="inline-block px-3 py-1 bg-[#3498db] text-white text-sm font-semibold rounded-full mb-2">
                    Nature
                  </span>
                  <p className="text-gray-600">November 2024</p>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2 text-[#2c3e50]">Spatially restricted immune and microbiota-driven adaptation of the gut</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Authors:</strong> Toufic Mayassi, Chenhao Li, Åsa Segerstolpe, Toru Nakata, Eric M Brown, Paula Herbst, Daniel B Graham, and Ramnik J Xavier
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#3498db]">Business Relevance:</h4>
                    <p className="text-gray-700">
                      This study reveals how immune responses are spatially organized in the gut and influenced by the microbiome, with implications for developing targeted therapies for inflammatory bowel disease and other gastrointestinal disorders. The spatial mapping approach could inform precision medicine strategies for pharmaceutical companies developing microbiome-based therapeutics.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3498db]">Key Findings:</h4>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Identified distinct immune niches within the gut with specialized functions</li>
                      <li>Demonstrated how microbiome composition influences local immune responses</li>
                      <li>Developed novel spatial transcriptomics approaches for tissue analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <span className="inline-block px-3 py-1 bg-[#3498db] text-white text-sm font-semibold rounded-full mb-2">
                    Nature Immunology
                  </span>
                  <p className="text-gray-600">Under review, 2024</p>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2 text-[#2c3e50]">Multifaceted vγ4-btnl3/8 interaction impacts the composition and function of intraepithelial lymphocytes</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Authors:</strong> Benjamin D McDonald†, Hope D Anderson†, Toufic Mayassi†, Magdalena Justyniarska, Benhamin S Gully, Caroline Kaiser, Narutoshi Hibino, Andrew Koh, Jamie Rossjohn, Samantha Riesenfeld, and Bana Jabri
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#3498db]">Business Relevance:</h4>
                    <p className="text-gray-700">
                      This research elucidates molecular mechanisms regulating tissue-resident T cells, providing potential targets for immunotherapeutic interventions. The findings could inform drug discovery efforts for companies developing therapies for autoimmune diseases and cancer immunotherapies targeting the tumor microenvironment.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3498db]">Key Findings:</h4>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Characterized molecular interactions between γδ T cells and tissue-specific factors</li>
                      <li>Identified regulatory mechanisms controlling tissue-resident immune cell function</li>
                      <li>Demonstrated impact on intestinal immune homeostasis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <span className="inline-block px-3 py-1 bg-[#3498db] text-white text-sm font-semibold rounded-full mb-2">
                    Science Translational Medicine
                  </span>
                  <p className="text-gray-600">2023</p>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2 text-[#2c3e50]">Genetic vulnerability to healing reveals a spatially resolved epithelial restitution program</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Authors:</strong> Toru Nakata, Chenhao Li, Toufic Mayassi, Helen Lin, Åsa Segerstolpe, Emma Diamond, Tommaso Biancalani, Shreya Gaddam, and S Parkar
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#3498db]">Business Relevance:</h4>
                    <p className="text-gray-700">
                      This study identifies genetic factors influencing tissue healing, with implications for developing therapeutics that promote tissue repair. The findings could be valuable for biotechnology companies focused on regenerative medicine and wound healing applications.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3498db]">Key Findings:</h4>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Mapped spatial organization of epithelial repair mechanisms</li>
                      <li>Identified genetic factors influencing tissue healing efficiency</li>
                      <li>Developed potential therapeutic targets to enhance tissue repair</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Conference Presentations Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-[#2c3e50]">Conference Presentations</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-[#2c3e50]">Oral Presentations</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-semibold">Broad Institute Observatory Scientific Advisory Board Meeting</p>
                  <p className="text-gray-600">Cambridge, MA – 2022</p>
                  <p className="text-gray-700">"Molecular cartography reveals hard-wired and microbial regulated spatial regionalization of the gut"</p>
                </li>
                <li>
                  <p className="font-semibold">Keystone Symposia Conference on Tissue Immunity</p>
                  <p className="text-gray-600">Boulder, CO – 2020</p>
                  <p className="text-gray-700">"Insights into tissue-resident immunity and intraepithelial γδ biology from celiac disease"</p>
                </li>
                <li>
                  <p className="font-semibold">Rising Stars Symposium in Human Immunology</p>
                  <p className="text-gray-600">Chicago, IL – 2019</p>
                  <p className="text-gray-700">"Insights into γδ IEL biology from celiac disease"</p>
                </li>
                <li>
                  <p className="font-semibold">18th International Congress of Mucosal Immunology</p>
                  <p className="text-gray-600">Washington, D.C. – 2017</p>
                  <p className="text-gray-700">"Selecting the repertoire and functional niche of Vδ1 γδ T cells in health and disease"</p>
                </li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-[#2c3e50]">Poster Presentations</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-semibold">Gordon Research Conference on Immunochemistry and Immunobiology</p>
                  <p className="text-gray-600">West Dover, VT – 2018</p>
                  <p className="text-gray-700">"Chronic inflammation permanently reshapes the human tissue-resident γδ intraepithelial T cell compartment"</p>
                  <p className="text-[#3498db] font-medium">Best Poster Award Winner</p>
                </li>
                <li>
                  <p className="font-semibold">18th International Congress of Mucosal Immunology</p>
                  <p className="text-gray-600">Washington, D.C. – 2017</p>
                  <p className="text-gray-700">"Selecting the repertoire and functional niche of Vδ1 γδ T cells in health and disease"</p>
                </li>
                <li>
                  <p className="font-semibold">Autumn Immunology Conference</p>
                  <p className="text-gray-600">Chicago, IL – 2016</p>
                  <p className="text-gray-700">"The small intestine selects the T cell receptor repertoire and functional niche of Vδ1 γδ T cells in health and disease"</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Business Relevance Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-[#2c3e50]">Research Impact for Industry</h2>
          
          <div className="card">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#3498db]">Consulting Perspective</h3>
                <p className="mb-4">
                  My research provides valuable insights for life sciences consulting, particularly for projects involving:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Evaluation of novel immunotherapy approaches and their scientific merit</li>
                  <li>Assessment of microbiome-based therapeutic strategies</li>
                  <li>Analysis of spatial biology technologies and their applications</li>
                  <li>Strategic planning for R&D investments in autoimmune disease and inflammation</li>
                  <li>Competitive landscape analysis in the immunology therapeutic space</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#3498db]">Equity Research Perspective</h3>
                <p className="mb-4">
                  My scientific expertise enables me to evaluate biotechnology companies with:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Critical assessment of clinical-stage immunotherapy programs</li>
                  <li>Evaluation of scientific approaches and their likelihood of success</li>
                  <li>Analysis of emerging technologies in spatial biology and single-cell genomics</li>
                  <li>Identification of promising early-stage companies with novel approaches</li>
                  <li>Assessment of competitive positioning based on scientific differentiation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Link href="/skills" className="btn-primary">
            View My Skills
          </Link>
        </div>
      </div>
    </div>
  );
}
