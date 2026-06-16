"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// Exact color data from lib/cards.ts + match.tsx CARD_DESIGN
const CARDS = [
  { n:"01", id:"spike",     name:"SPIKE",     cat:"BOOST",    bg:"#F8FAFC", c1:"#1E40AF", c2:"#60A5FA", grad:"145deg, #1E3A8A 0%, #1E40AF 55%, #60A5FA 100%", icon:"/cards/spike.png",     effect:"+30% AP",   sub:"30 MIN WINDOW",      desc:"Targeted intensity spike." },
  { n:"02", id:"overdrive", name:"OVERDRIVE", cat:"BOOST",    bg:"#FAF8F5", c1:"#EA580C", c2:"#FB923C", grad:"145deg, #9A3412 0%, #EA580C 55%, #FDBA74 100%", icon:"/cards/overdrive.png", effect:"×2 AP",     sub:"BEST 20 MIN",        desc:"All or nothing. This is the moment." },
  { n:"03", id:"recover",   name:"RECOVER",   cat:"BOOST",    bg:"#FBF8FA", c1:"#DB2777", c2:"#F472B6", grad:"145deg, #9D174D 0%, #DB2777 55%, #F9A8D4 100%", icon:"/cards/recover.png",   effect:"+15% AP",   sub:"NEXT SESSION",       desc:"Recover better. Come back stronger." },
  { n:"04", id:"shield",    name:"SHIELD",    cat:"DEFENSE",  bg:"#FBF7F7", c1:"#DC2626", c2:"#F87171", grad:"145deg, #991B1B 0%, #DC2626 55%, #FCA5A5 100%", icon:"/cards/shield.png",    effect:"−15%",      sub:"OPP. NEXT SESSION",  desc:"Block their momentum." },
  { n:"05", id:"freeze",    name:"FREEZE",    cat:"SABOTAGE", bg:"#ECFEFF", c1:"#0E7490", c2:"#22D3EE", grad:"145deg, #155E75 0%, #0E7490 55%, #A5F3FC 100%", icon:"/cards/freeze.png",    effect:"−8%",       sub:"OPP. BEST DAY",      desc:"Erase their peak performance." },
  { n:"06", id:"pressure",  name:"PRESSURE",  cat:"SABOTAGE", bg:"#0B1220", c1:"#0F172A", c2:"#64748B", grad:"145deg, #000000 0%, #0F172A 55%, #64748B 100%", icon:"/cards/pressure.png",  effect:"+15%",      sub:"IF THEY TRAIN 30+",  desc:"Turn their effort against them." },
  { n:"07", id:"parasite",  name:"PARASITE",  cat:"SABOTAGE", bg:"#141414", c1:"#EAB308", c2:"#FDE047", grad:"145deg, #1A1A1A 0%, #78350F 30%, #EAB308 100%", icon:"/cards/parasite.png",  effect:"STEAL 7%",  sub:"OF THEIR POINTS",    desc:"What they build, you take." },
  { n:"08", id:"scan",      name:"SCAN",      cat:"INTEL",    bg:"#F0FDF4", c1:"#15803D", c2:"#22C55E", grad:"145deg, #052E16 0%, #15803D 55%, #BBF7D0 100%", icon:"/cards/scan.png",      effect:"REVEAL",    sub:"HR CURVE",           desc:"See their full session data." },
  { n:"09", id:"mirage",    name:"MIRAGE",    cat:"MASK",     bg:"#FBF8F2", c1:"#B45309", c2:"#D97706", grad:"145deg, #78350F 0%, #B45309 55%, #FCD9A8 100%", icon:"/cards/mirage.png",    effect:"±15%",      sub:"GAP SKEWED",         desc:"The gap isn't what it looks like." },
  { n:"10", id:"ghost",     name:"GHOST",     cat:"MASK",     bg:"#F9F7FC", c1:"#7C3AED", c2:"#A78BFA", grad:"145deg, #3B0764 0%, #7C3AED 55%, #DDD6FE 100%", icon:"/cards/ghost.png",     effect:"HIDE",      sub:"YOUR PHASE OF CHOICE",desc:"Vanish at the right moment." },
  { n:"11", id:"blackout",  name:"BLACKOUT",  cat:"MASK",     bg:"#EFF1F4", c1:"#0F172A", c2:"#475569", grad:"145deg, #000000 0%, #0F172A 55%, #94A3B8 100%", icon:"/cards/blackout.png",  effect:"BLACKOUT",  sub:"NO INFO UNTIL 19:00", desc:"Keep the mystery going longer." },
  { n:"12", id:"counter",   name:"COUNTER",   cat:"MOMENTUM", bg:"#F7F9EC", c1:"#4A5D1C", c2:"#C5DC6B", grad:"145deg, #1A2108 0%, #3B5314 55%, #C5DC6B 100%", icon:"/cards/counter.png",   effect:"+25%",      sub:"AFTER 18:00",        desc:"If losing at 18:00, strike back." },
];

function AppCard({ card, index }: { card: typeof CARDS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition = "opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, index * 50);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  // Category color (matches app: c2 for light cards, accent color)
  const catColor = card.c2;

  return (
    <div ref={ref} style={{
      position: "relative",
      borderRadius: "20px",
      overflow: "hidden",
      height: "180px",
      border: `1px solid ${card.c1}2A`,
      display: "flex",
      cursor: "default",
      // Main gradient background
      background: `
        repeating-linear-gradient(0deg, rgba(255,255,255,0.38) 0px, rgba(255,255,255,0.38) 0.7px, transparent 0.7px, transparent 3.2px),
        radial-gradient(ellipse at 90% -10%, ${card.c2}AA 0%, transparent 55%),
        linear-gradient(${card.grad}),
        ${card.bg}
      `,
    }}>
      {/* Text side */}
      <div style={{ position: "relative", zIndex: 2, flex: 1, padding: "18px 22px", display: "flex", flexDirection: "column", justifyContent: "space-between", minWidth: 0 }}>
        {/* Top */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "6px" }}>
            <span style={{ fontSize: "11px", fontWeight: 800, color: "rgba(255,255,255,0.7)", letterSpacing: "0.04em" }}>Attax</span>
            <span style={{ fontSize: "10px", fontWeight: 700, color: catColor, letterSpacing: "1.4px", textTransform: "uppercase" }}>{card.cat}</span>
          </div>
          {/* Card name — italic bold, like the app */}
          <div style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            fontWeight: 900, fontStyle: "italic",
            color: "#ffffff",
            letterSpacing: "-2px", lineHeight: 1,
            marginBottom: "6px",
          }}>{card.name}</div>
          {/* Effect */}
          <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
            <span style={{ fontSize: "16px", fontWeight: 800, fontStyle: "italic", color: "#ffffff", letterSpacing: "-0.3px" }}>{card.effect}</span>
            <span style={{ fontSize: "9px", fontWeight: 700, color: "rgba(255,255,255,0.55)", letterSpacing: "0.8px", textTransform: "uppercase" }}>{card.sub}</span>
          </div>
        </div>
        {/* Bottom */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.4, maxWidth: "55%" }}>{card.desc}</div>
          {/* Big number bottom-right */}
          <div style={{
            fontSize: "52px", fontWeight: 900, fontStyle: "italic",
            color: "rgba(255,255,255,0.14)", letterSpacing: "-3px", lineHeight: 1,
            flexShrink: 0,
          }}>{card.n}</div>
        </div>
      </div>

      {/* Art — large, right-aligned, bleeds slightly */}
      <div style={{
        position: "absolute",
        right: "-20px",
        top: "-30px",
        width: "210px",
        height: "240px",
        zIndex: 1,
      }}>
        <Image
          src={card.icon}
          alt={card.name}
          fill
          style={{
            objectFit: "contain",
            objectPosition: "center bottom",
            filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.3))",
          }}
        />
      </div>
    </div>
  );
}

export default function CardsShowcase() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.transition = "opacity 0.8s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{
      backgroundColor: "#070707",
      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.016) 3px, rgba(255,255,255,0.016) 4px)",
      padding: "7rem 2rem",
    }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        <div ref={headerRef} style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "4rem", gap: "2rem" }}>
          <div>
            <p className="section-label-light" style={{ margin: "0 0 1.25rem" }}>Strategic cards</p>
            <h2 style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800,
              color: "#ffffff", letterSpacing: "-0.045em", lineHeight: 1.02, margin: 0,
            }}>
              12 cards.<br />Pick one. Every day.
            </h2>
          </div>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.75, maxWidth: "300px", margin: 0, flex: "0 0 300px" }}>
            Every morning, 3 cards are offered to your league. Choose before 1 PM. No second chances.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
          {CARDS.map((card, i) => (
            <AppCard key={card.id} card={card} index={i} />
          ))}
        </div>

        <div ref={headerRef} style={{
          marginTop: "2.5rem",
          padding: "1.25rem 1.75rem",
          backgroundColor: "rgba(255,255,255,0.025)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "12px",
        }}>
          <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.65, margin: 0 }}>
            <strong style={{ color: "rgba(255,255,255,0.55)", fontWeight: 700 }}>Same 3 cards for everyone in your league each day</strong> — determined by the day and the room. Card effects apply instantly to your session data when you train.
          </p>
        </div>
      </div>
    </section>
  );
}
