
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// Ana sayfalar
const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ServicesPage = lazy(() => import('../pages/services/page'));
const ServicesDetailPage = lazy(() => import('../pages/services/detail/page'));
const RecipesPage = lazy(() => import('../pages/recipes/page'));
const RecipesDetailPage = lazy(() => import('../pages/recipes/detail/page'));
const BlogPage = lazy(() => import('../pages/blog/page'));
const BlogDetailPage = lazy(() => import('../pages/blog/detail/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Detoks sayfaları
const Detoks0001Page = lazy(() => import('../pages/detoks/0001/page'));
const Detoks0002Page = lazy(() => import('../pages/detoks/0002/page'));

// Tarif detay sayfaları
const ProteinPancakeDetail = lazy(() => import('../pages/recipes/detail/protein-pancake'));
const QuinoaSalataDetail = lazy(() => import('../pages/recipes/detail/quinoa-salata'));
const IzgaraSomonDetail = lazy(() => import('../pages/recipes/detail/izgara-somon'));
const YulafliSmoothieBowlDetail = lazy(() => import('../pages/recipes/detail/yulafli-smoothie-bowl'));
const MercimekKofteDetail = lazy(() => import('../pages/recipes/detail/mercimek-kofte'));
const TavukluWrapDetail = lazy(() => import('../pages/recipes/detail/tavuklu-wrap'));
const AvokadoToastDetail = lazy(() => import('../pages/recipes/detail/avokado-toast'));
const FirindaSebzeliTavukDetail = lazy(() => import('../pages/recipes/detail/firinda-sebzeli-tavuk'));
const ChiaPudingDetail = lazy(() => import('../pages/recipes/detail/chia-puding'));
const TonBalikliSalataDetail = lazy(() => import('../pages/recipes/detail/ton-balikli-salata'));
const SebzeliOmletDetail = lazy(() => import('../pages/recipes/detail/sebzeli-omlet'));
const FalafelBowlDetail = lazy(() => import('../pages/recipes/detail/falafel-bowl'));
const SomonPokeBowlDetail = lazy(() => import('../pages/recipes/detail/somon-poke-bowl'));
const YesilDetoksSmoothieDetail = lazy(() => import('../pages/recipes/detail/yesil-detoks-smoothie'));
const TurkKahvaltiTabagiDetail = lazy(() => import('../pages/recipes/detail/turk-kahvalti-tabagi'));
const KinoaKofteDetail = lazy(() => import('../pages/recipes/detail/kinoa-kofte'));
const AkdenizSalatasiDetail = lazy(() => import('../pages/recipes/detail/akdeniz-salatasi'));
const EnerjiToplariDetail = lazy(() => import('../pages/recipes/detail/enerji-toplari'));

// Blog detay sayfaları
const MetabolizmaDetail = lazy(() => import('../pages/blog/detail/metabolizma-hizlandirmanin-bilimsel-yollari'));
const ProteinZamanlamasiDetail = lazy(() => import('../pages/blog/detail/sporcu-beslenmesinde-protein-zamanlamasi'));
const BagisiklikDetail = lazy(() => import('../pages/blog/detail/bagisiklik-sistemini-guclendiren-besinler'));
const AralikliOrucDetail = lazy(() => import('../pages/blog/detail/aralikli-oruc-ve-metabolik-saglik'));
const StresDetail = lazy(() => import('../pages/blog/detail/stres-ve-beslenme-iliskisi'));
const CocukBeslenmesiDetail = lazy(() => import('../pages/blog/detail/cocuk-beslenmesinde-dikkat-edilmesi-gerekenler'));
const SaglikliKiloVermeDetail = lazy(() => import('../pages/blog/detail/saglikli-kilo-vermenin-altin-kurallari'));
const GutSagligiDetail = lazy(() => import('../pages/blog/detail/gut-sagligi-ve-probiyotikler'));
const AntioksidanlarDetail = lazy(() => import('../pages/blog/detail/antioksidanlar-ve-yaslanma-karsiti-beslenme'));
const VejetaryenRehberDetail = lazy(() => import('../pages/blog/detail/vejetaryen-ve-vegan-beslenme-rehberi'));
const HidrasyonDetail = lazy(() => import('../pages/blog/detail/hidrasyon-ve-saglik'));
const HormonDengesiDetail = lazy(() => import('../pages/blog/detail/hormon-dengesi-ve-beslenme'));

const routes: RouteObject[] = [
  // Ana sayfa
  {
    path: '/',
    element: <HomePage />,
  },
  
  // Hakkımda
  {
    path: '/about',
    element: <AboutPage />,
  },
  
  // Hizmetler
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '/services/:slug',
    element: <ServicesDetailPage />,
  },
  
  // Tarifler - Ana sayfa
  {
    path: '/recipes',
    element: <RecipesPage />,
  },
  
  // Tarifler - Detay sayfaları (özel route'lar önce)
  {
    path: '/recipes/protein-pancake',
    element: <ProteinPancakeDetail />,
  },
  {
    path: '/recipes/quinoa-salata',
    element: <QuinoaSalataDetail />,
  },
  {
    path: '/recipes/izgara-somon',
    element: <IzgaraSomonDetail />,
  },
  {
    path: '/recipes/yulafli-smoothie-bowl',
    element: <YulafliSmoothieBowlDetail />,
  },
  {
    path: '/recipes/mercimek-kofte',
    element: <MercimekKofteDetail />,
  },
  {
    path: '/recipes/tavuklu-wrap',
    element: <TavukluWrapDetail />,
  },
  {
    path: '/recipes/avokado-toast',
    element: <AvokadoToastDetail />,
  },
  {
    path: '/recipes/firinda-sebzeli-tavuk',
    element: <FirindaSebzeliTavukDetail />,
  },
  {
    path: '/recipes/chia-puding',
    element: <ChiaPudingDetail />,
  },
  {
    path: '/recipes/ton-balikli-salata',
    element: <TonBalikliSalataDetail />,
  },
  {
    path: '/recipes/sebzeli-omlet',
    element: <SebzeliOmletDetail />,
  },
  {
    path: '/recipes/falafel-bowl',
    element: <FalafelBowlDetail />,
  },
  {
    path: '/recipes/somon-poke-bowl',
    element: <SomonPokeBowlDetail />,
  },
  {
    path: '/recipes/yesil-detoks-smoothie',
    element: <YesilDetoksSmoothieDetail />,
  },
  {
    path: '/recipes/turk-kahvalti-tabagi',
    element: <TurkKahvaltiTabagiDetail />,
  },
  {
    path: '/recipes/kinoa-kofte',
    element: <KinoaKofteDetail />,
  },
  {
    path: '/recipes/akdeniz-salatasi',
    element: <AkdenizSalatasiDetail />,
  },
  {
    path: '/recipes/enerji-toplari',
    element: <EnerjiToplariDetail />,
  },
  
  // Tarifler - Genel detay route (en sonda)
  {
    path: '/recipes/:slug',
    element: <RecipesDetailPage />,
  },
  
  // Blog - Ana sayfa
  {
    path: '/blog',
    element: <BlogPage />,
  },
  
  // Blog - Detay sayfaları (özel route'lar önce)
  {
    path: '/blog/metabolizma-hizlandirmanin-bilimsel-yollari',
    element: <MetabolizmaDetail />,
  },
  {
    path: '/blog/sporcu-beslenmesinde-protein-zamanlamasi',
    element: <ProteinZamanlamasiDetail />,
  },
  {
    path: '/blog/bagisiklik-sistemini-guclendiren-besinler',
    element: <BagisiklikDetail />,
  },
  {
    path: '/blog/aralikli-oruc-ve-metabolik-saglik',
    element: <AralikliOrucDetail />,
  },
  {
    path: '/blog/stres-ve-beslenme-iliskisi',
    element: <StresDetail />,
  },
  {
    path: '/blog/cocuk-beslenmesinde-dikkat-edilmesi-gerekenler',
    element: <CocukBeslenmesiDetail />,
  },
  {
    path: '/blog/saglikli-kilo-vermenin-altin-kurallari',
    element: <SaglikliKiloVermeDetail />,
  },
  {
    path: '/blog/gut-sagligi-ve-probiyotikler',
    element: <GutSagligiDetail />,
  },
  {
    path: '/blog/antioksidanlar-ve-yaslanma-karsiti-beslenme',
    element: <AntioksidanlarDetail />,
  },
  {
    path: '/blog/vejetaryen-ve-vegan-beslenme-rehberi',
    element: <VejetaryenRehberDetail />,
  },
  {
    path: '/blog/hidrasyon-ve-saglik',
    element: <HidrasyonDetail />,
  },
  {
    path: '/blog/hormon-dengesi-ve-beslenme',
    element: <HormonDengesiDetail />,
  },
  
  // Blog - Genel detay route (en sonda)
  {
    path: '/blog/:slug',
    element: <BlogDetailPage />,
  },
  
  // Detoks programları
  {
    path: '/detoks/0001',
    element: <Detoks0001Page />,
  },
  {
    path: '/detoks/0002',
    element: <Detoks0002Page />,
  },

  // İletişim
  {
    path: '/contact',
    element: <ContactPage />,
  },

  // 404 - En sonda
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
