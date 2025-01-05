"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { Input } from "@nextui-org/input";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Tooltip } from "@nextui-org/tooltip";
import { SearchIcon } from "@nextui-org/shared-icons";

export default function ExamPage() {
  // Mock data for exams
  const exams = [
    {
      id: 1,
      subject: "Lập trình web",
      lecturer: "Nguyễn Văn A",
      class: "IT001",
      date: "2024-01-10",
      duration: "90 phút",
      time: "07:00",
      status: "Sắp diễn ra", // upcoming
    },
    {
      id: 2,
      subject: "Cơ sở dữ liệu",
      lecturer: "Trần Thị B",
      class: "IT002",
      date: "2024-01-12",
      duration: "120 phút",
      time: "09:30",
      status: "Đang mở", // open
    },
    {
      id: 3,
      subject: "An toàn thông tin",
      lecturer: "Lê Văn C",
      class: "IT003",
      date: "2024-01-15",
      duration: "60 phút",
      time: "13:30",
      status: "Chưa mở", // not open
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredExams = exams.filter((exam) =>
    Object.values(exam).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const columns = [
    { name: "MÔN HỌC", uid: "subject" },
    { name: "GIẢNG VIÊN", uid: "lecturer" },
    { name: "LỚP", uid: "class" },
    { name: "NGÀY THI", uid: "date" },
    { name: "THỜI GIAN", uid: "time" },
    { name: "THỜI LƯỢNG", uid: "duration" },
    { name: "TRẠNG THÁI", uid: "status" },
    { name: "HÀNH ĐỘNG", uid: "actions" },
  ];

  const getStatusColor = (status: any) => {
    switch (status) {
      case "Đang mở":
        return "success";
      case "Sắp diễn ra":
        return "warning";
      case "Chưa mở":
        return "default";
      default:
        return "default";
    }
  };

  const handleStartExam = (examId: any) => {
    // Xử lý khi sinh viên bắt đầu làm bài
    console.log("Bắt đầu bài thi:", examId);
  };

  return (
    <div className="p-8 mt-[5rem]">
      <Card className="shadow-lg">
        <CardHeader className="flex flex-col gap-2 bg-blue-500 text-white rounded-t-lg">
          <div className="flex items-center justify-between w-full px-4 py-2">
            <div>
              <h1 className="text-3xl font-bold">Danh sách bài thi</h1>
              <p className="text-white/80 mt-1">
                Xem thông tin chi tiết về các bài thi sắp tới
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Chip color="success" variant="shadow">
                Đang mở: {exams.filter((e) => e.status === "Đang mở").length}
              </Chip>
              <Chip color="warning" variant="shadow">
                Sắp diễn ra:{" "}
                {exams.filter((e) => e.status === "Sắp diễn ra").length}
              </Chip>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          {/* Search section */}
          <div className="mb-6">
            <Input
              isClearable
              startContent={<SearchIcon className="text-default-300" />}
              placeholder="Tìm kiếm theo môn học, giảng viên, lớp..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
              size="lg"
              variant="bordered"
            />
          </div>

          {/* Table section */}
          <Table
            aria-label="Danh sách bài thi"
            classNames={{
              wrapper: "min-h-[400px]",
              th: "bg-gray-50/50 text-default-700",
              td: "py-4",
            }}
            shadow="none"
          >
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.uid} className="text-xs uppercase">
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={filteredExams}>
              {(item) => (
                <TableRow
                  key={item.id}
                  className="cursor-pointer hover:bg-gray-50/50"
                >
                  <TableCell>
                    <div className="font-medium">{item.subject}</div>
                  </TableCell>
                  <TableCell>{item.lecturer}</TableCell>
                  <TableCell>
                    <Chip size="sm" variant="flat">
                      {item.class}
                    </Chip>
                  </TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.time}</TableCell>
                  <TableCell>
                    <Chip size="sm" variant="dot">
                      {item.duration}
                    </Chip>
                  </TableCell>
                  <TableCell>
                    <Chip
                      color={getStatusColor(item.status)}
                      variant="flat"
                      size="sm"
                    >
                      {item.status}
                    </Chip>
                  </TableCell>
                  <TableCell>
                    <Tooltip
                      content={
                        item.status === "Đang mở"
                          ? "Bắt đầu làm bài"
                          : "Bài thi chưa được mở"
                      }
                    >
                      <Button
                        color={
                          item.status === "Đang mở" ? "primary" : "default"
                        }
                        variant="flat"
                        size="sm"
                        onClick={() => handleStartExam(item.id)}
                        disabled={item.status !== "Đang mở"}
                      >
                        {item.status === "Đang mở" ? "Làm bài" : "Chưa mở"}
                      </Button>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}
