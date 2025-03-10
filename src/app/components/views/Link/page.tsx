"use client";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const LinkPage = () => {
  return (
    <>
      <div className="bg-slate-200 min-h-screen flex flex-col justify-center items-center p-6 dark:bg-black transition-all">
        <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 transition-all">
          <h1 className="text-2xl font-bold text-center mb-6 dark:text-white transition-all">
            Connect with Me
          </h1>
          <div className="space-y-4">
            {/* Send Email */}
            <button
              className="w-full flex items-center justify-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              onClick={() =>
                (window.location.href = "mailto:your-email@example.com")
              }
            >
              <FaEnvelope className="h-5 w-5" />
              <span>Send Email</span>
            </button>

            {/* Get Resume */}
            <button
              className="w-full flex items-center justify-center space-x-2 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1mMb8tceU-K1hCH36BauwtH0vOiMjekOO/view?usp=drive_link",
                  "_blank"
                )
              }
            >
              <FaEnvelope className="h-5 w-5" />
              <span>Get My Resume</span>
            </button>

            {/* Social Media */}
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/muhar-ferdiansyah-b44161291"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/muhar05"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/zx.harr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 transition"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkPage;
