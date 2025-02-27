import Image from "next/image";
import ProfilePicture from "../../../../../public/img/profile_picture.jpg";
import { TextGenerateEffect } from "../../ui/TextGeneratedEffects/page";

const AboutPage = () => {
  const words1 =
    "Hello! I’m a passionate Full Stack Developer, newly immersed in web development. With skills in front-end and back-end technologies, I’ve built responsive, user-friendly apps that enhance my understanding of web practices. My toolkit includes JavaScript, HTML, CSS, Node.js, React, and SQL, and I’m eager to explore new technologies. Ready to tackle real-world challenges, I’m excited to contribute to a team and grow in the industry—let’s connect!";

  return (
    <>
      <div className="bg-slate-200">
        <div className="w-full mobile:h-screen gap-20 space-y-4 mobile:flex justify-center items-center p-10">
          <div className="flex justify-center items-center">
            <div className="w-56 h-56 rounded-full overflow-hidden shadow-lg border-green-500 border-2">
              <Image
                src={ProfilePicture}
                alt="profile"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-start">
            <h1 className="text-3xl font-bold">About Me</h1>
            <TextGenerateEffect words={words1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
