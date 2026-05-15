import { TitanicCsvUpload } from "@/components/titanic/TitanicCsvUpload";

export default function TitanicHomePage() {
  return (
    <div className="min-h-screen bg-white pt-16 px-4 pb-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 py-12">
        <h1 className="text-center text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          타이타닉 홈
        </h1>
        <TitanicCsvUpload />
      </div>
    </div>
  );
}
