'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { geist } from '@/utils/fonts';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const testimonials = [
  {
    text: 'Mvpblocks has completely changed the way I build UIs. Copy-paste, done. No more design stress.',
    imageSrc: 'https://i.pravatar.cc',
    name: 'Arjun Mehta',
    username: '@arjdev',
  },
  {
    text: 'Honestly shocked at how smooth the animations and styling are out of the box. Just works.',
    imageSrc: 'https://i.pravatar.cc',
    name: 'Sara Lin',
    username: '@sara.codes',
  },
  {
    text: 'Our team launched a client site in 2 days using Mvpblocks. Saved so much time.',
    imageSrc: 'https://i.pravatar.cc',
    name: 'Devon Carter',
    username: '@devninja',
  },
  {
    text: 'Plugged a few blocks into our existing codebase and everything blended perfectly. Massive W.',
    imageSrc: 'https://i.pravatar.cc',
    name: 'Priya Shah',
    username: '@priyacodes',
  },
  {
    text: 'Found a beautiful hero section, dropped it into V0, tweaked copy, and shipped in 15 minutes.',
    imageSrc: 'https://i.pravatar.cc',
    name: 'Leo Martin',
    username: '@leobuilds',
  },
  {
    text: 'Mvpblocks helped us prototype multiple landing pages without writing CSS once.',
    imageSrc: 'https://i.pravatar.cc',
    name: 'Chloe Winters',
    username: '@chloewinters',
  },
  {
    text: 'As a solo founder, Mvpblocks lets me move fast without sacrificing design quality.',
    imageSrc: 'https://i.pravatar.cc',
    name: 'Ayaan Malik',
    username: '@ayaan_dev',
  },
  {
    text: 'Can’t believe how polished the components look. Clients are impressed every time.',
    imageSrc: 'https://i.pravatar.cc',
    name: 'Monica Reeves',
    username: '@monicareeves',
  },
  {
    text: 'This tool is a lifesaver when deadlines are tight. Drop in a block, tweak, and deploy.',
    imageSrc: 'https://i.pravatar.cc',
    name: 'James Roy',
    username: '@jamesrdev',
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: '-50%',
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop',
      }}
      className="flex flex-col gap-6"
    >
      {[
        ...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, imageSrc, name, username }) => (
              <div
                key={text}
                className="border-border from-secondary/10 to-card relative w-full max-w-xs overflow-hidden rounded-3xl border bg-gradient-to-b p-10 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset]"
              >
                {/* rose color gradient */}
                <div className="from-primary/10 to-card absolute -top-5 -left-5 -z-10 h-40 w-40 rounded-full bg-gradient-to-b blur-md" />
                <div>{text}</div>
                <div className="mt-5 flex items-center gap-2">
                  <Image
                    src={imageSrc}
                    alt={name}
                    height={40}
                    width={40}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="leading-5 font-medium tracking-tight">
                      {name}
                    </div>
                    <div className="leading-5 tracking-tight">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        )),
      ]}
    </motion.div>
  </div>
);

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleShareClick = () => {
    const tweets = require('@/lib/tweet-contents').tweetContents;
    const randomTweet = tweets[Math.floor(Math.random() * tweets.length)];
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(randomTweet)}`,
      '_blank',
    );
  };

  return (
    <section id="reviews" className="bg-background mb-24">
      <div className="mx-auto max-w-7xl">
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
              <span className="relative">Testimonials</span>
            </button>
          </div>
          <h2
            className={cn(
              'from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]',
              geist.className,
            )}
          >
            What our users say
          </h2>
          <p className="mt-5 text-center text-lg text-zinc-500">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </motion.div>
        <div className="my-16 flex max-h-[738px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
        <div className="-mt-8 flex justify-center">
          <button
            onClick={handleShareClick}
            className="group border-primary/30 bg-background text-foreground hover:border-primary/60 hover:bg-primary/10 relative inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-all active:scale-95"
          >
            <div className="via-primary/40 absolute inset-x-0 -top-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent to-transparent" />
            <div className="via-primary/40 absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent to-transparent" />
            <svg
              className="text-primary h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
            Share your experience
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
