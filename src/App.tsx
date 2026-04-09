/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { 
  Shield, 
  Gamepad2, 
  Terminal, 
  Code2, 
  Cpu, 
  Lock, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  ChevronDown,
  Layers,
  Zap
} from "lucide-react";

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-display uppercase tracking-tighter text-white"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-cyber-green font-mono text-sm mt-2 uppercase tracking-widest"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const SkillCard = ({ icon: Icon, title, skills }: { icon: any; title: string; skills: string[] }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-panel p-6 rounded-xl group transition-all hover:border-cyber-green/50"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-cyber-green/10 rounded-lg group-hover:bg-cyber-green/20 transition-colors">
        <Icon className="w-6 h-6 text-cyber-green" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-gray-400 group-hover:text-white transition-colors">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const ProjectCard = ({ title, description, tags, type }: { title: string; description: string; tags: string[]; type: 'game' | 'security' }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-panel overflow-hidden rounded-2xl group"
  >
    <div className="aspect-video bg-white/5 relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      {type === 'game' ? (
        <Gamepad2 className="w-12 h-12 text-white/20 group-hover:text-cyber-green transition-all group-hover:scale-110" />
      ) : (
        <Shield className="w-12 h-12 text-white/20 group-hover:text-cyber-blue transition-all group-hover:scale-110" />
      )}
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-bold group-hover:text-cyber-green transition-colors">{title}</h3>
        <ExternalLink className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer" />
      </div>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-cyber-green/70">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen selection:bg-cyber-green selection:text-black">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#1a1a1a,transparent)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center backdrop-blur-sm bg-cyber-bg/50 border-b border-white/5">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-display text-2xl tracking-tighter"
        >
          ZA<span className="text-cyber-green">.</span>
        </motion.div>
        <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-gray-400">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyber-green transition-colors">
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <motion.div style={{ y, opacity }} className="z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full border border-cyber-green/30 bg-cyber-green/5 text-cyber-green text-[10px] font-mono uppercase tracking-[0.3em] mb-8"
          >
            Available for Internships
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-display uppercase leading-[0.85] tracking-tighter mb-8"
          >
            Cyber <span className="text-cyber-green">&</span> <br />
            Game Dev
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed"
          >
            Diyarbakır'ın Ergani ilçesinden siber güvenliğin derinliklerine ve oyun dünyasının sınırsızlığına uzanan bir yolculuk.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-600">Scroll to explore</span>
          <ChevronDown className="w-4 h-4 text-cyber-green animate-bounce" />
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-green/5 rounded-full blur-[120px] pointer-events-none" />
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto relative">
        <SectionTitle subtitle="My Story">Hakkımda</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 items-stretch mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-[32px] border-cyber-blue/20 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-cyber-blue/10 rounded-xl">
                <Shield className="w-8 h-8 text-cyber-blue" />
              </div>
              <div>
                <h3 className="text-2xl font-display uppercase tracking-tight">Kariyer Hedefim</h3>
                <p className="text-cyber-blue font-mono text-[10px] uppercase tracking-widest">Siber Güvenlik</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed flex-grow">
              Kariyer yolculuğumu stratejik ve kritik bir alanda, Siber Güvenlik üzerine inşa etmeye karar verdim. Asıl hedefim sistemlerin güvenliğini sağlamak ve siber dünyadaki tehditlere karşı savunma geliştirmek. Şu an bu alanda kendimi eğitmekle meşgulüm ve öğrendiklerimi sahada uygulayabileceğim bir staj arıyorum.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-[32px] border-cyber-green/20 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-cyber-green/10 rounded-xl">
                <Gamepad2 className="w-8 h-8 text-cyber-green" />
              </div>
              <div>
                <h3 className="text-2xl font-display uppercase tracking-tight">Yaratıcı Yanım</h3>
                <p className="text-cyber-green font-mono text-[10px] uppercase tracking-widest">Oyun & Hobi</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed flex-grow">
              Diyarbakırlıyım, ailem Ergani’de yaşıyor. Kendimi bildim bileli sıkı bir oyuncuyum; oyunlar benim için hem bir hobi hem de dijital dünyayla tanışma vesilem oldu. Oyun oynamayı ve oyun geliştirmeyi seviyorum; bu benim yaratıcı deşarj noktam ve teknolojiye olan tutkumun kaynağı.
            </p>
          </motion.div>
        </div>

        {/* Why Me Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-10 rounded-[40px] border-white/10 bg-gradient-to-br from-white/5 to-transparent"
        >
          <div className="flex items-center gap-4 mb-6">
            <Zap className="w-6 h-6 text-cyber-green" />
            <h3 className="text-2xl font-display uppercase tracking-tight">Neden Ben?</h3>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed italic">
            "Diyarbakır Ergani'de yaşıyorum ve kariyerimi siber güvenlik alanında inşa etmek istiyorum. Bu yolda ilk adımımı CCNA 1 eğitimini tamamlayarak attım. Ağ sistemlerinin nasıl çalıştığını anlamak benim için çok önemli. Aynı zamanda Java ve C# dilleriyle yazılımın mutfağını öğreniyorum. Boş zamanlarımda Blender ve Unity ile uğraşmak teknik bakış açımı genişletiyor. Şu an en büyük motivasyonum, öğrendiğim bu teorik bilgileri bir staj programı kapsamında pratiğe dökebilmek."
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-white/[0.02] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Technical Stack">Yetenekler</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard 
              icon={Code2} 
              title="Yazılım ve Programlama" 
              skills={["Java", "C#", "Algoritma Mantığı", "OOP"]} 
            />
            <SkillCard 
              icon={Layers} 
              title="Ağ Teknolojileri" 
              skills={["CCNA 1", "Cisco Packet Tracer", "IP Yapılandırma", "Ağ Topolojileri"]} 
            />
            <SkillCard 
              icon={Cpu} 
              title="Yaratıcı ve Teknik Araçlar" 
              skills={["Unity", "Blender", "3D Modelleme", "Oyun Mekanikleri"]} 
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-20">
          <SectionTitle subtitle="Completed Work">Projelerim</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel overflow-hidden rounded-3xl group border-cyber-green/20"
            >
              <div className="aspect-video bg-cyber-green/5 relative flex items-center justify-center overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Terminal className="w-16 h-16 text-cyber-green/30 group-hover:text-cyber-green transition-all group-hover:scale-110" />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-cyber-green transition-colors">Gelişim Takibi</h3>
                  <a href="https://github.com/Zbyr20/GelisimTakibi" target="_blank" rel="noopener noreferrer">
                    <Github className="w-6 h-6 text-gray-500 hover:text-white transition-colors" />
                  </a>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Bu proje, kendi öğrenme sürecimi disipline etmek ve gelişimimi somut bir şekilde takip edebilmek için geliştirdiğim bir araç. Bir stajyer adayı olarak en büyük gücümün "öğrenmeyi öğrenmek" ve disiplinli çalışmak olduğuna inanıyorum; bu uygulama da bu yaklaşımımın bir ürünü.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Java", "C#", "Disiplin", "Öğrenme Takibi"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-cyber-green/10 rounded-lg text-[10px] font-mono uppercase tracking-widest text-cyber-green">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div>
          <SectionTitle subtitle="Learning in Progress">Mutfaktaki İşler</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-2xl border-white/5 hover:border-cyber-blue/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-5 h-5 text-cyber-blue" />
                <h4 className="font-bold text-lg">Ağ Simülasyonları</h4>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Packet Tracer üzerinde farklı ağ topolojileri kurarak cihazlar arası haberleşme ve güvenlik konfigürasyonları üzerine pratik yapıyorum.
              </p>
              <div className="text-[10px] font-mono text-cyber-blue uppercase tracking-widest">Cisco Packet Tracer</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-6 rounded-2xl border-white/5 hover:border-cyber-green/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <Gamepad2 className="w-5 h-5 text-cyber-green" />
                <h4 className="font-bold text-lg">Oyun Dünyası</h4>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Unity ve Blender ile hobi olarak oyun dünyasını kurcalıyorum. 3D modeller oluşturup onları basit mekaniklerle canlandırmak teknik bakış açımı geliştiriyor.
              </p>
              <div className="text-[10px] font-mono text-cyber-green uppercase tracking-widest">Unity & Blender</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-6 rounded-2xl border-white/5 hover:border-cyber-red/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-cyber-red" />
                <h4 className="font-bold text-lg">Siber Savunma</h4>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Temel ağ bilgilerimi siber güvenlik perspektifiyle birleştirerek, sistemlerin nasıl korunabileceği üzerine teorik ve pratik araştırmalar yapıyorum.
              </p>
              <div className="text-[10px] font-mono text-cyber-red uppercase tracking-widest">Cyber Security Path</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto glass-panel p-12 rounded-[40px] text-center relative z-10">
          <SectionTitle subtitle="Get in Touch">İletişim</SectionTitle>
          <p className="text-gray-400 mb-12 text-lg">
            Staj fırsatları, projeler veya sadece teknoloji üzerine sohbet etmek için bana ulaşabilirsiniz.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:zubeyiraslan828@gmail.com"
              className="flex items-center gap-3 px-8 py-4 bg-cyber-green text-black font-bold rounded-2xl hover:bg-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Gönder
            </motion.a>
            <div className="flex gap-4">
              <motion.a 
                whileHover={{ y: -5 }}
                href="https://www.linkedin.com/in/z%C3%BCbeyir-aslan-8753b3335/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 glass-panel rounded-2xl flex items-center justify-center hover:text-cyber-green transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5 }}
                href="https://github.com/Zbyr20" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 glass-panel rounded-2xl flex items-center justify-center hover:text-cyber-green transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>
        
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-green/5 rounded-full blur-[100px] pointer-events-none" />
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center text-gray-600 text-[10px] font-mono uppercase tracking-[0.2em]">
        <p>© 2026 Crafted with <Zap className="w-3 h-3 inline text-cyber-green mx-1" /> for the future</p>
      </footer>
    </div>
  );
}
