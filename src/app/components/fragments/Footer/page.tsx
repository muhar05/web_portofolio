import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";

const Footer = () => {
    return (
      <footer className="dark:bg-gray-900 pb-6 pt-6">
        <div className="w-full mx-auto max-w-screen-xl p-4 mobile:flex mobile:items-center mobile:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Muhar Ferdiansyah
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex gap-4 flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="https://github.com/muhar05"
                className="hover:underline me-4 md:me-6"
              >
                <SiGithub size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/muhar-ferdiansyah-b44161291"
                className="hover:underline me-4 md:me-6"
              >
                <SiLinkedin size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/zx.harr/"
                className="hover:underline me-4 md:me-6"
              >
                <SiInstagram size={30} />
              </a>
            </li>
            <li>
              <a href="mailto:ferdiansyahmuh5@gmail.com" className="hover:underline me-4 md:me-6">
                <SiGmail size={30} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
}

export default Footer;