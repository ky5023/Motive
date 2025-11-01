'use client';

import type { ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';

type StepDefinition = {
  id: string;
  step: string;
  title: string;
  description: string;
  gradient: string;
  content: () => ReactNode;
};

const introVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

const StepCapture = () => (
  <div className="space-y-5 text-left text-emerald-50">
    <div className="rounded-2xl bg-white/10 p-4 shadow-inner shadow-emerald-950/20 backdrop-blur">
      <span className="text-xs font-medium uppercase tracking-[0.35em] text-emerald-50/70">
        目的カテゴリ
      </span>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        {['通勤', '学び', '余暇', 'その他'].map((label, index) => (
          <span
            key={label}
            className={`rounded-full px-3 py-1 ${
              index === 0
                ? 'bg-white text-emerald-700 shadow-sm shadow-emerald-950/15'
                : 'bg-white/15 text-emerald-50/80'
            }`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
    <div className="space-y-3 rounded-2xl bg-white/85 p-4 text-slate-800 shadow-[0_18px_45px_-28px_rgba(15,118,110,0.65)]">
      <div className="space-y-1">
        <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
          出発地
        </p>
        <p className="text-sm font-semibold text-slate-900">青山一丁目駅</p>
      </div>
      <div className="space-y-1">
        <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
          目的地
        </p>
        <p className="text-sm font-semibold text-slate-900">日本橋オフィス</p>
      </div>
      <div className="flex items-center justify-between rounded-xl bg-emerald-50 px-3 py-2">
        <span className="text-xs font-medium text-emerald-600">
          推定獲得ポイント
        </span>
        <div className="flex items-baseline gap-1 text-emerald-600">
          <span className="text-xl font-semibold">+120</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em]">
            Moxon pts
          </span>
        </div>
      </div>
    </div>
  </div>
);

const StepRecommend = () => (
  <div className="space-y-5 text-left text-sky-50">
    <div className="rounded-2xl bg-white/10 p-4 shadow-inner shadow-slate-950/25 backdrop-blur">
      <span className="text-xs font-medium uppercase tracking-[0.35em] text-sky-50/70">
        提案されたルート
      </span>
      <div className="mt-3 space-y-3 text-sm">
        <div className="rounded-2xl bg-white/85 p-4 text-slate-900 shadow-[0_18px_48px_-28px_rgba(15,23,42,0.65)]">
          <div className="flex items-center justify-between text-sm font-semibold">
            <span>地下鉄A線 → 徒歩8分</span>
            <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-600">
              混雑率 32%
            </span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs text-slate-500">
            <div className="rounded-xl bg-slate-100 py-2">
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
                CO₂
              </p>
              <p className="text-sm font-semibold text-slate-900">-18%</p>
            </div>
            <div className="rounded-xl bg-slate-100 py-2">
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
                時間
              </p>
              <p className="text-sm font-semibold text-slate-900">24分</p>
            </div>
            <div className="rounded-xl bg-slate-100 py-2">
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
                PTS
              </p>
              <p className="text-sm font-semibold text-slate-900">+120</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-white/25 bg-white/8 p-3 text-xs leading-relaxed text-sky-100/85">
          他の選択肢：シェア自転車（CO₂ -12%、所要 28分）／
          バスB線（混雑率 45%、所要 34分）
        </div>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-3 text-xs text-sky-100/80">
      {[
        { label: '混雑回避', value: '-18 %' },
        { label: 'CO₂削減', value: '-0.8 kg' },
        { label: '獲得ポイント', value: '+120 pts' },
      ].map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/35 bg-white/12 p-3 text-center backdrop-blur-sm"
        >
          <p className="text-[10px] uppercase tracking-[0.3em]">{item.label}</p>
          <p className="mt-2 text-sm font-semibold">{item.value}</p>
        </div>
      ))}
    </div>
  </div>
);

const StepReflect = () => (
  <div className="space-y-5 text-left text-purple-50">
    <div className="grid gap-3">
      <div className="rounded-2xl bg-white/85 p-4 text-slate-900 shadow-[0_18px_48px_-30px_rgba(76,29,149,0.65)]">
        <p className="text-[10px] uppercase tracking-[0.3em] text-purple-400">
          都市貢献スコア
        </p>
        <p className="mt-2 text-3xl font-semibold text-slate-950">82</p>
        <p className="mt-2 text-xs text-slate-500">
          今週の混雑緩和に上位 12% で貢献。
        </p>
      </div>
      <div className="rounded-2xl bg-white/70 p-4 text-slate-900">
        <p className="text-[10px] uppercase tracking-[0.3em] text-purple-400">
          感情への影響
        </p>
        <ul className="mt-3 space-y-2 text-sm">
          <li className="flex items-baseline justify-between">
            <span>ストレス</span>
            <span className="text-purple-500">-24%</span>
          </li>
          <li className="flex items-baseline justify-between">
            <span>満足感</span>
            <span className="text-purple-500">+36%</span>
          </li>
          <li className="flex items-baseline justify-between">
            <span>都市とのつながり</span>
            <span className="text-purple-500">+18%</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="rounded-2xl border border-white/30 bg-white/12 p-4 backdrop-blur">
      <p className="text-[10px] uppercase tracking-[0.3em] text-purple-100/80">
        合計ポイント
      </p>
      <div className="mt-3 flex items-end justify-between text-purple-50">
        <span className="text-3xl font-semibold">2,420</span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.3em]">
          Moxon pts
        </span>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-purple-100/80">
        貢献したテーマ「都市の余裕づくり」のバッジが更新されました。
      </p>
    </div>
  </div>
);

const STEPS: StepDefinition[] = [
  {
    id: 'capture',
    step: 'Step 01',
    title: '目的を入力する',
    description:
      'プルダウンで「通勤・学び・余暇」を選び、出発地と目的地を添えるだけ。入力と同時にポイントの見込みが提示されます。',
    gradient: 'from-emerald-500/90 via-emerald-400/85 to-teal-500/90',
    content: StepCapture,
  },
  {
    id: 'recommend',
    step: 'Step 02',
    title: 'AIが提案するルート',
    description:
      '履歴と都市データをもとに、混雑率・CO₂削減・獲得ポイントまで比較できる提案を受け取ります。',
    gradient: 'from-sky-500/90 via-sky-500/80 to-indigo-500/90',
    content: StepRecommend,
  },
  {
    id: 'reflect',
    step: 'Step 03',
    title: '振り返りと感情への貢献',
    description:
      '都市貢献スコアや感情の変化を振り返り、ポイントとともに日々の余裕を可視化。移動が感情に与える影響を知ることができます。',
    gradient: 'from-purple-500/90 via-violet-500/85 to-fuchsia-500/90',
    content: StepReflect,
  },
];

export function AppExperience() {
  return (
    <section
      id="experience"
      className="bg-slate-50/60 py-28 sm:py-32 lg:py-36"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <motion.div
          variants={introVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col gap-5 text-slate-600 sm:gap-6"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-500">
            App Experience
          </span>
          <div className="flex flex-col gap-4 text-slate-600 sm:max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              「入力 → 提案 → 振り返り」で、移動の意味を静かに描く。
            </h2>
            <p className="text-base leading-relaxed sm:text-lg">
              Moxon は入力の手触りから余白を大切に設計。スマートフォン上での 3
              ステップが、都市と自分のあいだに新しい解像度をもたらします。
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-3"
        >
          {STEPS.map((step) => {
            const StepContent = step.content;

            return (
              <motion.article
                key={step.id}
                variants={cardVariants}
                className="flex flex-col items-center gap-6 text-center"
              >
                <div
                  className={`relative w-full max-w-[320px] overflow-hidden rounded-[36px] border border-white/55 bg-gradient-to-br ${step.gradient} p-6 pb-8 shadow-[0_40px_80px_-45px_rgba(15,23,42,0.6)] backdrop-blur`}
                >
                  <div className="absolute inset-x-12 top-5 h-1 rounded-full bg-white/50" />
                  <div className="mt-10">
                    <StepContent />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="max-w-xs text-sm leading-relaxed text-slate-500">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
