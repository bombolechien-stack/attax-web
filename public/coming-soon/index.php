<?php
/* ─── Language ─────────────────────────────────────────────── */
$lang = ($_GET['lang'] ?? 'fr') === 'en' ? 'en' : 'fr';
$other_lang = $lang === 'en' ? 'fr' : 'en';
$other_label = $lang === 'en' ? 'FR' : 'EN';

/* ─── Copy ──────────────────────────────────────────────────── */
$t = [
  'en' => [
    'h1'            => ["Your workouts", "finally matter."],
    'subtitle'      => "Sport is becoming a game. Budy is almost here.",
    'bullets'       => ["Be among the first players.", "Face real opponents every day.", "Every workout changes the outcome."],
    'cta'           => "Join the waitlist",
    'placeholder'   => "your@email.com",
    'confirmed'     => "You're in. We'll reach out very soon.",
    'how_label'     => "How it works",
    'how'           => [
      ['label' => "Train",   'body' => "Walk, run, cycle, lift.\nYour activity becomes power."],
      ['label' => "Compete", 'body' => "Face a real opponent every day."],
      ['label' => "Win",     'body' => "Climb leagues and prove your consistency."],
    ],
    'purpose_title' => ["Sport has always been about competition.", "Budy finally brings it to everyone."],
    'purpose_pts'   => ["Feel the pressure of a real opponent.", "Turn every session into a match.", "A new era of sport is starting."],
    'launch_label'  => "Arriving very soon",
    'launch_title'  => ["Be part of the", "first wave."],
    'launch_body'   => "Budy launches very soon.\nThe first spots are reserved for those who sign up now — be part of the players who will shape this new era of sport.",
    'cta2'          => "Secure my spot",
    'copyright'     => "© 2025 Budy",
  ],
  'fr' => [
    'h1'            => ["Tes entraînements", "comptent enfin."],
    'subtitle'      => "Le sport devient un jeu. Budy arrive très bientôt.",
    'bullets'       => ["Fais partie des premiers joueurs.", "Affronte de vrais adversaires chaque jour.", "Chaque séance change le résultat."],
    'cta'           => "Rejoindre la liste",
    'placeholder'   => "ton@email.com",
    'confirmed'     => "Tu es inscrit. On te contacte très bientôt.",
    'how_label'     => "Comment ça marche",
    'how'           => [
      ['label' => "Bouge",    'body' => "Marche, cours, pédale, soulève.\nTon activité devient de la puissance."],
      ['label' => "Affronte", 'body' => "Un vrai adversaire chaque jour."],
      ['label' => "Progresse",'body' => "Monte les ligues et prouve ta régularité."],
    ],
    'purpose_title' => ["Le sport a toujours été une question de compétition.", "Budy le rend enfin accessible à tous."],
    'purpose_pts'   => ["Ressens la pression d'un vrai adversaire.", "Transforme chaque séance en match.", "Une nouvelle ère du sport commence."],
    'launch_label'  => "Disponible très bientôt",
    'launch_title'  => ["Fais partie de", "la première vague."],
    'launch_body'   => "Budy arrive très bientôt.\nLes premières places sont réservées à ceux qui s'inscrivent maintenant — sois parmi les joueurs qui façonneront cette nouvelle ère du sport.",
    'cta2'          => "Réserver ma place",
    'copyright'     => "© 2025 Budy",
  ],
];
$c = $t[$lang];

/* ─── Waitlist ──────────────────────────────────────────────── */
$sent1 = isset($_GET['sent']) && $_GET['sent'] === '1';
$sent2 = isset($_GET['sent']) && $_GET['sent'] === '2';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $which = (int)($_POST['form_id'] ?? 1);
  $raw   = trim($_POST['email'] ?? '');
  $email = filter_var($raw, FILTER_VALIDATE_EMAIL);
  if ($email) {
    /* 1. Save to CSV backup (never lose a signup) */
    $csv_line = implode(',', [
      date('Y-m-d H:i:s'),
      $email,
      $lang,
      $which,
    ]) . "\n";
    file_put_contents(__DIR__ . '/waitlist.csv', $csv_line, FILE_APPEND | LOCK_EX);

    /* 2. Send email notification */
    $to      = 'contact@attax.app';
    $subject = 'New Budy Waitlist Signup';
    $body    = "New waitlist signup:\r\n\r\nEmail: $email\r\nForm: $which\r\nLang: $lang\r\nDate: " . date('Y-m-d H:i:s') . "\r\n";
    $headers = implode("\r\n", [
      'Content-Type: text/plain; charset=UTF-8',
      'From: Budy Waitlist <noreply@budy.co>',
      "Reply-To: $email",
      'X-Mailer: PHP/' . PHP_VERSION,
    ]);
    mail($to, $subject, $body, $headers);
  }
  $qs = http_build_query(['lang' => $lang, 'sent' => $which]);
  header("Location: index.php?$qs");
  exit;
}
?>
<!DOCTYPE html>
<html lang="<?= $lang ?>">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Budy — Coming Soon</title>
  <meta name="description" content="Budy turns your daily activity into real competition. Coming soon." />
  <meta name="robots" content="noindex, nofollow" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg:    #070707;
      --text:  #ffffff;
      --muted: rgba(255,255,255,0.35);
      --dim:   rgba(255,255,255,0.05);
      --border:rgba(255,255,255,0.06);
      --font:  'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    html { scroll-behavior: smooth; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: var(--font);
      -webkit-font-smoothing: antialiased;
      min-height: 100vh;
    }

    /* ── NAV ── */
    nav {
      position: relative;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 3rem;
      height: 72px;
      flex-shrink: 0;
    }
    .nav-lang a {
      font-size: 0.8125rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      color: rgba(255,255,255,0.45);
      text-decoration: none;
      padding: 6px 12px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.1);
      transition: color 0.2s, border-color 0.2s;
    }
    .nav-lang a:hover { color: #fff; border-color: rgba(255,255,255,0.25); }
    .nav-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
    }
    .nav-logo svg { display: block; }
    .nav-logo-wordmark {
      font-size: 1.4375rem;
      font-weight: 800;
      letter-spacing: -0.04em;
      color: #ffffff;
      line-height: 1;
    }
    .nav-cta {
      font-size: 0.8125rem;
      font-weight: 700;
      color: rgba(255,255,255,0.85);
      text-decoration: none;
      padding: 8px 18px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.16);
      background: rgba(255,255,255,0.06);
      transition: background 0.2s;
    }
    .nav-cta:hover { background: rgba(255,255,255,0.1); }

    /* ── HERO ── */
    .hero {
      position: relative;
      height: 100vh;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .hero video {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 110%;
      object-fit: cover;
      object-position: center 30%;
      z-index: 0;
      top: -5%;
    }
    .hero-grad-v {
      position: absolute;
      inset: 0;
      z-index: 1;
      background: linear-gradient(to bottom,
        rgba(7,7,7,0.45) 0%,
        rgba(7,7,7,0.10) 25%,
        rgba(7,7,7,0.65) 70%,
        rgba(7,7,7,1.00) 100%);
    }
    .hero-grad-h {
      position: absolute;
      inset: 0;
      z-index: 1;
      background: linear-gradient(to right, rgba(7,7,7,0.65) 0%, transparent 70%);
    }
    .hero-body {
      position: relative;
      z-index: 5;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 3rem 3rem;
    }
    .hero-inner { max-width: 600px; }

    h1 {
      font-size: clamp(2.75rem, 5.5vw, 5.5rem);
      font-weight: 800;
      color: #ffffff;
      line-height: 1.0;
      letter-spacing: -0.04em;
      margin: 0 0 1.75rem;
    }
    .hero-sub {
      font-size: 1rem;
      color: rgba(255,255,255,0.5);
      line-height: 1.75;
      margin: 0 0 0.5rem;
      max-width: 380px;
    }
    .hero-bullets p {
      font-size: 0.9375rem;
      color: rgba(255,255,255,0.28);
      line-height: 1.8;
      margin: 0;
    }

    /* ── FORMS ── */
    .form-wrap { margin-top: 2.25rem; }
    .form-row {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    .form-row.center { justify-content: center; }
    .email-input {
      flex: 1;
      min-width: 180px;
      max-width: 260px;
      padding: 13px 20px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.12);
      background: rgba(255,255,255,0.05);
      color: #fff;
      font-size: 0.9375rem;
      font-family: var(--font);
      outline: none;
      transition: border-color 0.2s, background 0.2s;
    }
    .email-input::placeholder { color: rgba(255,255,255,0.25); }
    .email-input:focus { border-color: rgba(255,255,255,0.28); background: rgba(255,255,255,0.08); }
    .submit-btn {
      padding: 13px 26px;
      border-radius: 999px;
      border: none;
      background: #fff;
      color: #0d0d0d;
      font-weight: 700;
      font-size: 0.9375rem;
      font-family: var(--font);
      cursor: pointer;
      white-space: nowrap;
      transition: opacity 0.2s, transform 0.15s;
    }
    .submit-btn:hover  { opacity: 0.88; transform: translateY(-1px); }
    .submit-btn:active { transform: none; }
    .submit-btn.large { padding: 14px 28px; }
    .confirmed {
      font-size: 0.9375rem;
      color: rgba(255,255,255,0.5);
      font-style: italic;
      margin: 0;
    }

    /* ── SECTIONS ── */
    section {
      padding: 9rem 3rem;
      border-top: 1px solid var(--border);
    }
    .section-inner { max-width: 72rem; margin: 0 auto; }
    .section-label {
      font-size: 0.6875rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.25);
      margin: 0 0 2rem;
    }

    /* Section 2 – how it works grid */
    .how-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
    }
    .how-card {
      border-top: 1px solid rgba(255,255,255,0.08);
      padding-top: 2rem;
    }
    .how-card h3 {
      font-size: 1.0625rem;
      font-weight: 700;
      color: #fff;
      margin: 0 0 0.75rem;
      letter-spacing: -0.02em;
    }
    .how-card p {
      font-size: 0.9375rem;
      color: rgba(255,255,255,0.35);
      line-height: 1.75;
      margin: 0;
      white-space: pre-line;
    }

    /* Section 3 – purpose */
    section.purpose { padding: 10rem 3rem; }
    .purpose-title {
      font-size: clamp(2rem, 4vw, 4rem);
      font-weight: 800;
      color: #fff;
      letter-spacing: -0.045em;
      line-height: 1.05;
      margin: 0 0 4rem;
      max-width: 640px;
    }
    .purpose-title span { color: rgba(255,255,255,0.38); }
    .purpose-list { display: flex; flex-direction: column; gap: 0; }
    .purpose-item {
      padding: 2rem 0;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      font-size: clamp(1.25rem, 2.5vw, 2rem);
      font-weight: 700;
      color: rgba(255,255,255,0.55);
      letter-spacing: -0.03em;
    }

    /* Section 4 – second CTA */
    section.cta2-section {
      padding: 12rem 3rem;
      text-align: center;
    }
    .cta2-inner { max-width: 520px; margin: 0 auto; }
    .launch-label {
      font-size: 0.6875rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.22);
      margin: 0 0 2rem;
    }
    .launch-title {
      font-size: clamp(2rem, 4.5vw, 3.75rem);
      font-weight: 800;
      color: #fff;
      letter-spacing: -0.045em;
      line-height: 1.0;
      margin: 0 0 1.5rem;
    }
    .launch-body {
      font-size: 0.9375rem;
      color: rgba(255,255,255,0.32);
      line-height: 1.8;
      margin: 0 0 2.75rem;
      white-space: pre-line;
    }

    /* ── FOOTER ── */
    footer {
      border-top: 1px solid rgba(255,255,255,0.06);
      padding: 2.5rem 3rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1.5rem;
    }
    .footer-logo {
      display: flex;
      align-items: center;
      gap: 8px;
      opacity: 0.45;
      text-decoration: none;
    }
    .footer-logo-word {
      font-size: 1.1rem;
      font-weight: 800;
      letter-spacing: -0.04em;
      color: #fff;
      line-height: 1;
    }
    .footer-socials {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .social-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: rgba(255,255,255,0.06);
      color: rgba(255,255,255,0.45);
      text-decoration: none;
      transition: background 0.2s, color 0.2s;
    }
    .social-btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .footer-copy {
      font-size: 0.75rem;
      color: rgba(255,255,255,0.16);
    }

    /* ── ANIMATIONS ── */
    .reveal {
      opacity: 0;
      transform: translateY(16px);
      transition: opacity 1.2s cubic-bezier(0.16,1,0.3,1), transform 1.2s cubic-bezier(0.16,1,0.3,1);
    }
    .reveal.visible { opacity: 1; transform: none; }
    .d1 { transition-delay: 0.10s; }
    .d2 { transition-delay: 0.26s; }
    .d3 { transition-delay: 0.34s; }
    .d4 { transition-delay: 0.46s; }
    .d5 { transition-delay: 0.10s; }
    .d6 { transition-delay: 0.22s; }
    .d7 { transition-delay: 0.34s; }
    .d8 { transition-delay: 0.00s; }
    .d9 { transition-delay: 0.14s; }
    .d10{ transition-delay: 0.25s; }
    .d11{ transition-delay: 0.36s; }

    /* ── MOBILE ── */
    @media (max-width: 768px) {
      nav { padding: 0 1.5rem; }
      .hero-body { padding: 0 1.5rem 2rem; }
      .how-grid { grid-template-columns: 1fr; gap: 0; }
      .how-card { border-top: none; border-bottom: 1px solid rgba(255,255,255,0.08); padding: 1.5rem 0; }
      section { padding: 6rem 1.5rem; }
      section.purpose, section.cta2-section { padding: 6rem 1.5rem; }
      footer { padding: 2rem 1.5rem; flex-direction: column; align-items: flex-start; }
      .form-row { flex-direction: column; }
      .email-input { max-width: 100%; }
    }
  </style>
</head>
<body>

<!-- HERO -->
<div class="hero">
  <video autoplay muted loop playsinline preload="metadata">
    <source src="boxingonring.mp4" type="video/mp4" />
  </video>
  <div class="hero-grad-v"></div>
  <div class="hero-grad-h"></div>

  <nav>
    <div class="nav-lang" style="width:120px">
      <a href="?lang=<?= $other_lang ?>"><?= $other_label ?></a>
    </div>
    <a href="#" class="nav-logo">
      <!-- Budy icon mark -->
      <svg width="28" height="28" viewBox="0 0 85 112" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
        <path d="M38.15,69.76l3,8h-1c-7.76,0-15.52,0-23.28,0a1,1,0,0,1-1.14-.82Q8.09,55.56.37,34.22c-.13-.35-.23-.7-.37-1.14H22.75l-3-7.94H41.64l-2.92-7.8c.31,0,.54-.06.76-.06,7.85,0,15.69,0,23.53,0,.52,0,.82.1,1,.65q7.34,20.45,14.72,40.88c.36,1,.7,2,1.09,3.09H57.05l3,7.88ZM54,53.88H68.18a6,6,0,0,0-.19-.64Q63.1,39.52,58.22,25.8c-.18-.49-.45-.56-.9-.56H42.39c-.2,0-.4,0-.66.05l2.94,7.86H22.82l3,8H11.68a2.6,2.6,0,0,0,0,.34q5,13.86,9.91,27.73a.71.71,0,0,0,.82.55H37.37c.21,0,.42,0,.71,0l-3-7.91H57Z"/>
        <path d="M16.78,80.41l7.41,3q3,7.88,6,15.73l-5.89.63-.53-.57q-3.18-8.31-6.29-16.74Z"/>
      </svg>
      <span class="nav-logo-wordmark">Budy</span>
    </a>
    <div style="display:flex;justify-content:flex-end">
      <a href="#early-access" class="nav-cta" style="white-space:nowrap"><?= htmlspecialchars($c['cta']) ?></a>
    </div>
  </nav>

  <div class="hero-body">
    <div class="hero-inner">
      <h1 class="reveal d1">
        <?= htmlspecialchars($c['h1'][0]) ?><br /><?= htmlspecialchars($c['h1'][1]) ?>
      </h1>
      <p class="hero-sub reveal d2"><?= htmlspecialchars($c['subtitle']) ?></p>
      <div class="hero-bullets reveal d3">
        <?php foreach ($c['bullets'] as $b): ?>
          <p><?= htmlspecialchars($b) ?></p>
        <?php endforeach; ?>
      </div>
      <div class="form-wrap reveal d4">
        <?php if ($sent1): ?>
          <p class="confirmed"><?= htmlspecialchars($c['confirmed']) ?></p>
        <?php else: ?>
          <form method="POST" action="">
            <input type="hidden" name="form_id" value="1" />
            <div class="form-row">
              <input class="email-input" type="email" name="email" placeholder="<?= htmlspecialchars($c['placeholder']) ?>" required autocomplete="email" />
              <button class="submit-btn" type="submit"><?= htmlspecialchars($c['cta']) ?></button>
            </div>
          </form>
        <?php endif; ?>
      </div>
    </div>
  </div>
</div>

<!-- SECTION 2: How it works -->
<section>
  <div class="section-inner js-reveal-section">
    <p class="section-label reveal d5"><?= htmlspecialchars($c['how_label']) ?></p>
    <div class="how-grid">
      <?php foreach ($c['how'] as $i => $item): ?>
        <div class="how-card reveal" style="transition-delay:<?= 0.1 + $i * 0.12 ?>s">
          <h3><?= htmlspecialchars($item['label']) ?></h3>
          <p><?= htmlspecialchars($item['body']) ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- SECTION 3: Purpose -->
<section class="purpose">
  <div class="section-inner js-reveal-section">
    <h2 class="purpose-title reveal d8">
      <?= htmlspecialchars($c['purpose_title'][0]) ?><br />
      <span><?= htmlspecialchars($c['purpose_title'][1]) ?></span>
    </h2>
    <div class="purpose-list">
      <?php foreach ($c['purpose_pts'] as $i => $pt): ?>
        <div class="purpose-item reveal" style="transition-delay:<?= 0.12 + $i * 0.14 ?>s">
          <?= htmlspecialchars($pt) ?>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- SECTION 4: Second CTA -->
<section id="early-access" class="cta2-section">
  <div class="cta2-inner js-reveal-section">
    <p class="launch-label reveal d8"><?= htmlspecialchars($c['launch_label']) ?></p>
    <h2 class="launch-title reveal d9">
      <?= htmlspecialchars($c['launch_title'][0]) ?><br /><?= htmlspecialchars($c['launch_title'][1]) ?>
    </h2>
    <p class="launch-body reveal d10"><?= htmlspecialchars($c['launch_body']) ?></p>
    <div class="reveal d11">
      <?php if ($sent2): ?>
        <p class="confirmed"><?= htmlspecialchars($c['confirmed']) ?></p>
      <?php else: ?>
        <form method="POST" action="">
          <input type="hidden" name="form_id" value="2" />
          <div class="form-row center">
            <input class="email-input" type="email" name="email" placeholder="<?= htmlspecialchars($c['placeholder']) ?>" required autocomplete="email" />
            <button class="submit-btn large" type="submit"><?= htmlspecialchars($c['cta2']) ?></button>
          </div>
        </form>
      <?php endif; ?>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <a href="#" class="footer-logo">
    <svg width="22" height="22" viewBox="0 0 85 112" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
      <path d="M38.15,69.76l3,8h-1c-7.76,0-15.52,0-23.28,0a1,1,0,0,1-1.14-.82Q8.09,55.56.37,34.22c-.13-.35-.23-.7-.37-1.14H22.75l-3-7.94H41.64l-2.92-7.8c.31,0,.54-.06.76-.06,7.85,0,15.69,0,23.53,0,.52,0,.82.1,1,.65q7.34,20.45,14.72,40.88c.36,1,.7,2,1.09,3.09H57.05l3,7.88ZM54,53.88H68.18a6,6,0,0,0-.19-.64Q63.1,39.52,58.22,25.8c-.18-.49-.45-.56-.9-.56H42.39c-.2,0-.4,0-.66.05l2.94,7.86H22.82l3,8H11.68a2.6,2.6,0,0,0,0,.34q5,13.86,9.91,27.73a.71.71,0,0,0,.82.55H37.37c.21,0,.42,0,.71,0l-3-7.91H57Z"/>
      <path d="M16.78,80.41l7.41,3q3,7.88,6,15.73l-5.89.63-.53-.57q-3.18-8.31-6.29-16.74Z"/>
    </svg>
    <span class="footer-logo-word">Budy</span>
  </a>
  <a href="mailto:hello@budy.co" class="social-btn" aria-label="Email">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  </a>
  <span class="footer-copy"><?= htmlspecialchars($c['copyright']) ?></span>
</footer>

<script>
  /* Hero reveal on load */
  document.querySelectorAll('.hero .reveal').forEach(el => {
    requestAnimationFrame(() => setTimeout(() => el.classList.add('visible'), 80));
  });

  /* IntersectionObserver for sections */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.js-reveal-section').forEach(s => io.observe(s));
</script>
</body>
</html>
