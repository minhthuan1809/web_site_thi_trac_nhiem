"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Input,
  Card,
  CardBody,
  CardFooter,
  Button,
  Pagination,
} from "@nextui-org/react";
import { SearchIcon } from "lucide-react";
// minh thuận
const subjects = [
  {
    id: 1,
    name: "Giải tích",
    description: "Đề thi và bài tập môn Giải tích cho sinh viên đại học",
    image: "https://picsum.photos/200",
  },
  {
    id: 2,
    name: "Vật lý đại cương",
    description:
      "Ngân hàng đề thi môn Vật lý đại cương các chương trình đại học",
    image: "https://picsum.photos/200",
  },
  {
    id: 3,
    name: "Hóa đại cương",
    description: "Tổng hợp đề thi môn Hóa học đại cương cho sinh viên",
    image: "https://picsum.photos/200",
  },
  {
    id: 4,
    name: "Sinh học phân tử",
    description: "Bộ đề thi và bài tập môn Sinh học phân tử bậc đại học",
    image: "https://picsum.photos/200",
  },
  {
    id: 5,
    name: "Tiếng Anh chuyên ngành",
    description: "Đề thi Tiếng Anh chuyên ngành các ngành học",
    image: "https://picsum.photos/200",
  },
  {
    id: 6,
    name: "Triết học đại cương",
    description: "Ngân hàng đề thi môn Triết học đại cương",
    image: "https://picsum.photos/200",
  },
];

export default function PracticePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const router = useRouter();

  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubjectClick = (subject: any) => {
    const formattedName = subject.name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "_");
    router.push(`/practice/${formattedName}/${subject.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white mt-[5rem]">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 mb-4">
            Luyện Thi Đại Học
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kho đề thi và bài tập các môn học bậc đại học được biên soạn bởi các
            giảng viên có kinh nghiệm
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <Input
            type="text"
            placeholder="Tìm kiếm môn học..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            startContent={<SearchIcon className="text-gray-400" size={20} />}
            size="lg"
            radius="lg"
            classNames={{
              input: "text-lg",
              inputWrapper: "shadow-lg",
            }}
          />
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSubjects.map((subject) => (
            <Card
              key={subject.id}
              className="border-none shadow-md hover:shadow-xl transition-shadow"
            >
              <CardBody className="p-0">
                <div className="relative w-full h-48">
                  <Image
                    src={subject.image}
                    alt={subject.name}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    {subject.name}
                  </h2>
                  <p className="text-gray-600">{subject.description}</p>
                </div>
              </CardBody>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button
                  color="primary"
                  radius="lg"
                  className="w-full"
                  size="lg"
                  onClick={() => handleSubjectClick(subject)}
                >
                  Làm thử
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-16">
          <Pagination
            total={10}
            page={page}
            onChange={setPage}
            showControls
            color="primary"
            radius="lg"
            classNames={{
              wrapper: "gap-2",
              item: "w-10 h-10",
            }}
          />
        </div>
      </div>
    </div>
  );
}
