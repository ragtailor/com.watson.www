import Link from "next/link";
import { GeminiHeroChat } from "@/components/GeminiHeroChat";

const portfolioItems = [
  { title: "대형 제조사 통합 문서 RAG 구축", tag: "RAG System" },
  { title: "핀테크 스타트업 AI 에이전트 설계", tag: "Agent Design" },
  { title: "헥사고날 DDD 기반 RAG 플랫폼 아키텍처", tag: "Architecture" },
  { title: "FastAPI 기반 AI 서비스 엔진 구현", tag: "Backend" },
  { title: "Flutter 모바일 에이전트 UI 구현", tag: "Mobile" },
  { title: "Vercel + AWS 엔터프라이즈 배포 최적화", tag: "DevOps" },
  { title: "의료 기관 비정형 문서 처리 파이프라인", tag: "Data Pipeline" },
  { title: "물류 회사 Multi-Agent 시스템 구축", tag: "Multi-Agent" },
  { title: "교육 플랫폼 AI 튜터 RAG 구현", tag: "RAG System" },
  { title: "보험사 계약서 자동 분석 AI 개발", tag: "NLP" },
];

const techStack = [
  "Agentic RAG",
  "Multi-Agent",
  "FastAPI",
  "Flutter",
  "Vercel",
  "AWS",
  "LangChain",
  "Python",
  "Next.js",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-800 antialiased">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center bg-gradient-to-b from-white via-slate-50/40 to-white pt-16">
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />
          <div className="absolute right-1/3 bottom-20 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.45]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                Enterprise AI Specialist
              </span>
            </div>

            <h1 className="text-5xl leading-[1.1] font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              헥사고날 클린 DDD 기반
              <br />
              <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-600 bg-clip-text text-transparent">
                엔터프라이즈 AI 설계
              </span>
              <br />
              &amp; RAG 구현 전문
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              중소기업의 비정형 데이터를 가치 있게 만드는
              <br className="hidden sm:block" />
              자체 데이터 처리 최적화{" "}
              <strong className="text-slate-900">RAG 시스템 구축</strong>이
              Ragtailor의 핵심입니다.
            </p>

            <GeminiHeroChat />

            <div className="mt-12 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="h-12 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent opacity-80" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-slate-50/80 px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-sky-600">
              Value Proposition
            </p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              중소기업의 비정형 데이터를
              <br />
              다시 설계합니다
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              빠르게 적용 가능한 RAG 아키텍처와 실무 중심의 설계 컨설팅,
              기업 대상 AI 역량 강화를 제공합니다.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-sky-200 hover:shadow-md">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.29 7 12 12 20.71 7" />
                  <line x1="12" x2="12" y1="22" y2="12" />
                </svg>
              </div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-500">
                시스템 구축
              </p>
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                데이터 최적화 RAG 구축
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                AI 모델 성능과 비용 효율성을 모두 고려한 비정형 데이터 처리
                파이프라인을 설계합니다. Agentic RAG부터 Multi-Agent까지
                실전 중심으로 구현합니다.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-sky-200 hover:shadow-md">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-500">
                컨설팅
              </p>
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                프로젝트 참여 및 설계
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                엔터프라이즈 성장에 맞춘 아키텍처 검증, 데이터 전략, 실행
                로드맵을 함께 수립합니다. 헥사고날 클린 아키텍처 기반 DDD
                설계를 적용합니다.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-sky-200 hover:shadow-md">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-500">
                교육
              </p>
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                AI 선도기업 전문 강의
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                다중 에이전트 디자인, FastAPI / Flutter 통합, RAG 엔터프라이즈
                구축 전문 강의를 제공합니다. AI 선도기업의 팀 역량을 실질적으로
                높입니다.
              </p>
            </article>
          </div>

          {/* Core Capability Highlight */}
          <div className="mt-8 rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50/90 to-blue-50/80 p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
              <div className="flex-1">
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-sky-600">
                  핵심 전문성
                </p>
                <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  자체 데이터 처리 최적화
                  <br />
                  RAG 시스템 구축
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600">
                  데이터 중심 아키텍처, 다중 에이전트 조율, SaaS 배포 파이프라인까지
                  통합된 엔터프라이즈 AI 솔루션을 제공합니다. 신뢰성과 확장성을 모두
                  갖춘 설계로 실전에 바로 적용할 수 있습니다.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:min-w-[260px]">
                {[
                  "Agentic RAG Architecture",
                  "Multi-Agent Orchestration",
                  "Hexagonal Clean DDD",
                  "FastAPI + Flutter + AWS",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-sm"
                  >
                    <div className="h-2 w-2 flex-shrink-0 rounded-full bg-sky-500" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Marquee Section */}
      <section id="portfolio" className="bg-white py-20">
        <div className="mx-auto mb-12 max-w-7xl px-6 text-center sm:px-8 lg:px-12">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-sky-600">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            수행 프로젝트
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            다양한 산업 분야에서 실전 검증된 AI 및 RAG 프로젝트를 수행했습니다.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent sm:w-40" />
          <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-24 bg-gradient-to-l from-white to-transparent sm:w-40" />

          <div className="marquee py-3">
            <div className="marquee-track flex items-stretch gap-5">
              {portfolioItems.concat(portfolioItems).map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="min-w-[280px] flex-shrink-0 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 shadow-sm"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-sky-600">
                    {item.tag}
                  </span>
                  <p className="mt-2 text-sm leading-snug font-semibold text-slate-900">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-slate-50/80 px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-10 text-center shadow-sm sm:p-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-sky-600">
              Contact
            </p>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              프로젝트를 시작해 보세요
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-base text-slate-600 sm:text-lg">
              RAG 시스템 구축, AI 아키텍처 설계, 전문 강의 문의는
              아래 이메일로 연락주세요.
            </p>
            <a
              href="mailto:rex@ragtailor.com"
              className="inline-flex items-center gap-3 rounded-2xl bg-sky-600 px-10 py-4 text-base font-bold text-white shadow-md transition-all hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-500/25"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              rex@ragtailor.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-6 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-600 sm:flex-row">
          <p>
            <span className="font-bold text-slate-800">RAGTAILOR</span> —
            헥사고날 클린 DDD 기반 엔터프라이즈 AI 설계 전문
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/notice"
              className="transition-colors hover:text-slate-900"
            >
              공지사항
            </Link>
            <a
              href="mailto:rex@ragtailor.com"
              className="transition-colors hover:text-slate-900"
            >
              rex@ragtailor.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
