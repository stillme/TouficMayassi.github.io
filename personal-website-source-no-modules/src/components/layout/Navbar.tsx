import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#2c3e50] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl">Toufic Mayassi, PhD</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#3498db] hover:text-white">
              Home
            </Link>
            <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#3498db] hover:text-white">
              About Me
            </Link>
            <Link href="/experience" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#3498db] hover:text-white">
              Experience
            </Link>
            <Link href="/publications" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#3498db] hover:text-white">
              Publications
            </Link>
            <Link href="/skills" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#3498db] hover:text-white">
              Skills
            </Link>
            <Link href="/projects" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#3498db] hover:text-white">
              Projects
            </Link>
            <Link href="/transition" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#3498db] hover:text-white">
              Career Transition
            </Link>
            <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#3498db] hover:text-white">
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            {/* Mobile menu button */}
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#3498db] focus:outline-none">
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#3498db]">
            Home
          </Link>
          <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#3498db]">
            About Me
          </Link>
          <Link href="/experience" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#3498db]">
            Experience
          </Link>
          <Link href="/publications" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#3498db]">
            Publications
          </Link>
          <Link href="/skills" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#3498db]">
            Skills
          </Link>
          <Link href="/projects" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#3498db]">
            Projects
          </Link>
          <Link href="/transition" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#3498db]">
            Career Transition
          </Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#3498db]">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
