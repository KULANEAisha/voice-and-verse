import { SITE } from "@/lib/site";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#pillars", label: "Pillars" },
  { href: "#who", label: "Who we serve" },
  { href: "#programs", label: "Programs" },
  { href: "#team", label: "Team" },
];

const PILLARS = [
  {
    n: "01",
    name: "Self",
    sub: "Understanding yourself",
    q: "Do I understand myself?",
    body: "Self-awareness, emotional intelligence, confidence, identity, personal values, and emotional well-being.",
  },
  {
    n: "02",
    name: "Connection",
    sub: "Understanding others",
    q: "Do I know how to relate to others healthily?",
    body: "Relationships, communication, empathy, respect, boundaries, friendship, and teamwork.",
  },
  {
    n: "03",
    name: "Growth",
    sub: "Developing life skills",
    q: "Do I have the skills to navigate challenges?",
    body: "Resilience, decision-making, problem-solving, handling failure, managing pressure, and taking responsibility.",
  },
  {
    n: "04",
    name: "World",
    sub: "Understanding the world around you",
    q: "Do I understand the world I am growing up in?",
    body: "Peer influence, social media, community responsibility, justice, civic engagement, and the social contexts that shape our choices.",
  },
  {
    n: "05",
    name: "Future",
    sub: "Thinking about what comes next",
    q: "Do I have the tools to think about where I might go next?",
    body: "Education and career awareness, financial literacy, university preparation, goal-setting, and personal aspirations.",
  },
];

const AUDIENCES = [
  {
    title: "Primary school",
    body: "Confidence, self-expression, kindness, healthy friendships, teamwork, and curiosity about themselves and the world.",
  },
  {
    title: "Grade 7–9",
    body: "Transition and identity: adjusting to secondary school, forming healthy social circles, and building confidence.",
  },
  {
    title: "Grade 10–11",
    body: "Pressure, choices, and responsibility: peer pressure, relationships, personal values, and growing independence.",
  },
  {
    title: "Grade 12 / Form 4",
    body: "Life beyond high school: university realities, homesickness, boundaries, scholarships, financial literacy, and knowing when to seek support.",
  },
];

const PROGRAMS = [
  {
    title: "Interactive school visits",
    body: "Facilitated discussions, storytelling, small-group conversations, reflection exercises, and role-play with relatable university students and young professionals.",
  },
  {
    title: "Career exposure and mentorship panels",
    body: "Professionals from law, medicine, technology, engineering, finance, media, the arts and more share the honest realities behind their journeys.",
  },
  {
    title: "Community outreach and children's homes",
    body: "Mentorship, creative expression, educational sessions, and carefully coordinated support that combines material help with human connection.",
  },
  {
    title: "Community service initiatives",
    body: "Clean-ups, peer-support projects, school improvement, and donation drives that turn learning about responsibility into practising it.",
  },
  {
    title: "Mentorship and continued engagement",
    body: "Follow-up sessions, mentorship circles, career guidance, and referrals to professional support where needed.",
  },
];

const TEAM = [
  { name: "Khadija Kassim Farah", role: "CEO / Executive Director", body: "Strategic direction, partnerships, and organisational leadership." },
  { name: "Huda Ibrahim Haithar", role: "Secretary", body: "Records, meetings, follow-up, and internal communication." },
  { name: "Rahma Ilyas", role: "Operations & Coordination Lead", body: "Coordinating activities, logistics, and day-to-day delivery." },
  { name: "Aisha Kulane", role: "Technology, Innovation and Digital Strategy Lead ", body: " Developing/maintaining the organization's website, registration systems, mentorship databases, digital resources, etc." },
  { name: "Anisa Ibrahim Haithar", role: "Legal Advisor", body: "Compliance, safeguarding, consent, and data-protection guidance." },
];

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.3em] ${dark ? "text-stone" : "text-ink/60"}`}>
      {children}
    </p>
  );
}

function ContactButton({ className = "" }: { className?: string }) {
  if (!SITE.email) return null;
  return (
    <a
      href={`mailto:${SITE.email}`}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition ${className}`}
    >
      Get in touch
    </a>
  );
}

export default function Home() {
  return (
    <>
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#top" className="font-serif text-lg font-semibold tracking-wide">
            Voice <span className="text-ink/50">&amp;</span> Verse
          </a>
          <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="Main">
            {NAV.map((l) => (
              <a key={l.href} href={l.href} className="text-ink/70 transition hover:text-ink">
                {l.label}
              </a>
            ))}
            <ContactButton className="bg-ink px-5 py-2 text-paper hover:bg-ink/85" />
          </nav>
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-ink/20 px-4 py-2 text-sm font-medium">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-52 rounded-2xl border border-ink/10 bg-paper p-3 shadow-lg">
              {NAV.map((l) => (
                <a key={l.href} href={l.href} className="block rounded-lg px-3 py-2 text-sm hover:bg-mist">
                  {l.label}
                </a>
              ))}
            </div>
          </details>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="bg-stone">
          <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-20 pt-16 text-center sm:px-6 sm:pt-24">
            <div className="relative mb-10 flex items-center justify-center" aria-hidden="true">
              <span className="font-serif text-[9rem] font-bold leading-none text-ink sm:text-[13rem]">V</span>
              <span className="mx-3 h-32 w-px bg-ink sm:mx-5 sm:h-48" />
              <span className="font-serif text-[9rem] font-bold leading-none text-ink sm:text-[13rem]">V</span>
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl bg-mist px-5 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-ink sm:px-10 sm:py-3.5 sm:text-sm">
                Voice &amp; Verse
              </span>
            </div>
            <h1 className="font-serif text-4xl leading-tight sm:text-6xl">{SITE.tagline}</h1>
            <p className="mt-6 max-w-2xl text-lg text-ink/80">
              A youth empowerment and mentorship program helping young people understand themselves, build
              practical life skills, and prepare for life beyond the classroom.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3 text-sm font-semibold tracking-wide text-paper transition hover:bg-ink/85"
              >
                Learn more
              </a>
              <ContactButton className="border border-ink text-ink hover:bg-ink hover:text-paper" />
            </div>
            <p className="mt-14 text-xs font-semibold uppercase tracking-[0.45em] text-ink/70">
              Youth Empowerment &nbsp;·&nbsp; Est. 2026
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <Eyebrow>Why we exist</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl leading-snug sm:text-4xl">
                Being academically prepared is not the same as being prepared for life.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-ink/80">
              <p>
                A student can leave high school ready for university on paper and still feel unprepared for the
                independence, uncertainty, relationships, and emotional challenges that come with it.
              </p>
              <p>
                Voice &amp; Verse works alongside schools, universities, community organisations, and children&apos;s
                homes to bridge that gap through honest conversations, mentorship, career exposure, and practical
                life-skills training.
              </p>
              <p className="font-serif text-xl text-ink">
                Young people should not have to figure everything out on their own.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-mist p-8">
              <Eyebrow>Our vision</Eyebrow>
              <p className="mt-3 text-lg leading-relaxed">
                A generation of confident, informed, responsible, compassionate, and purpose-driven young people who
                recognise their potential and contribute positively to their communities.
              </p>
            </div>
            <div className="rounded-3xl bg-mist p-8">
              <Eyebrow>Our mission</Eyebrow>
              <p className="mt-3 text-lg leading-relaxed">
                To equip young people with life skills, emotional awareness, knowledge, mentorship, and real-world
                exposure so they can understand themselves, navigate challenges, and explore their futures with
                confidence.
              </p>
            </div>
          </div>
        </section>

        {/* NAME MEANING */}
        <section className="bg-ink text-paper">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-24 md:grid-cols-2">
            <div>
              <Eyebrow dark>The name</Eyebrow>
              <h3 className="mt-4 font-serif text-5xl">Voice</h3>
              <p className="mt-4 leading-relaxed text-paper/80">
                Expression, communication, and the fundamental importance of being heard. Young people deserve safe
                spaces to ask questions, share ideas, and learn to use their voice responsibly.
              </p>
            </div>
            <div>
              <Eyebrow dark>&nbsp;</Eyebrow>
              <h3 className="mt-4 font-serif text-5xl">Verse</h3>
              <p className="mt-4 leading-relaxed text-paper/80">
                Words, wisdom, values, and stories. A teacher who believes in them, a mentor who listens, or an honest
                account of someone&apos;s journey can change what a young person believes is possible.
              </p>
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section id="pillars" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <Eyebrow>What we focus on</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug sm:text-4xl">Five pillars of youth development</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p) => (
              <article key={p.n} className="flex flex-col rounded-3xl border border-ink/10 bg-white/60 p-7">
                <span className="font-serif text-3xl text-ink/30">{p.n}</span>
                <h3 className="mt-3 font-serif text-2xl">{p.name}</h3>
                <p className="text-sm text-ink/60">{p.sub}</p>
                <p className="mt-4 text-sm italic text-ink/80">&ldquo;{p.q}&rdquo;</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{p.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* WHO WE SERVE */}
        <section id="who" className="bg-mist">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <Eyebrow>Who we serve</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug sm:text-4xl">
              Meeting young people where they are
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {AUDIENCES.map((a) => (
                <article key={a.title} className="rounded-3xl bg-paper p-7">
                  <h3 className="font-serif text-xl">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75">{a.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAMS */}
        <section id="programs" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug sm:text-4xl">
            Conversations, not lectures
          </h2>
          <ul className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {PROGRAMS.map((p, i) => (
              <li key={p.title} className="grid gap-2 py-7 md:grid-cols-[4rem_1fr_2fr] md:gap-8">
                <span className="font-serif text-xl text-ink/30">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-serif text-xl">{p.title}</h3>
                <p className="leading-relaxed text-ink/75">{p.body}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* SAFEGUARDING */}
        <section className="bg-ink text-paper">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <Eyebrow dark>Safeguarding</Eyebrow>
                <h2 className="mt-4 font-serif text-3xl leading-snug sm:text-4xl">
                  The safety and dignity of every young person comes first.
                </h2>
              </div>
              <div className="space-y-4 leading-relaxed text-paper/80">
                <p>
                  All activities are carried out within appropriate child-protection frameworks and in cooperation
                  with the relevant school, institution, or community authority, with clear standards on conduct,
                  consent, confidentiality, supervision, and reporting.
                </p>
                <p>
                  Mentorship is not a substitute for professional psychological, medical, legal, or child-protection
                  services. Where a young person needs specialised help, we refer them on.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <Eyebrow>Leadership</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-snug sm:text-4xl">
            Co-founded at the intersection of criminal justice and psychology
          </h2>
          <p className="mt-5 max-w-2xl text-ink/75">
            We understand the environments young people grow up in and the inner experiences that shape how they
            respond to them, and we meet them with understanding rather than judgment.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m) => (
              <article key={m.name} className="rounded-3xl border border-ink/10 bg-white/60 p-7">
                <h3 className="font-serif text-xl">{m.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-ink/55">{m.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink/75">{m.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT / CTA */}
        <section id="contact" className="bg-stone">
          <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28">
            <h2 className="font-serif text-3xl leading-snug sm:text-5xl">
              Bring Voice &amp; Verse to your school or community
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-ink/80">
              We partner with schools, universities, children&apos;s homes, professionals, and organisations who want
              to give young people a place to be heard.
            </p>
            <div className="mt-9">
              {SITE.email ? (
                <ContactButton className="bg-ink text-paper hover:bg-ink/85" />
              ) : (
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ink/70">Contact details coming soon</p>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-ink text-paper/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm sm:flex-row sm:px-6">
          <p className="font-serif text-paper">Voice &amp; Verse</p>
          <p className="italic">{SITE.tagline}</p>
          <p>&copy; 2026 Voice &amp; Verse. Youth Empowerment.</p>
        </div>
      </footer>
    </>
  );
}
