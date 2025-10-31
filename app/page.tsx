import { AppExperience } from './components/AppExperience';

export default function Home() {
  return (
    <main>
      <section id="hero" className="hero">
        <div className="hero-shell">
          <div className="hero-content">
            <span className="hero-eyebrow">Movement with Meaning</span>
            <h1 className="hero-title">
              Motive移動には目的がある。
              <span className="hero-title-accent">ホーム画面から日常の移動をデザイン。</span>
            </h1>
            <p className="hero-subtitle">
              Motive は移動の「目的」を伴うログと AI の提案で、混雑・所要時間・CO₂ を可視化。
              ホームを開くだけで、安心できる最適ルートと都市への貢献度がわかります。
            </p>
            <ul className="hero-benefits">
              <li>目的入力と履歴から AI がリアルタイム提案</li>
              <li>端末内匿名化で安心したデータ共有</li>
              <li>貢献・気分ログをホームで即確認</li>
            </ul>
            <div className="hero-actions">
              <a className="pill-link pill-link-primary" href="#solution">
                プロダクトを見る
              </a>
              <a className="pill-link pill-link-secondary" href="#value">
                価値を確認する
              </a>
            </div>
            <dl className="hero-stats">
              <div className="hero-stats__item">
                <dt>1日の登録目的</dt>
                <dd>平均 4.8 件</dd>
              </div>
              <div className="hero-stats__item">
                <dt>混雑回避</dt>
                <dd>-18 %</dd>
              </div>
              <div className="hero-stats__item">
                <dt>ポジティブ気分</dt>
                <dd>+62 %</dd>
              </div>
            </dl>
          </div>
          <div className="hero-card">
            <div className="hero-card__badge">Beta Preview</div>
            <h3 className="hero-card__title">今日のホーム画面</h3>
            <ul className="hero-card__list">
              <li>
                <span className="hero-card__list-label">AI提案</span>
                <span className="hero-card__list-value">「余裕のある出社」</span>
              </li>
              <li>
                <span className="hero-card__list-label">推奨ルート</span>
                <span className="hero-card__list-value">地下鉄A → 徒歩8分</span>
              </li>
              <li>
                <span className="hero-card__list-label">ポイント</span>
                <span className="hero-card__list-value">+120 Motive pts</span>
              </li>
            </ul>
            <p className="hero-card__note">
              入力した目的と気分に合わせてホームが毎朝アップデート。混雑しない移動と貢献度をひと目で。
            </p>
          </div>
        </div>
      </section>

      <section id="problem" className="section section-soft">
        <div className="container reading narrow">
          <span className="section-eyebrow">Problem</span>
          <h2 className="section-title">なぜ移動の目的は“分からなかった”のか</h2>
          <p>
            移動データは大量に蓄積されている一方で、意思決定に必要な「移動目的」の情報は欠けたままです。まず、その欠落が生まれている背景を整理します。
          </p>
          <ul className="point-list">
            <li>
              <strong>プライバシー：</strong> 位置と意図を結合すると再識別リスクが高まり、厳格な匿名化が不可欠。
            </li>
            <li>
              <strong>コスト：</strong> 常時取得・保管・解析の運用が高コストで、長期継続の負担が大きい。
            </li>
            <li>
              <strong>制度・同意：</strong> GDPR / 個人情報保護法で同意管理とデータ最小化が求められ、UXを阻害しやすい。
            </li>
          </ul>
          <p className="section-summary">その結果、移動の目的は推定にとどまり、行動は量だけが語られてきました。</p>
        </div>
      </section>

      <section id="solution" className="section">
        <div className="container reading narrow">
          <span className="section-eyebrow">Solution</span>
          <h2 className="section-title">Motiveのブレークスルー</h2>
          <p>
            これらの制約を越えるために、Motive は取得・同意・連携の全てを再設計しました。個人の安心と都市への価値還元を両立させる要素は次のとおりです。
          </p>
          <ul className="point-list">
            <li>
              <strong>Edge-first匿名化：</strong> 端末内で目的をコード化し、統計化した要約のみを送信。
            </li>
            <li>
              <strong>操作＝同意UI：</strong> 送信操作に匿名統計共有の明示を組み込み、いつでも撤回・削除が可能。
            </li>
            <li>
              <strong>オープンデータ統合：</strong> GTFS・運行・混雑APIと移動目的データを結合し、政策と運行に直結。
            </li>
            <li>
              <strong>AIルート提案：</strong> 移動目的と履歴を学習し、混雑回避を含む最適ルートをリアルタイムでレコメンド。
            </li>
            <li>
              <strong>独自アプリ：</strong> API依存を超えて自律したUIと報酬設計を提供し、体験を全体設計。
            </li>
          </ul>
        </div>
      </section>

      <section id="value" className="section section-soft">
        <div className="container reading narrow">
          <span className="section-eyebrow">Value</span>
          <h2 className="section-title">Motiveが生み出す新しい価値</h2>

          {/* Why */}
          <div className="value-block">
            <h3>Why：なぜ「移動目的」が必要なのか</h3>
            <p>
              これまでの交通データは、人の「動き」だけを追ってきました。
              しかし「なぜ動いたのか」という移動目的の情報は欠落しており、
              交通政策や都市設計の本質的な課題解決にはつながりませんでした。
              Motiveはこの「移動目的」という空白を埋めることから始まります。
            </p>
          </div>

          {/* How */}
          <div className="value-block">
            <h3>How：どのように実現するのか</h3>
            <p>
              Motiveは、ユーザーの入力した移動目的を匿名化し、
              GTFSや運行・混雑などのオープンデータと組み合わせます。
              個人の目的と公共データを安全に結びつけることで、
              「文脈をもった交通データ」を生成します。
              この仕組みにより、政策・運行・まちづくりが現実にリンクします。
            </p>
          </div>

          {/* What */}
          <div className="value-block">
            <h3>What：何をもたらすのか</h3>
            <p>
              移動目的と紐づいた移動データは、公共交通・都市・ユーザーのすべてに価値を還元します。
            </p>
            <ul className="point-list">
              <li>
                <strong>ダイヤ最適化：</strong> 目的別需要をもとに、臨時便・増減便を精度高く判断。
              </li>
              <li>
                <strong>都市設計：</strong> 時間帯・目的別の滞在パターンをもとに動線・施設配置を最適化。
              </li>
              <li>
                <strong>広告・連携：</strong> 匿名データを用いて交通メディアや地域施策の最適配信を実現。
              </li>
              <li>
                <strong>ユーザー：</strong> 行動洞察と社会貢献の可視化を通じて、日常の移動が価値ある行動へ。
              </li>
            </ul>
          </div>

          <p className="section-summary">
            一人ひとりの移動が、都市全体の「移動目的」の地図を形づくる。
            それが、Motiveが目指す新しいモビリティの形です。
          </p>
        </div>
      </section>

      <AppExperience />

      <section id="incentive" className="section">
        <div className="container reading narrow">
          <span className="section-eyebrow">Engagement</span>
          <h2 className="section-title">ユーザーのインセンティブ設計</h2>
          <p>
            価値を持続させるには、ユーザーが安心して参加し続けられる仕組みが不可欠です。Motive は動機づけを多層で設計します。
          </p>
          <ul className="point-list">
            <li>
              <strong>機能的：</strong> 入力が次回の賢い提案（混雑回避や時短）に直結します。
            </li>
            <li>
              <strong>感情的：</strong> 貢献度やヒートマップの更新が可視化され、気持ちよさにつながります。
            </li>
            <li>
              <strong>社会的：</strong> 自治体や事業者の改善に匿名参加している実感を持てます。
            </li>
            <li>
              <strong>ポイント：</strong> 完了タスクでテーマやバッジ、交通費割引など多様な特典に交換できるポイントを付与します（コスト負担主体の設計は協議が必要）。
            </li>
          </ul>
        </div>
      </section>

      <section id="implementation" className="section section-soft">
        <div className="container reading narrow">
          <span className="section-eyebrow">Implementation</span>
          <h2 className="section-title">MVPの実装像</h2>
          <p>
            上記の体験と価値を検証するために、最小構成の MVP を次のように組み立てます。現場導入を意識した技術選択です。
          </p>
          <ul className="point-list">
            <li>
              <strong>記録：</strong> 出発地・到着地・目的を3タップで保存。
            </li>
            <li>
              <strong>保存：</strong> 端末内保持のうえ、日次サマリのみ送信。
            </li>
            <li>
              <strong>可視化：</strong> 目的比率と週次推移を示す個人ダッシュボード。
            </li>
            <li>
              <strong>提案：</strong> AIが目的と混雑予測を掛け合わせ、パーソナライズされたルートを提示。
            </li>
            <li>
              <strong>社会還元：</strong> 匿名集計の目的ヒートマップAPIを提供。
            </li>
            <li>
              <strong>技術：</strong> Next.js（PWA） / Supabase or Firebase / GTFS統合。
            </li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-shell">
          <p>© 2025 Motive Project</p>
        </div>
      </footer>
    </main>
  );
}
