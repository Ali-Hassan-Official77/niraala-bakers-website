'use client';

import Link from "next/link";
import { Heart, MapPin, Package, Star, UserRound } from "lucide-react";
import { useApp } from "./providers";
import { products } from "@/lib/data";
import { ProductCard } from "./product-card";
import { MobileNav, SiteHeader } from "./site-header";

export function AccountPage(){
 const {favorites,orders}=useApp(); const liked=products.filter(p=>favorites.includes(p.id));
 return <main><SiteHeader/><div className="page-shell inner-page account-page"><section className="account-hero"><div className="profile-avatar">HS</div><div><span className="section-kicker">NIRAALA-SWEETS MEMBER</span><h1>Your sweet shelf.</h1><p>Saved favourites, order history and quick shortcuts in one place.</p></div></section><div className="account-stats"><div><Package size={18}/><strong>{orders.length}</strong><span>Orders</span></div><div><Heart size={18}/><strong>{favorites.length}</strong><span>Favourites</span></div><div><Star size={18}/><strong>PK</strong><span>Service</span></div></div><div className="account-grid"><section className="account-panel"><span className="section-kicker">DELIVERY</span><h2>Saved details</h2><div className="address-box"><MapPin size={19}/><div><b>Pakistan delivery</b><p>Enter the complete address during checkout for secure dispatch.</p></div></div></section><section className="account-panel"><span className="section-kicker">SHORTCUTS</span><h2>Go somewhere.</h2><Link href="/orders"><Package/> Order history <span>↗</span></Link><Link href="/menu"><UserRound/> Browse sweets <span>↗</span></Link><Link href="/cart"><MapPin/> Open your box <span>↗</span></Link></section></div><section className="section favorites-section"><div className="section-heading"><div><span className="section-kicker">YOUR PICKS</span><h2>Favourites.</h2></div><Link href="/menu">Add more <span>↗</span></Link></div>{liked.length?<div className="product-grid">{liked.map(p=><ProductCard key={p.id} product={p}/>)}</div>:<div className="empty-state small"><Heart size={34}/><h2>Nothing saved yet.</h2><p>Tap the heart on a sweet you want to remember.</p><Link href="/menu" className="secondary-button">Browse sweets</Link></div>}</section></div><MobileNav/></main>;
}
