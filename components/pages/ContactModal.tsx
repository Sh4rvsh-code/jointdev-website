'use client';

import { useUIStore } from '@/stores/useUIStore';
import { PageTransition } from '@/components/PageTransition';
import { WavyBackground } from '@/components/ui/wavy-background';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { SiX, SiGithub, SiLinkedin } from 'react-icons/si';

export function ContactModal() {
  const { activePage, goBack } = useUIStore();
  const isActive = activePage === 'contact';
  
  return (
    <PageTransition isActive={isActive} transitionType="fade">
      <WavyBackground 
        className="w-full"
        containerClassName="h-full"
        colors={["#a78bfa", "#c4b5fd", "#818cf8", "#6366f1", "#8b5cf6"]}
        waveWidth={50}
        backgroundFill="var(--bg-primary)"
        blur={10}
        speed="fast"
        waveOpacity={0.5}
      >
        <div className="h-full overflow-y-auto p-3 sm:p-4">
          <div className="h-full w-full max-w-2xl mx-auto flex items-center justify-center py-6 sm:py-8">
            
            {/* Minimalistic Glass Card Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
              className="relative w-full"
            >
              {/* Subtle ambient glow */}
              <div className="absolute -inset-20 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 blur-3xl" />

              {/* Main Content - Clean Glass Card */}
              <div className="relative z-10 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 sm:p-7 shadow-2xl">
                
                {/* Compact Header */}
                <div className="text-center mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.6, delay: 0.1 }}
                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20 mb-3"
                  >
                    <MessageCircle className="w-7 h-7 text-purple-300" />
                  </motion.div>
                  
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1.5">
                    Let's Connect
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-400">
                    Ready to bring your ideas to life?
                  </p>
                </div>
                
                {/* Contact Methods - Clean Minimal Cards */}
                <div className="space-y-2 mb-5">
                  {/* Email */}
                  <motion.a
                    href="mailto:hello@jointdev.studio"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.01, x: 2 }}
                    className="group relative block p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/40 overflow-hidden transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 text-purple-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-neutral-500 mb-0.5">Email</div>
                        <div className="text-white text-sm font-medium truncate">
                          hello@jointdev.studio
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-purple-400 transition-all opacity-0 group-hover:opacity-100" />
                    </div>
                  </motion.a>

                  {/* Phone */}
                  <motion.a
                    href="tel:+1234567890"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.01, x: 2 }}
                    className="group relative block p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/40 overflow-hidden transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-blue-300" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-neutral-500 mb-0.5">Phone</div>
                        <div className="text-white text-sm font-medium">
                          +1 (234) 567-890
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-blue-400 transition-all opacity-0 group-hover:opacity-100" />
                    </div>
                  </motion.a>

                  {/* Location */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.01, x: 2 }}
                    className="group relative block p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/40 overflow-hidden transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-emerald-300" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-neutral-500 mb-0.5">Location</div>
                        <div className="text-white text-sm font-medium">
                          Bhubaneswar, Odisha, India
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Minimal Divider */}
                <div className="flex items-center gap-2 my-5">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="w-1 h-1 rounded-full bg-purple-400/50" />
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                {/* Social Links - Compact */}
                <div className="text-center">
                  <p className="text-xs text-neutral-500 mb-2.5">Connect with us</p>
                  <div className="flex justify-center gap-2">
                    {[
                      { icon: SiX, href: '#' },
                      { icon: SiGithub, href: '#' },
                      { icon: SiLinkedin, href: '#' },
                    ].map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={index}
                          href={social.href}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.05, type: "spring" }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white/10"
                        >
                          <Icon className="w-4 h-4 text-white/80" />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>

                {/* Response Badge - Subtle */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mt-5 p-2.5 rounded-lg bg-purple-500/5 border border-purple-400/10"
                >
                  <p className="text-xs text-center text-purple-300/70">
                    ⚡ Response within 24 hours
                  </p>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </WavyBackground>
    </PageTransition>
  );
}
