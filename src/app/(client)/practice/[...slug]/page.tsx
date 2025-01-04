import Detail_Practice from "@/app/_components/common/detail_question/Detail_Practice";
import React from "react";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function PracticeDetailPage({ params }: PageProps) {
  const resolvedParams = await params;

  return (
    <div className="mt-[5rem]">
      <Detail_Practice params={resolvedParams} />
    </div>
  );
}
