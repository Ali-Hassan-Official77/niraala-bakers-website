'use client';

import Link from "next/link";
import { ArrowLeft, ArrowRight, Minus, Plus, ShoppingBag, Trash2, ShieldCheck } from "lucide-react";
import { useApp } from "./providers";
import { MobileNav, SiteHeader } from "./site-header";

export function CartPage() {
  const { cart, subtotal, setQuantity, removeFromCart } = useApp();
  const delivery = subtotal === 0 || subtotal >= 1500 ? 0 : 199;
  const discount = subtotal >= 1500 ? Math.round(subtotal * .15) : 0;
  const total = Math.max(0, subtotal + delivery - discount);
  return <main><SiteHeader/><div className="page-shell inner-page cart-page"><Link href="/menu" className="back-link"><ArrowLeft size={16}/> Continue shopping</Link><div className="page-title"><span className="section-kicker">YOUR BOX</span><h1>Beautiful choices.</h1><p>{cart.length ? `${cart.length} ${cart.length===1?"item":"different items"} ready to be packed.`:"Your box is empty. Let’s fix that."}</p></div>
  {!cart.length ? <div className="empty-state"><div className="empty-symbol"><ShoppingBag size={42}/></div><h2>Nothing here yet.</h2><p>Choose a mithai and build your box.</p><Link href="/menu" className="primary-button">Browse sweets <ArrowRight size={16}/></Link></div> :
  <div className="cart-layout"><section className="cart-list">{cart.map(item=><article className="cart-item" key={item.id}><img src={item.image} alt={item.name} onError={e=>e.currentTarget.src="/food-fallback.svg"}/><div className="cart-item-main"><span>{item.category}</span><Link href={`/product/${item.slug}`}><h3>{item.name}</h3></Link><p>Premium house preparation</p><div className="quantity"><button onClick={()=>setQuantity(item.id,item.quantity-1)}><Minus size={14}/></button><b>{item.quantity}</b><button onClick={()=>setQuantity(item.id,item.quantity+1)}><Plus size={14}/></button></div></div><strong>Rs. {(item.price*item.quantity).toLocaleString()}</strong><button className="trash" onClick={()=>removeFromCart(item.id)}><Trash2 size={17}/></button></article>)}</section>
  <aside className="summary-card"><span className="section-kicker">ORDER TOTAL</span><h2>Your box.</h2><div><span>Subtotal</span><b>Rs. {subtotal.toLocaleString()}</b></div><div><span>Delivery</span><b>{delivery?"Rs. "+delivery:"FREE"}</b></div>{discount>0&&<div><span>15% house offer</span><b>− Rs. {discount.toLocaleString()}</b></div>}<hr/><div className="total-row"><span>Total</span><b>Rs. {total.toLocaleString()}</b></div><p className="summary-note">Orders above Rs. 1,500 receive free delivery and 15% house discount.</p><Link href="/checkout" className="primary-button wide">Proceed to checkout <ArrowRight size={16}/></Link><small className="secure-note"><ShieldCheck size={14}/> Server-validated checkout</small></aside></div>}</div><MobileNav/></main>;
}
