export default function LessonPage() {
  return (
    <div className="flex h-full flex-col">
      {/* Header Section */}
      <div className="mb-8 border-b border-neutral-100 pb-8">
        <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
          Lesson
        </p>
        <h1 className="mt-2 text-2xl font-semibold uppercase tracking-[0.06em] text-neutral-900">
          수업용 메인 페이지
        </h1>
        <p className="mt-4 text-sm text-neutral-600">
          다양한 데이터 분석 및 머신러닝 강의 콘텐츠를 제공합니다.
        </p>
      </div>

      {/* Course Overview Section */}
      <div className="grid grid-cols-1 gap-8">
        <div>
          <h2 className="mb-4 text-lg font-medium uppercase tracking-[0.08em] text-neutral-900">
            Titanic
          </h2>
          <div className="space-y-3">
            <p className="text-sm text-neutral-600">
              타이타닉 침몰 데이터를 활용한 기초 데이터 분석 및 분류 모델 구현 강의입니다.
            </p>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400"></span>
                <span>데이터 수집 및 전처리</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400"></span>
                <span>탐색적 데이터 분석 (EDA)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400"></span>
                <span>분류 모델 개발 및 평가</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
