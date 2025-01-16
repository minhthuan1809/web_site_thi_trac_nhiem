"use client";
import React, { useEffect, useState } from "react";
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
import { getPracticePage } from "@/app/service/practice_api";
import Loading from "@/app/_components/common/Loading";

export default function PracticePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [practicePage, setPracticePage] = useState<any[]>([]); // Initialize as empty array
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const filteredSubjects =
    practicePage?.filter((subject: any) =>
      subject.content.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];
  const handleSubjectClick = (subject: any, count: number) => {
    const formattedName = subject.title
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[đĐ]/g, "d") // Thêm xử lý riêng cho ký tự đ/Đ
      .replace(/\s+/g, "_")
      .toLowerCase(); // Chuyển tất cả thành chữ thường
    router.push(`/practice/${formattedName}/${++count}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getPracticePage();
        setPracticePage(data.data.exam);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

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
          {filteredSubjects.map((subject: any, index: number) => {
            if (subject.status_try === false) return null;
            return (
              <Card
                key={subject.id}
                className="border-none shadow-md hover:shadow-xl transition-shadow"
              >
                <CardBody className="p-0">
                  <div className="relative w-full h-48">
                    <Image
                      src={
                          `${process.env.NEXT_PUBLIC_API_URL}${subject.image.url}`
                       
                      }
                      alt={subject.name || "Subject image"}
                      fill
                      className="object-cover rounded-t-xl "
                    
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                      {subject.title}
                    </h2>
                    <p className="text-gray-600">{subject.content}</p>
                  </div>
                </CardBody>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button
                    color="primary"
                    radius="lg"
                    className="w-full"
                    size="lg"
                    onClick={() => handleSubjectClick(subject, index)}
                  >
                    Làm thử
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
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
