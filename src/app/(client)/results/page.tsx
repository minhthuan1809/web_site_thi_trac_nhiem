"use client"
import { Check } from "lucide-react"
import { Button, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Card, CardBody } from "@nextui-org/react"

export default function ExamResults() {
  return (
    <div className="min-h-screen pt-[13rem] bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <Card className="shadow-lg">
          {/* Success Header Section */}
          <CardBody className="bg-gradient-to-r from-green-50 to-green-100 p-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-10 h-10 text-white" strokeWidth={3} />
                </div>
              </div>
              <h1 className="mt-6 text-2xl font-bold text-green-700">Nộp bài thành công!</h1>
              <p className="mt-2 text-green-600">Chúc mừng bạn đã hoàn thành bài thi</p>
            </div>
          </CardBody>

          {/* Results Section */}
          <CardBody className="p-6">
            <Table 
              aria-label="Kết quả bài thi"
              classNames={{
                wrapper: "shadow-sm",
                th: "bg-blue-50 text-blue-700",
                td: "text-gray-600"
              }}
            >
              <TableHeader>
                <TableColumn className="font-semibold text-lg">Thông tin</TableColumn>
                <TableColumn className="font-semibold text-lg">Chi tiết</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell className="font-medium">Thời gian làm bài</TableCell>
                  <TableCell>45 phút</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell className="font-medium">Số câu đúng</TableCell>
                  <TableCell>
                    <span className="text-green-600 font-semibold">28</span>
                    <span className="text-gray-700">/30 câu</span>
                  </TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell className="font-medium">Điểm số</TableCell>
                  <TableCell>
                    <span className="text-green-600 font-semibold">9.3</span>
                    <span className="text-gray-700">/10</span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            {/* Actions Section */}
            <div className="mt-6 flex justify-center gap-4">
              <Button
                color="primary"
                size="lg"
                className="font-semibold"
              >
                Xem đáp án
              </Button>
              <Button 
                variant="bordered"
                size="lg"
                className="text-blue-600 border-blue-200 font-semibold"
              >
                Quay lại trang chủ
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}