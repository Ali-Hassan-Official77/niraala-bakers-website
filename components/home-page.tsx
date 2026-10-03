'use client';

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock3, MapPin, Plus, Sparkles, ShieldCheck, Gift, Truck } from "lucide-react";
import { motion } from "motion/react";
import { categories, offers, products } from "@/lib/data";
import { ProductCard } from "./product-card";
import Hero from "./hero";
import { DeliveryBar, MobileNav, SiteHeader } from "./site-header";
import { useApp } from "./providers";

export function HomePage() {
  const { toast } = useApp();
  const featured = products.filter(p => p.popular).slice(0, 3);
  return <main>
    <SiteHeader/><DeliveryBar/>
    <div className="page-shell">
      <Hero/>
      <section className="trust-strip">
        {[[ShieldCheck,"Pure ingredients","No shortcuts in the kitchen"],[Sparkles,"Fresh batches","Prepared in small daily batches"],[Gift,"Gift-ready","Premium presentation included"],[Truck,"Pakistan delivery","Careful dispatch & packing"]].map(([Icon,title,sub])=>{
          const I=Icon as typeof ShieldCheck; return <div key={title as string}><I size={19}/><div><b>{title as string}</b><span>{sub as string}</span></div></div>
        })}
      </section>

      <section className="section" id="story">
        <div className="section-heading"><div><span className="section-kicker">01 / EXPLORE THE HOUSE</span><h2>Start with a sweet craving.</h2></div><Link href="/menu">View collection <ArrowUpRight size={16}/></Link></div>
        <div className="category-grid">{categories.map((c,i)=><Link key={c.id} href={`/menu?category=${c.id}`} className="category-card" style={{"--cat-accent":c.accent} as React.CSSProperties}><span className="category-number">0{i+1}</span><span className="category-icon">{c.icon}</span><div><h3>{c.name}</h3><p>{c.note}</p></div><ArrowUpRight size={17} className="category-arrow"/></Link>)}</div>
      </section>

      <section className="signature-section">
        <div className="signature-copy"><span className="section-kicker">02 / THE NIRAALA EDIT</span><h2>Heritage.<br/><em>Refined.</em></h2><p>We keep the soul of Pakistani mithai intact while giving every box a cleaner, more considered finish. From first bite to final presentation, the details matter.</p><Link href="/menu" className="text-link">Explore the complete collection <ArrowRight size={15}/></Link><div className="signature-stat"><strong>12</strong><span>house-made<br/>sweet selections</span></div></div>
        <div className="signature-collage">{featured.map((p,i)=><motion.div key={p.id} className={`collage-card collage-${i+1}`} whileHover={{y:-8}}><Link href={`/product/${p.slug}`}><img src={p.image} alt={p.name} loading="lazy" onError={e=>e.currentTarget.src="/food-fallback.svg"}/><div className="collage-gradient"/><div className="collage-meta"><span>0{i+1}</span><b>{p.name}</b><small>Rs. {p.price.toLocaleString()}</small></div></Link></motion.div>)}</div>
      </section>

      <section className="section deals-section" id="gifting">
        <div className="section-heading"><div><span className="section-kicker">03 / CURRENT COLLECTIONS</span><h2>Made for moments.</h2></div><span className="section-side-note">Simple offers. No hidden conditions.</span></div>
        <div className="deal-grid">{offers.map((o,i)=><motion.article key={o.code} className={`deal-card deal-${i+1}`} whileHover={{y:-6}}><div className="deal-top"><span>{o.label}</span><b>0{i+1}</b></div><h3>{o.title}</h3><p>{o.sub}</p><div className="deal-bottom"><code>{o.code}</code><button onClick={()=>toast("Offer saved",`${o.code} is ready to use at checkout.`,"info")}>Save offer <ArrowUpRight size={15}/></button></div></motion.article>)}</div>
      </section>

      <section className="build-section"><div className="build-copy"><span className="section-kicker">04 / THE GIFTING DESK</span><h2>Make it a<br/><em>beautiful gesture.</em></h2><p>Choose a curated box, add a personal note and send something that feels intentional — not just convenient.</p><Link href="/menu?category=boxes" className="primary-button">Shop gift boxes <ArrowRight size={16}/></Link></div><div className="build-steps">{[["01","CHOOSE","Select your box"],["02","CURATE","Pick the sweets"],["03","NOTE","Add a message"],["04","SEND","We handle the rest"]].map(([n,t,s])=><div className="build-step" key={n}><b>{n}</b><div><strong>{t}</strong><span>{s}</span></div><Plus size={17}/></div>)}</div></section>

      <section className="section" id="location"><div className="section-heading"><div><span className="section-kicker">05 / DELIVERY</span><h2>From our kitchen to you.</h2></div><span className="section-side-note">Pakistan · Fresh dispatch</span></div>
        <div className="location-map" aria-label="Niraala-Sweets location map"><iframe title="Niraala-Sweets E-11 Islamabad map" src="https://www.google.com/maps?q=E-11%20Islamabad%20Pakistan&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div><div className="location-panel"><div className="location-main"><span className="location-pin"><MapPin size={22}/></span><div><span>NIRAALA-SWEETS · E-11 HOUSE</span><h3>Islamabad · E-11</h3><p>Fresh local orders are prepared for collection and delivery; nationwide orders are packed carefully for courier dispatch.</p></div></div><div className="location-details"><div><Clock3 size={17}/><span><b>Same-day</b> local preparation</span></div><div><Truck size={17}/><span><b>Nationwide</b> courier dispatch</span></div><Link href="/menu">Start your order <ArrowUpRight size={15}/></Link></div></div>
        <div className="service-strip"><div><span>CRAFT</span><b>Small daily batches</b></div><div><span>PACKAGING</span><b>Gift-ready presentation</b></div><div><span>CONTACT</span><a href="mailto:hassanalioffical77@niralabakers.com">hassanalioffical77@niralabakers.com</a></div></div>
      </section>

      <section className="section menu-preview"><div className="section-heading"><div><span className="section-kicker">06 / BESTSELLERS</span><h2>The ones people return for.</h2></div><Link href="/menu">See everything <ArrowUpRight size={16}/></Link></div><div className="product-grid">{products.slice(0,6).map(p=><ProductCard key={p.id} product={p}/>)}</div></section>

      <section className="closing-band"><div><span className="section-kicker">07 / NIRAALA-SWEETS</span><h2>Tradition, with<br/><em>a modern finish.</em></h2></div><div className="closing-copy"><p>Premium mithai for ordinary evenings, family tables, Eid mornings, weddings, office gifting and every little reason worth celebrating.</p><Link href="/menu" className="secondary-button">Find your sweet <ArrowRight size={16}/></Link></div><div className="closing-mark">NS<span>EST. / PAKISTAN</span></div></section>
    </div>
    <footer className="footer"><div className="footer-brand"><Link href="/" className="brand"><img src="/logo.svg" alt="Niraala-Sweets" width="44" height="44"/><span>Niraala<span>Sweets</span></span></Link><p>Premium Pakistani mithai, crafted with care and presented beautifully.</p></div><div className="footer-col"><b>Explore</b><Link href="/menu">Our sweets</Link><Link href="/orders">Orders</Link><Link href="/account">Account</Link></div><div className="footer-col"><b>Contact</b><a href="mailto:hassanalioffical77@niralabakers.com">hassanalioffical77@niralabakers.com</a><span>Islamabad · E-11</span><span>Pakistan</span></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Niraala-Sweets</span><span>Crafted with tradition · Packed with care</span></div></footer>
    <MobileNav/>
  </main>;
}
