/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      {/* <a
        href="https://greensock.com/scrollsmoother"
        className="icon"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="greensock-icon"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-smoother-logo-light.svg"
          width="220"
          height="70"
          alt=""
        />
      </a> */}
      <ul>
        <li>
          <Link href="/">Boxes</Link>
        </li>
        <li>
          <Link href="/images">Images</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
