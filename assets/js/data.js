/*
 * All site content lives here. Every user-facing string is { en, tr }.
 * To add a project: copy an entry in PROJECTS, give it a unique id, and set `cats`
 * to any of "ai", "fullstack", "mobile". `links` can hold { label, url } pairs
 * (GitHub repo, live demo…) — the card shows them automatically.
 */

const PROFILE = {
  name: "Eray Çağan Özdemir",
  email: "eraycagan@gmail.com",
  location: { en: "Istanbul, Turkey", tr: "İstanbul, Türkiye" },
  linkedin: "https://www.linkedin.com/in/eraycaganozdemir/",
  github: "https://github.com/eraycaganozdemir",
  cv: "assets/ErayCaganOzdemir_CV.pdf",
};

const UI = {
  "nav.about": { en: "about", tr: "hakkımda" },
  "nav.experience": { en: "experience", tr: "deneyim" },
  "nav.projects": { en: "projects", tr: "projeler" },
  "nav.skills": { en: "skills", tr: "yetenekler" },
  "nav.education": { en: "education", tr: "eğitim" },
  "nav.contact": { en: "contact", tr: "iletişim" },

  "hero.hello": { en: "Hi, I'm", tr: "Merhaba, ben" },
  "hero.summary": {
    en: "Computer Science student at Sabancı University working where LLM systems, information retrieval and full-stack development meet. Currently a Data Science Intern at Hepsiburada, building more reliable conversational AI and fairer search rankings.",
    tr: "Sabancı Üniversitesi'nde Bilgisayar Bilimi öğrencisiyim. LLM sistemleri, bilgi erişimi (retrieval) ve full-stack geliştirmenin kesiştiği noktada çalışıyorum. Şu anda Hepsiburada'da Veri Bilimi Stajyeri olarak daha güvenilir sohbet tabanlı yapay zekâ ve daha adil arama sıralamaları üzerine çalışıyorum.",
  },
  "hero.cta.projects": { en: "View projects", tr: "Projeleri gör" },
  "hero.cta.cv": { en: "View CV", tr: "CV'yi görüntüle" },
  "hero.cta.contact": { en: "Get in touch", tr: "İletişime geç" },
  "hero.roles": {
    en: ["Data Science Intern @ Hepsiburada", "CS @ Sabancı University", "LLM agents · RAG · Ranking", "Full-stack developer"],
    tr: ["Veri Bilimi Stajyeri @ Hepsiburada", "Bilgisayar Bilimi @ Sabancı Üniversitesi", "LLM ajanları · RAG · Sıralama", "Full-stack geliştirici"],
  },

  "stat.gpa": { en: "GPA", tr: "GNO" },
  "stat.projects": { en: "projects", tr: "proje" },
  "stat.internships": { en: "internships", tr: "staj" },
  "stat.honors": { en: "High Honor terms", tr: "dönem Yüksek Onur" },

  "about.title": { en: "about", tr: "hakkımda" },
  "about.comment": { en: "what I work on", tr: "neler üzerinde çalışıyorum" },
  "about.body": {
    en: "I like building systems where language models are useful <em>and</em> trustworthy: agents that call deterministic tools instead of guessing, retrieval pipelines that are measured rather than eyeballed, and rankings that reflect real relevance instead of position. On the other side of the stack I ship complete products — APIs, background workers, web and mobile frontends — so ideas don't stay in notebooks.",
    tr: "Dil modellerinin hem faydalı <em>hem de</em> güvenilir olduğu sistemler kurmayı seviyorum: tahmin etmek yerine deterministik araçlar çağıran ajanlar, göz kararı değil ölçülerek değerlendirilen retrieval pipeline'ları ve pozisyonu değil gerçek alakayı yansıtan sıralamalar. Stack'in diğer tarafında ise fikirlerin notebook'larda kalmaması için uçtan uca ürünler geliştiriyorum — API'ler, arka plan işçileri, web ve mobil arayüzler.",
  },
  "about.minors": {
    en: "Alongside CS, I'm minoring in <strong>Business Analytics</strong> and <strong>Mind &amp; Behavior</strong>, which shapes how I think about products, metrics and the people using them.",
    tr: "Bilgisayar Bilimi'nin yanında <strong>İş Analitiği</strong> ve <strong>Zihin ve Davranış</strong> yandal programlarına devam ediyorum; bu da ürünlere, metriklere ve onları kullanan insanlara bakışımı şekillendiriyor.",
  },

  "exp.title": { en: "experience", tr: "deneyim" },
  "exp.comment": { en: "where I've worked and taught", tr: "çalıştığım ve ders verdiğim yerler" },
  "exp.type.internship": { en: "Internship", tr: "Staj" },
  "exp.type.teaching": { en: "Teaching", tr: "Asistanlık" },

  "proj.title": { en: "projects", tr: "projeler" },
  "proj.comment": { en: "the detail that doesn't fit on a one-page CV", tr: "tek sayfalık CV'ye sığmayan detaylar" },
  "proj.filter.all": { en: "All", tr: "Tümü" },
  "proj.filter.ai": { en: "AI / ML", tr: "YZ / ML" },
  "proj.filter.fullstack": { en: "Full-Stack", tr: "Full-Stack" },
  "proj.filter.mobile": { en: "Mobile", tr: "Mobil" },
  "proj.more": { en: "Details", tr: "Detaylar" },
  "proj.less": { en: "Close", tr: "Kapat" },
  "proj.overview": { en: "Overview", tr: "Genel bakış" },
  "proj.did": { en: "What I built", tr: "Neler yaptım" },
  "proj.results": { en: "Results", tr: "Sonuçlar" },
  "proj.stack": { en: "Stack", tr: "Teknolojiler" },

  "skills.title": { en: "skills", tr: "yetenekler" },
  "skills.comment": { en: "tools I reach for", tr: "kullandığım araçlar" },

  "edu.title": { en: "education", tr: "eğitim" },
  "edu.comment": { en: "and the things around it", tr: "ve çevresindekiler" },
  "edu.certs": { en: "Certifications", tr: "Sertifikalar" },
  "edu.volunteer": { en: "Volunteering", tr: "Gönüllülük" },

  "contact.title": { en: "contact", tr: "iletişim" },
  "contact.comment": { en: "let's talk", tr: "konuşalım" },
  "contact.body": {
    en: "I'm open to new-grad roles, internships and research collaborations in ML engineering, LLM applications and data science. The fastest way to reach me is email or LinkedIn.",
    tr: "ML mühendisliği, LLM uygulamaları ve veri bilimi alanlarında yeni mezun pozisyonlarına, stajlara ve araştırma iş birliklerine açığım. Bana en hızlı e-posta veya LinkedIn üzerinden ulaşabilirsiniz.",
  },
  "contact.copy": { en: "copy", tr: "kopyala" },
  "contact.copied": { en: "copied!", tr: "kopyalandı!" },

  "footer.built": { en: "Built with plain HTML, CSS & JavaScript.", tr: "Saf HTML, CSS ve JavaScript ile yapıldı." },
};

const EXPERIENCE = [
  {
    org: "Hepsiburada",
    role: { en: "Data Science Intern", tr: "Veri Bilimi Stajyeri" },
    type: "internship",
    location: { en: "Istanbul, Turkey", tr: "İstanbul, Türkiye" },
    date: { en: "Nov 2025 – Present", tr: "Kas 2025 – Devam ediyor" },
    current: true,
    bullets: [
      {
        en: "Work on LLM-based chatbot systems, improving response diversity while keeping answers factually consistent and relevant across multi-turn conversations.",
        tr: "LLM tabanlı chatbot sistemleri üzerinde çalışıyorum; çok turlu konuşmalarda cevapların doğruluğunu ve alakasını korurken yanıt çeşitliliğini artırıyorum.",
      },
      {
        en: "Developed techniques to reduce hallucinations and topic drift in long-context chatbot interactions, improving conversational stability and coherence.",
        tr: "Uzun bağlamlı chatbot etkileşimlerinde halüsinasyonu ve konudan sapmayı (topic drift) azaltan teknikler geliştirerek konuşma kararlılığını ve tutarlılığını iyileştirdim.",
      },
      {
        en: "Ran experiments on query autocomplete ranking to correct position bias — from Inverse Propensity Weighting to Doubly Robust learning and a score-blending approach — for fairer, more relevant suggestions.",
        tr: "Sorgu otomatik tamamlama (query autocomplete) sıralamasında pozisyon yanlılığını düzeltmek için deneyler yürüttüm — Inverse Propensity Weighting'den Doubly Robust öğrenmeye ve skor harmanlama yaklaşımına kadar — daha adil ve alakalı öneriler elde ettim.",
      },
      {
        en: "Recently worked on an event migration, transitioning existing events to a new structure.",
        tr: "Son dönemde mevcut event'lerin yeni bir yapıya taşındığı bir event migration çalışmasında yer aldım.",
      },
      {
        en: "Pitched HepsiBuddy, an AI shopping-assistant concept, at the company-wide ideathon.",
        tr: "Şirket genelindeki ideathon'da yapay zekâ destekli alışveriş asistanı konsepti HepsiBuddy'yi sundum.",
      },
    ],
    tags: ["LLMs", "Python", "Learning to Rank", "Debiasing", "Event Migration"],
  },
  {
    org: "Albasoft Information Technologies",
    role: { en: "Full-Stack Developer Intern", tr: "Full-Stack Geliştirici Stajyeri" },
    type: "internship",
    location: { en: "Ankara, Turkey", tr: "Ankara, Türkiye" },
    date: { en: "Jun – Aug 2025", tr: "Haz – Ağu 2025" },
    bullets: [
      {
        en: "Developed a Hospital Information Management System in Laravel following the MVC architecture.",
        tr: "Laravel ile MVC mimarisine uygun bir Hastane Bilgi Yönetim Sistemi geliştirdim.",
      },
      {
        en: "Improved the user interface and responsiveness with Bootstrap and built interactive features with jQuery.",
        tr: "Bootstrap ile kullanıcı arayüzünü ve responsive yapıyı iyileştirdim, jQuery ile etkileşimli özellikler geliştirdim.",
      },
      {
        en: "Gained end-to-end full-stack experience on a real-world product.",
        tr: "Gerçek bir ürün üzerinde uçtan uca full-stack geliştirme deneyimi kazandım.",
      },
    ],
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "jQuery"],
  },
  {
    org: "Sabancı University",
    role: { en: "Data Structures Learning Assistant", tr: "Veri Yapıları Öğrenme Asistanı" },
    type: "teaching",
    location: { en: "Istanbul, Turkey", tr: "İstanbul, Türkiye" },
    date: { en: "Feb – Jun 2025", tr: "Şub – Haz 2025" },
    bullets: [
      {
        en: "Helped students understand and solve data structures problems with clear explanations, and held weekly office hours.",
        tr: "Öğrencilerin veri yapıları problemlerini anlamalarına ve çözmelerine net açıklamalarla yardımcı oldum, ofis saatleri düzenledim.",
      },
    ],
    tags: ["C++", "Data Structures"],
  },
  {
    org: "Sabancı University",
    role: { en: "Calculus-II Learning Assistant", tr: "Calculus-II Öğrenme Asistanı" },
    type: "teaching",
    location: { en: "Istanbul, Turkey", tr: "İstanbul, Türkiye" },
    date: { en: "Feb – Jun 2024", tr: "Şub – Haz 2024" },
    bullets: [
      {
        en: "Solved Calculus-II problems with freshman students and explained problem-solving techniques to strengthen their understanding.",
        tr: "Birinci sınıf öğrencileriyle Calculus-II problemleri çözdüm ve problem çözme tekniklerini açıklayarak konuyu daha iyi kavramalarına yardımcı oldum.",
      },
    ],
    tags: ["Mathematics", "Teaching"],
  },
  {
    org: "TÜBİTAK BİLGEM",
    role: { en: "Semester Break Intern", tr: "Dönem Arası Stajyer" },
    type: "internship",
    location: { en: "Istanbul, Turkey", tr: "İstanbul, Türkiye" },
    date: { en: "Jan – Feb 2024", tr: "Oca – Şub 2024" },
    bullets: [
      {
        en: "Worked with the technologies and systems used in radio signal applications.",
        tr: "Radyo sinyal uygulamalarında kullanılan teknolojiler ve sistemlerle çalıştım.",
      },
      {
        en: "Solved data structures and algorithms tasks in C++.",
        tr: "C++ ile veri yapıları ve algoritma görevleri çözdüm.",
      },
      {
        en: "Gained hands-on hardware design experience with Verilog, applying problem solving across software and hardware.",
        tr: "Verilog ile uygulamalı donanım tasarımı deneyimi kazandım; problem çözme becerilerimi hem yazılımda hem donanımda kullandım.",
      },
    ],
    tags: ["C++", "Verilog", "Algorithms"],
  },
];

const PROJECTS = [
  {
    id: "ens492-epistemic-agent",
    title: { en: "Know First, Then Act: an LLM Agent with an Epistemic Critic", tr: "Önce Bil, Sonra Yap: Epistemik Eleştirmenli LLM Ajanı" },
    subtitle: { en: "ENS491–492 graduation project · subgoal generation & active information acquisition", tr: "ENS491–492 bitirme projesi · alt hedef üretimi ve aktif bilgi edinimi" },
    date: { en: "Feb 2026 – Present", tr: "Şub 2026 – Devam ediyor" },
    cats: ["ai"],
    context: { en: "Graduation project · 4-person team", tr: "Bitirme projesi · 4 kişilik ekip" },
    featured: true,
    summary: {
      en: "An embodied LLM agent in the AI2-THOR simulator that splits household tasks into subgoals and asks “do I know enough?” before every step — searching for missing objects instead of failing first.",
      tr: "AI2-THOR simülatöründe ev görevlerini alt hedeflere bölen ve her adımdan önce “yeterince biliyor muyum?” diye soran bir LLM ajanı — önce başarısız olmak yerine eksik nesneleri arıyor.",
    },
    overview: {
      en: "Ask an agent to slice an apple and it has to realise, unprompted, that it needs a knife, that it hasn't seen one, and that knives usually live in drawers. Typical LLM agents act first and discover missing information only when an action fails. Our agent adds an Epistemic Critic that checks, before acting, whether the knowledge a step needs is actually in memory — and if not, picks an information-gathering action (look around, search the likeliest container, explore) guided by a commonsense belief about where objects are kept. The language model decides what to do; deterministic code decides how. Supervised by Zeki Doruk Erden at Sabancı University.",
      tr: "Bir ajandan elma dilimlemesini istediğinizde, kimse söylemeden bir bıçağa ihtiyacı olduğunu, henüz bıçak görmediğini ve bıçakların genelde çekmecelerde durduğunu fark etmesi gerekir. Tipik LLM ajanları önce hareket eder ve eksik bilgiyi ancak bir eylem başarısız olunca fark eder. Bizim ajanımız, harekete geçmeden önce adımın gerektirdiği bilginin gerçekten hafızada olup olmadığını kontrol eden bir Epistemik Eleştirmen (Epistemic Critic) ekliyor; bilgi yoksa, nesnelerin nerede tutulduğuna dair sağduyu tabanlı bir inançla yönlendirilen bir bilgi toplama eylemi seçiyor (etrafa bakmak, en olası dolabı aramak, keşfetmek). Ne yapılacağına dil modeli, nasıl yapılacağına deterministik kod karar veriyor. Sabancı Üniversitesi'nde Zeki Doruk Erden danışmanlığında.",
    },
    did: [
      {
        en: "Built (as a team) a modular agent loop — plan → assess → act → verify → recover — where only the planner, the critic and the location belief call the LLM; navigation, manipulation and verification are deterministic.",
        tr: "Ekip olarak modüler bir ajan döngüsü kurduk — planla → değerlendir → uygula → doğrula → toparla — burada LLM'i yalnızca planlayıcı, eleştirmen ve konum inancı çağırıyor; navigasyon, nesne etkileşimi ve doğrulama deterministik.",
      },
      {
        en: "Made missing information measurable: a scenario builder hides the objects a task needs at three levels (visible, out of view, inside closed containers) across 10 household tasks, and every critic decision is graded against the simulator's ground truth.",
        tr: "Eksik bilgiyi ölçülebilir hale getirdik: bir senaryo üreticisi, 10 ev görevinde gereken nesneleri üç seviyede (görünür, görüş dışında, kapalı dolapların içinde) saklıyor ve eleştirmenin her kararı simülatörün gerçek verisine göre puanlanıyor.",
      },
      {
        en: "Ran the first real-model pilot with GPT-4o-mini against a single-LLM ReAct baseline and a no-critic ablation, then read the traces before trusting the numbers.",
        tr: "GPT-4o-mini ile ilk gerçek model pilotunu, tek LLM'li ReAct baseline'ına ve eleştirmensiz bir ablation'a karşı çalıştırdım; sayılara güvenmeden önce trace'leri okudum.",
      },
      {
        en: "Found that the early 56-point success gap came from harness bugs, not reasoning: fixed ReAct's skill parsing and retry feedback, and stopped the no-critic agent looping on a step only the critic can complete — making the comparison fair.",
        tr: "İlk baştaki 56 puanlık başarı farkının akıl yürütmeden değil, test düzeneğindeki hatalardan geldiğini buldum: ReAct'in skill ayrıştırmasını ve tekrar deneme geri bildirimini düzelttim, eleştirmensiz ajanın yalnızca eleştirmenin tamamlayabileceği bir adımda döngüye girmesini engelledim — karşılaştırmayı adil hale getirdim.",
      },
      {
        en: "Fixed the belief update so searched containers are eliminated and the remaining probability is renormalised, added budget-aware replanning, and covered the changes with new unit tests.",
        tr: "İnanç güncellemesini düzelttim: aranan dolaplar eleniyor ve kalan olasılık yeniden normalize ediliyor; bütçe farkındalıklı yeniden planlama ekledim ve değişiklikleri yeni birim testleriyle kapsadım.",
      },
      {
        en: "Presented the project's background, motivation, objectives and testbed at the ENS492 progress presentation.",
        tr: "ENS492 ara sunumunda projenin arka planını, motivasyonunu, hedeflerini ve test ortamını sundum.",
      },
    ],
    metrics: [
      { value: "18/18", label: { en: "pilot episodes solved", tr: "başarılı pilot bölüm" } },
      { value: "98%", label: { en: "real knowledge gaps caught", tr: "yakalanan gerçek bilgi eksikliği" } },
      { value: "0", label: { en: "false alarms in 145 critic decisions", tr: "145 eleştirmen kararında yanlış alarm" } },
      { value: "~½", label: { en: "the skill calls of the baselines", tr: "baseline'lara göre skill çağrısı" } },
    ],
    results: {
      en: "On the pilot (3 tasks × 3 hiding levels × 2 scenes, paired), success is close to the baselines once their bugs are fixed — but our agent needs about half the skill calls and almost never acts before it has the information it needs (0.06 premature actions per episode vs 0.39–1.33). Next: a 540-episode main study, harder scenarios and camera-based vision.",
      tr: "Pilotta (3 görev × 3 saklama seviyesi × 2 sahne, eşleştirilmiş) baseline'ların hataları düzeltildikten sonra başarı oranları birbirine yakın — ancak ajanımız yaklaşık yarı sayıda skill çağrısına ihtiyaç duyuyor ve gereken bilgiye sahip olmadan neredeyse hiç harekete geçmiyor (bölüm başına 0,06 erken eylem, baseline'larda 0,39–1,33). Sırada: 540 bölümlük ana çalışma, daha zor senaryolar ve kamera tabanlı görü.",
    },
    stack: ["Python", "AI2-THOR", "GPT-4o-mini", "LLM agents", "ReAct baseline", "pytest"],
    links: [],
  },
  {
    id: "suschedule-r",
    title: "SuSchedule-r",
    subtitle: { en: "LLM-based course-planning agent", tr: "LLM tabanlı ders planlama ajanı" },
    date: { en: "May – Jun 2026", tr: "May – Haz 2026" },
    cats: ["ai"],
    context: { en: "3-person team", tr: "3 kişilik ekip" },
    featured: true,
    summary: {
      en: "A grounded, tool-using agent for Sabancı University course planning: the LLM handles language, deterministic tools own the facts.",
      tr: "Sabancı Üniversitesi için grounded, araç kullanan bir ders planlama ajanı: dili LLM yönetir, gerçekleri deterministik araçlar.",
    },
    overview: {
      en: "Course planning is full of hard constraints — prerequisites, degree requirements, time conflicts — exactly where LLMs on their own tend to hallucinate. SuSchedule-r splits responsibilities: a GPT-4o ReAct agent handles conversation and reasoning, while deterministic tools are the single source of truth for every factual constraint.",
      tr: "Ders planlama katı kısıtlarla doludur — ön koşullar, mezuniyet gereksinimleri, saat çakışmaları — ve tek başına LLM'lerin en çok halüsinasyon gördüğü yer de burasıdır. SuSchedule-r sorumlulukları ayırır: GPT-4o tabanlı bir ReAct ajanı konuşmayı ve akıl yürütmeyi yönetirken, her olgusal kısıt için tek doğruluk kaynağı deterministik araçlardır.",
    },
    did: [
      {
        en: "Built a GPT-4o ReAct agent where the LLM handles language and deterministic tools own factual constraints (prerequisites, requirements, conflicts).",
        tr: "Dili LLM'in, olgusal kısıtları (ön koşullar, gereksinimler, çakışmalar) ise deterministik araçların yönettiği GPT-4o tabanlı bir ReAct ajanı geliştirdik.",
      },
      {
        en: "Designed a two-stage RAG system with BAAI/bge-base-en-v1.5 embeddings and a FAISS index over 817 courses.",
        tr: "817 ders üzerinde BAAI/bge-base-en-v1.5 embedding'leri ve FAISS indeksiyle iki aşamalı bir RAG sistemi tasarladık.",
      },
      {
        en: "Built a 22-tool toolbox grouped by responsibility: eligibility, requirements, catalog search and timetabling.",
        tr: "Sorumluluğa göre gruplanmış 22 araçlık bir araç seti oluşturduk: uygunluk, gereksinimler, katalog arama ve ders programı.",
      },
      {
        en: "Evaluated the system across four axes — retrieval, end-to-end grounding, conflict detection and degree-requirement matching.",
        tr: "Sistemi dört eksende değerlendirdik — retrieval, uçtan uca grounding, çakışma tespiti ve mezuniyet gereksinimi eşleştirme.",
      },
    ],
    metrics: [
      { value: "0.977", label: { en: "Hit@5 retrieval", tr: "Hit@5 retrieval" } },
      { value: "91.7%", label: { en: "end-to-end grounding", tr: "uçtan uca grounding" } },
      { value: "100%", label: { en: "conflict detection", tr: "çakışma tespiti" } },
      { value: "22", label: { en: "tools", tr: "araç" } },
    ],
    results: {
      en: "Perfect conflict detection and near-exact degree-requirement matching, alongside strong retrieval and grounding scores.",
      tr: "Güçlü retrieval ve grounding skorlarının yanında kusursuz çakışma tespiti ve neredeyse birebir mezuniyet gereksinimi eşleştirmesi.",
    },
    stack: ["GPT-4o", "ReAct", "RAG", "FAISS", "bge-base-en-v1.5", "Python"],
    links: [],
  },
  {
    id: "qac-position-bias",
    title: { en: "Eliminating Position Bias in Query Autocomplete", tr: "Sorgu Otomatik Tamamlamada Pozisyon Yanlılığını Giderme" },
    subtitle: { en: "Search-ranking fairness at Hepsiburada", tr: "Hepsiburada'da arama sıralaması adilliği" },
    date: { en: "Apr – May 2026", tr: "Nis – May 2026" },
    cats: ["ai"],
    context: { en: "Hepsiburada", tr: "Hepsiburada" },
    featured: true,
    summary: {
      en: "Debiasing click data so the autocomplete ranker learns true relevance rather than position popularity.",
      tr: "Otomatik tamamlama sıralayıcısının pozisyon popülerliğini değil gerçek alakayı öğrenmesi için tıklama verisindeki yanlılığı gidermek.",
    },
    overview: {
      en: "In a ranked suggestion list, items at the top get clicked more simply because they are at the top. A model trained on raw clicks then learns position popularity instead of relevance — and keeps reinforcing it. This project measured that effect on Hepsiburada's query autocomplete and corrected for it step by step.",
      tr: "Sıralı bir öneri listesinde üstteki öğeler, sırf üstte oldukları için daha çok tıklanır. Ham tıklamalarla eğitilen bir model de alaka yerine pozisyon popülerliğini öğrenir ve bunu sürekli pekiştirir. Bu projede Hepsiburada'nın sorgu otomatik tamamlamasındaki bu etkiyi ölçtüm ve adım adım düzelttim.",
    },
    did: [
      {
        en: "Analyzed click-through behavior by ranking position and quantified a strong position bias in autocomplete interactions.",
        tr: "Tıklama davranışını sıralama pozisyonuna göre analiz ettim ve otomatik tamamlama etkileşimlerindeki güçlü pozisyon yanlılığını sayısallaştırdım.",
      },
      {
        en: "Implemented Inverse Propensity Weighting (IPW) for stable exposure-bias correction.",
        tr: "Kararlı bir görünürlük (exposure) yanlılığı düzeltmesi için Inverse Propensity Weighting (IPW) uyguladım.",
      },
      {
        en: "Moved on to Doubly Robust (DR) learning and identified an over-correction failure mode in which DR excessively suppressed high-CTR keyword-type results.",
        tr: "Ardından Doubly Robust (DR) öğrenmeye geçtim ve DR'ın yüksek CTR'lı anahtar kelime tipindeki sonuçları aşırı bastırdığı bir aşırı düzeltme (over-correction) hatası tespit ettim.",
      },
      {
        en: "Designed a score-blending approach combining baseline and DR scores — preserving keyword relevance while promoting underexposed item types.",
        tr: "Baseline ve DR skorlarını birleştiren bir skor harmanlama yaklaşımı tasarladım — anahtar kelime alakasını korurken az gösterilen öğe tiplerini öne çıkardım.",
      },
    ],
    results: {
      en: "A fairer, more interpretable ranking that balances relevance with exposure. Company data is confidential, so results are described qualitatively.",
      tr: "Alaka ile görünürlüğü dengeleyen, daha adil ve yorumlanabilir bir sıralama. Şirket verileri gizli olduğundan sonuçlar niteliksel olarak aktarılmıştır.",
    },
    stack: ["Python", "Learning to Rank", "IPW", "Doubly Robust", "Counterfactual Learning"],
    links: [],
  },
  {
    id: "hepsibuddy",
    title: "HepsiBuddy",
    subtitle: { en: "AI-powered shopping assistant concept", tr: "Yapay zekâ destekli alışveriş asistanı konsepti" },
    date: { en: "Apr – May 2026", tr: "Nis – May 2026" },
    cats: ["ai"],
    context: { en: "Hepsiburada Ideathon", tr: "Hepsiburada Ideathon" },
    summary: {
      en: "A conversational shopping-assistant concept pitched at Hepsiburada's company-wide ideathon — prototype, business case and pitch.",
      tr: "Hepsiburada'nın şirket geneli ideathon'unda sunulan sohbet tabanlı alışveriş asistanı konsepti — prototip, iş modeli ve sunum.",
    },
    overview: {
      en: "HepsiBuddy imagines a conversational assistant that guides customers through shopping in natural language. The goal was not just the idea, but a complete pitch: a working prototype people could click through, a business case and a clear position against existing assistants.",
      tr: "HepsiBuddy, müşterilere alışveriş sürecinde doğal dilde rehberlik eden sohbet tabanlı bir asistan fikri. Amaç yalnızca fikir değil, eksiksiz bir sunumdu: tıklanarak denenebilen çalışan bir prototip, bir iş modeli ve mevcut asistanlara karşı net bir konumlandırma.",
    },
    did: [
      {
        en: "Designed the AI shopping-assistant concept for the company-wide ideathon.",
        tr: "Şirket geneli ideathon için yapay zekâ destekli alışveriş asistanı konseptini tasarladım.",
      },
      {
        en: "Built an interactive HTML prototype with a custom mascot to demonstrate the conversational shopping flow.",
        tr: "Sohbet tabanlı alışveriş akışını göstermek için özel bir maskota sahip etkileşimli bir HTML prototipi geliştirdim.",
      },
      {
        en: "Produced a 14–15 slide pitch deck with revenue modeling and competitive positioning against Amazon Rufus and Allegro's assistant.",
        tr: "Gelir modellemesi ve Amazon Rufus ile Allegro'nun asistanına karşı rekabet konumlandırması içeren 14–15 slaytlık bir sunum hazırladım.",
      },
      {
        en: "Wrote the pitch scripts and prepared for the Q&A.",
        tr: "Sunum metinlerini yazdım ve soru-cevap hazırlığını yaptım.",
      },
    ],
    stack: ["HTML", "CSS", "JavaScript", "Product Design", "Revenue Modeling"],
    links: [],
  },
  {
    id: "content-viral",
    title: "Content Viral",
    subtitle: { en: "YouTube-to-TikTok automation pipeline", tr: "YouTube'dan TikTok'a otomasyon pipeline'ı" },
    date: { en: "Mar – Apr 2026", tr: "Mar – Nis 2026" },
    cats: ["fullstack", "ai"],
    context: { en: "Personal project", tr: "Kişisel proje" },
    featured: true,
    summary: {
      en: "Discovers trending YouTube videos and automatically turns them into vertical, captioned clips ready for TikTok and Reels.",
      tr: "Trend YouTube videolarını bulur ve otomatik olarak TikTok ve Reels'e hazır, altyazılı dikey kliplere dönüştürür.",
    },
    overview: {
      en: "Repurposing long-form video for short-form platforms is slow, manual work. Content Viral automates the whole chain — discovery, transcription, AI-driven segmentation, vertical rendering and captioning — while keeping a human in the loop through a review and edit interface.",
      tr: "Uzun videoları kısa video platformları için yeniden kurgulamak yavaş ve manuel bir iş. Content Viral tüm zinciri otomatikleştirir — keşif, transkripsiyon, yapay zekâ ile bölümleme, dikey render ve altyazı — ve bir inceleme/düzenleme arayüzüyle son kararı insana bırakır.",
    },
    did: [
      {
        en: "Built an end-to-end pipeline with Next.js 14, FastAPI, Celery/Redis and SQLite that discovers trending YouTube videos and converts them into vertical clips.",
        tr: "Next.js 14, FastAPI, Celery/Redis ve SQLite ile trend YouTube videolarını bulup dikey kliplere dönüştüren uçtan uca bir pipeline geliştirdim.",
      },
      {
        en: "Processed video with yt-dlp and ffmpeg, using OpenAI Whisper + GPT for clip segmentation and AI-generated captions and hashtags.",
        tr: "Videoları yt-dlp ve ffmpeg ile işledim; klip bölümleme ile yapay zekâ üretimi altyazı ve hashtag'ler için OpenAI Whisper + GPT kullandım.",
      },
      {
        en: "Added a movie-split mode and a Creative-Commons-filtered discovery page.",
        tr: "Film bölme modu ve Creative Commons filtreli bir keşif sayfası ekledim.",
      },
      {
        en: "Built a clip review/edit interface so every clip can be checked before publishing.",
        tr: "Her klibin yayından önce kontrol edilebilmesi için bir klip inceleme/düzenleme arayüzü geliştirdim.",
      },
    ],
    stack: ["Next.js 14", "FastAPI", "Celery", "Redis", "SQLite", "yt-dlp", "ffmpeg", "Whisper", "GPT"],
    links: [],
  },
  {
    id: "subsai",
    title: "SubsAI",
    subtitle: { en: "AI-powered subscription tracking platform", tr: "Yapay zekâ destekli abonelik takip platformu" },
    date: { en: "Feb – Mar 2026", tr: "Şub – Mar 2026" },
    cats: ["fullstack", "ai"],
    context: { en: "Personal project", tr: "Kişisel proje" },
    summary: {
      en: "A personal-finance app that detects, categorizes and tracks recurring subscriptions straight from bank statements.",
      tr: "Tekrarlayan abonelikleri doğrudan banka ekstrelerinden tespit eden, kategorize eden ve takip eden bir kişisel finans uygulaması.",
    },
    overview: {
      en: "Subscriptions are easy to forget and hard to track by hand. SubsAI reads bank statement data, lets an LLM find and organize the recurring charges, and turns them into renewal reminders, trends and cost breakdowns.",
      tr: "Abonelikler kolayca unutulur ve elle takip etmesi zordur. SubsAI banka ekstresi verisini okur, tekrarlayan ödemeleri bir LLM'e buldurup düzenletir ve bunları yenileme hatırlatmalarına, trendlere ve maliyet dökümlerine dönüştürür.",
    },
    did: [
      {
        en: "Built a full-stack application with Next.js 14, FastAPI and PostgreSQL for persistent storage.",
        tr: "Next.js 14, FastAPI ve kalıcı veri saklama için PostgreSQL ile full-stack bir uygulama geliştirdim.",
      },
      {
        en: "Integrated the OpenAI API to automatically detect, categorize and summarize recurring subscriptions, reducing manual entry.",
        tr: "Tekrarlayan abonelikleri otomatik olarak tespit etmek, kategorize etmek ve özetlemek için OpenAI API'yi entegre ederek manuel veri girişini azalttım.",
      },
      {
        en: "Designed a RESTful API connecting the backend and frontend, covering authentication, subscription CRUD and billing-cycle logic.",
        tr: "Backend ile frontend'i bağlayan; kimlik doğrulama, abonelik CRUD işlemleri ve fatura döngüsü mantığını kapsayan RESTful bir API tasarladım.",
      },
      {
        en: "Implemented renewal-date tracking, spending trends and cost breakdowns for actionable insights into recurring expenses.",
        tr: "Tekrarlayan harcamalar hakkında aksiyon alınabilir içgörüler için yenileme tarihi takibi, harcama trendleri ve maliyet dökümleri geliştirdim.",
      },
    ],
    stack: ["Next.js 14", "FastAPI", "PostgreSQL", "OpenAI API", "REST"],
    links: [],
  },
  {
    id: "movierag",
    title: "MovieRAG",
    subtitle: { en: "Retrieval-augmented movie question answering", tr: "Retrieval destekli film soru-cevap sistemi" },
    date: { en: "Jan – Feb 2026", tr: "Oca – Şub 2026" },
    cats: ["ai"],
    context: { en: "Course project", tr: "Ders projesi" },
    summary: {
      en: "A two-stage RAG pipeline over the TMDB 5000 dataset that answers movie questions grounded in retrieved context.",
      tr: "TMDB 5000 veri seti üzerinde, cevapları getirilen bağlama dayandıran iki aşamalı bir RAG pipeline'ı.",
    },
    overview: {
      en: "MovieRAG answers natural-language questions about movies using only what it retrieves. A fast bi-encoder narrows the candidates, a cross-encoder reranks them, and a small instruction-tuned LLM writes the answer. Most of the work went into understanding where and why the pipeline fails.",
      tr: "MovieRAG, filmlerle ilgili doğal dildeki soruları yalnızca getirdiği bilgilere dayanarak cevaplar. Hızlı bir bi-encoder adayları daraltır, bir cross-encoder bunları yeniden sıralar ve küçük, instruction-tuned bir LLM cevabı yazar. Emeğin büyük kısmı pipeline'ın nerede ve neden hata yaptığını anlamaya gitti.",
    },
    did: [
      {
        en: "Built a RAG pipeline over the TMDB 5000 movie dataset for accurate, context-grounded question answering.",
        tr: "Doğru ve bağlama dayalı soru-cevap için TMDB 5000 film veri seti üzerinde bir RAG pipeline'ı kurdum.",
      },
      {
        en: "Implemented two-stage retrieval: a BAAI bi-encoder for candidate retrieval and a cross-encoder reranker to refine relevance.",
        tr: "İki aşamalı retrieval uyguladım: aday getirme için BAAI bi-encoder, alakayı iyileştirmek için cross-encoder reranker.",
      },
      {
        en: "Integrated Qwen2.5-3B-Instruct as the generator, producing natural-language answers grounded in retrieved context.",
        tr: "Üretici model olarak Qwen2.5-3B-Instruct'ı entegre ettim; getirilen bağlama dayalı doğal dilde cevaplar üretti.",
      },
      {
        en: "Ran a systematic failure-case analysis (FC1–FC5) and ablation studies to debug retrieval and generation errors.",
        tr: "Retrieval ve üretim hatalarını ayıklamak için sistematik bir hata vakası analizi (FC1–FC5) ve ablation çalışmaları yaptım.",
      },
    ],
    stack: ["Python", "BAAI bi-encoder", "Cross-encoder", "Qwen2.5-3B-Instruct", "TMDB 5000"],
    links: [],
  },
  {
    id: "song2vec",
    title: "Song2Vec",
    subtitle: { en: "Music embeddings & recommendation", tr: "Müzik embedding'leri ve öneri sistemi" },
    date: { en: "Nov – Dec 2025", tr: "Kas – Ara 2025" },
    cats: ["ai"],
    context: { en: "Course project", tr: "Ders projesi" },
    summary: {
      en: "Word2Vec trained on playlists: songs that appear together get similar vectors, powering a recommender with cold-start handling.",
      tr: "Playlist'ler üzerinde eğitilmiş Word2Vec: birlikte geçen şarkılar benzer vektörler alır ve cold-start desteği olan bir öneri sistemini besler.",
    },
    overview: {
      en: "If a playlist is a sentence, a song is a word. Song2Vec trains skip-gram embeddings on large-scale playlist data, then checks whether the learned space actually captures musical similarity — quantitatively, visually and through song “algebra”.",
      tr: "Bir playlist bir cümleyse, şarkı da bir kelimedir. Song2Vec büyük ölçekli playlist verisi üzerinde skip-gram embedding'leri eğitir ve öğrenilen uzayın gerçekten müzikal benzerliği yakalayıp yakalamadığını sayısal olarak, görsel olarak ve şarkı “cebiri” ile test eder.",
    },
    did: [
      {
        en: "Trained skip-gram Word2Vec embeddings on large-scale playlist data, with a preprocessing pipeline and vocabulary/frequency analysis.",
        tr: "Büyük ölçekli playlist verisi üzerinde skip-gram Word2Vec embedding'leri eğittim; bir ön işleme pipeline'ı kurdum ve kelime dağarcığı/frekans dağılımlarını analiz ettim.",
      },
      {
        en: "Ran a hyperparameter grid search, selecting the best configuration by Hit Rate@k and NDCG@k.",
        tr: "Hiperparametre grid search'ü yaptım ve en iyi konfigürasyonu Hit Rate@k ve NDCG@k ile seçtim.",
      },
      {
        en: "Validated the embedding space with song-algebra experiments and t-SNE visualization.",
        tr: "Embedding uzayını şarkı cebiri deneyleri ve t-SNE görselleştirmesiyle doğruladım.",
      },
      {
        en: "Built a recommendation interface with cold-start handling.",
        tr: "Cold-start durumunu ele alan bir öneri arayüzü geliştirdim.",
      },
    ],
    results: {
      en: "A structured failure analysis surfaced four error modes: artist over-representation, cold-start failures, popularity bias and genre drift.",
      tr: "Yapılandırılmış hata analizi dört hata modu ortaya çıkardı: sanatçının aşırı temsili, cold-start hataları, popülerlik yanlılığı ve tür kayması (genre drift).",
    },
    stack: ["Python", "Word2Vec (skip-gram)", "t-SNE", "Hit Rate@k", "NDCG@k"],
    links: [],
  },
  {
    id: "smile-cnn",
    title: { en: "CNN Smile Detection", tr: "CNN ile Gülümseme Tespiti" },
    subtitle: { en: "Classifying smiles in celebrity face images", tr: "Ünlü yüz görsellerinde gülümseme sınıflandırma" },
    date: { en: "Oct – Nov 2025", tr: "Eki – Kas 2025" },
    cats: ["ai"],
    context: { en: "Machine learning project", tr: "Makine öğrenmesi projesi" },
    summary: {
      en: "A convolutional neural network that classifies smiling vs. non-smiling faces, from preprocessing to error analysis.",
      tr: "Gülümseyen ve gülümsemeyen yüzleri sınıflandıran, ön işlemeden hata analizine kadar uçtan uca bir evrişimli sinir ağı.",
    },
    overview: {
      en: "A classic computer-vision task done end to end: preparing a face-image dataset, designing and tuning CNN architectures, and looking closely at the images the model gets wrong.",
      tr: "Uçtan uca ele alınmış klasik bir bilgisayarlı görü problemi: yüz görseli veri setini hazırlamak, CNN mimarilerini tasarlayıp ayarlamak ve modelin yanlış bildiği görsellere yakından bakmak.",
    },
    did: [
      {
        en: "Developed a CNN to classify smiling vs. non-smiling facial expressions in celebrity face images.",
        tr: "Ünlü yüz görsellerinde gülümseyen ve gülümsemeyen yüz ifadelerini sınıflandıran bir CNN geliştirdim.",
      },
      {
        en: "Preprocessed and normalized the dataset: resizing, grayscale/RGB handling and train–validation splitting.",
        tr: "Veri setini ön işledim ve normalize ettim: yeniden boyutlandırma, gri tonlama/RGB işleme ve eğitim–doğrulama ayrımı.",
      },
      {
        en: "Designed and trained architectures with convolutional, pooling and fully connected layers, tuning hyperparameters for performance.",
        tr: "Evrişim, pooling ve tam bağlantılı katmanlardan oluşan mimariler tasarlayıp eğittim; performans için hiperparametre ayarı yaptım.",
      },
      {
        en: "Evaluated with accuracy and loss metrics and analyzed misclassifications.",
        tr: "Modeli doğruluk ve kayıp metrikleriyle değerlendirdim, yanlış sınıflandırmaları analiz ettim.",
      },
    ],
    stack: ["Python", "CNN", "Computer Vision", "Image Preprocessing"],
    links: [],
  },
  {
    id: "hims",
    title: { en: "Hospital Information Management System", tr: "Hastane Bilgi Yönetim Sistemi" },
    subtitle: { en: "Role-based hospital management platform", tr: "Rol tabanlı hastane yönetim platformu" },
    date: { en: "Jun – Sep 2025", tr: "Haz – Eyl 2025" },
    cats: ["fullstack"],
    context: { en: "Albasoft internship", tr: "Albasoft stajı" },
    summary: {
      en: "A full-stack, role-based platform for appointments, patient records, doctor approvals and medication tracking.",
      tr: "Randevu, hasta kayıtları, doktor onayları ve ilaç takibi için full-stack, rol tabanlı bir platform.",
    },
    overview: {
      en: "Built during my internship at Albasoft: a hospital platform where admins, doctors and patients each see and do different things, so access control and approval flows sit at the center of the design.",
      tr: "Albasoft stajım sırasında geliştirildi: yöneticilerin, doktorların ve hastaların her birinin farklı şeyler gördüğü ve yaptığı bir hastane platformu; bu yüzden erişim kontrolü ve onay akışları tasarımın merkezinde.",
    },
    did: [
      {
        en: "Developed core modules — appointment scheduling, patient records, doctor approval and medication tracking — with Laravel, MySQL, Bootstrap and jQuery.",
        tr: "Laravel, MySQL, Bootstrap ve jQuery ile temel modülleri geliştirdim — randevu planlama, hasta kayıtları, doktor onayı ve ilaç takibi.",
      },
      {
        en: "Applied MVC architecture, middleware-based access control and secure user authentication.",
        tr: "MVC mimarisi, middleware tabanlı erişim kontrolü ve güvenli kullanıcı kimlik doğrulaması uyguladım.",
      },
      {
        en: "Built the admin approval flow, dynamic records and scheduling features for role-specific users.",
        tr: "Role özel kullanıcılar için yönetici onay akışını, dinamik kayıtları ve planlama özelliklerini geliştirdim.",
      },
    ],
    stack: ["Laravel", "MySQL", "Bootstrap", "jQuery", "MVC"],
    links: [],
  },
  {
    id: "ecommerce",
    title: { en: "Digital E-commerce Website", tr: "Dijital E-ticaret Sitesi" },
    subtitle: { en: "Full-stack online clothing store", tr: "Full-stack online giyim mağazası" },
    date: { en: "Feb – May 2025", tr: "Şub – May 2025" },
    cats: ["fullstack"],
    context: { en: "Team project", tr: "Ekip projesi" },
    summary: {
      en: "A complete clothing store built with React and Node.js/Express on MongoDB, with authentication and role-based access.",
      tr: "React ve MongoDB üzerinde Node.js/Express ile geliştirilmiş, kimlik doğrulama ve rol tabanlı erişime sahip eksiksiz bir giyim mağazası.",
    },
    overview: {
      en: "A team-built online store covering the whole shopping flow — catalog, cart and orders — with separate experiences for customers and admins.",
      tr: "Ekip olarak geliştirdiğimiz, tüm alışveriş akışını — katalog, sepet ve siparişler — kapsayan ve müşteriler ile yöneticiler için ayrı deneyimler sunan bir online mağaza.",
    },
    did: [
      {
        en: "Built a fully functional clothing e-commerce site with a React frontend and a Node.js + Express backend.",
        tr: "React frontend ve Node.js + Express backend ile tamamen çalışan bir giyim e-ticaret sitesi geliştirdik.",
      },
      {
        en: "Modeled product, user, cart and order data in MongoDB with Mongoose schemas.",
        tr: "Ürün, kullanıcı, sepet ve sipariş verilerini Mongoose şemalarıyla MongoDB'de modelledik.",
      },
      {
        en: "Implemented user authentication and role-based access control (admin, customer).",
        tr: "Kullanıcı kimlik doğrulaması ve rol tabanlı erişim kontrolü (yönetici, müşteri) uyguladık.",
      },
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
    links: [],
  },
  {
    id: "sabanci-sepeti",
    title: "Sabancı Sepeti",
    subtitle: { en: "Cross-platform food ordering & delivery app", tr: "Çapraz platform yemek sipariş ve teslimat uygulaması" },
    date: { en: "Feb – May 2025", tr: "Şub – May 2025" },
    cats: ["mobile"],
    context: { en: "Mobile app project", tr: "Mobil uygulama projesi" },
    summary: {
      en: "A Flutter food-ordering app with Firebase authentication, real-time Firestore data and a Figma-designed UI.",
      tr: "Firebase kimlik doğrulaması, gerçek zamanlı Firestore verisi ve Figma ile tasarlanmış arayüze sahip bir Flutter yemek sipariş uygulaması.",
    },
    overview: {
      en: "A campus food ordering and delivery app designed in Figma and built in Flutter, so one codebase runs on both iOS and Android.",
      tr: "Figma'da tasarlanıp Flutter ile geliştirilen, tek kod tabanıyla hem iOS hem Android'de çalışan bir kampüs yemek sipariş ve teslimat uygulaması.",
    },
    did: [
      {
        en: "Built the app in Flutter and Dart, using Firebase Authentication for secure login and registration.",
        tr: "Uygulamayı Flutter ve Dart ile geliştirdim; güvenli giriş ve kayıt için Firebase Authentication kullandım.",
      },
      {
        en: "Connected to Cloud Firestore for real-time data handling.",
        tr: "Gerçek zamanlı veri yönetimi için Cloud Firestore'a bağladım.",
      },
      {
        en: "Managed state with the Provider package and designed the UI/UX in Figma for a clean, modern look.",
        tr: "State yönetimini Provider paketiyle yaptım; sade ve modern bir görünüm için UI/UX'i Figma'da tasarladım.",
      },
      {
        en: "Implemented form validation, navigation and responsive layouts.",
        tr: "Form doğrulama, navigasyon ve responsive yerleşimler geliştirdim.",
      },
    ],
    stack: ["Flutter", "Dart", "Firebase Auth", "Firestore", "Provider", "Figma"],
    links: [],
  },
];

const SKILLS = [
  {
    group: { en: "Languages", tr: "Programlama Dilleri" },
    items: ["C++ (advanced)", "Python", "JavaScript", "SQL", "Dart", "Verilog", "HTML", "CSS"],
  },
  {
    group: { en: "AI / ML", tr: "YZ / ML" },
    items: ["LLM agents (ReAct)", "RAG", "FAISS", "Sentence embeddings", "Cross-encoder reranking", "Learning to Rank", "IPW / Doubly Robust", "Word2Vec", "CNNs", "OpenAI API", "Whisper", "Qwen"],
  },
  {
    group: { en: "Web & Backend", tr: "Web ve Backend" },
    items: ["React", "Next.js", "Node.js", "Express", "FastAPI", "Laravel", "REST APIs", "Celery", "Bootstrap", "jQuery"],
  },
  {
    group: { en: "Data & Mobile", tr: "Veri ve Mobil" },
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis", "Firebase", "Flutter", "ffmpeg", "Figma"],
  },
];

const SPOKEN = [
  { lang: { en: "Turkish", tr: "Türkçe" }, level: { en: "Native", tr: "Ana dil" }, pct: 100 },
  { lang: { en: "English", tr: "İngilizce" }, level: { en: "Advanced", tr: "İleri" }, pct: 85 },
  { lang: { en: "German", tr: "Almanca" }, level: { en: "Beginner", tr: "Başlangıç" }, pct: 20 },
];

const EDUCATION = {
  school: { en: "Sabancı University", tr: "Sabancı Üniversitesi" },
  degree: { en: "B.S. in Computer Science, Faculty of Engineering", tr: "Bilgisayar Bilimi Lisans, Mühendislik ve Doğa Bilimleri Fakültesi" },
  date: { en: "Expected Jan 2027", tr: "Beklenen mezuniyet: Oca 2027" },
  facts: [
    { k: { en: "GPA", tr: "GNO" }, v: "3.84 / 4.00" },
    { k: { en: "Minors", tr: "Yandallar" }, v: { en: "Business Analytics · Mind & Behavior", tr: "İş Analitiği · Zihin ve Davranış" } },
    { k: { en: "Honors", tr: "Onurlar" }, v: { en: "High Honor Certificate, seven terms (GPA > 3.5)", tr: "Yedi dönem Yüksek Onur Belgesi (GNO > 3.5)" } },
    { k: { en: "Scholarship", tr: "Burs" }, v: { en: "100% Outstanding Achievement Scholarship", tr: "%100 Üstün Başarı Bursu" } },
  ],
};

const CERTS = [
  { date: { en: "Sep 2024", tr: "Eyl 2024" }, name: { en: "A1.1 German Certificate", tr: "A1.1 Almanca Sertifikası" }, org: { en: "University of Vienna", tr: "Viyana Üniversitesi" } },
  { date: { en: "Jul 2024", tr: "Tem 2024" }, name: "Young Executive Academy", org: "Global Executive Academy" },
  { date: { en: "Oct 2023", tr: "Eki 2023" }, name: "Python Basics", org: "University of Michigan" },
  { date: { en: "Sep 2023", tr: "Eyl 2023" }, name: "Essential Management Skills", org: "International Business Management Institute" },
  { date: { en: "Jan 2021", tr: "Oca 2021" }, name: "The Duke of Edinburgh's Bronze Award", org: "The Duke of Edinburgh's International Award Foundation" },
];

const VOLUNTEER = [
  {
    date: { en: "Sep 2018 – Present", tr: "Eyl 2018 – Devam ediyor" },
    org: { en: "TEMA Foundation", tr: "TEMA Vakfı" },
    role: { en: "Associate", tr: "Gönüllü" },
    desc: { en: "Took part in many tree-planting activities.", tr: "Birçok ağaç dikme etkinliğine katıldım." },
  },
  {
    date: { en: "Feb – Jun 2023", tr: "Şub – Haz 2023" },
    org: { en: "Sabancı University Civic Involvement Projects", tr: "Sabancı Üniversitesi Toplumsal Duyarlılık Projeleri" },
    role: { en: "Volunteer", tr: "Gönüllü" },
    desc: { en: "Visited a nursing home for two hours every week to spend time with the residents.", tr: "Her hafta iki saat huzurevini ziyaret ederek sakinlerle vakit geçirdim." },
  },
  {
    date: { en: "May 2023", tr: "May 2023" },
    org: { en: "Turkish Presidential Election", tr: "Cumhurbaşkanlığı Seçimi" },
    role: { en: "Ballot Box Observer", tr: "Sandık Müşahidi" },
    desc: {
      en: "Stayed at the ballot box throughout the day to supervise every transaction, check that votes were recorded correctly and object when necessary.",
      tr: "Gün boyunca sandık başında kalarak tüm işlemleri takip ettim, oyların doğru kaydedilip kaydedilmediğini kontrol ettim ve gerektiğinde itiraz etmeye hazır bulundum.",
    },
  },
];
