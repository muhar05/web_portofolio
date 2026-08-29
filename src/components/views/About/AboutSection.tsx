"use client";

const AboutPage = () => {
  const stats = [
    { label: "Experience", value: "1+ Year" },
    { label: "Focus", value: "Systems & UI" },
    { label: "Status", value: "Available" },
    { label: "Location", value: "Banten, ID (Remote)" },
  ];

  const coreBeliefs = [
    {
      title: "simplicity over cleverness",
      desc: "complex systems fail in complex ways. i write code that is straightforward to debug, easy to read, and documented for the next developer."
    },
    {
      title: "user experience extends to systems",
      desc: "an erp dashboard should be just as clean and fast as a consumer startup landing page. internal users deserve beautiful and fast interfaces."
    },
    {
      title: "relational design is key",
      desc: "most modern frontend bugs originate from poorly designed database schemas. i spend extra time getting constraints and relationships right from day one."
    }
  ];

  return (
    <main className="w-full bg-[#0c0d0e] min-h-screen text-[#e4e4e7] overflow-hidden py-16 md:py-24">
      <section className="max-w-4xl mx-auto px-6 md:px-12">
        {/* HEADER */}
        <div className="border-b border-[rgba(255,255,255,0.06)] pb-10 mb-12">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#8e9196]">01 / the person</span>
          <h1 className="text-3xl md:text-5xl font-light text-[#fafafa] tracking-tight mt-2 lowercase">
            about <span className="font-semibold text-white">muhar</span>
          </h1>
        </div>

        {/* METRICS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 font-mono">
          {stats.map((stat) => (
            <div key={stat.label} className="border border-[rgba(255,255,255,0.05)] bg-[#101112] p-4 rounded">
              <div className="text-xs text-[#fafafa]">{stat.value}</div>
              <div className="text-[9px] uppercase tracking-wider text-[#8e9196] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* STORY */}
        <div className="space-y-6 text-sm md:text-base text-[#8e9196] leading-relaxed mb-16 lowercase">
          <p>
            i&apos;m a fullstack developer specializing in developing robust web solutions, internal management portals (ERP), and highly structured cross-platform mobile apps. i operate at the intersection of logical backend database engineering and intuitive UI/UX design.
          </p>
          <p>
            my work typically involves taking complex, fragmented manual workflows (like accounting sheets or pharmacy drug prescriptions) and transforming them into streamlined database systems using Next.js, Laravel, Node.js, and Flutter.
          </p>
        </div>

        {/* CORE BELIEFS */}
        <div className="border-t border-[rgba(255,255,255,0.06)] pt-12">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#8e9196]">02 / approach & beliefs</span>
          <h3 className="text-xl font-medium text-[#fafafa] mt-2 mb-10 lowercase">how i think about software</h3>

          <div className="space-y-8">
            {coreBeliefs.map((belief, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-[rgba(255,255,255,0.03)] pb-6 lowercase">
                <span className="font-mono text-xs text-[#fafafa] font-semibold">{belief.title}</span>
                <span className="md:col-span-2 text-xs text-[#8e9196] leading-relaxed">{belief.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
