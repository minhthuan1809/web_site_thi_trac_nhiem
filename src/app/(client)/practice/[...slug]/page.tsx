import Detail_Practice from "@/app/_components/common/detail_question/Detail_Practice";
import React from "react";

interface PageProps {
  params: {
    slug: string[];
  };
}

export default function PracticeDetailPage({ params }: PageProps) {
  return (
    <div className="mt-[5rem]">
      <Detail_Practice params={params} />
    </div>
  );
}
