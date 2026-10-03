'use client';

import Link from "next/link";
import { Search, ShoppingBag, UserRound, Menu, X, Moon, Sun, Heart } from "lucide-react";
import { useState } from "react";
import { useApp } from "./providers";

export function Logo() {
  return <Link href="/" className="brand" aria-label="Niraala-Sweets home">
    <img src="/logo.svg" alt="" width="44" height="44" />
    <span>Niraala<span>Sweets</span></span>
  </Link>;
}

export function SiteHeader() {
  const { cartCount, favorites, dark, toggleDark } = useApp();
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="header-inner">
      <Logo />
      <nav className="desktop-nav">
        <Link href="/menu">Our Sweets</Link>
        <Link href="/#story">Our Story</Link>
        <Link href="/#gifting">Gifting</Link>
        <Link href="/orders">Orders</Link>
      </nav>
      <div className="header-actions">
        <Link href="/menu" className="header-icon" aria-label="Search"><Search size={18}/></Link>
        <Link href="/account" className="header-icon header-fav" aria-label="Favourites"><Heart size={18}/>{favorites.length > 0 && <b>{favorites.length}</b>}</Link>
        <button className="header-icon" onClick={toggleDark} aria-label="Toggle dark mode">{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>
        <Link href="/cart" className="header-cart"><ShoppingBag size={18}/><span>Box</span>{cartCount > 0 && <b>{cartCount}</b>}</Link>
        <button className="menu-button" onClick={() => setOpen(v => !v)} aria-expanded={open}>{open ? <X size={21}/> : <Menu size={21}/>}</button>
      </div>
    </div>
    {open && <div className="mobile-menu">
      <Link href="/menu" onClick={() => setOpen(false)}>Our Sweets <span>01</span></Link>
      <Link href="/#story" onClick={() => setOpen(false)}>Our Story <span>02</span></Link>
      <Link href="/#gifting" onClick={() => setOpen(false)}>Gifting <span>03</span></Link>
      <Link href="/orders" onClick={() => setOpen(false)}>Orders <span>04</span></Link>
      <Link href="/account" onClick={() => setOpen(false)}>Account <span>05</span></Link>
      <button onClick={() => { toggleDark(); setOpen(false); }}>{dark ? "Switch to light" : "Switch to dark"} <span>◐</span></button>
    </div>}
  </header>;
}

export function DeliveryBar() {
  return <div className="delivery-bar"><span>✦ <b>Niraala-Sweets · Crafted in Pakistan</b></span><span className="delivery-live"><i/> Fresh batches daily · Islamabad & nationwide delivery</span></div>;
}

export function MobileNav() {
  const { cartCount } = useApp();
  return <nav className="mobile-nav">
    <Link href="/"><span>⌂</span>Home</Link><Link href="/menu"><span>✦</span>Sweets</Link>
    <Link href="/cart" className="mobile-cart"><span><ShoppingBag size={19}/>{cartCount > 0 && <b>{cartCount}</b>}</span>Box</Link>
    <Link href="/orders"><span>▣</span>Orders</Link><Link href="/account"><span>◉</span>Account</Link>
  </nav>;
}
