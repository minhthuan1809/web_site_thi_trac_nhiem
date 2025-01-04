"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const subjects = [
  {
    id: 1,
    name: "Toán học",
    description: "Các đề thi thử môn Toán",
    image: "https://picsum.photos/200",
  },
  {
    id: 2,
    name: "Vật lý",
    description: "Các đề thi thử môn Vật lý",
    image: "https://picsum.photos/200",
  },
  {
    id: 3,
    name: "Hóa học",
    description: "Các đề thi thử môn Hóa học",
    image: "https://picsum.photos/200",
  },
  {
    id: 4,
    name: "Sinh học",
    description: "Các đề thi thử môn Sinh học",
    image: "https://picsum.photos/200",
  },
  {
    id: 5,
    name: "Tiếng Anh",
    description: "Các đề thi thử môn Tiếng Anh",
    image: "https://picsum.photos/200",
  },
  {
    id: 6,
    name: "Ngữ văn",
    description: "Các đề thi thử môn Ngữ văn",
    image: "https://picsum.photos/200",
  },
];

export default function PracticePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubjectClick = (subject: (typeof subjects)[0]) => {
    const formattedName = subject.name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "_");
    router.push(`/practice/${formattedName}/${subject.id}`);
  };

  return (
    <div className="container mx-auto p-4 mt-[5rem] min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Thi thử đại học</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Tìm kiếm môn học..."
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSubjects.map((subject) => (
          <div
            key={subject.id}
            className="bg-white p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full h-40 mb-4">
              <Image
                src={subject.image}
                alt={subject.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{subject.name}</h2>
            <p className="text-gray-600 mb-4">{subject.description}</p>
            <button
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => handleSubjectClick(subject)}
            >
              Làm thử
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
