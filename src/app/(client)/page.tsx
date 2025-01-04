"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import {
  BookOpen,
  CheckCircle2,
  Globe,
  Users,
  BookCheck,
  GraduationCap,
  Star,
} from "lucide-react";

const Introduction = () => {
  return (
    <div className="min-h-screen bg-white mt-[5rem]">
      {/* Hero Section */}
      <div className="relative h-[600px] w-full ">
        <img
          src="https://eaut.edu.vn/wp-content/uploads/2023/10/AnyConv.com__bn6.webp"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center text-white px-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <GraduationCap className="w-16 h-16 md:w-20 md:h-20" />
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Hệ Thống Thi Trắc Nghiệm Online
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg md:text-xl lg:text-2xl"
            >
              Nền tảng học tập và kiểm tra kiến thức hiện đại
            </motion.p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-16"
        >
          Tính năng nổi bật
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <BookOpen className="w-8 h-8" />,
              title: "Đa dạng bài thi",
              description:
                "Hệ thống cung cấp nhiều dạng bài thi đa dạng từ các môn học cơ bản đến chuyên ngành.",
            },
            {
              icon: <CheckCircle2 className="w-8 h-8" />,
              title: "Chấm điểm tự động",
              description:
                "Kết quả và phân tích chi tiết được cung cấp ngay sau khi hoàn thành bài thi.",
            },
            {
              icon: <Globe className="w-8 h-8" />,
              title: "Học mọi lúc mọi nơi",
              description:
                "Truy cập và làm bài thi mọi lúc mọi nơi trên các thiết bị khác nhau.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card className="shadow-lg">
                <CardHeader className="pb-2 pt-6 px-6">
                  <div className="flex flex-col gap-2">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="text-blue-600"
                    >
                      {feature.icon}
                    </motion.div>
                    <h4 className="text-xl font-bold">{feature.title}</h4>
                  </div>
                </CardHeader>
                <CardBody className="pb-6 px-6">
                  <p className="text-gray-600">{feature.description}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Users />, value: "1000+", label: "Học viên" },
              { icon: <BookCheck />, value: "500+", label: "Bài thi" },
              { icon: <GraduationCap />, value: "50+", label: "Giáo viên" },
              { icon: <Star />, value: "4.8", label: "Đánh giá trung bình" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex justify-center mb-4 text-blue-600"
                >
                  {React.cloneElement(stat.icon, { size: 32 })}
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                  className="text-3xl md:text-4xl font-bold text-blue-600"
                >
                  {stat.value}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                  className="mt-2 text-gray-600"
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
