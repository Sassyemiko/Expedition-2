import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ChevronDown, Anchor, ShieldCheck, Compass, CheckCircle2, ChevronRight,
  Menu, X, FlaskConical, Waves, Crown, FileText, Activity, Calendar,
  Lock, Eye, ClipboardList, ChevronUp, Info, BarChart3, BadgeCheck
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from "@/components/ui/drawer";

// ─── NAVBAR ────────────────────────────────────────────────────────────────────

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Philosophy", "Vessel", "Journey", "Crew", "Pricing", "Booking"];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-500 border-b ${
          scrolled ? "bg-background/80 backdrop-blur-md border-border/50 py-4" : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 grid grid-cols-3 items-center">
          <div className="flex items-center gap-2">
            <Anchor className="w-6 h-6 text-primary" />
            <span className="font-serif font-bold text-xl tracking-wider text-foreground">
              EXPEDITION<span className="text-primary">2</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center justify-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex justify-end">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none" asChild>
              <a href="#booking" data-testid="link-request-briefing">Request Briefing</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-6 inset-x-6 z-50">
        <div className="bg-card/90 backdrop-blur-md border border-primary/20 rounded-2xl flex items-center justify-between p-2 px-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <span className="font-serif text-sm tracking-wider">E2 Manifest</span>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="sm" className="text-primary gap-2" data-testid="btn-mobile-menu">
                <Menu className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest">Menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-card border-t-primary/20">
              <div className="p-6 flex flex-col gap-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-serif font-bold text-lg">NAVIGATION</span>
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon"><X className="w-5 h-5" /></Button>
                  </DrawerClose>
                </div>
                {links.map((link) => (
                  <DrawerClose asChild key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-xl font-serif tracking-wide border-b border-border/20 pb-4 text-foreground flex justify-between items-center"
                    >
                      {link}
                      <ChevronRight className="w-4 h-4 text-primary" />
                    </a>
                  </DrawerClose>
                ))}
                <DrawerClose asChild>
                  <Button className="w-full mt-4 h-14 text-lg" asChild>
                    <a href="#booking">Request Briefing</a>
                  </Button>
                </DrawerClose>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </>
  );
};

// ─── HERO ───────────────────────────────────────────────────────────────────────

const Hero = () => (
  <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="/images/hero.jpg" alt="Submarine descending into abyss" className="w-full h-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
    </div>

    <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
        className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 bg-background/40 backdrop-blur-sm mb-8"
      >
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Now accepting 2025 manifests</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
        className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground max-w-5xl leading-[1.1] mb-6"
      >
        BEYOND THE <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-primary/50">ABYSS</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 font-light"
      >
        The rarest experience on Earth. A pressurized descent to the hadal zone, past bioluminescent mysteries and untouched wrecks.
      </motion.p>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
        <Button size="lg" className="rounded-none text-lg h-14 px-8 tracking-wide font-medium" asChild>
          <a href="#choose-dive" data-testid="btn-hero-booking">Choose Your Dive</a>
        </Button>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-xs uppercase tracking-widest text-muted-foreground">Descend</span>
      <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
    </motion.div>
  </section>
);

// ─── USP 1: CHOOSE YOUR DIVE ────────────────────────────────────────────────────

type DiveType = "adventure" | "science" | "charter" | null;

const diveProfiles = {
  adventure: {
    icon: Waves,
    label: "Pure Adventure",
    tagline: "For those who need to see it for themselves",
    pitch: "You've summited peaks and crossed deserts. The final frontier is 11km straight down. Your dive focuses on the visual spectacle — bioluminescent midnight zones, hydrothermal vent fields, and ancient wrecks untouched since they sank. No prior science background required. Just the will to descend.",
    highlights: ["Full 12-hour dive window", "Curated encounter zones", "Post-dive debrief & footage package", "Certificate of Descent — Marianas Class"],
    cta: "View Adventure Packages",
  },
  science: {
    icon: FlaskConical,
    label: "Scientific Research",
    tagline: "Publish-grade fieldwork, 11,000m below",
    pitch: "Your dive is mission-structured. Work alongside Dr. Thorne's team with a dedicated sample-collection arm, sediment cores, and real-time spectrometry. All data is co-owned and publication-ready. Accepted proposals receive a $40,000 expedition credit.",
    highlights: ["Pre-dive proposal review", "Robotic sample arm access", "Spectrometry & imaging suite", "Data co-ownership agreement"],
    cta: "Submit Research Proposal",
  },
  charter: {
    icon: Crown,
    label: "Private Charter",
    tagline: "Exclusive access. Your timeline. Your terms.",
    pitch: "Reserve the entire vessel and crew for a multi-day expedition series. Bring your own guests, researchers, or media team. Full itinerary customization — from target coordinates to surface vessel catering. Discretion guaranteed.",
    highlights: ["Full vessel exclusivity", "Custom target coordinates", "Media & broadcast support", "NDA-protected operations"],
    cta: "Arrange Private Consultation",
  },
};

const ChooseYourDive = () => {
  const [selected, setSelected] = useState<DiveType>(null);

  return (
    <section id="choose-dive" className="py-32 bg-card border-y border-border/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-widest text-sm mb-4 block">Personalized from first click</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Choose Your Dive</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every Expedition 2 guest arrives with a different reason. Tell us yours — and we'll reshape everything around it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {(Object.entries(diveProfiles) as [DiveType & string, typeof diveProfiles["adventure"]][]).map(([key, profile], i) => {
            const Icon = profile.icon;
            const isActive = selected === key;
            return (
              <motion.button
                key={key}
                data-testid={`btn-dive-${key}`}
                onClick={() => setSelected(isActive ? null : key as DiveType)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative text-left p-8 border transition-all duration-300 cursor-pointer focus:outline-none ${
                  isActive
                    ? "border-primary bg-background shadow-[0_0_40px_rgba(0,180,255,0.12)]"
                    : "border-border/30 bg-background/50 hover:border-primary/40 hover:bg-background"
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-colors ${isActive ? "bg-primary/20" : "bg-muted"}`}>
                  <Icon className={`w-6 h-6 transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <div className={`text-xs uppercase tracking-widest mb-2 transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                  {profile.tagline}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-0">{profile.label}</h3>

                {/* Active indicator */}
                <div className={`absolute top-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${isActive ? "border-primary bg-primary" : "border-border/40"}`}>
                  {isActive && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Expanding tailored content */}
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: -12, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="border border-primary/30 bg-background p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="text-primary uppercase tracking-widest text-xs mb-3">{diveProfiles[selected].label} — Mission Brief</div>
                  <p className="text-foreground text-lg font-light leading-relaxed mb-8">
                    {diveProfiles[selected].pitch}
                  </p>
                  <Button className="rounded-none h-12 px-8" asChild>
                    <a href="#booking" data-testid={`btn-dive-cta-${selected}`}>{diveProfiles[selected].cta}</a>
                  </Button>
                </div>
                <ul className="space-y-4 pt-2">
                  {diveProfiles[selected].highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{h}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// ─── PHILOSOPHY ─────────────────────────────────────────────────────────────────

const Philosophy = () => (
  <section id="philosophy" className="py-32 bg-background relative border-t border-border/10">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
            Where Extreme Science <br /> Meets <span className="text-primary">Absolute Silence</span>.
          </h2>
          <div className="space-y-6 text-muted-foreground font-light text-lg">
            <p>We are not a tourist operation. Expedition 2 exists at the intersection of deep-sea research and ultra-luxury exploration.</p>
            <p>At 36,000 feet below the surface, the ocean is an alien world. The pressure is crushing, the darkness is absolute, and the life is entirely unfamiliar. We bring the light, the safety, and the comfort of a master-crafted vessel.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-serif text-foreground mb-2">11k</div>
              <div className="text-sm text-primary uppercase tracking-widest">Meters Depth</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-foreground mb-2">3</div>
              <div className="text-sm text-primary uppercase tracking-widest">Guests per Dive</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 1 }}
          className="relative aspect-square md:aspect-[4/3] w-full bg-card p-2 border border-border/30"
        >
          <img src="/images/depth.jpg" alt="Deep ocean hydrothermal vent" className="w-full h-full object-cover filter contrast-125" />
          <div className="absolute -bottom-6 -left-6 bg-card border border-primary/20 p-6 max-w-[250px] shadow-2xl backdrop-blur-md">
            <Compass className="w-8 h-8 text-primary mb-4" />
            <p className="text-sm text-muted-foreground">"An environment less explored than the surface of the moon."</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── VESSEL ──────────────────────────────────────────────────────────────────────

const Vessel = () => (
  <section id="vessel" className="py-32 bg-card relative">
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <span className="text-primary uppercase tracking-widest text-sm mb-4 block">The Instrument</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold">E2 Leviathan Class</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 relative group">
          <img src="/images/vessel.jpg" alt="Submarine exterior" className="w-full h-[600px] object-cover border border-border/30" />
          <div className="absolute inset-0">
            <HoverCard>
              <HoverCardTrigger asChild>
                <button className="absolute top-[30%] left-[40%] w-8 h-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                </button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-background/95 backdrop-blur-lg border-primary/50">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Optically Perfect Viewport</h4>
                <p className="text-sm text-muted-foreground">90mm thick acrylic sphere offering a distortion-free 360° view of the abyss, engineered to withstand 1,500 atmospheres.</p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <button className="absolute top-[60%] left-[70%] w-8 h-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                </button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-background/95 backdrop-blur-lg border-primary/50">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Silent Thrusters</h4>
                <p className="text-sm text-muted-foreground">Six-axis omnidirectional electric propulsion. Zero emissions, zero acoustic pollution.</p>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center">
          <h3 className="text-2xl font-serif mb-6">Technical Specifications</h3>
          <p className="text-muted-foreground mb-8">Every component is obsessively engineered for survival in an environment that actively wants to crush it.</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Pressure Hull</AccordionTrigger>
              <AccordionContent>Constructed from a proprietary titanium alloy (Ti-6Al-4V ELI), machined to a tolerance of 0.05mm. Tested to 150% of the Marianas Trench pressure.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Life Support Systems</AccordionTrigger>
              <AccordionContent>Quad-redundant closed-loop O2 scrubbers. 96 hours of emergency reserve life support. Continuous cabin monitoring for CO2, humidity, and temperature.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Comms & Navigation</AccordionTrigger>
              <AccordionContent>Through-water acoustic modems transmitting telemetry, voice, and vital stats to the surface mothership every 10 seconds.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  </section>
);

// ─── DEPTH JOURNEY ───────────────────────────────────────────────────────────────

const DepthJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });

  const zones = [
    { name: "Epipelagic", depth: "200m", desc: "The Sunlight Zone. Where 90% of ocean life resides. Light begins to fade rapidly." },
    { name: "Mesopelagic", depth: "1,000m", desc: "The Twilight Zone. Bioluminescence begins. Giant squid and lanternfish." },
    { name: "Bathypelagic", depth: "4,000m", desc: "The Midnight Zone. Complete darkness. Crushing pressure. Sperm whales hunt." },
    { name: "Abyssopelagic", depth: "6,000m", desc: "The Abyss. Near freezing. A barren expanse of sediment and ancient wrecks." },
    { name: "Hadalpelagic", depth: "11,000m", desc: "The Trenches. The destination. Alien extremophiles living off hydrothermal vents." },
  ];

  return (
    <section id="journey" ref={containerRef} className="py-32 bg-background relative border-y border-border/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="md:sticky md:top-32 h-fit">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">The Descent</h2>
            <p className="text-muted-foreground text-lg mb-8">A 4-hour freefall through the layers of the ocean. Watch the color drain from the world as you enter the void.</p>
            <div className="relative h-64 w-full bg-card border border-border/30 overflow-hidden hidden md:block">
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-[#0a84ff] via-[#001f3f] to-black"
                style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]) }}
              />
            </div>
          </div>

          <div className="space-y-24">
            {zones.map((zone) => (
              <motion.div
                key={zone.name}
                initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
                className="relative pl-8 border-l-2 border-primary/20"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-background border-2 border-primary rounded-full" />
                <div className="text-sm font-mono text-primary mb-2">{zone.depth}</div>
                <h3 className="text-3xl font-serif mb-4 text-foreground">{zone.name}</h3>
                <p className="text-muted-foreground">{zone.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── TRUST & CREW ────────────────────────────────────────────────────────────────

const TrustAndCrew = () => (
  <section id="crew" className="py-32 bg-card">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <span className="text-primary uppercase tracking-widest text-sm mb-4 block">The Manifest</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Your Guides to the Deep</h2>
        </div>
        <div className="flex items-center gap-4 bg-background/50 p-4 border border-primary/20 backdrop-blur">
          <ShieldCheck className="w-8 h-8 text-primary" />
          <div>
            <div className="text-sm font-bold">DNV-GL Certified</div>
            <div className="text-xs text-muted-foreground">Class +1A1 Submersible</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-background border border-border/50 p-6 group hover:border-primary/50 transition-colors">
          <div className="aspect-[4/3] w-full overflow-hidden mb-6 bg-muted">
            <img src="/images/pilot.jpg" alt="Chief Pilot" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="text-sm text-primary uppercase tracking-widest mb-1">Chief Pilot</div>
          <h3 className="text-2xl font-serif mb-3">Elena Rostova</h3>
          <p className="text-muted-foreground text-sm">Former naval test pilot with over 3,000 logged hours in deep-submergence vehicles. Elena has navigated the Marianas Trench five times.</p>
        </div>

        <div className="bg-background border border-border/50 p-6 group hover:border-primary/50 transition-colors">
          <div className="aspect-[4/3] w-full overflow-hidden mb-6 bg-muted">
            <img src="/images/eco.jpg" alt="Lead Biologist" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
          </div>
          <div className="text-sm text-primary uppercase tracking-widest mb-1">Lead Biologist</div>
          <h3 className="text-2xl font-serif mb-3">Dr. Aris Thorne</h3>
          <p className="text-muted-foreground text-sm">World-renowned expert in hadal-zone extremophiles. Dr. Thorne guides the scientific mission of every dive, identifying species never before seen.</p>
        </div>
      </div>
    </div>
  </section>
);

// ─── USP 2: RADICAL SAFETY TRANSPARENCY ─────────────────────────────────────────

const maintenanceLogs = [
  { date: "2025-06-14", tech: "Kovacs Engineering, Reykjavik", item: "Pressure hull ultrasonic stress scan", result: "Pass — zero micro-fractures detected" },
  { date: "2025-05-02", tech: "BlueWater Systems, Hamburg", item: "O2 scrubber cartridge replacement & recalibration", result: "Pass — O2 purity 99.97%" },
  { date: "2025-03-19", tech: "DNV-GL Inspector #3841", item: "Annual class survey — full external & internal inspection", result: "Class renewed — no deficiencies" },
  { date: "2025-01-07", tech: "E2 Internal Engineering", item: "Thruster bearing inspection & lubricant flush", result: "Pass — nominal wear levels" },
  { date: "2024-11-22", tech: "Triton Submarines Ltd.", item: "Viewport optical integrity test (pressure simulation)", result: "Pass — 1,500atm rated, no deformation" },
];

const certs = [
  { icon: BadgeCheck, label: "IMO Certified", sub: "International Maritime Organisation" },
  { icon: ShieldCheck, label: "DNV-GL Class +1A1", sub: "Deepwater Submersible" },
  { icon: Lock, label: "SOLAS Compliant", sub: "Safety of Life at Sea" },
  { icon: BadgeCheck, label: "USCG Approved", sub: "US Coast Guard Inspected" },
];

const SafetyTransparency = () => {
  const [logsOpen, setLogsOpen] = useState(false);

  return (
    <section className="py-32 bg-background border-t border-border/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-primary uppercase tracking-widest text-sm mb-4 block">No competitor shows you this</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold max-w-xl">
              Radical Safety <span className="text-primary">Transparency</span>
            </h2>
            <p className="text-muted-foreground max-w-sm md:text-right">
              Government approvals, real hull health scores, and the full maintenance history — publicly available, always current.
            </p>
          </div>
        </motion.div>

        {/* Live metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Hull Integrity", value: "97%", sub: "Last scan: June 2025", bar: 97 },
            { label: "Dives Completed", value: "142", sub: "Zero incidents", bar: null },
            { label: "Emergency Reserve", value: "96h", sub: "Life support capacity", bar: null },
            { label: "Inspection Cycle", value: "90 days", sub: "Next: Sep 14, 2025", bar: null },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-card border border-border/30 p-6"
            >
              <div className="text-3xl font-serif font-bold text-foreground mb-1">{m.value}</div>
              <div className="text-xs text-primary uppercase tracking-widest mb-2">{m.label}</div>
              {m.bar !== null && (
                <div className="h-1 w-full bg-muted rounded-full mb-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }} whileInView={{ width: `${m.bar}%` }}
                    viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </div>
              )}
              <div className="text-xs text-muted-foreground">{m.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Certification badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {certs.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.label}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="flex items-start gap-4 bg-card border border-border/30 p-5"
              >
                <Icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-foreground">{cert.label}</div>
                  <div className="text-xs text-muted-foreground">{cert.sub}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Maintenance log toggle */}
        <div className="border border-border/30 bg-card">
          <button
            data-testid="btn-toggle-maintenance-log"
            onClick={() => setLogsOpen(!logsOpen)}
            className="w-full flex items-center justify-between px-8 py-5 hover:bg-muted/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-primary" />
              <span className="font-semibold tracking-wide">Full Maintenance Log — E2-LV001 (Leviathan Class)</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{logsOpen ? "Collapse" : "View all records"}</span>
              {logsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </button>

          <AnimatePresence>
            {logsOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }}
                className="overflow-hidden border-t border-border/30"
              >
                <div className="divide-y divide-border/20">
                  {maintenanceLogs.map((log, i) => (
                    <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6 px-8 py-5 text-sm hover:bg-muted/20 transition-colors">
                      <div className="font-mono text-muted-foreground">{log.date}</div>
                      <div className="text-foreground font-medium">{log.item}</div>
                      <div className="text-muted-foreground">{log.tech}</div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-foreground">{log.result}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-8 py-4 border-t border-border/20 bg-muted/10">
                  <p className="text-xs text-muted-foreground">All records independently verified by DNV-GL. Full audit trail available upon signed NDA for charter clients.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// ─── USP 3: DEMYSTIFIED PRICING ──────────────────────────────────────────────────

type TierKey = "observer" | "researcher" | "charter";

const pricingTiers = {
  observer: {
    name: "Observer",
    price: "$280,000",
    tagline: "The complete experience — nothing held back",
    includes: [
      { item: "12-hour dive (4h descent, 4h bottom, 4h ascent)", cost: "$180,000" },
      { item: "Pre-dive physical & psychological screening", cost: "$12,000" },
      { item: "2-night surface vessel accommodation", cost: "$18,000" },
      { item: "Personal 4K footage package & drone", cost: "$22,000" },
      { item: "Post-dive debrief & Certificate of Descent", cost: "$8,000" },
      { item: "Emergency evacuation coverage (worldwide)", cost: "$40,000" },
    ],
    note: "Pricing is per guest. All figures USD. Travel to departure port not included.",
  },
  researcher: {
    name: "Researcher",
    price: "$420,000",
    tagline: "Full scientific access, co-owned data",
    includes: [
      { item: "Everything in Observer tier", cost: "$280,000" },
      { item: "Robotic sample-arm dedicated mission window", cost: "$55,000" },
      { item: "Onboard spectrometry & sediment core analysis", cost: "$40,000" },
      { item: "Data co-ownership agreement & publication rights", cost: "Included" },
      { item: "$40,000 expedition credit for accepted proposals", cost: "−$40,000" },
    ],
    note: "Research proposals reviewed within 14 days. Academic institutions receive preferred scheduling.",
  },
  charter: {
    name: "Private Charter",
    price: "From $1.8M",
    tagline: "Exclusive access — your manifest, your terms",
    includes: [
      { item: "Full vessel exclusivity (5-day window)", cost: "$900,000" },
      { item: "Up to 3 dive days with custom coordinates", cost: "$540,000" },
      { item: "Dedicated media & broadcast crew (6-person)", cost: "$180,000" },
      { item: "Surface mothership with helipad & catering", cost: "$120,000" },
      { item: "NDA-protected operations & guest anonymity", cost: "Included" },
    ],
    note: "Charter pricing is indicative. Final quote issued after mission planning session. Deposit 30%.",
  },
};

const PricingBreakdown = () => {
  const [activeTier, setActiveTier] = useState<TierKey>("observer");
  const [breakdownOpen, setBreakdownOpen] = useState(false);
  const tier = pricingTiers[activeTier];

  return (
    <section id="pricing" className="py-32 bg-card border-y border-border/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-widest text-sm mb-4 block">No surprises</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">What It Actually Costs</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Deep-sea travel shouldn't feel exclusionary or opaque. Every dollar is accounted for, every tier is honest.
          </p>
        </motion.div>

        {/* Tier selector */}
        <div className="flex flex-col sm:flex-row gap-2 mb-10 max-w-xl mx-auto">
          {(Object.keys(pricingTiers) as TierKey[]).map((key) => (
            <button
              key={key}
              data-testid={`btn-tier-${key}`}
              onClick={() => { setActiveTier(key); setBreakdownOpen(false); }}
              className={`flex-1 py-3 px-4 text-sm uppercase tracking-widest border transition-all ${
                activeTier === key
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border/30 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {pricingTiers[key].name}
            </button>
          ))}
        </div>

        {/* Active tier card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTier}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto border border-border/30 bg-background"
          >
            <div className="p-8 md:p-10 border-b border-border/20">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
                <div>
                  <div className="text-primary uppercase tracking-widest text-xs mb-2">{tier.name} Tier</div>
                  <h3 className="text-4xl font-serif font-bold">{tier.price}</h3>
                </div>
                <p className="text-muted-foreground md:text-right md:max-w-[240px]">{tier.tagline}</p>
              </div>
            </div>

            {/* Toggle breakdown */}
            <button
              data-testid="btn-toggle-breakdown"
              onClick={() => setBreakdownOpen(!breakdownOpen)}
              className="w-full flex items-center justify-between px-8 md:px-10 py-4 hover:bg-muted/20 transition-colors border-b border-border/20"
            >
              <div className="flex items-center gap-2 text-sm">
                <BarChart3 className="w-4 h-4 text-primary" />
                <span>See full cost breakdown</span>
              </div>
              {breakdownOpen ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
            </button>

            <AnimatePresence>
              {breakdownOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="divide-y divide-border/20">
                    {tier.includes.map((line, i) => (
                      <div key={i} className="flex justify-between items-center px-8 md:px-10 py-4 text-sm">
                        <span className="text-muted-foreground">{line.item}</span>
                        <span className="font-mono text-foreground shrink-0 ml-4">{line.cost}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="px-8 md:px-10 py-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <p className="text-xs text-muted-foreground max-w-sm">{tier.note}</p>
              <Button className="rounded-none shrink-0" asChild>
                <a href="#booking" data-testid={`btn-pricing-cta-${activeTier}`}>Request Quote</a>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// ─── USP 4: CONFIDENCE BEFORE BOOKING ───────────────────────────────────────────

const prepChecklist = [
  { id: "medical", label: "Complete pre-dive medical questionnaire", note: "Required 90 days prior" },
  { id: "fitness", label: "Cardiovascular fitness test cleared", note: "VO2 max ≥ 35 ml/kg/min" },
  { id: "psych", label: "Confinement acclimatisation session", note: "2-day onsite programme" },
  { id: "brief", label: "Emergency protocol briefing attended", note: "Mandatory — 4 hours" },
  { id: "kit", label: "Thermal suit fitting completed", note: "At departure facility" },
  { id: "nok", label: "Next-of-kin documentation submitted", note: "Standard for all expeditions" },
];

const cabinStats = [
  { label: "Cabin Pressure", value: "1 atm", icon: Activity },
  { label: "Cabin Temp", value: "21 °C", icon: Activity },
  { label: "O₂ Concentration", value: "20.9%", icon: Activity },
  { label: "Interior Volume", value: "4.2 m³", icon: Eye },
  { label: "Seating", value: "3 + Pilot", icon: Eye },
  { label: "Viewport Diameter", value: "600mm", icon: Eye },
];

const cabinPhotos = [
  { src: "/images/cabin-lounge.png", label: "Observation Lounge", caption: "Dual panoramic viewports with premium seating — watch schools of deep-sea fish from your sofa" },
  { src: "/images/cabin-suite.png", label: "Private Suite", caption: "King berth with 600mm viewport — fall asleep to the midnight zone" },
  { src: "/images/cabin-dining.png", label: "Dining & Social Deck", caption: "10-seat dining table, curved lounge, and spiral access stair to the bridge" },
];

const ConfidenceBeforeBooking = () => {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [activeView, setActiveView] = useState<"cabin" | "checklist">("cabin");
  const [activePhoto, setActivePhoto] = useState(0);

  const toggle = (id: string) => {
    const next = new Set(checked);
    next.has(id) ? next.delete(id) : next.add(id);
    setChecked(next);
  };

  const progress = Math.round((checked.size / prepChecklist.length) * 100);

  return (
    <section className="py-32 bg-background border-t border-border/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-primary uppercase tracking-widest text-sm mb-4 block">Confidence before commitment</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold max-w-xl">
              Know Before <span className="text-primary">You Descend</span>
            </h2>
            <p className="text-muted-foreground max-w-sm md:text-right">
              360° cabin preview and an interactive prep checklist — so nothing feels unknown when you step aboard.
            </p>
          </div>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex gap-2 mb-8">
          {(["cabin", "checklist"] as const).map((view) => (
            <button
              key={view}
              data-testid={`btn-view-${view}`}
              onClick={() => setActiveView(view)}
              className={`flex items-center gap-2 px-5 py-2.5 text-sm uppercase tracking-widest border transition-all ${
                activeView === view
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border/30 text-muted-foreground hover:border-primary/40"
              }`}
            >
              {view === "cabin" ? <Eye className="w-4 h-4" /> : <ClipboardList className="w-4 h-4" />}
              {view === "cabin" ? "360° Cabin Preview" : "Prep Checklist"}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeView === "cabin" ? (
            <motion.div
              key="cabin"
              initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* Real cabin photo gallery */}
              <div className="flex flex-col gap-3">
                {/* Main photo */}
                <div className="relative overflow-hidden aspect-[16/10] bg-card border border-border/30">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activePhoto}
                      src={cabinPhotos[activePhoto].src}
                      alt={cabinPhotos[activePhoto].label}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.45 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  {/* Caption overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5">
                    <div className="text-xs uppercase tracking-widest text-primary mb-1">{cabinPhotos[activePhoto].label}</div>
                    <p className="text-sm text-white/80">{cabinPhotos[activePhoto].caption}</p>
                  </div>
                  {/* Counter */}
                  <div className="absolute top-4 right-4 text-xs font-mono text-white/50 bg-black/40 px-2 py-1 rounded-sm">
                    {activePhoto + 1} / {cabinPhotos.length}
                  </div>
                </div>
                {/* Thumbnails */}
                <div className="grid grid-cols-3 gap-2">
                  {cabinPhotos.map((photo, i) => (
                    <button
                      key={i}
                      onClick={() => setActivePhoto(i)}
                      className={`relative overflow-hidden aspect-video border-2 transition-all ${
                        activePhoto === i ? "border-primary" : "border-border/20 hover:border-primary/40"
                      }`}
                    >
                      <img src={photo.src} alt={photo.label} className="w-full h-full object-cover" />
                      {activePhoto !== i && <div className="absolute inset-0 bg-black/40" />}
                      <div className="absolute bottom-0 inset-x-0 bg-black/60 px-1.5 py-1">
                        <p className="text-[10px] text-white/80 truncate">{photo.label}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Cabin stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 content-start">
                {cabinStats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                      className="bg-card border border-border/30 p-5"
                    >
                      <Icon className="w-4 h-4 text-primary mb-3 opacity-60" />
                      <div className="text-2xl font-serif font-bold text-foreground mb-1">{stat.value}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="checklist"
              initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl"
            >
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-muted-foreground uppercase tracking-widest">Pre-Dive Readiness</span>
                  <span className="text-sm font-mono text-primary">{progress}%</span>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>

              <div className="space-y-3">
                {prepChecklist.map((item, i) => {
                  const isDone = checked.has(item.id);
                  return (
                    <motion.button
                      key={item.id}
                      data-testid={`checkbox-${item.id}`}
                      onClick={() => toggle(item.id)}
                      initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                      className={`w-full text-left flex items-start gap-4 p-5 border transition-all ${
                        isDone ? "border-primary/40 bg-primary/5" : "border-border/30 bg-card hover:border-primary/30"
                      }`}
                    >
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${isDone ? "border-primary bg-primary" : "border-border"}`}>
                        {isDone && <CheckCircle2 className="w-3 h-3 text-white" />}
                      </div>
                      <div>
                        <div className={`text-sm font-medium transition-colors ${isDone ? "text-muted-foreground line-through" : "text-foreground"}`}>{item.label}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{item.note}</div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {progress === 100 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-5 border border-primary/40 bg-primary/5 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <div>
                    <div className="text-sm font-semibold">Dive-Ready</div>
                    <div className="text-xs text-muted-foreground">All pre-departure requirements satisfied. You are cleared to descend.</div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// ─── WHAT TO EXPECT ──────────────────────────────────────────────────────────────

const WhatToExpect = () => (
  <section className="py-32 bg-card">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold mb-4">What to Expect</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">A journey to the bottom of the ocean requires preparation. Here is your timeline.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[
          { step: "01", title: "Physical Prep", desc: "A comprehensive medical review and 2 days of G-force and confinement familiarization at our surface facility." },
          { step: "02", title: "The Briefing", desc: "Review the target topography, mission objectives, and emergency protocols with your pilot and crew." },
          { step: "03", title: "The 12-Hour Dive", desc: "4 hours down. 4 hours on the bottom exploring. 4 hours ascent. A grueling but transformative day." },
        ].map((item) => (
          <div key={item.step} className="p-8 border border-border/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 text-6xl font-serif text-muted-foreground/10 group-hover:text-primary/70 transition-colors duration-300">{item.step}</div>
            <h3 className="text-xl font-serif mb-4 relative z-10">{item.title}</h3>
            <p className="text-muted-foreground text-sm relative z-10">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── SUSTAINABILITY ───────────────────────────────────────────────────────────────

const Sustainability = () => (
  <section className="py-24 bg-background border-y border-border/10">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Leave No Trace</h2>
          <p className="text-muted-foreground mb-6">The deep ocean is the most fragile ecosystem on our planet. Expedition 2 operates with a strictly zero-impact mandate.</p>
          <ul className="space-y-4">
            {[
              "100% Electric, silent propulsion to avoid acoustic trauma.",
              "Zero physical contact with the seabed or hydrothermal vents.",
              "15% of all expedition fees fund the Hadal Conservation Trust.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-[0_0_50px_rgba(0,180,255,0.2)]">
            <img src="/images/eco.jpg" alt="Glowing jellyfish" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── BOOKING ──────────────────────────────────────────────────────────────────────

const Booking = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="booking" className="py-32 bg-card relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4">Request a Briefing</h2>
          <p className="text-muted-foreground">Manifest spots are strictly limited to 12 guests per year. Submit your details to schedule a private consultation.</p>
        </div>

        {status === "success" ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-background border border-primary/30 p-8 text-center">
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-serif mb-2">Transmission Received</h3>
            <p className="text-muted-foreground">Our manifest director will contact you via secure channel within 24 hours to arrange your briefing.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-background p-8 md:p-10 border border-border/50 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" required className="bg-card" data-testid="input-firstname" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" required className="bg-card" data-testid="input-lastname" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Secure Email</Label>
              <Input id="email" type="email" required className="bg-card" data-testid="input-email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="intent">Reason for Expedition</Label>
              <textarea
                id="intent" required
                className="flex min-h-[100px] w-full border border-border/50 bg-card px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                placeholder="Briefly describe your motivation..."
                data-testid="input-intent"
              />
            </div>
            <Button type="submit" className="w-full h-14 text-lg mt-4" disabled={status === "submitting"} data-testid="btn-submit-booking">
              {status === "submitting" ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                  Encrypting...
                </div>
              ) : "Initiate Contact"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

// ─── FOOTER ───────────────────────────────────────────────────────────────────────

const Footer = () => (
  <footer className="bg-[#02050a] py-12 border-t border-border/20">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Anchor className="w-5 h-5 text-primary" />
          <span className="font-serif font-bold tracking-wider text-muted-foreground">
            EXPEDITION<span className="text-primary">2</span>
          </span>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground/60">
          <a href="#" className="hover:text-primary transition-colors">Terms of Descent</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">DNV-GL Registry</a>
        </div>
        <div className="text-xs text-muted-foreground/40">© {new Date().getFullYear()} Expedition 2 Operations Ltd.</div>
      </div>
    </div>
  </footer>
);

// ─── PAGE ─────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-primary-foreground text-foreground">
      <Navbar />
      <Hero />
      <ChooseYourDive />
      <Philosophy />
      <Vessel />
      <DepthJourney />
      <TrustAndCrew />
      <SafetyTransparency />
      <ConfidenceBeforeBooking />
      <WhatToExpect />
      <PricingBreakdown />
      <Sustainability />
      <Booking />
      <Footer />
    </main>
  );
}
