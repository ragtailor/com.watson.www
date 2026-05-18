import Link from "next/link";

import { AuthLoginButton } from "@/components/auth/AuthLoginButton";

export function SiteNav() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-slate-900 transition-opacity hover:opacity-80"
          >
            RAG<span className="text-sky-600">TAILOR</span>
          </Link>
          <div className="flex items-center gap-4 text-sm sm:gap-6">
            <a
              href="/#services"
              className="hidden text-slate-600 transition-colors hover:text-slate-900 md:block"
            >
              서비스
            </a>
            <a
              href="/#portfolio"
              className="hidden text-slate-600 transition-colors hover:text-slate-900 md:block"
            >
              포트폴리오
            </a>
            <Link
              href="/notice"
              className="hidden text-slate-600 transition-colors hover:text-slate-900 md:block"
            >
              공지사항
            </Link>
            <a
              href="mailto:rex@ragtailor.com"
              className="rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-500"
            >
              문의하기
            </a>
            <Link
              href="/titanic"
              className="rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-sky-300 hover:text-sky-700 sm:px-4 sm:text-sm"
            >
              [타이타닉]
            </Link>
            <AuthLoginButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
