"use client";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const LinkPage = () => {
  return (
    <>
      <div className="bg-slate-200 min-h-screen flex flex-col justify-center items-center p-6">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-center mb-6">
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
              onClick={() => window.open("/path-to-resume.pdf", "_blank")}
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
