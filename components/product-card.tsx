'use client';

import Link from "next/link";
import { Heart, Plus, Star, ArrowUpRight } from "lucide-react";
import { useApp } from "./providers";
import type { Product } from "@/lib/data";

export function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  const { addToCart, favorites, toggleFavorite } = useApp();
  const liked = favorites.includes(product.id);
  return <article className="product-card">
    <div className="product-visual">
      <Link href={`/product/${product.slug}`} className="product-image-link">
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" decoding="async" onError={(e) => e.currentTarget.src="/food-fallback.svg"}/>
        <span className="product-image-tint"/>
      </Link>
      {product.badge && <span className="product-badge">{product.badge}</span>}
      <button className={`heart-button ${liked ? "liked":""}`} onClick={() => toggleFavorite(product.id)} aria-label={liked ? "Remove favourite":"Save favourite"}>
        <Heart size={17} fill={liked ? "currentColor":"none"}/>
      </button>
    </div>
    <div className="product-info">
      <div className="product-rating"><Star size={12} fill="currentColor"/><b>{product.rating}</b><span>({product.reviews})</span></div>
      <Link href={`/product/${product.slug}`} className="product-title-link"><h3>{product.name}</h3></Link>
      {!compact && <p>{product.description}</p>}
      <div className="product-bottom"><strong>Rs. {product.price.toLocaleString()} <small>/ kg</small></strong>
        <button className="add-button" onClick={() => addToCart(product)} aria-label={`Add ${product.name}`}><Plus size={18}/></button>
      </div>
      <Link className="card-detail" href={`/product/${product.slug}`}>View details <ArrowUpRight size={13}/></Link>
    </div>
  </article>;
}
