import { Github, Linkedin, Mail, Cpu, Radio, Database, Layout, MapPin, Calendar, Phone, Instagram } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary">
      {/* Background Glow */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[15%] -right-[5%] w-[35%] h-[35%] bg-primary/8 blur-[100px] rounded-full" />
        <div className="absolute bottom-[10%] -left-[10%] w-[30%] h-[30%] bg-accent opacity-50 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-8">
          {/* Left Column: Header & Nav */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground leading-tight">
                <Link href="/" className="hover:text-primary transition-colors">Aprialdi Dimus Prasetyo</Link>
              </h1>
              <h2 className="mt-4 text-xl sm:text-2xl font-medium text-primary">
                IoT & Embedded Systems Engineer
              </h2>
              <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground text-base">
                D3 Electronics Engineering graduate specializing in IoT and embedded systems design. Experienced in hardware, firmware, and web-based system integration.
              </p>

              <div className="mt-8 space-y-3 flex flex-col">
                <a
                  href="mailto:aprialdidimusprasetyo@gmail.com"
                  className="group flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail size={16} className="text-primary" />
                  </div>
                  <span>aprialdidimusprasetyo@gmail.com</span>
                </a>
                <a
                  href="tel:+6285282469974"
                  className="group flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Phone size={16} className="text-primary" />
                  </div>
                  <span>+62 852 8246 9974</span>
                </a>
              </div>

              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  <li>
                    <a className="group flex items-center py-3 active" href="#about">
                      <span className="nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground group-focus-visible:text-foreground">
                        Tentang
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center py-3" href="#experience">
                      <span className="nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground group-focus-visible:text-foreground">
                        Pengalaman
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center py-3" href="#competencies">
                      <span className="nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground group-focus-visible:text-foreground">
                        Kompetensi
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center py-3" href="#projects">
                      <span className="nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground group-focus-visible:text-foreground">
                        Proyek
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <ul className="ml-0 mt-12 flex items-center gap-4" aria-label="Social media">
              <li>
                <Link
                  href="#"
                  className="p-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/aprialdi-dimus-prasetyo-738943311/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/wellyyy_16/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:aprialdidimusprasetyo@gmail.com"
                  className="p-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </Link>
              </li>
            </ul>
          </header>

          {/* Right Column: Content Sections */}
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Tentang</h2>
              </div>
              <div className="space-y-5">
                <p className="text-base leading-relaxed text-foreground">
                  I am an Electronics Engineering graduate with strong experience in designing and implementing IoT and embedded systems. I have completed several real-world projects in automatic control, industrial sensor integration, wireless communication, and cloud-based monitoring systems.
                </p>
                <p className="text-base leading-relaxed text-foreground">
                  Every system I develop is engineered to be stable and operationally intuitive. I work across the full stack—from hardware design and firmware development to web application interfaces—with a structured, methodical approach.
                </p>
              </div>
            </section>

            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Pengalaman</h2>
              </div>
              <div className="space-y-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-accent/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header
                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-primary sm:col-span-2"
                    aria-label="Februari 2025 sampai Mei 2025"
                  >
                    Feb 2025 — May 2025
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-foreground">
                      <div>
                        <span className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-lg">
                          Electrical Engineering Intern
                        </span>
                      </div>
                      <div className="text-muted-foreground mt-2 text-base font-semibold" aria-hidden="true">
                        PT. Pelabuhan Indonesia (Persero)
                      </div>
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-primary" />
                        Palu, Central Sulawesi
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-primary" />
                        3-month internship
                      </div>
                    </div>
                    <p className="mt-4 text-base leading-relaxed text-foreground">
                      Managed maintenance and troubleshooting of electrical systems and instrumentation across port operational areas. Focused on system efficiency, technical problem resolution, and electrical infrastructure reliability.
                    </p>

                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        { src: "/pelindo-internship-2.jpg", alt: "Survey Area Kerja" },
                        { src: "/pelindo-internship-3.jpg", alt: "Instalasi Lampu Sorot" },
                        { src: "/pelindo-documentation-selfie.jpg", alt: "Monitoring Panel Kontrol" },
                        { src: "/pelindo-internship-4.jpg", alt: "Pemeliharaan Pompa" },
                        { src: "/pelindo-internship-5.jpg", alt: "Gedung Pelindo" },
                        { src: "/pelindo-internship-6.jpg", alt: "Panel Distribusi" },
                      ].map((img, idx) => (
                        <div
                          key={idx}
                          className="group/photo relative aspect-square overflow-hidden rounded-lg border border-border"
                        >
                          <img
                            src={img.src || "/placeholder.svg"}
                            alt={img.alt}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover/photo:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover/photo:opacity-100 flex items-end p-2">
                            <p className="text-[9px] text-white font-medium leading-tight">{img.alt}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Skills used">
                      {[
                        "Electrical Engineering",
                        "System Instrumentation",
                        "Preventive Maintenance",
                        "Technical Troubleshooting",
                      ].map((skill) => (
                        <li key={skill} className="rounded-full bg-primary/15 px-3 py-1.5 text-xs font-medium text-primary border border-primary/20 hover:border-primary/40 transition-colors">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="competencies" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Kompetensi</h2>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  { icon: Cpu, text: "Embedded Systems ESP32/Arduino" },
                  { icon: Radio, text: "Wireless Communication & NRF24L01" },
                  { icon: Database, text: "Firebase Realtime Database" },
                  { icon: Layout, text: "RS485 Modbus Industrial Sensors" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg border border-border bg-gradient-to-br from-accent to-accent/50 p-4 hover:border-primary/30 transition-all duration-300">
                    <div className="p-2 rounded-lg bg-primary/15 flex-shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-3">
                <h3 className="text-sm font-semibold text-foreground mb-4">Core Competencies</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 font-bold">→</span>
                    <span>PWM Control & Digital Electronics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 font-bold">→</span>
                    <span>Relay Management & Power Supply Design (DC/AC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 font-bold">→</span>
                    <span>Web-Based Monitoring Systems (Blynk & Custom Solutions)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 font-bold">→</span>
                    <span>Technical Documentation & System Diagrams</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Proyek</h2>
              </div>
              <div className="space-y-12">
                <div className="group relative grid grid-cols-8 gap-4 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-accent/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 col-span-2 hidden sm:block">
                    <img
                      src="/soil-monitoring-wsn-electronics.jpg"
                      alt="Soil Monitoring WSN"
                      className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
                    />
                  </div>
                  <div className="z-10 col-span-8 sm:col-span-6">
                    <header className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
                      Jan 2025 — Sep 2025 • Academic Project
                    </header>
                    <h3 className="font-medium leading-snug text-foreground text-lg">
                      <div className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link">
                        Soil Fertility Monitoring System via Wireless Sensor Network
                      </div>
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-foreground">
                      Developed an IoT & WSN-based system for real-time soil fertility monitoring. Integrated moisture, NPK, and temperature sensors via ESP32 & NRF24L01 radio modules with real-time data visualization on LCD displays, web dashboard, and Firebase cloud storage.
                    </p>
                    <p className="mt-3 text-sm italic leading-normal text-primary/80 bg-primary/5 border border-primary/10 rounded-lg p-3">
                      <span className="font-semibold text-primary">Impact:</span> Enables precise, efficient soil monitoring to support smart agriculture practices and improve crop yield optimization.
                    </p>
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        { src: "/soil-wsn-dashboard.jpg", alt: "Dashboard Monitoring Real-time" },
                        { src: "/soil-wsn-firebase.jpg", alt: "Firebase Realtime Database" },
                        { src: "/soil-wsn-hardware.jpg", alt: "Internal Hardware (ESP32 & Solar Controller)" },
                        { src: "/soil-wsn-cad-1.jpg", alt: "3D Design - Front View" },
                        { src: "/soil-wsn-cad-2.jpg", alt: "3D Design - Isometric View" },
                        { src: "/soil-wsn-cad-side.jpg", alt: "3D Design - Side View" },
                      ].map((img, idx) => (
                        <div
                          key={idx}
                          className="group/photo relative aspect-video overflow-hidden rounded-lg border border-border"
                        >
                          <img
                            src={img.src || "/placeholder.svg"}
                            alt={img.alt}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover/photo:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover/photo:opacity-100 flex items-end p-2">
                            <p className="text-[9px] text-white font-medium leading-tight">{img.alt}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {[
                        "Web Development",
                        "Wireless Sensor Networks",
                        "Embedded Systems",
                        "Sensor Integration",
                        "System Design",
                      ].map((skill) => (
                        <li key={skill} className="rounded-full bg-primary/15 px-3 py-1.5 text-xs font-medium text-primary border border-primary/20 hover:border-primary/40 transition-colors">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </section>

            <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
              <p>
                Built with <span className="text-foreground font-semibold">Next.js</span> &{" "}
                <span className="text-foreground">Tailwind CSS</span>. Berfokus pada presisi teknis dan performa sistem.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}
