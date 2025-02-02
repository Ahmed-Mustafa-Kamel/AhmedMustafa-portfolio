/**
 * @copyright 2024 AhmedMustafa
 * @license Apache-2.0
 */

import { ButtonPrimary } from '@components/common/Button';
import { SOCIAL_LINKS, NAV_ITEMS } from '@constants/data';

const Footer = () => {
  return (
    <footer className="section">
      {/* footer container */}
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          {/* left */}
          <div className="mb-10">
            <h2 className="headline-3 mb-8 lg:max-w-[12ch] ">
              Let&apos;s work together!
            </h2>
            <ButtonPrimary
              href="mailto:ahmedmustafakamel1@gmail.com"
              label={"Start Project"}
              icon="chevron_right"
            />
          </div>

          {/* right */}
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            {/* mapping sitemap items */}
            <div>
              <p className="mb-2">Sitemap</p>
              <ul>
                {NAV_ITEMS.map(({ label, href }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* mapping social links */}
            <div>
              <p className="mb-2">Social Links</p>
              <ul>
                {SOCIAL_LINKS.map(({ label, href }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* logo img & copyrights */}
        <div className=" flex items-center justify-between pt-10">
          <a href="/">
            <img src="/AMlogo2.png" width={40} height={40} alt="Ahmed Mustafa Logo" />
          </a>
          {/* copy rights */}
          <p className=" text-zinc-500 text-sm">
            &copy; 2024 <span className=" text-zinc-200">Ahmed Mustafa</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
