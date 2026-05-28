import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: SiGithub, href: "https://github.com/muhar05" },
    { icon: SiLinkedin, href: "https://www.linkedin.com/in/muhar-ferdiansyah-b44161291" },
    { icon: SiInstagram, href: "https://www.instagram.com/zx.harr/" },
    { icon: SiGmail, href: "mailto:ferdiansyahmuh5@gmail.com" },
  ];

  return (
    <footer className="w-full py-12 px-6 md:px-12 border-t border-[rgba(255,255,255,0.06)] bg-transparent">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* COLOPHON */}
        <div className="space-y-4">
          <p className="font-mono text-[10px] uppercase tracking-wider text-[#8e9196]">
            colophon
          </p>
          <p className="text-xs text-[#8e9196] leading-relaxed max-w-sm">
            designed with a quiet focus on system architecture & editorial aesthetics. built using next.js, tailwind CSS, and framer motion.
          </p>
          <div className="flex items-center gap-4 text-xs font-mono text-[#8e9196]">
            <span>UTC+07:00 / Indonesia</span>
          </div>
        </div>

        {/* METADATA SIGNATURE */}
        <div className="flex flex-col md:items-end justify-between gap-6">
          <div className="flex items-center gap-4">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8e9196] hover:text-[#fafafa] transition-colors p-1"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          <p className="font-mono text-[10px] text-[#8e9196] tracking-wider md:text-right">
            © {currentYear} muhar ferdiansyah.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;