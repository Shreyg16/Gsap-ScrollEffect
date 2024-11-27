'use client';

import { MutableRefObject , useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap-trial/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Header from '../components/Header';
import useIsomorphicLayoutEffect from '../helpers/isomorphicEffect';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const smoother = useRef<ScrollSmoother | null>(null);
  const ctx = useRef<gsap.Context | null>(null);
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ctx.current = gsap.context(() => {
      smoother.current = ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });
    });

    return () => {
      if (ctx.current) {
        ctx.current.revert();
      }
    };
  }, [pathname]);

  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <Header/>
        <div id="smooth-wrapper">
          <div id="smooth-content">{children}</div>
        </div>
      </body>
    </html>
  );
}
