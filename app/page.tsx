'use client';

import { useRef } from 'react';
import gsap from 'gsap-trial/dist/gsap';
import { ScrollTrigger } from 'gsap-trial/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import useIsomorphicLayoutEffect from '../helpers/isomorphicEffect';

// This is needed only in Stackblitz
if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

const HomePage = () => {
  const container = useRef<HTMLElement | null>(null);
  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: '.box-c',
        pin: true,
        start: 'center center',
        end: '+=300',
        markers: true,
      });
    },
    {
      scope: container,
    }
  );

  return (
    <main className="home" ref={container}>
      <div className="header">
        <h1 className="title">ScrollSmoother</h1>
        <p>
          The Future of Artifical World{' '}
          <strong>
            <i>Tools</i>
          </strong>{' '}
          Techniques
        </p>
      </div>
      <div className="box box-a" data-speed="0.5">
        a
      </div>
      <div className="box box-b" data-speed="0.8">
        b
      </div>
      <div className="box box-c" data-speed="1.5">
        c
      </div>
      <div className="line"></div>
    </main>
  );
};

export default HomePage;
