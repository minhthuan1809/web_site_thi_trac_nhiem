"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Input,
  Card,
  CardBody,
  CardFooter,
  Button,
  Chip,
} from "@nextui-org/react";
import { SearchIcon, BookOpenIcon } from "lucide-react";
import { getPracticePage } from "@/app/service/practice_api";
import NextPagination from "@/app/_components/ui/Pagination";

interface Subject {
  id: number;
  subject: string;
  duration: number;
  point: number;
  documentId: string;
  status_exam: boolean;
}

export default function PracticePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [practicePage, setPracticePage] = useState<Subject[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  const handleClick = (subject: Subject, documentId: string) => {
    const formattedName = subject.subject
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[đĐ]/g, "d")
      .replace(/\s+/g, "_")
      .toLowerCase();
    router.push(`/practice/${formattedName}/${documentId}`);
  };

  useEffect(() => {
    sessionStorage.removeItem("selectedAnswers");
    sessionStorage.removeItem("time_exam");
    const fetchData = async () => {
      try {
        const response = await getPracticePage(page, searchTerm);

        setPracticePage(response.data);
        setTotalPages(response.meta.pagination.pageCount);
      } catch (error) {
        console.error("Error fetching practice page:", error);
      } finally {
      }
    };
    fetchData();
  }, [page, searchTerm]);
  return (
    <div className="min-h-screen bg-gradient-to-br pt-[10rem] from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 mb-4">
            Luyện Thi Thử
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kho đề thi và bài tập các môn học bậc đại học được biên soạn bởi các
            giảng viên có kinh nghiệm
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <Input
            isClearable
            type="text"
            placeholder="Tìm kiếm môn học..."
            startContent={<SearchIcon className="text-default-400" />}
            value={searchTerm}
            onClear={() => setSearchTerm("")}
            onChange={(e) => setSearchTerm(e.target.value)}
            classNames={{
              inputWrapper: "shadow-md hover:shadow-lg transition-shadow",
            }}
            size="lg"
          />
        </div>

        {practicePage.length === 0 ? (
          <div className="text-center text-gray-500">không có dữ liệu</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practicePage.map((subject, index) => {
                if (subject.status_exam) return;
                return (
                  <Card
                    key={index}
                    isPressable
                    className="border-none shadow-md hover:shadow-xl transition-shadow"
                  >
                    <CardBody className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-primary">
                          {subject.subject}
                        </h2>
                        <BookOpenIcon className="text-default-400" />
                      </div>
                      <div className="space-y-2">
                        <Chip color="primary" variant="light" size="sm">
                          Thời gian: {subject.duration} phút
                        </Chip>
                        <Chip color="secondary" variant="light" size="sm">
                          Điểm tối đa: {subject.point} điểm
                        </Chip>
                      </div>
                    </CardBody>
                    <CardFooter>
                      <Button
                        fullWidth
                        color="primary"
                        variant="solid"
                        onPress={() =>
                          handleClick(subject, subject?.documentId)
                        }
                      >
                        Làm thử
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>

            <div className="flex justify-center mt-12">
              <NextPagination
                total={totalPages}
                setPage={setPage}
                page={page}
                url="/practice"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
