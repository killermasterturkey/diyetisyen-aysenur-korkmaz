import { AnimatePresence, motion } from "framer-motion";

const POPUP_DURATION_SECONDS = 20;

export default function IntroPopup() {
  const [visible, setVisible] = useState(true);
  const [remaining, setRemaining] = useState(POPUP_DURATION_SECONDS);

  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setVisible(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      clearInterval(interval);
      document.body.style.overflow = originalOverflow;
    };
  }, [visible]);

  const progress = ((POPUP_DURATION_SECONDS - remaining) / POPUP_DURATION_SECONDS) * 100;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="intro-popup-message"
        >
          <motion.div
            initial={{ scale: 0.85, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-full max-w-3xl rounded-2xl bg-white shadow-2xl ring-2 ring-red-600/40 overflow-hidden"
          >
            <div className="px-8 py-12 sm:px-12 sm:py-16 text-center">
              <p
                id="intro-popup-message"
                className="text-red-600 font-extrabold leading-snug text-xl sm:text-2xl md:text-3xl tracking-tight"
                style={{ textShadow: "0 1px 2px rgba(0,0,0,0.08)" }}
              >
                Kardeş bildik, emanet ettik. Sana “teyze” diyen masum bir çocuğa el kaldırdın; bu kanın değil, vicdanının sınavıydı ve kaybettin. Utanmayı dahi beceremeyip inkâra sığındın. Bugünden sonra inkârın işe yaramayacak; hesabı önce vicdanın soracak.
              </p>

              <div className="mt-10 flex flex-col items-center gap-3">
                <div
                  className="text-sm font-semibold uppercase tracking-widest text-red-600/80"
                  aria-live="polite"
                >
                  {remaining} saniye
                </div>
                <div
                  className="h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-red-100"
                  role="progressbar"
                  aria-valuenow={Math.round(progress)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <motion.div
                    className="h-full bg-red-600"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4, ease: "linear" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
