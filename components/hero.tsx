'use client';

import Link from "next/link";
import { ArrowUpRight, Clock3, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

const HERO_IMAGE = "https://sendgiftstopakistan.ca/cdn/shop/files/1-dozen-12-pcs-ka-creamy-aromatic-aur-elegant-dessert-yeh-rasmalai-ka-selection-reputable-vendors-ki-taraf-se-curated-kiya-gaya-hai-jo-apni-quality-aur-consistency-ke-liye-jaane-jaat.png?width=1400";

export default function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero-grid-noise"/>
    <div className="hero-copy">
      <div className="eyebrow"><span className="live-dot"/> NIRAALA-SWEETS · PAKISTAN</div>
      <div className="hero-index"><span>01</span><i/> THE HOUSE COLLECTION</div>
      <h1 id="hero-title">A little<br/><em>niraala magic.</em></h1>
      <p className="hero-lede">Classic Pakistani mithai, freshly prepared in small batches and finished with a refined touch for gifting, celebrations and everyday cravings.</p>
      <div className="hero-actions"><Link href="/menu" className="primary-button">Explore our sweets <ArrowUpRight size={17}/></Link><Link href="/menu?category=boxes" className="secondary-button">Shop gift boxes</Link></div>
      <div className="hero-proof-row"><span><ShieldCheck size={14}/> Freshly prepared</span><span className="proof-separator"/><span><Clock3 size={14}/> Same-day local dispatch</span></div>
    </div>
    <motion.div className="hero-stage" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
      <div className="stage-number">01 / HOUSE FAVOURITE</div>
      <div className="hero-orbit orbit-a"/><div className="hero-orbit orbit-b"/><div className="hero-orbit-dot"/>
      <motion.div className="hero-food-card" animate={{rotateY:[0,2,0], y:[0,-6,0]}} transition={{duration:7,repeat:Infinity,ease:"easeInOut"}}>
        <img src={HERO_IMAGE} alt="Niraala-Sweets premium gulab jamun" className="hero-burger" onError={(e)=>e.currentTarget.src="/food-fallback.svg"} fetchPriority="high"/>
        <div className="hero-photo-shine"/>
        <div className="hero-card-meta"><span>GULAB JAMUN · HOUSE SIGNATURE</span><strong>Rs. 1,500</strong></div>
      </motion.div>
      <div className="hero-side-note note-top"><Sparkles size={14}/> <span>khoya / rose / pistachio</span></div>
      <div className="hero-side-note note-bottom"><span>HANDCRAFTED DAILY</span><ArrowUpRight size={16}/></div>
      <div className="eta-card"><span className="eta-icon"><Clock3 size={16}/></span><small>PREPARATION</small><strong>FRESH</strong><em>EVERY DAY</em></div>
    </motion.div>
  </section>;
}
