import { Github, Linkedin, Mail, Cpu, Radio, Database, Layout, MapPin, Calendar, Phone, Instagram } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary">
      {/* Background Glow */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Column: Header & Nav */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                <Link href="/">Aprialdi Dimus Prasetyo</Link>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">
                IoT & Embedded System Engineer (Junior)
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-muted-foreground">
                Lulusan D3 Teknik Elektronika Politeknik Negeri Ujung Pandang dengan spesialisasi pada IoT dan sistem
                embedded.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href="mailto:aprialdidimusprasetyo@gmail.com"
                  className="group flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail size={18} className="text-primary" />
                  aprialdidimusprasetyo@gmail.com
                </a>
                <a
                  href="tel:+6285282469974"
                  className="group flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone size={18} className="text-primary" />
                  085282469974
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

            <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/aprialdi-dimus-prasetyo-738943311/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/wellyyy_16/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:aprialdidimusprasetyo@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail size={24} />
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
              <div>
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  Saya adalah lulusan D3 Teknik Elektronika dengan pengalaman praktik yang kuat dalam perancangan dan
                  implementasi sistem IoT dan embedded system. Saya telah menyelesaikan beberapa proyek nyata di bidang
                  kontrol otomatis, integrasi sensor industri, komunikasi nirkabel, serta sistem monitoring berbasis
                  cloud.
                </p>
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  Setiap sistem yang saya kerjakan dirancang dan diuji agar berfungsi secara stabil serta mudah dipahami
                  secara operasional. Saya mampu bekerja dari sisi hardware, firmware, hingga web dengan pola kerja
                  terstruktur.
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
                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2"
                    aria-label="Februari 2025 sampai Mei 2025"
                  >
                    Feb — Mei 2025
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-foreground">
                      <div>
                        <span className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base">
                          Electrical Engineering Intern
                        </span>
                      </div>
                      <div className="text-muted-foreground mt-1" aria-hidden="true">
                        PT. Pelabuhan Indonesia (Persero)
                      </div>
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        Palu, Sulawesi Tengah
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        Magang (3 bln)
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-normal text-muted-foreground">
                      Bertanggung jawab dalam pemeliharaan dan troubleshooting sistem kelistrikan serta instrumentasi di
                      area operasional pelabuhan. Fokus pada efisiensi sistem dan penanganan kendala teknis kelistrikan.
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

                    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Keahlian yang digunakan">
                      {[
                        "Electrical Engineering",
                        "Electrical and Instrumentation Engineering (EIE)",
                        "Maintenance",
                        "Electrical Troubleshooting",
                      ].map((skill) => (
                        <li key={skill} className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary leading-5">
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
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { icon: Cpu, text: "Embedded System ESP32 (Arduino)" },
                  { icon: Radio, text: "Komunikasi Nirkabel (WiFi, NRF24L01)" },
                  { icon: Database, text: "Firebase Realtime Database" },
                  { icon: Layout, text: "RS485 Modbus Industrial Sensors" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 rounded border border-border bg-accent/20 p-3">
                    <item.icon size={18} className="text-primary" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>• Kontrol PWM dan kontrol digital</li>
                <li>• Penggunaan relay serta penanganan catu daya DC & AC</li>
                <li>• Sistem monitoring & kontrol berbasis web (Blynk / custom)</li>
                <li>• Penyusunan dokumentasi teknis dan diagram sistem</li>
              </ul>
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
                      src="/airport-runway-lights-system.jpg"
                      alt="Airfield Lighting"
                      className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
                    />
                  </div>
                  <div className="z-10 col-span-8 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-foreground text-base">
                      <div className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link">
                        Airfield Lighting Control System
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-muted-foreground">
                      Sistem kontrol lampu bandara (Runway, Taxiway, PAPI, dll) berbasis ESP32 dengan pengaturan
                      intensitas PWM dan kontrol via web/Blynk.
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      <li className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">ESP32</li>
                      <li className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">PWM</li>
                      <li className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">Relay</li>
                    </ul>
                  </div>
                </div>

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
                    <header className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Jan 2025 — Sep 2025 • Terkait dengan PNUP
                    </header>
                    <h3 className="font-medium leading-snug text-foreground text-base">
                      <div className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link">
                        Sistem Monitoring Kesuburan Tanah Berbasis Wireless Sensor Network
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-muted-foreground">
                      Mengembangkan sistem berbasis IoT & WSN untuk memantau kesuburan tanah secara real-time. Sensor
                      kelembapan, NPK, dan suhu terhubung melalui ESP32 & NRF24L01, data ditampilkan di LCD, Website dan
                      tersimpan di Firebase.
                    </p>
                    <p className="mt-2 text-sm italic leading-normal text-primary">
                      Hasil: Pemantauan tanah lebih akurat, efisien, dan siap mendukung pertanian cerdas.
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

                    <ul className="mt-4 flex flex-wrap gap-2">
                      {[
                        "Web Development",
                        "Wireless Sensor Networks",
                        "Electrical Engineering",
                        "Sensory Integration",
                        "Electrical Panel Design",
                      ].map((skill) => (
                        <li key={skill} className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="group relative grid grid-cols-8 gap-4 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-accent/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 col-span-2 hidden sm:block">
                    <img
                      src="/ai-landing-page-modern-ui.jpg"
                      alt="WellAI"
                      className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
                    />
                  </div>
                  <div className="z-10 col-span-8 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-foreground text-base">
                      <div className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link">
                        WellAI – AI Landing Page Generator
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-muted-foreground">
                      Aplikasi web penghasil konten landing page otomatis berbasis prompt menggunakan OpenAI API,
                      Next.js, dan Tailwind CSS.
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      <li className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">Next.js</li>
                      <li className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">OpenAI</li>
                      <li className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">Tailwind</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
              <p>
                Dibuat dengan <span className="text-foreground">Next.js</span> dan{" "}
                <span className="text-foreground">Tailwind CSS</span>. Berfokus pada presisi teknis dan performa sistem.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}
