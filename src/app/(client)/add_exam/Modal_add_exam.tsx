import React, { useEffect, useState } from "react";
import { X, Plus, Trash2 } from "lucide-react";
import { getItemExamQuestion, updateExam } from "@/app/service/examquestion";
import { toast } from "react-toastify";
import { useStore } from "@/app/store";

const ModalAddExam = ({
  onClose,
  setReload,
  reload,
  dataEdit,
  setDataEdit,
}: {
  onClose: () => void;
  setReload: any;
  reload: boolean;
  dataEdit: any;
  setDataEdit: any;
}) => {
  const { dataUsers } = useStore();

  const [formData, setFormData] = useState({
    class: dataEdit ? dataEdit.class : "",
    lecturer: dataEdit ? dataEdit.username : dataUsers?.username || "", // Set default value from dataUsers
    subject: dataEdit ? dataEdit.subject : "",
    exam_day: dataEdit
      ? new Date(dataEdit.exam_day).toLocaleString("sv-SE").slice(0, 16)
      : "",
    day_close: dataEdit
      ? new Date(dataEdit.day_close).toLocaleString("sv-SE").slice(0, 16)
      : "",
    point: dataEdit ? dataEdit.point : "10",
    duration: dataEdit ? dataEdit.duration : "30",
    see_exam_results: dataEdit ? dataEdit.see_exam_results : true,
    status_exam: dataEdit ? dataEdit.status_exam : false,
  });

  const [questions, setQuestions] = useState(
    dataEdit
      ? dataEdit.question.map((item: any) => ({
          question: item.question,
          answerA: item.answerA,
          answerB: item.answerB,
          answerC: item.answerC,
          answerD: item.answerD,
          results: item.results,
        }))
      : [
          {
            question: "",
            answerA: "",
            answerB: "",
            answerC: "",
            answerD: "",
            results: "",
          },
        ]
  );

  useEffect(() => {
    // Update lecturer when dataUsers changes
    setFormData((prev) => ({
      ...prev,
      lecturer: dataUsers?.username || "",
    }));
  }, [dataUsers]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleQuestionChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const newQuestions = [...questions];
    newQuestions[index] = {
      ...newQuestions[index],
      [field]: value,
    };
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: "",
        results: "",
      },
    ]);
  };

  const removeQuestion = (index: number) => {
    setQuestions(questions.filter((a: any, i: number) => i !== index));
  };

  const validateForm = () => {
    toast.dismiss();
    // Kiểm tra các trường trong formData
    const requiredFields = [
      "class",
      "lecturer",
      "subject",
      "exam_day",
      "day_close",
    ];
    for (const field of requiredFields) {
      if (!formData[field as keyof typeof formData]) {
        toast.error(`Vui lòng điền đầy đủ thông tin `);
        return false;
      }
    }

    // Kiểm tra các câu hỏi
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      if (
        !q.question ||
        !q.answerA ||
        !q.answerB ||
        !q.answerC ||
        !q.answerD ||
        !q.results
      ) {
        toast.error(`Vui lòng điền đầy đủ thông tin cho câu hỏi ${i + 1}`);
        return false;
      }
    }

    return true;
  };

  // tạo
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formattedData = {
      ...formData,
      exam_day: formData.exam_day,
      day_close: formData.day_close,
    };

    getItemExamQuestion(
      questions,
      formattedData,
      dataUsers.information_teacher.mgv
    );
    handleResetFormAndClose();
    setReload(!reload);
  };

  // cập nhật
  const handleUpdateExam = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formattedData = {
      ...formData,
      exam_day: formData.exam_day,
      day_close: formData.day_close,
    };
    const data = await updateExam(
      dataEdit.id,
      formattedData,
      questions,
      dataUsers.information_teacher.mgv
    );

    if (data.ok) {
      handleResetFormAndClose();
      setReload(!reload);
    }
  };
  // đặt lại form và đóng modal
  const handleResetFormAndClose = () => {
    setFormData({
      class: "",
      lecturer: dataUsers?.username || "",
      subject: "",
      exam_day: "",
      day_close: "",

      point: "10",
      duration: "30",
      see_exam_results: true,
      status_exam: false,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-7xl mx-4 h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Thêm bài thi mới</h2>
          <button
            onClick={handleResetFormAndClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 flex overflow-hidden">
          <div className="flex w-full">
            {/* Left side */}
            <div className="w-1/2 p-6 border-r">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Lớp
                  </label>
                  <input
                    type="text"
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Nhập tên lớp"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Giảng viên
                  </label>
                  <input
                    type="text"
                    name="lecturer"
                    value={formData.lecturer}
                    onChange={handleChange}
                    disabled
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Tên giảng viên"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Môn thi
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Tên môn thi"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Điểm
                  </label>
                  <input
                    type="number"
                    name="point"
                    value={formData.point}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Nhập điểm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Ngày thi
                  </label>
                  <input
                    type="datetime-local"
                    name="exam_day"
                    value={formData.exam_day}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Ngày đóng
                  </label>
                  <input
                    type="datetime-local"
                    name="day_close"
                    value={formData.day_close}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Thời gian làm bài (phút)
                  </label>
                  <input
                    type="number"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Nhập thời gian"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="see_exam_results"
                      checked={formData.see_exam_results}
                      onChange={handleChange}
                      className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm font-semibold text-gray-700">
                      Xem kết quả bài thi
                    </span>
                  </label>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="status_exam"
                      checked={formData.status_exam}
                      onChange={handleChange}
                      className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm font-semibold text-gray-700">
                      Trạng thái kỳ thi
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Right side - Questions */}
            <div className=" w-1/2 p-2 overflow-y-auto bg-gray-50">
              <div className="sticky  top-[-10] z-10 bg-gray-50 flex justify-between  items-center py-4 ">
                <h3 className="text-xl font-bold text-gray-800">Câu hỏi</h3>
                <button
                  type="button"
                  onClick={addQuestion}
                  className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                >
                  <Plus className="w-5 h-5" />
                  <span className="font-medium">Thêm câu hỏi</span>
                </button>
              </div>

              <div className="space-y-6">
                {questions.map((question: any, index: any) => (
                  <div
                    key={index}
                    className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm relative"
                  >
                    <button
                      type="button"
                      onClick={() => removeQuestion(index)}
                      className="absolute top-4 right-4 p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>

                    <div className="space-y-5">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Câu hỏi {index + 1}
                        </label>
                        <textarea
                          value={question.question}
                          onChange={(e) =>
                            handleQuestionChange(
                              index,

                              "question",
                              e.target.value
                            )
                          }
                          className="w-full h-[150px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="Nhập câu hỏi"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">
                            Đáp án A
                          </label>
                          <input
                            type="text"
                            value={question.answerA}
                            onChange={(e) =>
                              handleQuestionChange(
                                index,
                                "answerA",
                                e.target.value
                              )
                            }
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            placeholder="Nhập đáp án A"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">
                            Đáp án B
                          </label>
                          <input
                            type="text"
                            value={question.answerB}
                            onChange={(e) =>
                              handleQuestionChange(
                                index,
                                "answerB",
                                e.target.value
                              )
                            }
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            placeholder="Nhập đáp án B"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">
                            Đáp án C
                          </label>
                          <input
                            type="text"
                            value={question.answerC}
                            onChange={(e) =>
                              handleQuestionChange(
                                index,
                                "answerC",
                                e.target.value
                              )
                            }
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            placeholder="Nhập đáp án C"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">
                            Đáp án D
                          </label>
                          <input
                            type="text"
                            value={question.answerD}
                            onChange={(e) =>
                              handleQuestionChange(
                                index,
                                "answerD",
                                e.target.value
                              )
                            }
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            placeholder="Nhập đáp án D"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Đáp án đúng
                        </label>
                        <select
                          value={question.results}
                          onChange={(e) =>
                            handleQuestionChange(
                              index,
                              "results",
                              e.target.value
                            )
                          }
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        >
                          <option>Chọn đáp án đúng</option>
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                          <option value="D">D</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </form>

        <div className="border-t p-6 flex justify-end gap-3 bg-gray-50">
          <button
            type="button"
            onClick={handleResetFormAndClose}
            className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
          >
            Hủy
          </button>
          <button
            type="submit"
            onClick={!dataEdit ? handleSubmit : handleUpdateExam}
            className="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            {dataEdit ? "Cập nhật" : "Lưu"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAddExam;
