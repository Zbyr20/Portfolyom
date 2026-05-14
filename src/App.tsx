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
  Zap,
  Box,
  Network
} from "lucide-react";

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-16">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-5xl md:text-7xl font-display uppercase tracking-tighter text-white"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-cyber-green font-mono text-sm mt-4 uppercase tracking-[0.3em]"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const MutfakCard = ({ icon: Icon, title, tech }: { icon: any; title: string; tech: string }) => (
  <motion.div 
    whileHover={{ y: -10, scale: 1.02 }}
    className="glass-panel p-8 rounded-[2rem] group transition-all hover:border-cyber-green/40 relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <Icon className="w-24 h-24" />
    </div>
    <div className="relative z-10">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-cyber-green">Yükleniyor...</span>
      </div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">{tech}</p>
    </div>
  </motion.div>
);

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-mesh">
      <div className="scanline pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-8 flex justify-between items-center">
        <motion.button 
          onClick={scrollToTop}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          className="font-display text-3xl tracking-tighter text-white hover:text-cyber-green transition-colors group"
        >
          ZA<span className="text-cyber-green group-hover:animate-pulse">_</span>
        </motion.button>
        
        <div className="hidden md:flex gap-12 text-[10px] font-mono uppercase tracking-[0.4em] text-gray-500">
          {['about', 'projects', 'contact'].map((item) => (
            <motion.a 
              key={item}
              href={`#${item}`} 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, color: "#00ff41" }}
              className="relative hover:text-white hover:text-glow-green transition-all group py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyber-green transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <h1 className="text-7xl md:text-9xl font-display uppercase leading-[0.8] tracking-tighter mb-8">
            Cyber <br />
            <span className="text-cyber-green">Security</span> <br />
            Explorer
          </h1>
          <p className="max-w-xl mx-auto text-gray-400 text-lg font-light tracking-wide leading-relaxed">
            Diyarbakır Ergani'den siber dünyanın derinliklerine uzanan bir yolculuk.
          </p>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12"
        >
          <ChevronDown className="w-6 h-6 text-cyber-green opacity-50" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionTitle subtitle="The Journey">Hakkımda</SectionTitle>
            <div className="space-y-8 text-xl text-gray-400 leading-relaxed font-light">
              <p>
                Diyarbakır Ergani'den siber güvenlik yolculuğuna çıkan, Java ve C# dillerinde uzmanlaşmaya çalışan, CCNA 1 eğitimi ile ağ dünyasının temellerini atan bir stajyer adayıyım.
              </p>
              <p>
                Teknoloji benim için sadece bir iş değil, bir keşif alanı. Sistemlerin nasıl çalıştığını anlamak ve onları daha güvenli hale getirmek en büyük motivasyonum.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="px-4 py-2 glass-panel rounded-full text-[10px] font-mono uppercase tracking-widest text-cyber-green">Java</div>
                <div className="px-4 py-2 glass-panel rounded-full text-[10px] font-mono uppercase tracking-widest text-cyber-blue">C#</div>
                <div className="px-4 py-2 glass-panel rounded-full text-[10px] font-mono uppercase tracking-widest text-white">CCNA 1</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-cyber-green/10 rounded-[3rem] rotate-6" />
            <div className="absolute inset-0 glass-panel rounded-[3rem] flex items-center justify-center">
              <Terminal className="w-40 h-40 text-cyber-green/20" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-40 px-8 max-w-7xl mx-auto">
        <SectionTitle subtitle="The Lab">Projelerim</SectionTitle>
        
        {/* Main Project */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-12 rounded-[3rem] mb-12 group hover:border-cyber-green/50 transition-all"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-cyber-green" />
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyber-green">Featured Project</span>
              </div>
              <h3 className="text-4xl font-display uppercase mb-6">Gelişim Takibi</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Kendi öğrenme sürecimi disipline etmek ve gelişimimi somut bir şekilde takip edebilmek için geliştirdiğim bir araç. Bir stajyer adayı olarak en büyük gücümün "öğrenmeyi öğrenmek" olduğuna inanıyorum.
              </p>
              <a 
                href="https://github.com/Zbyr20/GelisimTakibi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-cyber-green transition-colors group"
              >
                <Github className="w-5 h-5" />
                GitHub'da İncele
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
            <div className="aspect-video bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
              <Code2 className="w-24 h-24 text-white/10 group-hover:text-cyber-green/20 transition-colors" />
            </div>
          </div>
        </motion.div>

        {/* New Project: Okul Öncesi Eğitmeni */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-12 rounded-[3rem] mb-12 group hover:border-cyber-blue/50 transition-all"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 aspect-video bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
              <Layers className="w-24 h-24 text-white/10 group-hover:text-cyber-blue/20 transition-colors" />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-cyber-blue" />
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyber-blue">Web Platform</span>
              </div>
              <h3 className="text-4xl font-display uppercase mb-6">Okul Öncesi Eğitmeni</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Okul öncesi eğitimciler için tasarlanmış, modern ve kullanıcı dostu bir kaynak paylaşım platformu. Eğitim materyallerine hızlı erişim ve topluluk etkileşimi odaklı bir çalışma.
              </p>
              <a 
                href="https://okul-ncesi-egitmeni.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-cyber-blue transition-colors group"
              >
                <ExternalLink className="w-5 h-5" />
                Siteyi Ziyaret Et
                <ChevronDown className="w-4 h-4 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* New Project: Celestial Dashboard Hub */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-12 rounded-[3rem] mb-12 group hover:border-cyber-red/50 transition-all"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-cyber-red" />
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyber-red">Admin Dashboard</span>
              </div>
              <h3 className="text-4xl font-display uppercase mb-6">Celestial Dashboard Hub</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Veri görselleştirme ve yönetim süreçlerini tek bir merkezde toplayan, göksel (celestial) temalı modern bir dashboard arayüzü. Karmaşık verileri şık ve anlaşılır grafiklerle sunan, kullanıcı deneyimi odaklı bir kontrol paneli.
              </p>
              <a 
                href="https://celestial-dashboard-hub.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-cyber-red transition-colors group"
              >
                <ExternalLink className="w-5 h-5" />
                Dashboard'u Aç
                <ChevronDown className="w-4 h-4 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
            <div className="aspect-video bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
              <Cpu className="w-24 h-24 text-white/10 group-hover:text-cyber-red/20 transition-colors" />
            </div>
          </div>
        </motion.div>

        {/* New Project: BeCyber */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-12 rounded-[3rem] mb-24 group hover:border-cyber-green/50 transition-all"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 aspect-video bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
              <Shield className="w-24 h-24 text-white/10 group-hover:text-cyber-green/20 transition-colors" />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-cyber-green" />
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyber-green">Learning Platform</span>
              </div>
              <h3 className="text-4xl font-display uppercase mb-6">BeCyber</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Sıfırdan uzmanlığa siber güvenlik yolculuğunu destekleyen, Cisco sertifika hiyerarşisini takip eden interaktif bir öğrenme ve not alma platformu. Teorik bilgilerle pratik laboratuvar çalışmalarını birleştiren bir wiki altyapısı.
              </p>
              <a 
                href="https://be-cyber-cquu.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-cyber-green transition-colors group"
              >
                <ExternalLink className="w-5 h-5" />
                Platformu Keşfet
                <ChevronDown className="w-4 h-4 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Mutfaktaki Isler */}
        <div className="mb-12">
          <h3 className="text-2xl font-display uppercase tracking-widest mb-12 flex items-center gap-4">
            <Box className="w-6 h-6 text-cyber-blue" />
            Mutfaktaki İşler
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <MutfakCard icon={Gamepad2} title="Unity" tech="Game Engine" />
            <MutfakCard icon={Box} title="Blender" tech="3D Modeling" />
            <MutfakCard icon={Network} title="Packet Tracer" tech="Network Simulation" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-8">
        <div className="max-w-4xl mx-auto glass-panel p-16 rounded-[4rem] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-green to-transparent opacity-30" />
          <SectionTitle subtitle="Let's Connect">İletişim</SectionTitle>
          <p className="text-gray-400 text-xl mb-12">
            Staj fırsatları veya sadece teknoloji üzerine sohbet etmek için bana ulaşabilirsiniz.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="mailto:zubeyiraslan828@gmail.com"
              className="flex items-center gap-4 px-10 py-5 bg-cyber-green text-black font-bold rounded-3xl hover:shadow-[0_0_30px_rgba(0,255,65,0.3)] transition-all"
            >
              <Mail className="w-6 h-6" />
              Email Gönder
            </motion.a>
            <div className="flex gap-4">
              <motion.a 
                whileHover={{ y: -5 }}
                href="https://www.linkedin.com/in/z%C3%BCbeyir-aslan-8753b3335/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 glass-panel rounded-3xl flex items-center justify-center hover:text-cyber-green transition-colors"
              >
                <Linkedin className="w-7 h-7" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5 }}
                href="https://github.com/Zbyr20" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 glass-panel rounded-3xl flex items-center justify-center hover:text-cyber-green transition-colors"
              >
                <Github className="w-7 h-7" />
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-white/5 text-center text-gray-600 text-[10px] font-mono uppercase tracking-[0.5em]">
        <p>© 2026 ZA_ | Ergani to the World</p>
      </footer>
    </div>
  );
}
