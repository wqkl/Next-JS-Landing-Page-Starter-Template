import Link from 'next/link';

import { Logo } from '../templates/Logo';

/* type INavbarProps = {
    logo: ReactNode;
    children: ReactNode;
}; */

const NavbarTwoColumns = (
  <div className="flex flex-wrap justify-between items-center">
    <div>
      <Link href="/">
        <a>
          <Logo xl />
        </a>
      </Link>
    </div>

    <nav>
      <ul className="navbar flex items-center font-medium text-xl text-gray-800"></ul>
    </nav>

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
