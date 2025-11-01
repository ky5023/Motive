import Link from 'next/link';
import { AppExperience } from './components/AppExperience';

const HIGHLIGHTS = [
  {
    title: '文脈あるデータ',
    description:
      '目的・場所・時間を一つのログにまとめ、移動の意味をそのまま分析へ届けます。',
  },
  {
    title: '生活と都市を接続',
    description:
      '匿名化した目的データを交通・都市データと結合し、政策やサービス改善に活かします。',
  },
  {
    title: '感情まで可視化',
    description:
      '移動後の気分・余裕も計測。ルート選択がどのように心に響くのかまでフィードバックします。',
  },
];

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <section
        id="hero"
        className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-100"
      >
        <div className="mx-auto flex min-h-[80vh] max-w-5xl flex-col justify-center gap-14 px-6 py-28 sm:py-36 lg:py-44">
          <div className="flex flex-col gap-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.45em] text-emerald-500">
              Moxon
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                動くたびに、あなたが見えてくる。
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Moxon は移動のたびに記録される目的と、都市のリアルタイムな情報を結びつけ、
                静かなインターフェースで日常の移動を整えます。余白ある UI に寄り添いながら、
                あなたの意図と感情がひとつの地図に描かれていきます。
              </p>
            </div>
          </div>
          <div>
            <Link
              href="#overview"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-400 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              サービス概要を見る
            </Link>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 blur-3xl">
          <div className="absolute left-1/3 top-20 h-60 w-60 rounded-full bg-emerald-200/60" />
          <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-teal-100/70" />
          <div className="absolute bottom-24 left-10 h-48 w-48 rounded-full bg-white/60" />
        </div>
      </section>

      <section
        id="overview"
        className="mx-auto max-w-5xl px-6 py-24 sm:py-28 lg:py-32"
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-500">
              Overview
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              移動の目的が見えると、都市が静かに動き出す。
            </h2>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              Moxon は「目的を入力する」シンプルな行為から、都市全体で共有できる価値を育てます。
              端末内で匿名化された意図が AI に学習され、混雑や感情の変化までフィードバック。
              一人の移動が、都市の呼吸を整えるインサイトに変わります。
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="flex h-full flex-col justify-between rounded-3xl border border-slate-100/70 bg-gradient-to-br from-white/80 to-slate-50/40 p-6 shadow-[0px_20px_55px_-35px_rgba(15,23,42,0.35)] backdrop-blur"
              >
                <div className="text-sm font-semibold text-slate-900 sm:text-base">
                  {item.title}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppExperience />
    </main>
  );
}
