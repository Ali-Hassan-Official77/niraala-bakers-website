'use client';

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Clock3, CreditCard, MapPin, ShieldCheck, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useApp } from "./providers";

export function CheckoutPage() {
  const { cart, subtotal, clearCart, saveOrder, toast } = useApp();
  const router = useRouter();
  const [loading,setLoading]=useState(false); const [error,setError]=useState("");
  const [form,setForm]=useState({name:"",phone:"",address:"",note:""});
  const delivery=subtotal>=1500?0:199; const discount=subtotal>=1500?Math.round(subtotal*.15):0; const total=Math.max(0,subtotal+delivery-discount);
  async function placeOrder(){
    setError("");
    if(!form.name.trim()||!form.phone.trim()||!form.address.trim()||!cart.length){setError("Please complete your name, phone and delivery address.");return;}
    setLoading(true);
    try{
      const response=await fetch("/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({customer:form,items:cart.map(({id,quantity})=>({id,quantity})),payment:"cod"})});
      const data=await response.json(); if(!response.ok||!data.ok) throw new Error(data.message||"We could not place the order.");
      const clientOrder={...data.order,total:data.order.pricing?.total??data.order.total,items:cart}; saveOrder(clientOrder); clearCart(); toast("Order confirmed",`${data.order.id} has been sent to the Niraala-Sweets kitchen.`); router.push(`/orders?success=${data.order.id}`);
    }catch(e){setError(e instanceof Error?e.message:"We could not place the order.");toast("Checkout needs attention",e instanceof Error?e.message:"Please try again.","error");}
    finally{setLoading(false);}
  }
  if(!cart.length)return <main><div className="checkout-empty"><ShoppingBag size={42}/><h1>Your box is empty.</h1><p>Add something sweet before checkout.</p><Link href="/menu" className="primary-button">Browse sweets <ArrowRight size={16}/></Link></div></main>;
  return <main><div className="checkout-top"><Link href="/cart" className="back-link"><ArrowLeft size={16}/> Back to box</Link><Link href="/" className="checkout-brand"><img src="/logo.svg" alt="Niraala-Sweets" width="38" height="38"/><b>Niraala<span>Sweets</span></b></Link><span className="secure"><ShieldCheck size={15}/> Secure order</span></div>
    <div className="checkout-page"><div className="checkout-main"><div className="checkout-heading"><span className="section-kicker">CHECKOUT / NIRAALA-SWEETS</span><h1>Let’s prepare your box.</h1><p>Cash on delivery is available. Your order is validated on the server before confirmation.</p></div>
      <section className="checkout-card"><div className="card-title"><span><MapPin size={18}/></span><div><h2>Delivery details</h2><p>Tell us exactly where the box should go.</p></div></div><div className="form-grid">
        <label>Full name<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name" autoComplete="name"/></label>
        <label>Phone number<input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="03xx xxxxxxx" autoComplete="tel"/></label>
        <label className="full">Delivery address<input value={form.address} onChange={e=>setForm({...form,address:e.target.value})} placeholder="House, street, sector, city" autoComplete="street-address"/></label>
        <label className="full">Delivery note <small>optional</small><textarea value={form.note} onChange={e=>setForm({...form,note:e.target.value})} placeholder="Landmark, gate instructions or gift note."/></label>
      </div></section>
      <section className="checkout-card"><div className="card-title"><span><CreditCard size={18}/></span><div><h2>Payment</h2><p>Choose how you want to pay.</p></div></div><div className="payment-options"><button className="payment-option selected" type="button"><span className="payment-icon">₨</span><div><b>Cash on delivery</b><small>Pay the rider when your order arrives.</small></div><Check size={18}/></button><div className="payment-disabled"><span>+</span><div><b>Online payments</b><small>Card & wallet gateway can be connected later.</small></div><em>COMING SOON</em></div></div></section>
      {error&&<div className="error-box">{error}</div>}<button className="primary-button place-order" disabled={loading} onClick={placeOrder}>{loading?"Sending to the kitchen…":<>Place order · Rs. {total.toLocaleString()} <ArrowRight size={16}/></>}</button>
    </div><aside className="checkout-summary"><span className="section-kicker">YOUR BOX</span><h2>Packing list.</h2>{cart.map(item=><div className="mini-line" key={item.id}><img src={item.image} alt={item.name} onError={e=>e.currentTarget.src="/food-fallback.svg"}/><div><b>{item.quantity}× {item.name}</b><span>Rs. {(item.price*item.quantity).toLocaleString()}</span></div></div>)}<hr/><div><span>Subtotal</span><b>Rs. {subtotal.toLocaleString()}</b></div><div><span>Delivery</span><b>{delivery?"Rs. "+delivery:"FREE"}</b></div>{discount>0&&<div><span>Discount</span><b>− Rs. {discount.toLocaleString()}</b></div>}<div className="total-row"><span>Total</span><b>Rs. {total.toLocaleString()}</b></div><div className="checkout-assurance"><Clock3 size={17}/><span><b>Freshly packed</b><br/>Dispatch window follows confirmation</span></div></aside></div></main>;
}
