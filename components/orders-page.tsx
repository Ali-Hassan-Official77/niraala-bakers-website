'use client';

import Link from "next/link";
import { CheckCircle2, Clock3, MapPin, PackageCheck, RotateCcw, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { useApp } from "./providers";
import { MobileNav, SiteHeader } from "./site-header";

export function OrdersPage(){
 const {orders,addToCart,toast}=useApp(); const [success,setSuccess]=useState<string|null>(null);
 useEffect(()=>setSuccess(new URLSearchParams(window.location.search).get("success")),[]);
 return <main><SiteHeader/><div className="page-shell inner-page orders-page"><div className="page-title"><span className="section-kicker">ORDER CENTER</span><h1>{success?"Order received.":"Your order history."}</h1><p>{success?`${success} has been confirmed and is now in the kitchen queue.`:"Your saved orders and quick reorder shortcuts."}</p></div>
 {success&&<section className="tracking-card"><div className="tracking-head"><div><span className="live-dot"/> Kitchen queue</div><b>Fresh preparation</b></div><div className="track-line"><div className="track-step active"><span><CheckCircle2/></span><b>Received</b><small>Order accepted</small></div><div className="track-step active"><span><Clock3/></span><b>Preparing</b><small>Being packed</small></div><div className="track-step"><span><Truck/></span><b>Dispatch</b><small>Next</small></div><div className="track-step"><span><PackageCheck/></span><b>Delivered</b><small>Enjoy</small></div></div><div className="tracking-address"><MapPin size={16}/> Pakistan delivery · timing depends on destination</div></section>}
 {orders.length?<div className="orders-list">{orders.map(order=><article className="order-card" key={order.id}><div className="order-head"><div><b>{order.id}</b><span>{new Date(order.createdAt).toLocaleString()}</span></div><span className="status-pill"><CheckCircle2 size={13}/> {order.status}</span></div><div className="order-items">{order.items.slice(0,4).map(item=><div key={item.id}><img src={item.image} alt={item.name} onError={e=>e.currentTarget.src="/food-fallback.svg"}/><span>{item.quantity}× {item.name}</span></div>)}</div><div className="order-foot"><strong>Rs. {order.total.toLocaleString()}</strong><span>ETA {order.eta}</span><button onClick={()=>{order.items.forEach(addToCart);toast("Order added again","Your previous box is ready to review.","info")}}><RotateCcw size={14}/> Reorder</button></div></article>)}</div>:<div className="empty-state"><div className="empty-symbol">01</div><h2>No orders yet.</h2><p>Your first Niraala-Sweets order will appear here.</p><Link href="/menu" className="primary-button">Start an order <RotateCcw size={16}/></Link></div>}</div><MobileNav/></main>;
}
