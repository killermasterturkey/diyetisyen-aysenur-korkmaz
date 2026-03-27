/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Check,
  X,
  Info,
  Star,
  Coffee,
  Droplet,
  Utensils,
  Footprints,
  Scale,
  Plane,
  Printer,
  Mail,
  MapPin,
  Phone,
  Leaf,
  Activity,
  Zap,
  ShieldCheck,
  Globe
} from 'lucide-react';

/* ═══ Dekoratif arka plan ═══ */
const PageDecor = ({ variant = 1 }: { variant?: number }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {variant === 1 && <>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/3 rounded-full" />
      <div className="absolute top-1/3 left-10 w-48 h-48 bg-white/2 rounded-full" />
    </>}
    {variant === 2 && <>
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/4 rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/3 rounded-full" />
      <div className="absolute top-1/2 right-16 w-40 h-40 bg-white/2 rounded-full" />
    </>}
    {variant === 3 && <>
      <div className="absolute -top-24 right-1/3 w-72 h-72 bg-white/4 rounded-full" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/3 rounded-full" />
      <div className="absolute bottom-1/3 -right-16 w-56 h-56 bg-white/2 rounded-full" />
    </>}
    {variant === 4 && <>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/5 rounded-full" />
      <div className="absolute -bottom-24 right-1/4 w-64 h-64 bg-white/3 rounded-full" />
      <div className="absolute top-1/4 -right-16 w-48 h-48 bg-white/2 rounded-full" />
    </>}
    {variant === 5 && <>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/5 rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-white/3 rounded-full" />
      <div className="absolute bottom-1/3 right-10 w-48 h-48 bg-white/2 rounded-full" />
    </>}
  </div>
);

/* ═══ Sayfa üst/alt bilgi barı ═══ */
const PageTopBar = ({ pageNumber }: { pageNumber: number }) => (
  <div className="flex justify-between items-center shrink-0 relative z-10">
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 bg-white/15 rounded-full flex items-center justify-center border border-white/20">
        <Leaf className="text-white w-4 h-4" />
      </div>
      <div>
        <p className="text-[12px] font-bold text-white/90 leading-none">Dyt. Ayşenur Korkmaz</p>
        <p className="text-[9px] text-white/90 tracking-widest uppercase mt-0.5">Beslenme ve Diyet Uzmanı</p>
      </div>
    </div>
    <div className="flex items-center gap-3 text-[9px] text-white/85">
      <span className="flex items-center gap-1"><Phone className="w-2.5 h-2.5" /> 0547 537 3522</span>
      <div className="w-[1px] h-2.5 bg-white/15" />
      <span className="flex items-center gap-1"><Globe className="w-2.5 h-2.5" /> diyetisyenaysenurkorkmaz.com</span>
      <div className="w-[1px] h-2.5 bg-white/15" />
      <div className="w-5 h-5 bg-white/15 rounded-full flex items-center justify-center border border-white/20">
        <span className="text-white text-[8px] font-bold">{pageNumber}</span>
      </div>
    </div>
  </div>
);

const PageBottomBar = () => (
  <div className="flex justify-center items-center gap-4 shrink-0 relative z-10 text-[9px] text-white/90">
    <span className="flex items-center gap-1"><Leaf className="w-2.5 h-2.5" /> 10 Günde Metabolizma Resetleme</span>
    <div className="w-[1px] h-2.5 bg-white/15" />
    <span className="flex items-center gap-1"><Mail className="w-2.5 h-2.5" /> info@diyetisyenaysenurkorkmaz.com</span>
    <div className="w-[1px] h-2.5 bg-white/15" />
    <span className="flex items-center gap-1"><MapPin className="w-2.5 h-2.5" /> Muratpaşa/Antalya</span>
  </div>
);

/* ═══ Cam kartlar ═══ */
const GlassCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white/8 rounded-2xl border border-white/10 p-4 ${className}`}>
    {children}
  </div>
);

const GlassPill = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white/10 rounded-full px-4 py-1.5 border border-white/15 text-[11px] font-bold tracking-wider ${className}`}>
    {children}
  </div>
);

export default function Detoks0002Page() {
  const handlePrint = () => { window.print(); };

  return (
    <div className="detoks-theme font-dm-sans min-h-screen bg-gray-100 print:bg-white pb-10">
      <div className="fixed bottom-8 right-8 z-50 no-print">
        <button onClick={handlePrint} className="bg-white text-primary px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 font-bold">
          <Printer className="w-5 h-5" /> PDF Olarak Kaydet / Yazdır
        </button>
      </div>

      <div className="flex flex-col gap-0">

        {/* ═══════════════ KAPAK ═══════════════ */}
        <div className="detoks-page bg-primary text-white flex flex-col items-center justify-center text-center relative overflow-hidden" style={{ padding: '12mm 15mm' }}>
          <PageDecor variant={1} />
          <div className="relative z-10 flex flex-col items-center">
            <GlassPill><Star className="w-3 h-3 fill-white inline mr-1" /> ÖZEL PROGRAM <Star className="w-3 h-3 fill-white inline ml-1" /></GlassPill>
            <div className="w-16 h-[2px] bg-white/20 my-5" />
            <h1 className="font-serif text-6xl font-black leading-tight mb-4 tracking-tight">
              <span className="block text-2xl font-light tracking-[12px] opacity-90 mb-2">10 GÜNDE</span>
              METABOLİZMA<br />RESETLEME
            </h1>
            <div className="w-16 h-[2px] bg-white/20 my-5" />
            <p className="text-xl font-light tracking-[6px] uppercase opacity-70 mb-2">HAZIR MIYIZZZZZZZZZZ</p>
            <GlassPill className="!text-lg !px-8 !py-2 mb-6">HAYDİ YOLCULUK BAŞLASINNNNNNN</GlassPill>
            <p className="text-sm opacity-50 max-w-xs leading-relaxed mb-12">AŞAĞIDA YAZANLARI İYİCE ÖZÜMSE<br />VE HAYATINI DEĞİŞTİRMEYE BAŞLA</p>
            <div className="pt-8 border-t border-white/15">
              <ShieldCheck className="w-10 h-10 text-white/90 mx-auto mb-3" />
              <p className="font-serif text-2xl font-bold mb-1">Dyt. Ayşenur Korkmaz</p>
              <p className="text-xs uppercase tracking-[2px] opacity-60 mb-5">Beslenme ve Diyet Uzmanı</p>
              <div className="bg-white text-primary px-6 py-2 rounded-full font-bold text-sm">diyetisyenaysenurkorkmaz.com</div>
            </div>
            <Plane className="w-10 h-10 mt-8 animate-bounce opacity-70" style={{ transform: 'rotate(45deg)' }} />
          </div>
        </div>

        {/* ═══════════════ SAYFA 1 — BİRLEŞİK ═══════════════ */}
        <div className="detoks-page bg-primary text-white relative overflow-hidden" style={{ padding: '8mm 12mm' }}>
          <PageDecor variant={2} />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <PageTopBar pageNumber={1} />

            {/* Başlık */}
            <div className="flex items-center gap-2 mt-3 mb-2">
              <div className="w-6 h-6 bg-white/15 rounded flex items-center justify-center"><Plane className="w-3.5 h-3.5" /></div>
              <h2 className="font-serif text-xl font-bold tracking-tight">DETOKSA BAŞLAMADAN ÖNCE</h2>
            </div>

            {/* Hikaye + Döngü */}
            <div className="grid grid-cols-2 gap-2">
              <GlassCard className="!p-3">
                <p className="text-[11px] text-white/85 leading-snug">HEPİMİZİN KLASİK HİKAYESİ:</p>
                <p className="text-[12px] font-bold mt-1">"PAZARTESİ BAŞLARIM..."</p>
                <p className="text-[12px] font-bold">"BUGÜN BOZDUK, YARIN TOPARLARIZ..."</p>
              </GlassCard>
              <GlassCard className="!p-3">
                <h3 className="flex items-center gap-1 text-[12px] font-bold mb-1.5">
                  <Check className="w-3.5 h-3.5 text-white/85" /> BU DÖNGÜYÜ KIRIYORUZ!
                </h3>
                <p className="text-[9px] text-white/90 mb-1">SADECE KİLO VERMEK İÇİN DEĞİL;</p>
                <div className="grid grid-cols-2 gap-x-1 gap-y-0.5">
                  {["ENERJİK UYANMAK", "ŞİŞKİNLİKTEN KURTULMAK", "HAFİFLEMEK", "SAĞLIKLI YAŞ ALMAK"].map((item, i) => (
                    <div key={i} className="flex items-center gap-1 text-[9px] text-white/90">
                      <Check className="w-2 h-2 text-white/90 shrink-0" /> {item}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Detoksun Mantığı */}
            <div className="bg-white/15 rounded-xl p-3 flex items-start gap-2.5 border border-white/10 mt-2">
              <div className="shrink-0 bg-white/15 rounded-lg p-1.5"><Zap className="w-4 h-4" /></div>
              <div className="flex-1">
                <h3 className="font-serif text-[12px] font-bold mb-1">DETOKSUN MANTIĞI — BU PROGRAM:</h3>
                <div className="grid grid-cols-2 gap-x-3 gap-y-0.5">
                  {["ÖDEM ATIMINI DESTEKLER", "METABOLİZMAYI AKTİVE EDER", "SİNDİRİM SİSTEMİNİ RAHATLATIR", "YAĞ YAKIMINI AKTİFLEŞTİRİR"].map((item, i) => (
                    <div key={i} className="flex items-center gap-1 text-[10px] text-white/90">
                      <Check className="w-2.5 h-2.5 text-white/90 shrink-0" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Önemli Not */}
            <div className="bg-white/10 rounded-lg px-3 py-2 mt-2 border border-white/10 flex items-center gap-2">
              <Info className="w-4 h-4 text-white/90 shrink-0" />
              <p className="text-[11px]"><span className="text-white/90">EN ÖNEMLİ KISIM: </span><span className="font-black">SEN NE KADAR UYARSAN, SONUÇ O KADAR GÜÇLÜ OLUR</span></p>
            </div>

            {/* Altın Kurallar */}
            <div className="flex items-center gap-2 mt-3 mb-1">
              <div className="w-6 h-6 bg-white/15 rounded flex items-center justify-center"><Star className="w-3.5 h-3.5" /></div>
              <h2 className="font-serif text-xl font-bold tracking-tight">DETOKSUN ALTIN KURALLARI</h2>
            </div>

            {/* 1. Öğün Atlama */}
            <GlassCard className="!p-3">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-6 h-6 bg-white/15 rounded-lg flex items-center justify-center"><Utensils className="w-3.5 h-3.5" /></div>
                <h3 className="font-serif text-[14px] font-bold">1. ÖĞÜN ATLAMA</h3>
              </div>
              <div className="pl-8">
                <p className="text-[12px] font-bold mb-0.5">VÜCUT DÜZEN SEVER.</p>
                <p className="text-[9px] text-white/85 mb-1 uppercase tracking-wider">EĞER ÖĞÜN ATLARSAN:</p>
                <div className="flex gap-3 mb-1.5">
                  {["METABOLİZMA YAVAŞLAR", "YAĞ YAKIMI DÜŞER"].map((item, i) => (
                    <div key={i} className="flex items-center gap-1 text-[11px] text-white/85">
                      <X className="w-3 h-3 text-white/90 shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="bg-white/10 px-2.5 py-1.5 rounded-md">
                  <p className="text-[11px] flex items-center gap-1 text-white/90">
                    <Check className="w-3 h-3 text-white/90" /> DÜZENLİ YERSEN: <strong>"BEN ÇALIŞIYORUM"</strong> MESAJI VERİR
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Alt kartlar */}
            <div className="grid grid-cols-2 gap-2 mt-1">
              <GlassCard className="!p-2.5">
                <p className="text-white/90 text-[10px] flex items-center gap-1"><Check className="w-3 h-3 text-white/85" /> ÖĞÜNÜ KAÇIRDIN MI?</p>
                <p className="text-[10px] text-white/85">GEÇMİŞİ KOVALAMIYORUZ</p>
                <p className="text-[13px] font-black uppercase leading-tight mt-0.5">SIRADAKİ ÖĞÜNDEN DEVAM</p>
              </GlassCard>
              <GlassCard className="!p-2.5">
                <div className="flex items-center gap-1 mb-0.5">
                  <Info className="w-3 h-3 text-white/90" />
                  <span className="font-serif text-[11px] font-bold">HAYAT GİBİ DÜŞÜN:</span>
                </div>
                <p className="text-[10px] text-white/90">1. DERSİ KAÇIRDIYSAN → 2. DERSE GİRERSİN</p>
                <p className="text-[12px] font-black uppercase mt-0.5">GERİ DÖNÜŞ YOK, İLERİYE!</p>
              </GlassCard>
            </div>

            <PageBottomBar />
          </div>
        </div>

        {/* ═══════════════ SAYFA 2 — SU ═══════════════ */}
        <div className="detoks-page bg-primary text-white relative overflow-hidden" style={{ padding: '8mm 12mm' }}>
          <PageDecor variant={3} />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <PageTopBar pageNumber={2} />

            <GlassCard className="!p-4 mt-3">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center"><Droplet className="w-5 h-5" /></div>
                <h3 className="font-serif text-lg font-bold">2. SU = DETOKSUN TEMELİ</h3>
              </div>
              <div className="pl-11">
                <p className="text-base font-bold mb-2 uppercase">BU SÜREÇTE EN ÖNEMLİ ŞEY: SU</p>
                <ul className="space-y-2">
                  {[
                    "GÜNDE EN AZ 2 LİTRE — İÇİNE BİR ŞEY KOYMAK YOK — SADE SU İÇMEN YETERLİ. ÇÜNKÜ PROGRAMIN ZATEN DETOKS",
                    "ÜZERİNE İÇTİĞİN HER SU = EKSTRA YAĞ YAKIM DESTEĞİ"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-white/90">
                      <div className="w-5 h-5 bg-white/15 rounded-full flex items-center justify-center shrink-0 mt-0.5"><Check className="w-3 h-3" /></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>

            <GlassCard className="!p-4">
              <h3 className="flex items-center gap-2 text-base font-bold mb-3">
                <Droplet className="w-5 h-5 text-white/85" /> UNUTMA: SU SADECE KİLO İÇİN DEĞİL
              </h3>
              <div className="grid grid-cols-3 gap-2 pl-7">
                {["TOKSİN ATIMI", "ÖDEM AZALTMA", "BÖBREK SAĞLIĞI"].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[13px] font-bold text-white/90">
                    <Check className="w-4 h-4 text-white/90 shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-xl font-black mt-3 uppercase pl-7">İÇİN ŞART</p>
            </GlassCard>

            <div className="bg-white/15 rounded-2xl p-4 border border-white/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center"><X className="w-5 h-5" /></div>
                <h3 className="font-serif text-lg font-bold">DİKKAT!</h3>
              </div>
              <p className="pl-11 font-bold leading-relaxed text-[13px] text-white/85">
                ÇAY & KAHVE SU YERİNE GEÇMEZ. HATTA FAZLA TÜKETİMDE ÖDEM YAPABİLİR. HATTA YAĞ YAKIMINI BİLE ETKİLER.
              </p>
            </div>

            <GlassCard className="!p-4">
              <h4 className="flex items-center gap-2 text-base font-bold mb-3">
                <Check className="w-5 h-5 text-white/90" /> GÜNLÜK LİMİT:
              </h4>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl border border-white/10">
                  <Coffee className="w-7 h-7 text-white/85" />
                  <span className="text-lg font-black">2 KAHVE</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl border border-white/10">
                  <Utensils className="w-7 h-7 text-white/85" />
                  <span className="text-lg font-black">4-5 ÇAY</span>
                </div>
              </div>
              <p className="text-center text-white/85 italic font-medium text-[12px]">SERBEST AMA SUYUN YERİNE DEĞİL!</p>
            </GlassCard>

            <PageBottomBar />
          </div>
        </div>

        {/* ═══════════════ SAYFA 3 — BESLENME ═══════════════ */}
        <div className="detoks-page bg-primary text-white relative overflow-hidden" style={{ padding: '8mm 12mm' }}>
          <PageDecor variant={4} />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <PageTopBar pageNumber={3} />

            <div className="flex items-center gap-2 mt-3 mb-2">
              <div className="w-7 h-7 bg-white/15 rounded flex items-center justify-center"><Leaf className="w-4 h-4" /></div>
              <h2 className="font-serif text-xl font-bold tracking-tight">3. BESLENME DETAYLARI</h2>
            </div>

            <GlassCard className="!p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center"><Info className="w-5 h-5" /></div>
                <h3 className="font-serif text-lg font-bold">SOĞAN & SARIMSAK</h3>
              </div>
              <div className="pl-11 space-y-1.5">
                <div className="flex items-center gap-2 text-[14px] font-bold text-white/90">
                  <Check className="w-5 h-5 text-white/90" /> DOĞAL ANTİBİYOTİK
                </div>
                <div className="flex items-center gap-2 text-[14px] font-bold text-white/90">
                  <Check className="w-5 h-5 text-white/90" /> İSTEDİĞİN KADAR TÜKETEBİLİRSİN
                </div>
              </div>
            </GlassCard>

            <GlassCard className="!p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center"><Zap className="w-5 h-5" /></div>
                <h3 className="font-serif text-lg font-bold">BAHARATLAR</h3>
              </div>
              <div className="pl-11">
                <ul className="space-y-1.5 mb-3">
                  {["METABOLİZMAYI DESTEKLER", "ÖDEM ATIMINA YARDIMCI", "ANTİOKSİDAN DEPOSU"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[13px] font-medium text-white/90">
                      <div className="w-4 h-4 bg-white/15 rounded-full flex items-center justify-center shrink-0"><Check className="w-2.5 h-2.5" /></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-black uppercase">KORKMADAN KULLAN!</p>
              </div>
            </GlassCard>

            <GlassCard className="!p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center"><Utensils className="w-5 h-5" /></div>
                <h3 className="font-serif text-lg font-bold">SEBZELER</h3>
              </div>
              <div className="pl-11">
                <p className="text-lg font-black mb-2 uppercase">SENİN EN YAKIN DOSTUN</p>
                <ul className="space-y-1.5 mb-3">
                  {["DOYANA KADAR TÜKETEBİLİRSİN", "LİF → BAĞIRSAK ÇALIŞTIRIR", "ŞİŞKİNLİĞİ AZALTIR"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[13px] font-medium text-white/90">
                      <div className="w-4 h-4 bg-white/15 rounded-full flex items-center justify-center shrink-0"><Check className="w-2.5 h-2.5" /></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-white/10 p-2.5 rounded-lg text-center border border-white/10">
                  <p className="font-bold text-[13px]">AÇ KALDIM DİYE KORKMA — SEBZE SERBEST!</p>
                </div>
              </div>
            </GlassCard>

            <PageBottomBar />
          </div>
        </div>

        {/* ═══════════════ SAYFA 4 — HAREKET + TARTI ═══════════════ */}
        <div className="detoks-page bg-primary text-white relative overflow-hidden" style={{ padding: '8mm 12mm' }}>
          <PageDecor variant={2} />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <PageTopBar pageNumber={4} />

            <div className="flex items-center gap-2 mt-3 mb-2">
              <div className="w-7 h-7 bg-white/15 rounded flex items-center justify-center"><Footprints className="w-4 h-4" /></div>
              <h2 className="font-serif text-xl font-bold tracking-tight">4. HAREKET ŞART</h2>
            </div>

            <GlassCard className="!p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center"><Activity className="w-5 h-5" /></div>
                <h3 className="font-serif text-lg font-bold">EN BÜYÜK DESTEK: YÜRÜYÜŞ</h3>
              </div>
              <div className="pl-11">
                <p className="text-xl font-black mb-3 uppercase">HER GÜN 45 DK – 1 SAAT</p>
                <p className="text-[10px] font-bold text-white/85 mb-2 uppercase tracking-widest">NE SAĞLAR?</p>
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {[
                    { icon: Zap, label: "YAĞ YAKIMI" },
                    { icon: Droplet, label: "ÖDEM ATIMI" },
                    { icon: Star, label: "STRES AZALMASI" },
                    { icon: Activity, label: "MUTLULUK" }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center p-2.5 bg-white/10 rounded-xl border border-white/10">
                      <item.icon className="w-5 h-5 text-white/85 mb-1" />
                      <span className="text-[8px] font-bold uppercase text-white/90">{item.label}</span>
                    </div>
                  ))}
                </div>
                <GlassPill className="text-center !rounded-lg !py-2 w-full !text-lg font-black">BONUS: KALORİSİ SIFIR</GlassPill>
              </div>
            </GlassCard>

            <div className="bg-white/15 rounded-2xl p-5 border border-white/15 text-center">
              <h3 className="flex items-center justify-center gap-2 text-lg font-bold mb-2">
                <Scale className="w-6 h-6 text-white/85" /> SON OLARAK TARTIYA
              </h3>
              <p className="text-2xl font-black uppercase mb-1">HER GÜN ÇIKILMAZ</p>
              <p className="text-lg font-bold text-white/90">SADECE HAFTADA 1 KEZ ÇIKMALISINNNNN</p>
            </div>

            <GlassCard className="!p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center"><Info className="w-5 h-5" /></div>
                <h3 className="font-serif text-[14px] font-bold">NEDEN DERSENNNNNN ONA DA VAR CEVABIM TABİKİİİİİİİİ :)</h3>
              </div>
              <div className="pl-11 space-y-2">
                <p className="text-[13px] text-white/90 leading-relaxed">
                  HER GÜN STRESİN UYKUN SU SEVİYEN FARKLI OLACAK VE TARTI BUNLARDAN ÇOK ETKİLENECEK O YÜZDEN
                </p>
                <p className="text-[13px] text-white/90 leading-relaxed font-bold">
                  AMA 10 GÜNLÜK SÜRE İÇİNDE ÖNCE PROGRAM BAŞINDA YANİ PAZARTESİ TARTILIYORUZ VE SONRA PROGRAM SONUNDA YANİ 10 GÜN TAMAMLANINCA TARTIYA BAKIYORUZ
                </p>
              </div>
            </GlassCard>

            <PageBottomBar />
          </div>
        </div>

        {/* ═══════════════ SAYFA 5 — KAPANIŞ ═══════════════ */}
        <div className="detoks-page bg-primary text-white relative overflow-hidden flex flex-col items-center justify-center text-center" style={{ padding: '10mm 14mm' }}>
          <PageDecor variant={5} />
          <div className="relative z-10 flex flex-col items-center w-full max-w-md">
            {/* Tartı Son Notlar */}
            <GlassCard className="w-full mb-6 text-left">
              <h3 className="flex items-center gap-2 text-sm font-bold mb-2 text-white/90">
                <Check className="w-5 h-5" /> DOĞRU TARTI ZAMANI İÇİN SON NOTLAR:
              </h3>
              <p className="text-[12px] leading-relaxed text-white/90 italic">
                TARTIMIN AYNI GÜN VE SAATTE, MÜMKÜNSE SABAH AÇ KARNINA VE TUVALET SONRASI YAPILMASI, AYNI TARTININ KULLANILMASI, ZEMİNİN SERT VE DÜZ OLACAK ŞEKİLDE AYARLANMIŞ OLMASI DOĞRU SONUÇ ALMAK İÇİN OLDUKÇA ÖNEMLİDİR.
              </p>
            </GlassCard>

            <div className="w-16 h-[2px] bg-white/15 mb-5" />
            <h3 className="text-lg font-light uppercase tracking-[6px] opacity-80 font-serif italic">BU BİR SÜREÇ...</h3>
            <p className="text-3xl font-black uppercase tracking-tight mb-6">KENDİN İÇİN YAPTIĞIN<br />BİR YATIRIM...</p>
            <div className="w-16 h-[2px] bg-white/15 mb-6" />

            <p className="text-[10px] font-bold uppercase tracking-[4px] opacity-70 mb-5">MİNİK ADIMLAR BİRLEŞECEK VE SONUNDA</p>
            <div className="flex items-center justify-center gap-6 mb-2">
              {[
                { icon: Star, label: "HAFİF BİR BEDEN" },
                { icon: Zap, label: "ENERJİK BİR SEN" },
                { icon: Star, label: "MUTLU BİRİ" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <item.icon className="w-6 h-6 opacity-85" />
                  <span className="text-[11px] font-bold">{item.label}</span>
                  {i < 2 && <div className="hidden" />}
                </div>
              ))}
            </div>
            <p className="text-4xl font-black uppercase tracking-tight mt-3 mb-8">ORTAYA ÇIKACAK</p>

            <GlassPill className="mb-4">
              <Zap className="w-3.5 h-3.5 inline mr-1" /> UNUTMA: BU BİR PUZZLE... HER PARÇA ÖNEMLİ...
            </GlassPill>

            <p className="text-base font-light opacity-80 italic mb-2">VE ARTIK...</p>
            <p className="text-3xl font-black uppercase tracking-tight mb-6">BENİMLE BİRLİKTE<br />UÇMAYA HAZIRSIN</p>
            <Plane className="w-10 h-10 animate-bounce opacity-85 mb-8" style={{ transform: 'rotate(45deg)' }} />

            <div className="pt-5 border-t border-white/15 w-full">
              <p className="font-serif text-lg font-bold mb-0.5">Dyt. Ayşenur Korkmaz</p>
              <p className="text-[9px] uppercase tracking-[2px] opacity-75 mb-3">Beslenme ve Diyet Uzmanı</p>
              <div className="flex items-center justify-center gap-3 text-[8px] opacity-65">
                <span className="flex items-center gap-1"><Phone className="w-2.5 h-2.5" /> 0547 537 3522</span>
                <div className="w-[1px] h-2.5 bg-white/20" />
                <span className="flex items-center gap-1"><Mail className="w-2.5 h-2.5" /> info@diyetisyenaysenurkorkmaz.com</span>
                <div className="w-[1px] h-2.5 bg-white/20" />
                <span className="flex items-center gap-1"><MapPin className="w-2.5 h-2.5" /> Muratpaşa/Antalya</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
