import {
  Check, Star, Coffee, Droplet, Utensils,
  Printer, Globe, Leaf, Activity,
  Flame, Apple, Sun, Moon,
  Heart, Sparkles, Wheat, GlassWater, Cookie,
} from 'lucide-react';
import type { ReactNode } from 'react';


/* ════════════════════════════════════════════
   REUSABLE COMPONENTS — MODERN REDESIGN
   ════════════════════════════════════════════ */

const GlassCard = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`bg-white/[0.07] rounded-2xl border border-white/[0.12] p-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)] ${className}`}>
    {children}
  </div>
);

const GlassPill = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <span className={`inline-flex items-center bg-white/[0.12] rounded-full px-4 py-1.5 border border-white/[0.18] text-xs font-bold tracking-widest uppercase ${className}`}>
    {children}
  </span>
);

/* ── Decorative Background ── */
const decorVariants: Record<number, ReactNode> = {
  1: (<><div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5" /><div className="absolute bottom-20 -left-16 w-56 h-56 rounded-full bg-white/3" /><div className="absolute top-1/2 right-10 w-32 h-32 rounded-full bg-white/2" /></>),
  2: (<><div className="absolute top-10 -left-24 w-64 h-64 rounded-full bg-white/5" /><div className="absolute -bottom-10 right-10 w-48 h-48 rounded-full bg-white/3" /><div className="absolute top-1/3 right-1/4 w-28 h-28 rounded-full bg-white/2" /></>),
  3: (<><div className="absolute -top-16 left-1/3 w-60 h-60 rounded-full bg-white/4" /><div className="absolute bottom-10 -right-20 w-52 h-52 rounded-full bg-white/3" /><div className="absolute top-2/3 left-5 w-36 h-36 rounded-full bg-white/2" /></>),
  4: (<><div className="absolute top-20 right-1/4 w-56 h-56 rounded-full bg-white/5" /><div className="absolute -bottom-16 -left-10 w-64 h-64 rounded-full bg-white/3" /><div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-white/2" /></>),
  5: (<><div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/4" /><div className="absolute bottom-1/4 left-1/3 w-40 h-40 rounded-full bg-white/3" /><div className="absolute top-1/2 -left-12 w-56 h-56 rounded-full bg-white/2" /></>),
  6: (<><div className="absolute top-1/3 -right-16 w-60 h-60 rounded-full bg-white/5" /><div className="absolute -bottom-20 left-10 w-44 h-44 rounded-full bg-white/3" /><div className="absolute top-10 left-1/4 w-32 h-32 rounded-full bg-white/2" /></>),
};

const PageDecor = ({ variant }: { variant: number }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {decorVariants[((variant - 1) % 6) + 1]}
  </div>
);

const PageTopBar = ({ pageNumber }: { pageNumber: number }) => (
  <div className="flex items-center justify-between shrink-0">
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 bg-white/[0.12] rounded-full flex items-center justify-center border border-white/[0.15]">
        <Leaf className="w-4 h-4 text-white/90" />
      </div>
      <span className="text-[11px] text-white/80 tracking-[0.15em] uppercase font-medium">Dyt. Ayşenur Korkmaz</span>
    </div>
    <div className="flex items-center gap-3">
      <span className="text-[10px] text-white/60 tracking-wide">diyetisyenaysenurkorkmaz.com</span>
      <div className="w-8 h-8 bg-white/[0.12] rounded-full flex items-center justify-center border border-white/[0.15]">
        <span className="text-[11px] font-bold">{String(pageNumber).padStart(2, '0')}</span>
      </div>
    </div>
  </div>
);

const PageBottomBar = () => (
  <div className="flex items-center justify-between shrink-0 pt-2">
    <span className="text-[10px] text-white/50 tracking-[0.1em] uppercase">10 Günde Metabolizma Resetleme Kampı</span>
    <span className="text-[10px] text-white/50 flex items-center gap-1"><Globe className="w-3 h-3" /> diyetisyenaysenurkorkmaz.com</span>
  </div>
);

/* ── Meal Header — Modern ── */
const MealHeader = ({ icon, label, title }: { icon: ReactNode; label: string; title: string }) => (
  <div className="flex items-center gap-3 mb-2">
    <div className="w-9 h-9 rounded-xl bg-white/[0.12] border border-white/[0.15] flex items-center justify-center shrink-0">{icon}</div>
    <div>
      <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold leading-none mb-0.5">{label}</p>
      <h4 className="text-[15px] font-serif font-bold leading-tight text-white">{title}</h4>
    </div>
  </div>
);

/* ── Day Badge — Modern ── */
const DayBadge = ({ day, theme }: { day: string; theme: string }) => (
  <div className="flex items-center gap-4 mb-3">
    <div className="w-14 h-14 rounded-2xl bg-white/[0.12] border border-white/[0.18] flex items-center justify-center shadow-lg">
      <span className="text-2xl font-serif font-black">{day}</span>
    </div>
    <div>
      <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold mb-0.5">Gün {day}</p>
      <h3 className="text-lg font-serif font-bold leading-tight tracking-tight">{theme}</h3>
    </div>
  </div>
);

/* ── Bullet item — Readable ── */
const Bi = ({ children }: { children: ReactNode }) => (
  <div className="flex items-start gap-2 py-0.5">
    <Check className="w-3.5 h-3.5 text-accent mt-[2px] shrink-0" />
    <span className="text-[13px] text-white/95 leading-relaxed">{children}</span>
  </div>
);

/* ════════════════════════════════════════════
   PAGES
   ════════════════════════════════════════════ */

/* ──────── COVER PAGE ──────── */
const CoverPage = () => (
  <div className="detoks-page bg-primary text-white relative overflow-hidden" style={{ width: '210mm', height: '297mm', padding: '8mm 12mm' }}>
    <PageDecor variant={1} />
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-white/5 blur-2xl" />
    </div>
    <div className="relative z-10 flex flex-col h-full items-center justify-center text-center px-6">
      <div className="mb-6">
        <Sparkles className="w-10 h-10 text-accent mx-auto mb-3" />
        <GlassPill className="text-[12px] mb-4">DYT. AYŞENUR KORKMAZ</GlassPill>
      </div>

      <h1 className="font-serif text-4xl font-black leading-tight mb-6 max-w-[520px] tracking-tight">
        10 GÜNDE METABOLİZMA<br />RESETLEME PROGRAMI<br />BAŞLIYORRRRRRR
      </h1>

      <GlassCard className="max-w-[500px] mb-5 text-center">
        <p className="text-sm text-white/90 leading-relaxed mb-3">
          ÖNÜMÜZDEKİ 10 GÜN BOYUNCA VÜCUDUMUZU HAFİFLETİP METABOLİZMAMIZA YENİ BİR RİTİM KAZANDIRACAĞIZ. KÜÇÜK ADIMLAR, BÜYÜK DEĞİŞİMLER YARATABİLİR.
        </p>
        <p className="text-sm text-white/90 leading-relaxed">
          BU SÜREÇTE VÜCUDUNU DESTEKLEYEN, SÜRDÜRÜLEBİLİR VE DENGELİ BİR BESLENME OLUŞTURMAYI HEDEFLİYORUZ
        </p>
      </GlassCard>

      <GlassCard className="max-w-[500px] mb-8 bg-accent/15 border-accent/25">
        <p className="text-sm text-white font-semibold leading-relaxed">
          DETOKS AÇ KALMAK VE SIVI BESLENMEK DEMEK DEĞİLDİR. GERÇEK DETOKSUN NE OLDUĞUNU ÖĞRETMEYE GELDİMMMMM.
        </p>
      </GlassCard>

      <div className="flex flex-col items-center gap-1.5">
        <span className="font-serif text-lg text-white font-bold tracking-wider">DYT AYŞENUR KORKMAZ</span>
        <span className="flex items-center gap-1 text-xs text-white/70"><Globe className="w-3 h-3" /> diyetisyenaysenurkorkmaz.com</span>
      </div>
    </div>
  </div>
);

/* ──────── PAGE 1 - PROGRAM YAPISI + GÜN 1-4 HEADER ──────── */
const Page1 = () => (
  <div className="detoks-page bg-primary text-white relative overflow-hidden" style={{ width: '210mm', height: '297mm', padding: '8mm 12mm' }}>
    <PageDecor variant={2} />
    <div className="relative z-10 flex flex-col h-full justify-between">
      <PageTopBar pageNumber={1} />

      <div className="flex-1 flex flex-col justify-center">
        <h2 className="font-serif text-2xl font-black mb-3 text-center tracking-tight">Program Yapısı</h2>
        <p className="text-sm text-white/80 text-center mb-5">10 günlük programımız 4 ana fazdan oluşuyor</p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <GlassCard>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-xl bg-accent/30 flex items-center justify-center"><Droplet className="w-4 h-4 text-accent" /></div>
              <GlassPill className="text-[13px]">GÜN 1-4</GlassPill>
            </div>
            <h4 className="text-sm font-serif font-bold mb-1">Ödem Atımı & Bağırsak Temizliği</h4>
            <p className="text-[13px] text-white/90">Vücuttaki fazla suyu atarak hafifleşmeye başlıyoruz.</p>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-xl bg-accent/30 flex items-center justify-center"><Activity className="w-4 h-4 text-accent" /></div>
              <GlassPill className="text-[13px]">GÜN 5-6</GlassPill>
            </div>
            <h4 className="text-sm font-serif font-bold mb-1">Metabolik Aktivasyon</h4>
            <p className="text-[13px] text-white/90">Metabolizmayı hızlandırarak yağ yakımını tetikliyoruz.</p>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-xl bg-accent/30 flex items-center justify-center"><Flame className="w-4 h-4 text-accent" /></div>
              <GlassPill className="text-[13px]">GÜN 7-9</GlassPill>
            </div>
            <h4 className="text-sm font-serif font-bold mb-1">Derin Yağ Yakımı</h4>
            <p className="text-[13px] text-white/90">Vücut artık yağ yakma moduna geçiyor, derin temizlik.</p>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-xl bg-accent/30 flex items-center justify-center"><Heart className="w-4 h-4 text-accent" /></div>
              <GlassPill className="text-[13px]">GÜN 10</GlassPill>
            </div>
            <h4 className="text-sm font-serif font-bold mb-1">Hafifleşme Günü</h4>
            <p className="text-[13px] text-white/90">Son gün: detoks tamamlanıyor, vücut yenileniyor.</p>
          </GlassCard>
        </div>

        <GlassCard className="bg-accent/15 border-accent/25 text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Droplet className="w-5 h-5 text-accent" />
            <h3 className="font-serif text-lg font-black tracking-tight">GÜN 1-4</h3>
          </div>
          <p className="text-sm font-bold text-white">İLK 4 GÜNDE ÖDEM ATIMI VE BAĞIRSAK TEMİZLİĞİ YAPACAĞIZ</p>
        </GlassCard>
      </div>

      <PageBottomBar />
    </div>
  </div>
);

/* ──────── PAGE 2 - GÜN 1 ──────── */
const Page2 = () => (
  <div className="detoks-page bg-primary text-white relative overflow-hidden" style={{ width: '210mm', height: '297mm', padding: '8mm 12mm' }}>
    <PageDecor variant={3} />
    <div className="relative z-10 flex flex-col h-full justify-between">
      <PageTopBar pageNumber={2} />

      <div className="flex-1 flex flex-col">
        <DayBadge day="1" theme="ARINMA GÜNÜ" />
        <p className="text-sm text-white/80 italic mb-3">İLK GÜN ARINMA YAŞAYACAĞIZ ZOR OLMAYACAK BEN YANINDAYIM.</p>

        {/* KAHVALTI */}
        <GlassCard className="mb-2 p-3">
          <MealHeader icon={<Coffee className="w-3.5 h-3.5 text-white" />} label="KAHVALTI" title="ENERJİ BOMBASI" />
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/[0.05] rounded-xl p-2.5">
              <span className="text-[10px] text-accent font-bold uppercase tracking-[0.2em]">Malzemeler</span>
              <div className="mt-1 space-y-0.5">
                <Bi>4 yk lor peyniri + 1yk chia, 1çk çörek otu</Bi>
                <Bi>½ avokado, 2 dilim peynir</Bi>
                <Bi>Bol yeşillik, 2 dilim tam buğday ekmeği</Bi>
                <Bi>5 zeytin</Bi>
              </div>
            </div>
            <div className="bg-white/[0.05] rounded-xl p-2.5">
              <span className="text-[10px] text-accent font-bold uppercase tracking-[0.2em]">Hazırlanış</span>
              <div className="mt-1 space-y-0.5">
                <Bi>Lor peynirini kaseye alın</Bi>
                <Bi>Çörek otu ve avokado ekleyin</Bi>
                <Bi>Karıştırın, tabağa alın</Bi>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* ARA ÖĞÜN */}
        <GlassCard className="mb-2 p-3">
          <MealHeader icon={<GlassWater className="w-3.5 h-3.5 text-white" />} label="ARA ÖĞÜN" title="ÖDEM ATTIRICI İÇECEK" />
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/[0.05] rounded-xl p-2.5">
              <span className="text-[10px] text-accent font-bold uppercase tracking-[0.2em]">Malzemeler</span>
              <div className="mt-1 space-y-0.5">
                <Bi>1 bardak kefir</Bi>
                <Bi>10 dal maydanoz</Bi>
                <Bi>2yk yulaf, 5 çilek</Bi>
              </div>
            </div>
            <div className="bg-white/[0.05] rounded-xl p-2.5">
              <span className="text-[10px] text-accent font-bold uppercase tracking-[0.2em]">Hazırlanış</span>
              <div className="mt-1"><Bi>İster blender et ister ayrı ayrı tüket</Bi></div>
            </div>
          </div>
        </GlassCard>

        {/* AKŞAM */}
        <GlassCard className="mb-1 p-3">
          <MealHeader icon={<Moon className="w-3.5 h-3.5 text-white" />} label="AKŞAM YEMEĞİ" title="TOK TUTAN YAĞ YAKICI" />
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/[0.05] rounded-xl p-2.5">
              <span className="text-[10px] text-accent font-bold uppercase tracking-[0.2em]">Malzemeler</span>
              <div className="mt-1 space-y-0.5">
                <Bi>3yk haşlanmış yeşil mercimek</Bi>
                <Bi>1 kabak, 100g tavuk ızgara</Bi>
                <Bi>Soğan, sarımsak, 2yk zeytinyağı</Bi>
                <Bi>Karabiber, kimyon</Bi>
              </div>
            </div>
            <div className="bg-white/[0.05] rounded-xl p-2.5">
              <span className="text-[10px] text-accent font-bold uppercase tracking-[0.2em]">Hazırlanış</span>
              <div className="mt-1 space-y-0.5">
                <Bi>Soğanı doğrayın, sarımsakla çevirin</Bi>
                <Bi>Tavuğu ekleyin, kabakları ekleyin</Bi>
                <Bi>Mercimeği ilave edin</Bi>
              </div>
            </div>
          </div>
          <div className="mt-1.5 bg-white/[0.05] rounded-xl p-2.5">
            <span className="text-xs text-accent font-bold uppercase tracking-wider">YANINDA:</span>
            <span className="text-[13px] text-white/90 ml-1">Mevsim salata + limonata (1yk limon + su + tarçın)</span>
          </div>
        </GlassCard>
      </div>

      <PageBottomBar />
    </div>
  </div>
);

/* ──────── PAGE 3 - GÜN 2 ──────── */
const Page3 = () => (
  <div className="detoks-page bg-primary text-white relative overflow-hidden" style={{ width: '210mm', height: '297mm', padding: '8mm 12mm' }}>
    <PageDecor variant={4} />
    <div className="relative z-10 flex flex-col h-full justify-between">
      <PageTopBar pageNumber={3} />

      <div className="flex-1 flex flex-col">
        <DayBadge day="2" theme="ÖDEM SAVAR GÜN" />

        {/* KAHVALTI */}
        <GlassCard className="mb-2 p-3">
          <MealHeader icon={<Coffee className="w-3.5 h-3.5 text-white" />} label="KAHVALTI" title="ÖDEM SAVAR SMOOTHIE" />
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/[0.05] rounded-xl p-2.5">
              <span className="text-[10px] text-accent font-bold uppercase tracking-[0.2em]">Malzemeler</span>
              <div className="mt-1 space-y-0.5">
                <Bi>1 bardak kefir, 2yk labne</Bi>
                <Bi>20 dal maydanoz, 2yk yulaf</Bi>
                <Bi>1 yeşil elma, 10 dal kuzu kulağı</Bi>
                <Bi>1tk chia, 1tk keten tohumu</Bi>
                <Bi>½çk zencefil</Bi>
              </div>
            </div>
            <div className="bg-white/[0.05] rounded-xl p-2.5">
              <span className="text-[10px] text-accent font-bold uppercase tracking-[0.2em]">Hazırlanış</span>
              <div className="mt-1"><Bi>Blender edelim</Bi></div>
            </div>
          </div>
        </GlassCard>

        {/* ARA ÖĞÜN */}
        <GlassCard className="mb-2 p-3">
          <MealHeader icon={<Cookie className="w-3.5 h-3.5 text-white" />} label="ARA ÖĞÜN" title="FISTIK EZMELİ HURMA TOPU" />
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/[0.05] rounded-xl p-2.5">
              <span className="text-[10px] text-accent font-bold uppercase tracking-[0.2em]">Malzemeler</span>
              <div className="mt-1 space-y-0.5">
                <Bi>2 hurma, 1tk fıstık ezmesi</Bi>
                <Bi>1tk yulaf, 1tk hindistan cevizi tozu</Bi>
              </div>
            </div>
            <div className="bg-white/[0.05] rounded-xl p-2.5">
              <span className="text-[10px] text-accent font-bold uppercase tracking-[0.2em]">Hazırlanış</span>
              <div className="mt-1 space-y-0.5">
                <Bi>Hurmayı suda bekletip yumuşatalım</Bi>
                <Bi>Ezelim, toplar yapalım</Bi>
              </div>
            </div>
          </div>
          <div className="mt-1.5 bg-white/[0.05] rounded-xl p-2.5">
            <span className="text-xs text-accent font-bold uppercase tracking-wider">YANINDA:</span>
            <span className="text-[13px] text-white/90 ml-1">1 bardak kefir</span>
          </div>
        </GlassCard>

        {/* AKŞAM */}
        <GlassCard className="mb-1 p-3">
          <MealHeader icon={<Moon className="w-3.5 h-3.5 text-white" />} label="AKŞAM YEMEĞİ" title="ZEYTİNYAĞLI ETLİ PIRASA" />
          <div className="bg-white/[0.05] rounded-xl p-2.5">
            <span className="text-[10px] text-accent font-bold uppercase tracking-[0.2em]">Malzemeler</span>
            <div className="mt-1 space-y-0.5">
              <Bi>Pirasa, 1 domates, 100g kuşbaşı et</Bi>
              <Bi>Salça, karabiber, 2yk haşlanmış karabuğday</Bi>
              <Bi>½çk zencefil, 1yk zeytinyağ, ½ limon suyu</Bi>
            </div>
          </div>
        </GlassCard>
      </div>

      <PageBottomBar />
    </div>
  </div>
);

/* ──────── PAGE 4 - GÜN 3 ──────── */
const Page4 = () => (
  <div className="detoks-page bg-primary text-white relative overflow-hidden" style={{ width: '210mm', height: '297mm', padding: '8mm 12mm' }}>
    <PageDecor variant={5} />
    <div className="relative z-10 flex flex-col h-full justify-between">
      <PageTopBar pageNumber={4} />

      <div className="flex-1 flex flex-col">
        <DayBadge day="3" theme="BAĞIRSAK ONARIMI" />

        {/* KAHVALTI */}
        <GlassCard className="mb-2 p-3">
          <MealHeader icon={<Coffee className="w-3.5 h-3.5 text-white" />} label="KAHVALTI" title="BAĞIRSAK ONARICI KAKAOLU BOWL" />
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/[0.05] rounded-xl p-2.5">
              <span className="text-[10px] text-accent font-bold uppercase tracking-[0.2em]">Malzemeler</span>
              <div className="mt-1 space-y-0.5">
                <Bi>4yk yulaf ezmesi, 1 bardak kefir</Bi>
                <Bi>2yk labne, 2 kuru hurma</Bi>
                <Bi>1tk kakao / 1 kare bitter çikolata</Bi>
                <Bi>5 çiğ badem, 1çk chia, 1çk tarçın</Bi>
              </div>
            </div>
            <div className="bg-white/[0.05] rounded-xl p-2.5">
              <span className="text-[10px] text-accent font-bold uppercase tracking-[0.2em]">Hazırlanış</span>
              <div className="mt-1 space-y-0.5">
                <Bi>Malzemeleri kaseye alın, karıştırın</Bi>
                <Bi>Üzerini badem ve chia ile süsleyin</Bi>
              </div>
            </div>
          </div>
          <div className="mt-1.5 bg-white/[0.05] rounded-xl p-2.5">
            <span className="text-xs text-accent font-bold uppercase tracking-wider">YANINDA:</span>
            <span className="text-[13px] text-white/90 ml-1">1 haşlama yumurta</span>
          </div>
        </GlassCard>

        {/* ARA ÖĞÜN */}
        <GlassCard className="mb-2 p-3">
          <MealHeader icon={<Heart className="w-3.5 h-3.5 text-white" />} label="ARA ÖĞÜN" title="TATLI KRİZİ ÖNLEYEN KÜR" />
          <div className="bg-white/[0.05] rounded-xl p-2.5">
            <span className="text-[10px] text-accent font-bold uppercase tracking-[0.2em]">Malzemeler</span>
            <div className="mt-1 space-y-0.5">
              <Bi>1 kase yoğurt, 1çk tarçın</Bi>
              <Bi>1 kuru hurma, 1çk bal/pekmez, 1çk chia</Bi>
            </div>
          </div>
        </GlassCard>

        {/* AKŞAM */}
        <GlassCard className="mb-1 p-3">
          <MealHeader icon={<Moon className="w-3.5 h-3.5 text-white" />} label="AKŞAM YEMEĞİ" title="SEBZE MUFFİN (6 adet - 3'ü bugün, 3'ü yarın)" />
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/[0.05] rounded-xl p-2.5">
              <span className="text-[10px] text-accent font-bold uppercase tracking-[0.2em]">Malzemeler</span>
              <div className="mt-1 space-y-0.5">
                <Bi>1 yumurta, 2yk yoğurt, 1yk zeytinyağı</Bi>
                <Bi>3yk tam buğday un, 1çk kabartma tozu</Bi>
                <Bi>1 havuç, 1 kereviz/enginar</Bi>
                <Bi>1yk bezelye, 1yk kaşar, baharatlar</Bi>
              </div>
            </div>
            <div className="bg-white/[0.05] rounded-xl p-2.5">
              <span className="text-[10px] text-accent font-bold uppercase tracking-[0.2em]">Hazırlanış</span>
              <div className="mt-1 space-y-0.5">
                <Bi>Malzemeleri karıştırın</Bi>
                <Bi>Muffin kalıplarına dökün</Bi>
                <Bi>180°C'de 20-25dk pişirin</Bi>
              </div>
            </div>
          </div>
          <div className="mt-1.5 bg-white/[0.05] rounded-xl p-2.5">
            <span className="text-xs text-accent font-bold uppercase tracking-wider">YANINDA:</span>
            <span className="text-[13px] text-white/90 ml-1">Domates sos + ayran</span>
          </div>
        </GlassCard>
      </div>

      <PageBottomBar />
    </div>
  </div>
);

/* ──────── PAGE 5 - GÜN 4 ──────── */
const Page5 = () => (
  <div className="detoks-page bg-primary text-white relative overflow-hidden" style={{ width: '210mm', height: '297mm', padding: '8mm 12mm' }}>
    <PageDecor variant={6} />
    <div className="relative z-10 flex flex-col h-full justify-between">
      <PageTopBar pageNumber={5} />

      <div className="flex-1 flex flex-col">
        <DayBadge day="4" theme="SON TEMİZLİK GÜNÜ" />

        {/* KAHVALTI */}
        <GlassCard className="mb-2 p-3">
          <MealHeader icon={<Coffee className="w-3.5 h-3.5 text-white" />} label="KAHVALTI" title="KLASİK KAHVALTI" />
          <div className="bg-white/[0.05] rounded-xl p-2.5">
            <div className="space-y-0.5">
              <Bi>2 haşlama yumurta</Bi>
              <Bi>3yk labne / 5yk lor + çörekotu</Bi>
              <Bi>10 zeytin, 2 dilim ekmek</Bi>
              <Bi>5 zeytin, 1 ceviz</Bi>
            </div>
          </div>
        </GlassCard>

        {/* ARA ÖĞÜN */}
        <GlassCard className="mb-2 p-3">
          <MealHeader icon={<Star className="w-3.5 h-3.5 text-white" />} label="ARA ÖĞÜN" title="ENERJİ İKİLİSİ" />
          <div className="bg-white/[0.05] rounded-xl p-2.5">
            <div className="space-y-0.5">
              <Bi>2 kuru hurma</Bi>
              <Bi>1 sütlü kahve (latte)</Bi>
              <Bi>10 badem</Bi>
            </div>
          </div>
        </GlassCard>

        {/* AKŞAM */}
        <GlassCard className="mb-4 p-3">
          <MealHeader icon={<Moon className="w-3.5 h-3.5 text-white" />} label="AKŞAM YEMEĞİ" title="DÜNDEN KALAN SEBZE MUFFİN" />
          <div className="bg-white/[0.05] rounded-xl p-2.5">
            <div className="space-y-0.5">
              <Bi>Dünden kalan 3 sebze muffin</Bi>
              <Bi>Domates sos + ayran</Bi>
            </div>
          </div>
        </GlassCard>

        {/* GÜN 5-6 HEADER */}
        <GlassCard className="bg-accent/15 border-accent/25 text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Activity className="w-5 h-5 text-accent" />
            <h3 className="font-serif text-lg font-black tracking-tight">GÜN 5-6: METABOLİK AKTİVASYON</h3>
          </div>
          <p className="text-[13px] text-white/90">Sabah aç karna elma sirkesi kürü ile metabolizmayı ateşliyoruz!</p>
        </GlassCard>
      </div>

      <PageBottomBar />
    </div>
  </div>
);

/* ──────── PAGE 6 - GÜN 5 ──────── */
const Page6 = () => (
  <div className="detoks-page bg-primary text-white relative overflow-hidden" style={{ width: '210mm', height: '297mm', padding: '8mm 12mm' }}>
    <PageDecor variant={1} />
    <div className="relative z-10 flex flex-col h-full justify-between">
      <PageTopBar pageNumber={6} />

      <div className="flex-1 flex flex-col">
        <DayBadge day="5" theme="METABOLİK AKTİVASYON BAŞLIYOR" />

        {/* SABAH AÇ KARNA */}
        <GlassCard className="mb-2 p-2.5 bg-accent/10 border-accent/20">
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4 text-accent" />
            <span className="text-[13px] font-bold text-accent">SABAH AÇ KARNA:</span>
            <span className="text-[13px] text-white/90">1 bardak su + 1yk elma sirkesi</span>
          </div>
        </GlassCard>

        {/* KAHVALTI */}
        <GlassCard className="mb-2 p-3">
          <MealHeader icon={<Coffee className="w-3.5 h-3.5 text-white" />} label="KAHVALTI" title="YUMURTA SALATASI / OMLET" />
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/[0.05] rounded-xl p-2.5">
              <span className="text-[10px] text-accent font-bold uppercase tracking-[0.2em]">Malzemeler</span>
              <div className="mt-1 space-y-0.5">
                <Bi>2 yumurta, 2 dilim peynir</Bi>
                <Bi>Kuzu kulağı, maydanoz</Bi>
                <Bi>2yk yulaf, kapya biber</Bi>
                <Bi>1yk zeytinyağ</Bi>
              </div>
            </div>
            <div className="bg-white/[0.05] rounded-xl p-2.5">
              <span className="text-[10px] text-accent font-bold uppercase tracking-[0.2em]">Hazırlanış</span>
              <div className="mt-1"><Bi>Yumurta salatası veya omlet olarak hazırlayın</Bi></div>
            </div>
          </div>
        </GlassCard>

        {/* ARA ÖĞÜN */}
        <GlassCard className="mb-2 p-3">
          <MealHeader icon={<GlassWater className="w-3.5 h-3.5 text-white" />} label="ARA ÖĞÜN" title="ÖDEM ATTIRICI KÜR" />
          <div className="bg-white/[0.05] rounded-xl p-2.5">
            <div className="space-y-0.5">
              <Bi>3yk yoğurt, 1yk labne</Bi>
              <Bi>1tk keten tohumu</Bi>
              <Bi>1 yeşil elma</Bi>
            </div>
          </div>
        </GlassCard>

        {/* AKŞAM */}
        <GlassCard className="mb-1 p-3">
          <MealHeader icon={<Moon className="w-3.5 h-3.5 text-white" />} label="AKŞAM YEMEĞİ" title="IZGARA BALIK" />
          <div className="bg-white/[0.05] rounded-xl p-2.5">
            <div className="space-y-0.5">
              <Bi>250g ızgara balık</Bi>
              <Bi>Mevsim salata</Bi>
            </div>
          </div>
        </GlassCard>
      </div>

      <PageBottomBar />
    </div>
  </div>
);

/* ──────── PAGE 7 - GÜN 6 ──────── */
const Page7 = () => (
  <div className="detoks-page bg-primary text-white relative overflow-hidden" style={{ width: '210mm', height: '297mm', padding: '8mm 12mm' }}>
    <PageDecor variant={2} />
    <div className="relative z-10 flex flex-col h-full justify-between">
      <PageTopBar pageNumber={7} />

      <div className="flex-1 flex flex-col">
        <DayBadge day="6" theme="METABOLİK AKTİVASYON - 2" />

        {/* KAHVALTI ALT 1 */}
        <GlassCard className="mb-2 p-3">
          <MealHeader icon={<Coffee className="w-3.5 h-3.5 text-white" />} label="KAHVALTI - ALTERNATİF 1" title="TATLI TARİF" />
          <div className="bg-white/[0.05] rounded-xl p-2.5">
            <div className="space-y-0.5">
              <Bi>4yk yoğurt, 2yk yulaf, 5 çilek</Bi>
              <Bi>1 hurma, 1tk kakao, 1yk tahin</Bi>
              <Bi>1tk chia, 5 badem</Bi>
            </div>
          </div>
        </GlassCard>

        {/* KAHVALTI ALT 2 */}
        <GlassCard className="mb-2 p-3">
          <MealHeader icon={<Wheat className="w-3.5 h-3.5 text-white" />} label="KAHVALTI - ALTERNATİF 2" title="SANDVİÇ" />
          <div className="bg-white/[0.05] rounded-xl p-2.5">
            <div className="space-y-0.5">
              <Bi>2 dilim ekmek, 2 dilim peynir</Bi>
              <Bi>Yeşillik, 2 ceviz</Bi>
            </div>
          </div>
        </GlassCard>

        {/* ARA ÖĞÜN */}
        <GlassCard className="mb-2 p-3">
          <MealHeader icon={<GlassWater className="w-3.5 h-3.5 text-white" />} label="ARA ÖĞÜN" title="ÖDEM ATTIRICI SMOOTHIE" />
          <div className="bg-white/[0.05] rounded-xl p-2.5">
            <div className="space-y-0.5">
              <Bi>1 bardak kefir, 10 dal maydanoz</Bi>
              <Bi>1 kivi / 5 çilek &rarr; blender</Bi>
            </div>
          </div>
        </GlassCard>

        {/* AKŞAM */}
        <GlassCard className="mb-1 p-3">
          <MealHeader icon={<Moon className="w-3.5 h-3.5 text-white" />} label="AKŞAM YEMEĞİ" title="PEYNİR SEBZE IZGARA" />
          <div className="bg-white/[0.05] rounded-xl p-2.5">
            <div className="space-y-0.5">
              <Bi>Kabak, patlıcan, kapya biber</Bi>
              <Bi>Lor / beyaz peynir</Bi>
              <Bi>Zeytinyağı, limon, roka</Bi>
            </div>
          </div>
        </GlassCard>
      </div>

      <PageBottomBar />
    </div>
  </div>
);

/* ──────── PAGE 8 - GÜN 7 ──────── */
const Page8 = () => (
  <div className="detoks-page bg-primary text-white relative overflow-hidden" style={{ width: '210mm', height: '297mm', padding: '8mm 12mm' }}>
    <PageDecor variant={3} />
    <div className="relative z-10 flex flex-col h-full justify-between">
      <PageTopBar pageNumber={8} />

      <div className="flex-1 flex flex-col">
        {/* PHASE HEADER */}
        <GlassCard className="bg-accent/15 border-accent/25 text-center mb-3 p-2.5">
          <div className="flex items-center justify-center gap-2">
            <Flame className="w-5 h-5 text-accent" />
            <h3 className="font-serif text-[15px] font-bold">7-9. GÜN: DERİN YAĞ YAKIMI</h3>
          </div>
        </GlassCard>

        <DayBadge day="7" theme="DERİN YAĞ YAKIMI BAŞLIYOR" />

        {/* KAHVALTI */}
        <GlassCard className="mb-2 p-3">
          <MealHeader icon={<Coffee className="w-3.5 h-3.5 text-white" />} label="KAHVALTI" title="KAHVALTI KASESİ" />
          <div className="bg-white/[0.05] rounded-xl p-2.5">
            <div className="space-y-0.5">
              <Bi>2 dilim peynir, 1çk çörekotu</Bi>
              <Bi>2 haşlama yumurta, maydanoz, kuzu kulağı</Bi>
              <Bi>1 kuru kayısı, 10 zeytin</Bi>
            </div>
          </div>
        </GlassCard>

        {/* ARA ÖĞÜN */}
        <GlassCard className="mb-2 p-3">
          <MealHeader icon={<Star className="w-3.5 h-3.5 text-white" />} label="ARA ÖĞÜN" title="KEFİR İKİLİSİ" />
          <div className="bg-white/[0.05] rounded-xl p-2.5">
            <div className="space-y-0.5">
              <Bi>1 bardak kefir</Bi>
              <Bi>1 kivi / 5 çilek, 1 ceviz</Bi>
            </div>
          </div>
        </GlassCard>

        {/* AKŞAM */}
        <GlassCard className="mb-2 p-3">
          <MealHeader icon={<Moon className="w-3.5 h-3.5 text-white" />} label="AKŞAM YEMEĞİ" title="FIRINDA PEYNİRLİ ENGİNAR" />
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/[0.05] rounded-xl p-2.5">
              <span className="text-[10px] text-accent font-bold uppercase tracking-[0.2em]">Malzemeler</span>
              <div className="mt-1 space-y-0.5">
                <Bi>2 enginar, 3yk lor</Bi>
                <Bi>3yk bezelye, 1yk yoğurt</Bi>
                <Bi>1çk zeytinyağı, sarımsak, baharatlar</Bi>
              </div>
            </div>
            <div className="bg-white/[0.05] rounded-xl p-2.5">
              <span className="text-[10px] text-accent font-bold uppercase tracking-[0.2em]">Hazırlanış</span>
              <div className="mt-1 space-y-0.5">
                <Bi>Enginarları hazırlayın</Bi>
                <Bi>İç harcı doldurun</Bi>
                <Bi>180°C'de 15-20dk fırınlayın</Bi>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* GECE ÇAYI */}
        <GlassCard className="mb-1 p-2.5 bg-accent/10 border-accent/20">
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4 text-accent" />
            <span className="text-[13px] font-bold text-accent">GECE YAĞ YAKIM ÇAYI:</span>
            <span className="text-[13px] text-white/90">Enginar yaprakları çayı</span>
          </div>
        </GlassCard>
      </div>

      <PageBottomBar />
    </div>
  </div>
);

/* ──────── PAGE 9 - GÜN 8 ──────── */
const Page9 = () => (
  <div className="detoks-page bg-primary text-white relative overflow-hidden" style={{ width: '210mm', height: '297mm', padding: '8mm 12mm' }}>
    <PageDecor variant={4} />
    <div className="relative z-10 flex flex-col h-full justify-between">
      <PageTopBar pageNumber={9} />

      <div className="flex-1 flex flex-col">
        <DayBadge day="8" theme="DERİN YAĞ YAKIMI - 2" />

        {/* SABAH AÇ KARNA */}
        <GlassCard className="mb-2 p-2.5 bg-accent/10 border-accent/20">
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4 text-accent" />
            <span className="text-[13px] font-bold text-accent">SABAH AÇ KARNA:</span>
            <span className="text-[13px] text-white/90">1 bardak kefir + 1yk chia</span>
          </div>
        </GlassCard>

        {/* KAHVALTI */}
        <GlassCard className="mb-2 p-3">
          <MealHeader icon={<Coffee className="w-3.5 h-3.5 text-white" />} label="KAHVALTI" title="PATATES SALATASI" />
          <div className="bg-white/[0.05] rounded-xl p-2.5">
            <div className="space-y-0.5">
              <Bi>1 haşlanmış patates, roka, marul</Bi>
              <Bi>Maydanoz, 2 ceviz, peynir</Bi>
              <Bi>Zeytinyağ, limon</Bi>
            </div>
          </div>
        </GlassCard>

        {/* ARA ÖĞÜN */}
        <GlassCard className="mb-2 p-3">
          <MealHeader icon={<Heart className="w-3.5 h-3.5 text-white" />} label="ARA ÖĞÜN" title="TATLI BİR MOLA" />
          <div className="bg-white/[0.05] rounded-xl p-2.5">
            <div className="space-y-0.5">
              <Bi>1 muz, 2yk yoğurt</Bi>
              <Bi>1tk kakao, 1tk fıstık ezmesi</Bi>
            </div>
          </div>
        </GlassCard>

        {/* AKŞAM */}
        <GlassCard className="mb-1 p-3">
          <MealHeader icon={<Moon className="w-3.5 h-3.5 text-white" />} label="AKŞAM YEMEĞİ" title="TAVUK SOTE" />
          <div className="bg-white/[0.05] rounded-xl p-2.5">
            <div className="space-y-0.5">
              <Bi>150g tavuk</Bi>
              <Bi>Soğan, kapya biber</Bi>
              <Bi>Zeytinyağı, baharatlar</Bi>
            </div>
          </div>
        </GlassCard>
      </div>

      <PageBottomBar />
    </div>
  </div>
);

/* ──────── PAGE 10 - GÜN 9 ──────── */
const Page10 = () => (
  <div className="detoks-page bg-primary text-white relative overflow-hidden" style={{ width: '210mm', height: '297mm', padding: '8mm 12mm' }}>
    <PageDecor variant={5} />
    <div className="relative z-10 flex flex-col h-full justify-between">
      <PageTopBar pageNumber={10} />

      <div className="flex-1 flex flex-col">
        <DayBadge day="9" theme="DERİN YAĞ YAKIMI - 3" />

        {/* KAHVALTI */}
        <GlassCard className="mb-2 p-3">
          <MealHeader icon={<Coffee className="w-3.5 h-3.5 text-white" />} label="KAHVALTI" title="ŞİŞKİNLİK AZALTICI SMOOTHIE" />
          <div className="bg-white/[0.05] rounded-xl p-2.5">
            <div className="space-y-0.5">
              <Bi>Kefir, kuzu kulağı, maydanoz</Bi>
              <Bi>Kivi / elma, yulaf</Bi>
              <Bi>Zencefil, limon kabuğu</Bi>
            </div>
          </div>
        </GlassCard>

        {/* ARA ÖĞÜN */}
        <GlassCard className="mb-2 p-3">
          <MealHeader icon={<GlassWater className="w-3.5 h-3.5 text-white" />} label="ARA ÖĞÜN" title="YAĞ YAKIMI DESTEKLEYİCİ KÜR" />
          <div className="bg-white/[0.05] rounded-xl p-2.5">
            <div className="space-y-0.5">
              <Bi>3yk yoğurt, 3-4 çilek</Bi>
              <Bi>Hindistan cevizi, zencefil</Bi>
            </div>
          </div>
        </GlassCard>

        {/* AKŞAM */}
        <GlassCard className="mb-1 p-3">
          <MealHeader icon={<Moon className="w-3.5 h-3.5 text-white" />} label="AKŞAM YEMEĞİ" title="FIRINDA TAVUK + METABOLİZMA RESETLEYEN ÇORBA" />
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/[0.05] rounded-xl p-2.5">
              <span className="text-[13px] text-accent font-bold uppercase tracking-wider">Tavuk</span>
              <div className="mt-1"><Bi>1 fırında tavuk baget</Bi></div>
            </div>
            <div className="bg-white/[0.05] rounded-xl p-2.5">
              <span className="text-[13px] text-accent font-bold uppercase tracking-wider">Çorba Malzemeleri</span>
              <div className="mt-1 space-y-0.5">
                <Bi>Kabak, patates, havuç</Bi>
                <Bi>Soğan, sarımsak, zeytinyağı</Bi>
                <Bi>Zencefil, zerdeçal, karabiber</Bi>
              </div>
            </div>
          </div>
          <div className="mt-1.5 bg-white/[0.05] rounded-xl p-2.5">
            <span className="text-[13px] text-accent font-bold">HAZIRLANIŞI:</span>
            <span className="text-[13px] text-white/90 ml-1">Sebzeleri pişirin, blenderdan geçirin</span>
          </div>
        </GlassCard>
      </div>

      <PageBottomBar />
    </div>
  </div>
);

/* ──────── PAGE 11 - GÜN 10 + KAPANIŞ ──────── */
const Page11 = () => (
  <div className="detoks-page bg-primary text-white relative overflow-hidden" style={{ width: '210mm', height: '297mm', padding: '8mm 12mm' }}>
    <PageDecor variant={6} />
    <div className="relative z-10 flex flex-col h-full justify-between">
      <PageTopBar pageNumber={11} />

      <div className="flex-1 flex flex-col">
        <DayBadge day="10" theme="HAFİFLEME GÜNÜ" />

        <GlassCard className="mb-2 p-2.5 bg-accent/15 border-accent/25 text-center">
          <p className="text-[12px] font-semibold">SON GÜN: HAFİFLEME GÜNÜ - YEŞİL ELMA ISPANAK DETOKSU</p>
        </GlassCard>

        {/* KAHVALTI */}
        <GlassCard className="mb-2 p-3">
          <MealHeader icon={<Coffee className="w-3.5 h-3.5 text-white" />} label="KAHVALTI" title="KLASİK KAHVALTI" />
          <div className="bg-white/[0.05] rounded-xl p-2.5">
            <div className="space-y-0.5">
              <Bi>2 haşlama yumurta, 2 dilim peynir</Bi>
              <Bi>Yeşillik, 2 kuru kayısı, 2 ceviz</Bi>
              <Bi>Kuşburnu çayı</Bi>
            </div>
          </div>
        </GlassCard>

        {/* ARA ÖĞÜN */}
        <GlassCard className="mb-2 p-3">
          <MealHeader icon={<Apple className="w-3.5 h-3.5 text-white" />} label="ARA ÖĞÜN" title="YOĞURT SUMAK KÜR" />
          <div className="bg-white/[0.05] rounded-xl p-2.5">
            <div className="space-y-0.5">
              <Bi>4yk yoğurt, 1 tutam sumak</Bi>
              <Bi>1 elma, 1çk zeytinyağ</Bi>
            </div>
          </div>
        </GlassCard>

        {/* AKŞAM */}
        <GlassCard className="mb-1 p-3">
          <MealHeader icon={<Moon className="w-3.5 h-3.5 text-white" />} label="AKŞAM YEMEĞİ" title="ISPANAK YEMEĞİ + YOĞURT KÜRÜ" />
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/[0.05] rounded-xl p-2.5">
              <span className="text-[13px] text-accent font-bold uppercase tracking-wider">Ana Yemek</span>
              <div className="mt-1"><Bi>Ispanak yemeği</Bi></div>
            </div>
            <div className="bg-white/[0.05] rounded-xl p-2.5">
              <span className="text-[13px] text-accent font-bold uppercase tracking-wider">Yoğurt Kürü</span>
              <div className="mt-1 space-y-0.5">
                <Bi>3yk yoğurt, sumak</Bi>
                <Bi>1çk çörekotu</Bi>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      <PageBottomBar />
    </div>
  </div>
);

/* ──────── CLOSING PAGE ──────── */
const ClosingPage = () => (
  <div className="detoks-page bg-primary text-white relative overflow-hidden" style={{ width: '210mm', height: '297mm', padding: '8mm 12mm' }}>
    <PageDecor variant={1} />
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-white/5 blur-2xl" />
    </div>
    <div className="relative z-10 flex flex-col h-full items-center justify-center text-center px-8">
      <Sparkles className="w-10 h-10 text-accent mb-4" />
      <h1 className="font-serif text-[26px] font-bold leading-tight mb-4 max-w-[480px]">
        10 GÜNLÜK YOLCULUĞUMUZ TAMAMLANDI!
      </h1>
      <GlassCard className="max-w-[460px] mb-5">
        <p className="text-[13px] text-white/90 leading-relaxed mb-3">
          Bu 10 gün boyunca vücudunu dinledin, metabolizmana yeni bir ritim kazandırdın. Unutma, bu bir son değil, yeni bir başlangıç!
        </p>
        <p className="text-[13px] text-white/90 leading-relaxed">
          Sağlıklı beslenme bir yaşam tarzıdır. Küçük adımlarla büyük değişimler yaratmaya devam et.
        </p>
      </GlassCard>

      <GlassCard className="max-w-[460px] mb-6 bg-accent/15 border-accent/25">
        <p className="text-[12px] text-white/95 font-semibold leading-relaxed">
          Sorularınız için her zaman yanınızdayım. Sağlıklı günler!
        </p>
      </GlassCard>

      <div className="flex flex-col items-center gap-2">
        <span className="font-serif text-[16px] text-white/90 font-bold tracking-wider">DYT. AYŞENUR KORKMAZ</span>
        <div className="flex items-center gap-4 text-[13px] text-white/90">
          <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> diyetisyenaysenurkorkmaz.com</span>
        </div>
      </div>
    </div>
  </div>
);

/* ════════════════════════════════════════════
   MAIN APP
   ════════════════════════════════════════════ */
export default function Detoks0001Page() {
  const handlePrint = () => window.print();

  return (
    <div className="detoks-theme font-dm-sans pb-10 print:pb-0">
      <CoverPage />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
      <Page9 />
      <Page10 />
      <Page11 />
      <ClosingPage />

      {/* Print Button */}
      <button
        onClick={handlePrint}
        className="no-print fixed bottom-6 right-6 w-14 h-14 bg-accent hover:bg-accent/80 text-white rounded-full shadow-2xl flex items-center justify-center transition-all z-50"
        title="Yazdır"
      >
        <Printer className="w-6 h-6" />
      </button>
    </div>
  );
}
