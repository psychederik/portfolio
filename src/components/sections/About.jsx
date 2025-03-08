import { RevealOnScroll } from '../RevealOnScroll';

export const About = () => {
   const frontendSkills = ['React', 'JavaScript', 'HTML', 'CSS', 'TailwindCSS'];
   const backendSkills = ['NodeJS', 'MongoDB', 'Python', 'AWS', 'GraphQL'];
   return (
      <section
         id="about"
         className="min-h-screen flex items-center justify-center py-20"
      >
         <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
               <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
                  About Me
               </h2>

               <div className="rounded-xl p-8 border-white/10 border ">
                  <p className="text-gray-300 mb-6">
                     Passionate developer with expertise in kekw, building
                     scalable memes, and innovating the latest ROFLs.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div
                        className="rounded-xl p-6 border border-transparent hover:border-white/10 
            transition-all duration-800"
                     >
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                           {frontendSkills.map((tech, key) => (
                              <span
                                 key={key}
                                 className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                              >
                                 {tech}
                              </span>
                           ))}
                        </div>
                     </div>

                     <div
                        className="rounded-xl p-6 border border-transparent hover:border-white/10 
            transition-all duration-800"
                     >
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                           {backendSkills.map((tech, key) => (
                              <span
                                 key={key}
                                 className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                              >
                                 {tech}
                              </span>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
               <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                     <div className="p-6 rounded-xl  border border-white/10">
                        <h3 className="text-xl font-bold mb-4">📑 Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                           <li>
                              <strong>BS in Nada</strong> - XYZ Uni (2016-2033)
                           </li>
                           <li>
                              Relevant Coursework: Data Structures, Web
                              Development, Cloud Computing
                           </li>
                        </ul>
                     </div>
                     <div className="p-6 rounded-xl  border border-white/10">
                        <h3 className="text-xl font-bold mb-4">
                           💼 Work History
                        </h3>
                        <div className="space-y-4 text-gray-300">
                           <div>
                              <h4>
                                 Software Engineer at ABC Corp (2020-Present)
                              </h4>
                              <p>
                                 Developed and maintained microservices for
                                 cloud-based applications.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </RevealOnScroll>
      </section>
   );
};
