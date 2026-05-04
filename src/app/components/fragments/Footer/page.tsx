import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: SiGithub, href: "https://github.com/muhar05", color: "hover:text-[#2dba4e]" },
    { icon: SiLinkedin, href: "https://www.linkedin.com/in/muhar-ferdiansyah-b44161291", color: "hover:text-[#0077b5]" },
    { icon: SiInstagram, href: "https://www.instagram.com/zx.harr/", color: "hover:text-[#e4405f]" },
    { icon: SiGmail, href: "mailto:ferdiansyahmuh5@gmail.com", color: "hover:text-[#ea4335]" },
  ];

  return (
    <footer className="relative w-full py-12 px-6 border-t border-slate-200 dark:border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* BRANDING SECTION */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-2xl font-bold text-gradient mb-2">
              Muhar.dev
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xs text-center md:text-left">
              Building high-performance web & mobile applications with a focus on quality and clean code.
            </p>
          </div>

          {/* SOCIALS SECTION */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">Connect With Me</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 transition-all duration-300 group shadow-sm hover:shadow-md ${social.color} text-slate-600 dark:text-inherit`}
                >
                  <social.icon size={20} className="transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
            © {currentYear} Muhar Ferdiansyah. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-xs font-bold text-slate-600 dark:text-slate-400">
            <Link href="/about" className="hover:text-indigo-600 dark:hover:text-white transition-colors">About</Link>
            <Link href="/works" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Works</Link>
            <Link href="/achievement" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Achievements</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;