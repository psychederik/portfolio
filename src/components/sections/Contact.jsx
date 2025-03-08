import { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import emailjs from 'emailjs-com';

export const Contact = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
   });

   const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
   const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
   const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

   const handleSubmit = (e) => {
      e.preventDefault();

      emailjs
         .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
         .then((result) => {
            alert('Message Sent!');
            setFormData({ name: '', email: '', message: '' });
         })
         .catch(() => alert('Oops! Something went wrong. Please try again.'));
   };

   return (
      <section
         id="contact"
         className="min-h-screen flex items-center justify-center py-20"
      >
         <RevealOnScroll>
            <div className="px-4 w-150">
               <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
                  Get in Touch
               </h2>
               <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="relative">
                     <input
                        type="text"
                        id="name"
                        name="from_name"
                        required
                        value={formData.name}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/50"
                        placeholder="What is your name?"
                        onChange={(e) =>
                           setFormData({ ...formData, name: e.target.value })
                        }
                     />
                  </div>
                  <div className="relative">
                     <input
                        type="email"
                        id="email"
                        name="from_email"
                        required
                        value={formData.email}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/50"
                        placeholder="What is your email?"
                        onChange={(e) =>
                           setFormData({ ...formData, email: e.target.value })
                        }
                     />
                  </div>
                  <div className="relative">
                     <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        rows={5}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/50"
                        placeholder="Write to me!"
                        onChange={(e) =>
                           setFormData({ ...formData, message: e.target.value })
                        }
                     />
                  </div>
                  <button
                     type="submit"
                     className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-blue-600"
                  >
                     Send Message
                  </button>
               </form>
            </div>
         </RevealOnScroll>
      </section>
   );
};
