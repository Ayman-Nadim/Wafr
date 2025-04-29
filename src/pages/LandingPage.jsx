"use client"

import { useState, useEffect } from "react"
import { Download, CheckCircle, Star, Users, ShieldCheck, ShoppingBag, TrendingUp, Zap, Gift } from "lucide-react"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [countdown, setCountdown] = useState({
    days: 7,
    hours: 24,
    minutes: 60,
    seconds: 60,
  })

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Testimonial auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div dir="rtl" className="flex min-h-screen flex-col bg-white">
      <header
        className={`sticky top-0 z-50 w-full border-b bg-white transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-purple-600 mr-5 sm:mr-10">
              <img src="https://www.wafr.co/assets/img/logo/logo.png" style={{width:"40px"}}/>
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-sm font-medium hover:text-purple-600 transition-colors">
              شنو كنقدمو
            </a>
            <a href="#benefits" className="text-sm font-medium hover:text-purple-600 transition-colors">
              علاش WAFR
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-purple-600 transition-colors">
              شنو قالو علينا
            </a>
            <a href="#download" className="text-sm font-medium hover:text-purple-600 transition-colors">
              حمل التطبيق
            </a>
          </nav>
          <div className="flex items-center gap-4 ml-2 sm:ml-10">
            {/* <button className="hidden md:flex h-10 items-center justify-center rounded-md bg-purple-600 px-8 text-sm font-medium text-white hover:bg-purple-700 transition-colors">
              بدا دابا
            </button> */}
            <button className="hidden md:flex h-10 items-center justify-center rounded-md bg-purple-600 px-8 text-sm font-medium text-white hover:bg-purple-700 transition-colors">
            تسجيل الدخول    
            </button>
            <button
              onClick={toggleMobileMenu}
              className="md:hidden h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium"
            >
              <span className="sr-only">القائمة</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 pr-2"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b shadow-lg py-4 px-6 absolute w-full">
            <nav className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-sm font-medium hover:text-purple-600 py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                شنو كنقدمو
              </a>
              <a
                href="#benefits"
                className="text-sm font-medium hover:text-purple-600 py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                علاش WAFR
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium hover:text-purple-600 py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                شنو قالو علينا
              </a>
              <a
                href="#download"
                className="text-sm font-medium hover:text-purple-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                حمل التطبيق
              </a>
              <button className="mt-4 w-full h-10 items-center justify-center rounded-md bg-purple-600 px-8 text-sm font-medium text-white hover:bg-purple-700 transition-colors">
                بدا دابا
              </button>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-1">
        <section className="w-full py-6 md:py-24 lg:py-14 bg-gradient-to-b from-white to-purple-50 ">
          <div className="container px-1 md:px-6 mr-0 sm:mr-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600 animate-pulse">
                    جديد فالمغرب 🇲🇦
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    <span className="text-purple-600">WAFR</span> أفضل تطبيق لزيادة هامش الربح في محلك
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    مع WAFR، غادي تقدر تزيد فالمداخيل ديالك بطريقة سهلة و بسيطة. كنساعدو التجار باش يديرو برامج ديال
                    الولاء الرقمية و نعطيوهم تحليلات مهمة.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button className="inline-flex h-10 items-center justify-center rounded-md bg-purple-600 px-8 text-sm font-medium text-white hover:bg-purple-700 transition-colors transform hover:scale-105">
                    <Download className="ml-2 h-4 w-4" />
                    حمل التطبيق دابا
                  </button>
                  <button className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium hover:bg-gray-50 transition-colors">
                    شوف كيفاش كيخدم
                  </button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-purple-600 text-purple-600" />
                    <Star className="h-4 w-4 fill-purple-600 text-purple-600" />
                    <Star className="h-4 w-4 fill-purple-600 text-purple-600" />
                    <Star className="h-4 w-4 fill-purple-600 text-purple-600" />
                    <Star className="h-4 w-4 fill-purple-600 text-purple-600" />
                  </div>
                  <div className="text-gray-500">
                    كيستعملوه أكثر من <span className="font-bold text-purple-600">1000</span> تاجر فالمغرب
                  </div>
                </div>

                {/* Countdown Timer
                <div className="mt-6 p-4 bg-white rounded-lg shadow-md border border-purple-100">
                  <p className="text-sm font-medium text-gray-700 mb-2">عرض خاص - باقي:</p>
                  <div className="flex justify-between">
                    <div className="text-center">
                      <div className="bg-purple-100 rounded-md p-2 w-14">
                        <span className="text-xl font-bold text-purple-600">{countdown.days}</span>
                      </div>
                      <span className="text-xs text-gray-500">يوم</span>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 rounded-md p-2 w-14">
                        <span className="text-xl font-bold text-purple-600">{countdown.hours}</span>
                      </div>
                      <span className="text-xs text-gray-500">ساعة</span>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 rounded-md p-2 w-14">
                        <span className="text-xl font-bold text-purple-600">{countdown.minutes}</span>
                      </div>
                      <span className="text-xs text-gray-500">دقيقة</span>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 rounded-md p-2 w-14">
                        <span className="text-xl font-bold text-purple-600">{countdown.seconds}</span>
                      </div>
                      <span className="text-xs text-gray-500">ثانية</span>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={require("../Mockup Wafer.png")}
                  alt="تطبيق WAFR"
                  className="rounded-2xl object-contain transform hover:scale-105 transition-transform duration-500 shadow-xl"
                  style={{ maxWidth: "500px", maxHeight: "600px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="w-full py-8 bg-white border-y border-gray-100">
          <div className="container px-4 md:px-6">
            <p className="text-center text-sm text-gray-500 mb-6">كيثيقو فينا:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <img
                src="https://bghit-nekhdem.com/wp-content/uploads/2023/02/Marjane.png"
                alt="Marjane"
                className="h-20 opacity-90 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/30/Logo_of_B%C4%B0M.PNG"
                alt="BIM"
                className="h-16 opacity-90 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/fr/f/fc/Aswak_logo.PNG"
                alt="Aswak Assalam"
                className="h-20 opacity-90  hover:opacity-100 transition-opacity"
              />
              <img
                src="https://www.poybelgium.com/wp-content/uploads/2023/12/carrefour-logo.png"
                alt="Carrefour"
                className="h-40 opacity-90  hover:opacity-100 transition-opacity"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-qnjg0x9x0fPONfpkoiHz89iu52nFHGWcC1GshtlDae_BQBD6Y--X7NfTfGj5GS3vVhc&usqp=CAU"
                alt="Atacadao"
                className="h-40 opacity-90  hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">
                  شنو كنقدمو
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">كلشي لي محتاج</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  WAFR كيقدم حل شامل للتجار باش يديرو برامج ديال الولاء و يزيدو فالمداخيل ديالهم.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm hover:border-purple-600 hover:shadow-md transition-all transform hover:scale-105">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">برامج الولاء</h3>
                  <p className="text-gray-500">دير برامج ديال الولاء رقمية لي غادي تخلي الزبناء ديالك يرجعو ليك.</p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm hover:border-purple-600 hover:shadow-md transition-all transform hover:scale-105">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">لوحة تحليلات</h3>
                  <p className="text-gray-500">شوف تحليلات مهمة على الزبناء ديالك و كيفاش كيشريو.</p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm hover:border-purple-600 hover:shadow-md transition-all transform hover:scale-105">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <ShieldCheck className="h-6 w-6 text-purple-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">معاملات آمنة</h3>
                  <p className="text-gray-500">دير المعاملات و المكافآت بطريقة آمنة من خلال المنصة ديالنا.</p>
                </div>
              </div>
            </div>

            {/* Additional Features */}
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm hover:border-purple-600 hover:shadow-md transition-all transform hover:scale-105">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <ShoppingBag className="h-6 w-6 text-purple-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">تدبير المخزون</h3>
                  <p className="text-gray-500">تبع المخزون ديالك و عرف شنو خاصك تشري بناءً على البيانات.</p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm hover:border-purple-600 hover:shadow-md transition-all transform hover:scale-105">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">عروض خاصة</h3>
                  <p className="text-gray-500">دير عروض خاصة للزبناء ديالك باش تزيد فالمبيعات ديالك.</p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm hover:border-purple-600 hover:shadow-md transition-all transform hover:scale-105">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <Gift className="h-6 w-6 text-purple-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">هدايا و مكافآت</h3>
                  <p className="text-gray-500">كافئ الزبناء ديالك بهدايا و خصومات باش يبقاو وفيين ليك.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-900 to-purple-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                  <img
                    src="https://www.wafr.co/assets/img/supp1.png"
                    alt="تطبيق WAFR"
                    className="object-contain w-full h-full transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-white/20 px-3 py-1 text-sm text-white">ميزة خاصة</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">تحليلات متقدمة</h2>
                  <p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    استافد من البيانات ديال الزبناء ديالك باش تاخد قرارات أفضل و تزيد فالمبيعات. عرف شنو بغاو الزبناء
                    ديالك و شنو هوما الاتجاهات ديال السوق.
                  </p>
                </div>
                <ul className="grid gap-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-white mt-0.5" />
                    <span>تحليل سلوك المستهلك المغربي</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-white mt-0.5" />
                    <span>تقارير المبيعات فالوقت الحقيقي</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-white mt-0.5" />
                    <span>توقعات الاتجاهات المستقبلية فالسوق المغربي</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-white mt-0.5" />
                    <span>مقارنة مع المنافسين فنفس القطاع</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <button className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-purple-600 hover:bg-gray-100 transition-colors transform hover:scale-105">
                    طلب عرض توضيحي دابا
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">
                    علاش WAFR؟
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">علاش تختار WAFR؟</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    المنصة ديالنا كتقدم مزايا فريدة للتجار المغاربة لي بغاو ينميو الأعمال ديالهم.
                  </p>
                </div>
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">زيادة فالاحتفاظ بالزبناء</h3>
                      <p className="text-gray-500">
                        برامج الولاء الرقمية كتخلي الزبناء يرجعو ليك، و هادشي كيزيد فمعدل الاحتفاظ بنسبة تصل إلى 30٪.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">قرارات مبنية على البيانات</h3>
                      <p className="text-gray-500">
                        حصل على معلومات على تفضيلات الزبناء ديالك و عادات الشراء ديالهم باش تاخد قرارات تجارية مدروسة.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">سهولة الاستخدام</h3>
                      <p className="text-gray-500">
                        المنصة ديالنا سهلة الاستخدام و كتندمج بسلاسة مع الأنظمة ديالك الحالية، بلا متحتاج وقت كبير
                        للإعداد.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">مصمم خصيصاً للسوق المغربي</h3>
                      <p className="text-gray-500">
                        WAFR مصمم خصيصاً للسوق المغربي، و كيفهم احتياجات التجار المغاربة و الزبناء المغاربة.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[500px] w-full overflow-hidden rounded-xl">
                  <img
                    src="https://scontent.fcmn1-4.fna.fbcdn.net/v/t39.30808-6/482029899_1039581034883280_3746842263283988818_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGFxeKhCpFX6BUnDZ0I0ItJOn1wfqroAoM6fXB-qugCg6Kn4pairO-QOTXJMyZi5lgXN6tMnK2eztuuwcPo6iGq&_nc_ohc=dmL_OsYgCCQQ7kNvwFxkySQ&_nc_oc=AdmQI7SuBIGr8X2koHZPisFdN-VcVlpzNm2L-iRe1iaf2xLF-XB1JF0l2v1QN9bpMKY&_nc_zt=23&_nc_ht=scontent.fcmn1-4.fna&_nc_gid=daBApqO3mqah_34TSWnF9w&oh=00_AfHSnJ2LgmNlH_5Ceb0ra8JtFy8zFgWLk1yGTxU1ZS2yVA&oe=68160C51"
                    alt="فوائد WAFR"
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500 shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">
                  شنو قالو علينا
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">شنو كيقولو المستخدمين ديالنا</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ماشي غير احنا لي كنقولو. ها شنو كيقولو التجار لي كيستعملو WAFR.
                </p>
              </div>
            </div>

            {/* Testimonial Slider */}
            <div className="relative mx-auto max-w-5xl py-12">
              <div className="overflow-hidden rounded-xl border shadow-lg">
                <div
                  className="flex transition-transform duration-500"
                  style={{ transform: `translateX(${activeTestimonial * 100}%)` }}
                >
                  <div className="min-w-full p-8 bg-white">
                    <div className="flex flex-col h-full justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center gap-1">
                          <Star className="h-5 w-5 fill-purple-600 text-purple-600" />
                          <Star className="h-5 w-5 fill-purple-600 text-purple-600" />
                          <Star className="h-5 w-5 fill-purple-600 text-purple-600" />
                          <Star className="h-5 w-5 fill-purple-600 text-purple-600" />
                        </div>
                        <p className="text-gray-700 text-lg italic">
                          "منين بدينا كنستعملو WAFR، زاد الاحتفاظ بالزبناء ديالنا بنسبة 25٪. المنصة سهلة الاستخدام و
                          كتعطينا معلومات مهمة. الزبناء ديالنا ولاو كيجيو عندنا بشكل منتظم."
                        </p>
                      </div>
                      <div className="flex items-center gap-4 mt-6">
                        <div className="rounded-full bg-purple-100 p-1">
                          <div className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden">
                            <img
                              src="https://www.shutterstock.com/image-photo/business-man-hands-selfie-smile-260nw-2236096089.jpg"
                              alt="محمد العلمي"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <p className="font-medium">محمد العلمي</p>
                          <p className="text-sm text-gray-500">مول حانوت، الدار البيضاء</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="min-w-full p-8 bg-white">
                    <div className="flex flex-col h-full justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center gap-1">
                          <Star className="h-5 w-5 fill-purple-600 text-purple-600" />
                          <Star className="h-5 w-5 fill-purple-600 text-purple-600" />
                          <Star className="h-5 w-5 fill-purple-600 text-purple-600" />
                          <Star className="h-5 w-5 fill-purple-600 text-purple-600" />
                          <Star className="h-5 w-5 fill-purple-600 text-purple-600" />
                        </div>
                        <p className="text-gray-700 text-lg italic">
                          "WAFR بدل الطريقة لي كنتعاملو بها مع الزبناء ديالنا. برنامج الولاء ناجح بزاف، و شفنا زيادة
                          كبيرة فالمبيعات. دابا الزبناء كيجيو عندنا بدل ما يمشيو للمنافسين."
                        </p>
                      </div>
                      <div className="flex items-center gap-4 mt-6">
                        <div className="rounded-full bg-purple-100 p-1">
                          <div className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ68yttYvmrHSppiEjN3TBLRpmnMJAcq1Wv_Q&s"
                              alt="فاطمة بنعلي"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <p className="font-medium">فاطمة بنعلي</p>
                          <p className="text-sm text-gray-500">مديرة سوبر ماركت، الرباط</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="min-w-full p-8 bg-white">
                    <div className="flex flex-col h-full justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center gap-1">
                          <Star className="h-5 w-5 fill-purple-600 text-purple-600" />
                          <Star className="h-5 w-5 fill-purple-600 text-purple-600" />
                          <Star className="h-5 w-5 fill-purple-600 text-purple-600" />
                          <Star className="h-5 w-5 fill-purple-600 text-purple-600" />
                          <Star className="h-5 w-5 fill-purple-600 text-purple-600" />
                        </div>
                        <p className="text-gray-700 text-lg italic">
                          "التحليلات لي كيعطينا WAFR ساعدتنا باش ناخدو قرارات أفضل على المخزون ديالنا. دابا كنعرفو بالضبط
                          شنو بغاو الزبناء ديالنا و شنو خاصنا نشريو."
                        </p>
                      </div>
                      <div className="flex items-center gap-4 mt-6">
                        <div className="rounded-full bg-purple-100 p-1">
                          <div className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden">
                            <img
                              src="https://img.freepik.com/free-photo/portrait-smiling-muslim-man-restaurant_23-2147794349.jpg"
                              alt="يوسف قادري"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <p className="font-medium">يوسف قادري</p>
                          <p className="text-sm text-gray-500">مول ميني ماركت، مراكش</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Navigation */}
              <div className="flex justify-center mt-6 gap-2">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-3 w-3 rounded-full ${activeTestimonial === index ? "bg-purple-600" : "bg-gray-300"}`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-800 to-purple-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">نضم لمجتمع WAFR</h2>
                  <p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    نضم لأكثر من 1000 تاجر مغربي كيستعملو WAFR باش ينميو الأعمال ديالهم و يحسنو تجربة الزبناء ديالهم.
                  </p>
                </div>
                <ul className="grid gap-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-white mt-0.5" />
                    <span>دعم فني على مدار الساعة بالدارجة المغربية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-white mt-0.5" />
                    <span>تكوين مجاني على المنصة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-white mt-0.5" />
                    <span>تحديثات منتظمة للميزات</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-white mt-0.5" />
                    <span>مجتمع ديال التجار المغاربة للتبادل ديال الخبرات</span>
                  </li>
                </ul>

                {/* Email Signup Form */}
                <div className="mt-6 bg-white/10 p-4 rounded-lg">
                  <p className="text-white mb-3">سجل دابا و حصل على شهر مجاني:</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="البريد الإلكتروني ديالك"
                      className="flex-1 h-10 px-3 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
                    />
                    <button className="h-10 px-4 rounded-md bg-white text-purple-600 font-medium hover:bg-gray-100 transition-colors">
                      سجل دابا
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                  <img
                    src="https://scontent.fcmn1-1.fna.fbcdn.net/v/t39.30808-6/484109610_1038865108288206_8303641859288176433_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeExa0ksDa1e-ekuLoNW-0HmcEitUFZUkaNwSK1QVlSRo7LLM0rGXBeG3K22UIA8ttpP7pV6ndz4NzcP4_OICq54&_nc_ohc=7KZQl8fQy38Q7kNvwEaTcGZ&_nc_oc=AdmkF67SdH8PEEJKoSjhcO8YyfRTZd6T7or0xJ_qkmY0AirWzoALV7x91_DRBzkZWGc&_nc_zt=23&_nc_ht=scontent.fcmn1-1.fna&_nc_gid=i7HhmaIbkHmBGL-DkZ1EVw&oh=00_AfHiUho5460fS--pXaQrwdcKQu84WbqaCVJA7U1ui9esxw&oe=6815F599"
                    alt="مجتمع WAFR"
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="download" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">واجد باش تبدل المشروع ديالك؟</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  حمل تطبيق WAFR اليوم و بدا تنمي التجارة ديالك مع حلول الولاء الرقمية.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <button className="inline-flex h-10 items-center justify-center rounded-md bg-purple-600 px-8 text-sm font-medium text-white hover:bg-purple-700 transition-colors transform hover:scale-105">
                  <Download className="ml-2 h-4 w-4" />
                  تنزيل لنظام iOS
                </button>
                <button className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium hover:bg-gray-50 transition-colors transform hover:scale-105">
                  <Download className="ml-2 h-4 w-4" />
                  تنزيل لنظام Android
                </button>
              </div>

              {/* App Store Badges */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a href="#" className="transform hover:scale-105 transition-transform">
                  <img src="https://freelogopng.com/images/all_img/1664285914google-play-logo-png.png" alt="Google Play" className="h-16" />
                </a>
                <a href="#" className="transform hover:scale-105 transition-transform">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrKaG8bgW9xvul5oJMHqElZp9_cp2f8NP_eA&s" alt="App Store" className="h-16" />
                </a>
              </div>

              {/* QR Code */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg inline-block">
                <p className="text-sm text-gray-500 mb-2">مسح الكود باش تحمل التطبيق:</p>
                <div className=" pr-6 pt-4 rounded">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Qrcode_wikipedia_fr_v2clean.png" alt="QR Code" className="w-32 h-32" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-8 md:py-24 lg:py-32 bg-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">
                  أسئلة متداولة
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">أسئلة كيطرحوها بزاف</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  إجابات على الأسئلة لي كيطرحوها التجار بزاف.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl space-y-4">
              {/* FAQ Item */}
              <div className="rounded-lg border p-4 hover:border-purple-200 transition-colors">
                <h3 className="text-lg font-bold mb-2">واش WAFR مناسب للمحلات الصغيرة؟</h3>
                <p className="text-gray-600">
                  نعم، WAFR مصمم للمحلات من جميع الأحجام. عندنا باقات مختلفة تناسب المحلات الصغيرة و المتوسطة و الكبيرة.
                </p>
              </div>

              {/* FAQ Item */}
              <div className="rounded-lg border p-4 hover:border-purple-200 transition-colors">
                <h3 className="text-lg font-bold mb-2">شحال من الوقت خاصني باش نبدا نستعمل WAFR؟</h3>
                <p className="text-gray-600">
                  تقدر تبدا تستعمل WAFR فنفس النهار. الإعداد ديالو سهل و بسيط، و الفريق ديالنا غادي يساعدك فكلشي.
                </p>
              </div>

              {/* FAQ Item */}
              <div className="rounded-lg border p-4 hover:border-purple-200 transition-colors">
                <h3 className="text-lg font-bold mb-2">واش WAFR كيتWAFR بالدارجة المغربية؟</h3>
                <p className="text-gray-600">
                  نعم، WAFR متWAFR بالدارجة المغربية و العربية الفصحى و الفرنسية. تقدر تختار اللغة لي مناسبة ليك.
                </p>
              </div>

              {/* FAQ Item */}
              <div className="rounded-lg border p-4 hover:border-purple-200 transition-colors">
                <h3 className="text-lg font-bold mb-2">شنو هي تكلفة استخدام WAFR؟</h3>
                <p className="text-gray-600">
                  عندنا باقات مختلفة تبدا من 299 درهم فالشهر. تقدر تجرب WAFR مجاناً لمدة شهر بدون أي التزام.
                </p>
              </div>

              {/* FAQ Item */}
              <div className="rounded-lg border p-4 hover:border-purple-200 transition-colors">
                <h3 className="text-lg font-bold mb-2">واش تقدر تساعدني فالإعداد؟</h3>
                <p className="text-gray-600">
                  نعم، الفريق ديالنا غادي يساعدك فالإعداد و التكوين. كنWAFRو دعم فني على مدار الساعة بالدارجة المغربية.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-white py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-purple-600">
                <img src="https://www.wafr.co/assets/img/logo/logo.png"/>
              </span>
            </div>
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} وافر. جميع الحقوق محفوظة.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-2">صنع بفخر في المغرب 🇲🇦</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
