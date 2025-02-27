// app/works/[slug]/page.tsx
import { works } from "@/app/data/works/page";
import { Endpoint } from "@/app/types/page";
import { notFound } from "next/navigation";

interface WorkDetailProps {
  params: {
    slug: string;
  };
}

export default function WorkDetail({ params }: WorkDetailProps) {
  const work = works.find((work) => work.slug === params.slug);

  if (!work) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          {work.title}
        </h1>
        <div className="bg-white shadow-2xl rounded-lg p-6">
          <div className="mb-4">{work.header}</div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Deskripsi Proyek
          </h2>
          <p className="text-gray-600 mb-4">{work.description}</p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Teknologi yang Digunakan
          </h2>
          <div className="flex gap-2">
            {work.icon.map((icon, index) => (
              <div key={index}>{icon}</div>
            ))}
          </div>

          {/* Tampilkan dokumentasi jika ada */}
          {work.documentation && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Dokumentasi
              </h2>
              {work.documentation.map((section, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {section.title}
                  </h3>
                  {section.content.map((content, idx) => (
                    <div key={idx} className="mb-4">
                      {content.type === "text" ? (
                        <p className="text-gray-600">{content.text}</p>
                      ) : (
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="font-mono text-sm text-gray-800">
                            <span className="font-bold">
                              {content.endpoint?.method}
                            </span>{" "}
                            {content.endpoint?.path}
                          </p>
                          {content.endpoint?.middleware && (
                            <p className="text-sm text-gray-600 mt-1">
                              <span className="font-semibold">Middleware:</span>{" "}
                              {content.endpoint.middleware}
                            </p>
                          )}
                          <p className="text-sm text-gray-600 mt-1">
                            {content.endpoint?.description}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
