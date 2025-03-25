import Link from 'next/link';

export default function ExperiencePage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-heading">Professional Experience</h1>
        
        {/* Professional Timeline Section */}
        <section className="mb-16">
          <div className="space-y-12">
            <div className="card">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-[#2c3e50]">Broad Institute of MIT and Harvard</h3>
                  <p className="text-gray-600">2020 – Present</p>
                  <p className="text-gray-600">Cambridge, MA</p>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <h4 className="text-lg font-semibold text-[#3498db] mb-2">Postdoctoral Associate</h4>
                  <p className="mb-4">Advisor: Ramnik Xavier</p>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold">Research Focus:</h5>
                      <p>Investigating spatial organization of immune responses in the gut and interactions with the microbiome.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold">Key Accomplishments:</h5>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Published in Nature on spatially restricted immune and microbiota-driven adaptation of the gut</li>
                        <li>Developed expertise in spatial transcriptomics technologies (10x Visium, Xenium, Slide-seq2)</li>
                        <li>Established computational pipelines for analysis of single-cell and spatial transcriptomic data</li>
                        <li>Mentored graduate students and research technicians</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold">Business Relevance:</h5>
                      <p>This research has implications for therapeutic targeting of tissue-specific immune responses and microbiome-based interventions, areas of significant interest for biotechnology companies developing precision medicines.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-[#2c3e50]">University of Chicago</h3>
                  <p className="text-gray-600">2019 – 2020</p>
                  <p className="text-gray-600">Chicago, IL</p>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <h4 className="text-lg font-semibold text-[#3498db] mb-2">Postdoctoral Associate</h4>
                  <p className="mb-4">Advisor: Bana Jabri</p>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold">Research Focus:</h5>
                      <p>Continued research on tissue-resident immunity and intraepithelial γδ T cell biology in celiac disease.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold">Key Accomplishments:</h5>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Presented research at Keystone Symposia Conference on Tissue Immunity</li>
                        <li>Participated in Rising Stars Symposium in Human Immunology</li>
                        <li>Contributed to manuscript on Vγ4-btnl3/8 interaction in intraepithelial lymphocytes</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold">Business Relevance:</h5>
                      <p>This work provided insights into mechanisms of autoimmune disease that could inform development of targeted therapies for celiac disease and other autoimmune conditions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-[#2c3e50]">University of Chicago</h3>
                  <p className="text-gray-600">2012 – 2018</p>
                  <p className="text-gray-600">Chicago, IL</p>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <h4 className="text-lg font-semibold text-[#3498db] mb-2">PhD Candidate, Committee on Immunology</h4>
                  <p className="mb-4">Advisor: Bana Jabri</p>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold">Research Focus:</h5>
                      <p>Investigated how dietary gluten reshapes the tissue-resident intraepithelial γδ T cell compartment in celiac disease.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold">Key Accomplishments:</h5>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Received Best Dissertation Award for Outstanding Performance in the Field of Immunology</li>
                        <li>Won Best Poster Award at Gordon Research Conference on Immunochemistry and Immunobiology</li>
                        <li>Presented research at multiple international conferences</li>
                        <li>Received NIH Immunology Training Grant (2012-2015)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold">Business Relevance:</h5>
                      <p>This research contributed to understanding fundamental mechanisms of immune dysregulation in response to environmental triggers, with implications for biomarker development and therapeutic intervention in autoimmune diseases.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Leadership & Mentoring Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-[#2c3e50]">Leadership & Mentoring Experience</h2>
          <div className="card">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#3498db]">Mentoring & Training</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Mentored 8 graduate students on experimental design, data analysis/interpretation, and scientific writing</li>
                  <li>Trained 3 graduate students, 5 research technicians, and 2 undergraduate students in laboratory techniques</li>
                  <li>Advised 2 research associates on independent projects</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#3498db]">Teaching & Outreach</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Teaching Assistant for Mucosal Immunology (University of Chicago, Spring 2015)</li>
                  <li>Teaching Assistant for Immunopathology (University of Chicago, Winter 2014)</li>
                  <li>Teaching Assistant for Biological Microscopy (Old Dominion University, Spring 2011)</li>
                  <li>Participated in University of Chicago committee on immunology graduate recruitment</li>
                  <li>Established and maintained journal club</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 text-[#3498db]">Business Relevance</h3>
              <p>
                These experiences demonstrate my ability to lead teams, manage complex projects, communicate complex scientific concepts, and develop talent—skills directly transferable to consulting and equity research roles where collaboration, mentoring junior team members, and clear communication are essential.
              </p>
            </div>
          </div>
        </section>
        
        {/* Awards & Recognition Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-[#2c3e50]">Awards & Recognition</h2>
          <div className="card">
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-[#f1c40f] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <div>
                  <h3 className="font-semibold">Best Dissertation Award - Outstanding Performance in the Field of Immunology</h3>
                  <p className="text-gray-600">University of Chicago, 2019 | $500</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-[#f1c40f] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <div>
                  <h3 className="font-semibold">Best Poster Award - Gordon Research Conference on Immunochemistry and Immunobiology</h3>
                  <p className="text-gray-600">2018 | $500</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-[#f1c40f] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <div>
                  <h3 className="font-semibold">NIH Immunology Training Grant</h3>
                  <p className="text-gray-600">2012 - 2015</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-[#f1c40f] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <div>
                  <h3 className="font-semibold">University of Chicago Graduate Council Travel Fund</h3>
                  <p className="text-gray-600">2017 | $600</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Link href="/publications" className="btn-primary">
            View My Publications
          </Link>
        </div>
      </div>
    </div>
  );
}
