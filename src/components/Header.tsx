'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="flex justify-between border-b border-b-color-line-50 text-size-label">
      <div className="flex">
        <div className="w-80 border-r border-r-color-line-50 px-8 py-4">
          leonard-laput
        </div>
        <Link
          href="/"
          className={clsx(
            'border-r border-r-color-line-50 px-8 py-4',
            'hover:border-b-[3px] hover:border-b-color-accent-50 hover:text-white',
            pathname === '/' &&
              'border-b-[3px] border-b-color-accent-50 text-white',
          )}
        >
          _hello
        </Link>
        <Link
          href="/about-me"
          className={clsx(
            'border-r border-r-color-line-50 px-8 py-4',
            'hover:border-b-[3px] hover:border-b-color-accent-50 hover:text-white',
            pathname.includes('/about-me') &&
              'border-b-[3px] border-b-color-accent-50 text-white',
          )}
        >
          _about-me
        </Link>
        <Link
          href="/projects"
          className={clsx(
            'border-r border-r-color-line-50 px-8 py-4',
            'hover:border-b-[3px] hover:border-b-color-accent-50 hover:text-white',
            pathname.includes('/projects') &&
              'border-b-[3px] border-b-color-accent-50 text-white',
          )}
        >
          _projects
        </Link>
      </div>
      <Link
        href="/contact-me"
        className={clsx(
          'border-l border-l-color-line-50 px-8 py-4',
          'hover:border-b-[3px] hover:border-b-color-accent-50 hover:text-white',
          pathname === '/contact-me' &&
            'border-b-[3px] border-b-color-accent-50 text-white',
        )}
      >
        _contact-me
      </Link>
    </header>
  )
}

export default Header
