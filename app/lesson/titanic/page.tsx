import Image from "next/image";

export default function LessonTitanicPage() {
  return (
    <div className="flex h-full flex-col">
      {/* Header Section */}
      <div className="mb-8">
        <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
          Lesson
        </p>
        <h1 className="mt-2 text-2xl font-semibold uppercase tracking-[0.06em] text-neutral-900">
          타이타닉 모델 분석
        </h1>
      </div>

      {/* Main Content with Image Decoration */}
      <div className="flex gap-8">
        {/* Left Content */}
        <div className="flex-1">
          <p className="mb-6 text-sm text-neutral-600">
            역사 속 가장 유명한 해양사고인 타이타닉 침몰 사건을 데이터 분석을 통해 살펴봅니다.
            머신러닝 모델을 활용하여 승객의 생존 확률을 예측하는 방법을 배웁니다.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="mb-3 font-medium uppercase tracking-[0.08em] text-neutral-900">
                학습 목표
              </h2>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400"></span>
                  <span>데이터 수집 및 전처리 기술 습득</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400"></span>
                  <span>탐색적 데이터 분석 (EDA) 실습</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400"></span>
                  <span>분류 모델 개발 및 성능 평가</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400"></span>
                  <span>실제 데이터 기반 인사이트 도출</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-medium uppercase tracking-[0.08em] text-neutral-900">
                주요 내용
              </h2>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• 타이타닉 탑승객 데이터셋 분석</li>
                <li>• 성별, 연령, 좌석 등급에 따른 생존율 분석</li>
                <li>• 로지스틱 회귀 모델을 이용한 생존 예측</li>
                <li>• 모델 성능 평가 및 해석</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Decoration Section */}
        <div className="relative flex w-72 shrink-0 flex-col items-center justify-center rounded-lg border border-neutral-100 bg-gradient-to-br from-neutral-50 to-neutral-100 p-8">
          {/* Ship Decoration */}
          <div className="mb-6 text-6xl">🚢</div>
          
          <h3 className="mb-2 text-center font-medium text-neutral-900">
            Titanic
          </h3>
          <p className="mb-6 text-center text-xs text-neutral-600">
            1912년 침몰<br />
            1,500명 이상 사망
          </p>

          {/* Decorative Elements */}
          <div className="space-y-3 text-center text-xs text-neutral-500">
            <div>
              <div className="text-2xl">📊</div>
              <p>2,224명 탑승객</p>
            </div>
            <div>
              <div className="text-2xl">🔍</div>
              <p>데이터 분석</p>
            </div>
            <div>
              <div className="text-2xl">🤖</div>
              <p>머신러닝 모델</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
