'use client';

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/lib/data";

type CartItem = Product & { quantity: number };
type Order = {
  id: string; status: string; createdAt: string; eta: string; total: number;
  items: CartItem[]; customer: { name: string; phone: string; address: string; note?: string };
};

type Toast = { id: number; title: string; message?: string; type?: "success" | "info" | "error" };
type AppContextValue = {
  cart: CartItem[]; favorites: string[]; orders: Order[]; cartCount: number; subtotal: number;
  dark: boolean; toggleDark: () => void;
  addToCart: (product: Product) => void; removeFromCart: (id: string) => void; setQuantity: (id: string, q: number) => void;
  toggleFavorite: (id: string) => void; clearCart: () => void; saveOrder: (order: Order) => void;
  toast: (title: string, message?: string, type?: Toast["type"]) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [dark, setDark] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    try {
      setCart(JSON.parse(localStorage.getItem("niraala-cart") || "[]"));
      setFavorites(JSON.parse(localStorage.getItem("niraala-favorites") || "[]"));
      setOrders(JSON.parse(localStorage.getItem("niraala-orders") || "[]"));
      setDark(localStorage.getItem("niraala-dark") === "1");
    } catch {}
  }, []);

  useEffect(() => localStorage.setItem("niraala-cart", JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem("niraala-favorites", JSON.stringify(favorites)), [favorites]);
  useEffect(() => localStorage.setItem("niraala-orders", JSON.stringify(orders)), [orders]);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("niraala-dark", dark ? "1" : "0");
  }, [dark]);

  const toast = (title: string, message?: string, type: Toast["type"] = "success") => {
    const id = Date.now() + Math.random();
    setToasts((items) => [...items.slice(-2), { id, title, message, type }]);
    window.setTimeout(() => setToasts((items) => items.filter((item) => item.id !== id)), 3600);
  };

  const value = useMemo<AppContextValue>(() => ({
    cart, favorites, orders, dark, toggleDark: () => setDark((v) => !v),
    cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    addToCart: (product) => {
      setCart((current) => {
        const existing = current.find((item) => item.id === product.id);
        return existing
          ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
          : [...current, { ...product, quantity: 1 }];
      });
      toast("Added to your box", product.name);
    },
    removeFromCart: (id) => {
      const item = cart.find((x) => x.id === id);
      setCart((current) => current.filter((x) => x.id !== id));
      toast("Removed", item?.name || "Item removed", "info");
    },
    setQuantity: (id, q) => {
      if (q <= 0) {
        setCart((current) => current.filter((x) => x.id !== id));
        toast("Item removed", "Your box has been updated.", "info");
      } else setCart((current) => current.map((x) => x.id === id ? { ...x, quantity: q } : x));
    },
    toggleFavorite: (id) => {
      const next = favorites.includes(id);
      setFavorites((current) => next ? current.filter((x) => x !== id) : [...current, id]);
      toast(next ? "Removed from favourites" : "Saved to favourites", next ? "We removed it from your saved picks." : "You can find it in Account.", "info");
    },
    clearCart: () => setCart([]),
    saveOrder: (order) => setOrders((current) => [order, ...current]),
    toast,
  }), [cart, favorites, orders, dark]);

  return (
    <AppContext.Provider value={value}>
      {children}
      <ToastStack items={toasts} />
    </AppContext.Provider>
  );
}

function ToastStack({ items }: { items: Toast[] }) {
  return <div className="toast-stack" aria-live="polite">
    {items.map((item) => <div className={`toast toast-${item.type || "success"}`} key={item.id}>
      <span className="toast-mark">{item.type === "error" ? "!" : item.type === "info" ? "i" : "✓"}</span>
      <div><b>{item.title}</b>{item.message && <small>{item.message}</small>}</div>
    </div>)}
  </div>;
}

export function useApp() {
  const value = useContext(AppContext);
  if (!value) throw new Error("useApp must be used inside AppProvider");
  return value;
}
