'use client';

import { Geist } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Spotlight } from '../ui/spotlight';
import { useTheme } from 'next-themes';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CardCaroursalDemo from './cardcarouseldemo';
import WrapButtonDemo from '../ui/wrap-button';
import { Globe } from 'lucide-react';

const space = Geist({
  subsets: ['latin'],
  variable: '--font-carlito',
  weight: '400',
});

export default function Gallery() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="trending"
      className="border-secondary/50 bg-background relative mb-32 min-h-screen overflow-hidden rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-3xl border-t border-b pt-16 md:rounded-tl-[5rem] md:rounded-tr-[5rem] md:rounded-br-[5rem] md:rounded-bl-[5rem]"
      style={{
        boxShadow: `
      inset 0 20px 30px -12px rgba(244, 63, 94, 0.2),
      inset 0 -20px 30px -12px rgba(244, 63, 94, 0.2)
    `,
      }}
    >
      <div className="absolute z-0 h-full w-full">
        <Spotlight />
      </div>
      <div className="absolute bottom-0 z-0 h-full w-full rotate-180">
        <Spotlight />
      </div>
      <div className="absolute top-1/2 left-0 hidden -translate-y-1/2 lg:block">
        <img
          alt="Trending graphic 1"
          width={100}
          height={100}
          className="brightness-[0.95] dark:opacity-5"
          src="/trending1.svg"
        />
      </div>
      <div className="absolute top-1/2 right-0 hidden -translate-y-1/2 lg:block">
        <img
          alt="Trending graphic 2"
          width={100}
          height={100}
          className="brightness-[0.95] dark:opacity-5"
          src="/trending2.svg"
        />
      </div>
      <div className="mx-auto px-2">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="mx-auto max-w-[540px]"
        >
          <div className="flex justify-center">
            <button
              type="button"
              className="group bg-background/50 hover:shadow-primary/[0.1] dark:border-border relative z-[60] mx-auto rounded-full border border-zinc-500/80 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
            >
              <div className="via-primary absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent to-transparent shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
              <div className="via-primary absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent to-transparent shadow-2xl transition-all duration-500 group-hover:h-px"></div>
              <span className="relative">Gallery</span>
            </button>
          </div>
          <h2
            className={cn(
              'from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]',
              space.className,
            )}
          >
            Trending blocks
          </h2>
          <p className="mt-5 text-center text-lg text-zinc-500">
            Discover the most popular blocks used by our community and get
            inspired to build your own.
          </p>
        </motion.div>
        <div className="mx-auto mt-10 w-full max-w-4xl rounded-[24px] p-2 shadow-sm md:rounded-t-[44px]">
          <CardCaroursalDemo />
        </div>
        <section className="relative z-50 my-10 mb-20 w-full">
          <div className="mt-20 flex flex-col items-center justify-center">
            <div className="mx-auto flex h-[90px] max-w-[480px] items-center justify-center gap-4 rounded-3xl border-2 border-dashed px-6">
              <p className="text-lg opacity-60">
                Most SaaS sites? Same layout, same vibe. Let&apos;s break the
                mold.
              </p>
            </div>
            <div className="mx-auto mt-10 flex flex-col items-center justify-center">
              <div className="flex items-center justify-end gap-2 text-center text-lg md:text-2xl lg:text-3xl">
                <p>Each component is production-ready</p>
                <span className="scale-125">
                  <img src="/logo.webp" alt="" className="spin h-8 w-8" />
                </span>
              </div>
              <p className="text-center text-lg md:text-2xl lg:text-3xl">
                Built to <span className="text-primary font-bold">run</span>.
                Built to <span className="text-primary font-bold">scale</span>.
              </p>
            </div>
            <div className="mt-10 scale-125">
              <svg
                width="100"
                height="50"
                viewBox="0 0 100 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-black dark:fill-white"
              >
                <path d="M68.6958 5.40679C67.3329 12.7082 68.5287 20.1216 68.5197 27.4583C68.5189 29.5382 68.404 31.6054 68.1147 33.682C67.9844 34.592 69.4111 34.751 69.5414 33.8411C70.5618 26.5016 69.2488 19.104 69.4639 11.7325C69.5218 9.65887 69.7222 7.6012 70.0939 5.56265C70.1638 5.1949 69.831 4.81112 69.4601 4.76976C69.0891 4.72841 68.7689 5.01049 68.6958 5.40679Z"></path>
                <path d="M74.0117 26.1349C73.2662 27.1206 72.5493 28.1096 72.0194 29.235C71.5688 30.167 71.2007 31.137 70.7216 32.0658C70.4995 32.5033 70.252 32.9091 69.9475 33.3085C69.8142 33.4669 69.6779 33.654 69.5161 33.8093C69.4527 33.86 68.9199 34.2339 68.9167 34.2624C68.9263 34.1768 69.0752 34.3957 69.0055 34.2434C68.958 34.1515 68.8534 34.0531 68.8058 33.9612C68.6347 33.6821 68.4637 33.403 68.264 33.1208L67.1612 31.3512C66.3532 30.0477 65.5199 28.7126 64.7119 27.4093C64.5185 27.0699 63.9701 27.0666 63.7131 27.2979C63.396 27.5514 63.4053 27.9858 63.6018 28.2966C64.3845 29.5683 65.1956 30.8431 65.9783 32.1149L67.1572 33.9796C67.5025 34.5093 67.8225 35.2671 68.428 35.5368C69.6136 36.0446 70.7841 34.615 71.3424 33.7529C71.9992 32.786 72.4085 31.705 72.9035 30.6336C73.4842 29.3116 74.2774 28.1578 75.1306 26.9818C75.7047 26.2369 74.5573 25.3868 74.0117 26.1349ZM55.1301 12.2849C54.6936 18.274 54.6565 24.3076 55.0284 30.3003C55.1293 31.987 55.2555 33.7056 55.4419 35.4019C55.5431 36.3087 56.9541 36.0905 56.8529 35.1837C56.2654 29.3115 56.0868 23.3982 56.2824 17.4978C56.3528 15.8301 56.4263 14.1339 56.5537 12.4725C56.6301 11.5276 55.2034 11.3686 55.1301 12.2849Z"></path>
                <path d="M59.2642 30.6571C58.8264 31.475 58.36 32.2896 57.9222 33.1075C57.7032 33.5164 57.4843 33.9253 57.2369 34.3311C57.0528 34.6861 56.8656 35.0697 56.6278 35.3898C56.596 35.4152 56.5611 35.4691 56.5294 35.4944C56.4881 35.6054 56.5041 35.4627 56.5548 35.5261C56.7481 35.6055 56.8337 35.6151 56.7545 35.5484L56.6784 35.4533C56.6023 35.3581 56.5263 35.263 56.4534 35.1393C56.1778 34.7619 55.8734 34.3814 55.5946 34.0324C55.0146 33.2744 54.4315 32.545 53.8515 31.787C53.2685 31.0576 52.1584 31.945 52.7415 32.6744C53.4229 33.5592 54.1042 34.4441 54.7888 35.3004C55.1184 35.7127 55.4321 36.2677 55.8569 36.6039C56.3069 36.9719 56.884 36.9784 57.3533 36.6551C57.7624 36.3542 57.9845 35.9167 58.2067 35.4792C58.4636 34.9878 58.746 34.5282 59.003 34.0369C59.5423 33.0859 60.0563 32.1032 60.5957 31.1522C60.7765 30.8257 60.5104 30.3627 60.2092 30.2135C59.8161 30.112 59.4451 30.3305 59.2642 30.6571ZM44.5918 10.1569L42.2324 37.5406C42.0032 40.1151 41.8057 42.6641 41.5764 45.2386C41.5032 46.1549 42.9299 46.314 43.0032 45.3977L45.3626 18.014C45.5918 15.4396 45.7893 12.8905 46.0186 10.316C46.1235 9.37433 44.6968 9.21532 44.5918 10.1569Z"></path>
                <path d="M48.101 37.7616C46.7404 38.8232 45.8267 40.2814 44.9163 41.7109C44.0407 43.0866 43.1365 44.4592 41.738 45.3434C42.1247 45.5019 42.5146 45.6321 42.9014 45.7908C42.1324 41.8051 41.04 37.8699 39.6781 34.0203C39.545 33.6589 39.0695 33.5191 38.7365 33.6553C38.3719 33.817 38.2385 34.2353 38.3716 34.5969C39.7209 38.3007 40.7404 42.1121 41.4904 46.009C41.6012 46.5703 42.1877 46.7512 42.6539 46.4565C45.5462 44.6124 46.3877 40.9506 49.0169 38.8748C49.7178 38.2884 48.8304 37.1784 48.101 37.7616ZM25.9671 13.1014C25.7028 16.2497 26.0758 19.3824 26.5091 22.4929C26.9645 25.6636 27.4166 28.863 27.872 32.0337C28.1346 33.8253 28.3971 35.6167 28.631 37.4051C28.7607 38.3151 30.1717 38.0968 30.042 37.1868C29.5866 34.016 29.1281 30.8738 28.7012 27.7062C28.2647 24.6242 27.7396 21.5612 27.449 18.4666C27.2943 16.7449 27.2283 15.0042 27.3653 13.2572C27.4671 12.3442 26.0404 12.1851 25.9671 13.1014Z"></path>
                <path d="M30.5625 27.3357C29.9525 30.7343 29.3425 34.133 28.704 37.5284C29.1225 37.4018 29.5411 37.2751 29.9882 37.1516C28.6034 35.0617 27.2504 32.9465 25.8655 30.8565C25.6406 30.5425 25.1523 30.517 24.8669 30.7451C24.5497 30.9987 24.5305 31.4299 24.7555 31.7439C26.1403 33.8338 27.4933 35.9491 28.8781 38.039C29.2489 38.6003 30.0417 38.2265 30.1624 37.6621C30.7724 34.2635 31.3824 30.8648 32.0209 27.4694C32.0908 27.1016 31.758 26.7178 31.3871 26.6765C30.9559 26.6573 30.6324 26.9679 30.5625 27.3357Z"></path>
              </svg>
            </div>
            <WrapButtonDemo className="mt-10" href="/docs/get-started">
              <Globe className="animate-spin" />
              Get started
            </WrapButtonDemo>
          </div>
        </section>
      </div>
    </section>
  );
}
