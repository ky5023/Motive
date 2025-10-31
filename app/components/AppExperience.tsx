import Image, { type StaticImageData } from 'next/image';
import MockStep1 from '../assets/experience-step1.png';
import MockStep2 from '../assets/experience-step2.png';
import MockStep3 from '../assets/experience-step3.png';

type Step = {
  id: string;
  label: string;
  title: string;
  caption: string;
  points: string[];
  valueRef: { label: string; anchor: string };
  mock: {
    src: StaticImageData;
    alt: string;
    variant?: 'proposal' | 'insight';
  };
};

const STEPS: Step[] = [
  {
    id: 'meaning',
    label: 'Step 01',
    title: '移動目的を添える',
    caption:
      '検索時に「仕事」「学び」「余暇」などの目的を一緒に登録。AIが履歴を学習して候補を提示し、混雑・所要時間・ポイント還元をリアルタイム表示します。',
    points: ['AIが目的候補をサジェスト', '混雑・所要時間・滞在予測を一画面で確認'],
    valueRef: { label: 'ダイヤ最適化', anchor: '#value' },
    mock: {
      src: MockStep1,
      alt: '移動目的入力のモック',
    },
  },
  {
    id: 'proposal',
    label: 'Step 02',
    title: '目的に合わせた提案',
    caption:
      '通勤・学び・観光など目的と嗜好を掛け合わせ、AIがルートをランキング。混雑予測やCO₂削減、ポイント加算を比較して選べます。',
    points: ['目的別ルートをランキング表示', '混雑・CO₂・到着予測を数値で比較'],
    valueRef: { label: '広告・連携', anchor: '#value' },
    mock: {
      src: MockStep2,
      alt: '目的別ルート提案のモック',
      variant: 'proposal',
    },
  },
  {
    id: 'insight',
    label: 'Step 03',
    title: '貢献を振り返る',
    caption:
      '混雑回避のインパクトやポイント、気分ログを一つのダッシュボードに。AIが見つけたパターンから改善のヒントを届け、都市への貢献を実感できます。',
    points: ['混雑緩和・ポイント・気分を可視化', 'AIが振り返りの気づきを提案'],
    valueRef: { label: 'ユーザー価値', anchor: '#value' },
    mock: {
      src: MockStep3,
      alt: 'ダッシュボードのモック',
      variant: 'insight',
    },
  },
];

function StepCard({ step }: { step: Step }) {
  const { label, title, caption, points, valueRef, mock } = step;
  const mockClassName = ['experience-card__mock'];

  if (mock.variant) {
    mockClassName.push(`experience-card__mock--${mock.variant}`);
  }

  return (
    <article className="experience-card">
      <div className={mockClassName.join(' ')}>
        <div className="experience-card__mock-inner">
          <Image src={mock.src} alt={mock.alt} priority />
        </div>
      </div>
      <div className="experience-card__body">
        <span className="experience-card__label">{label}</span>
        <h3 className="experience-card__heading">{title}</h3>
        <p className="experience-card__caption">{caption}</p>
        <ul className="experience-card__points">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <a className="experience-card__value" href={valueRef.anchor}>
          関連する価値：{valueRef.label}
        </a>
      </div>
    </article>
  );
}

export function AppExperience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__matrix">
        <div className="experience__intro">
          <span className="experience__eyebrow">Experience</span>
          <h2 className="experience__title">アプリ体験のイメージ</h2>
          <p className="experience__lead">
            Motive は「入力 → 提案 → 振り返り」の3ステップで移動の意味をデザインします。混雑回避はもちろん、目的に合わせた最適なルートと貢献の可視化を体験できます。
          </p>
        </div>
        <div className="experience__columns">
          {STEPS.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
