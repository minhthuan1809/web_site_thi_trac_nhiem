"use client";
import Detail_Practice from "@/app/_components/common/detail_question/Detail_Practice";
import Loading from "@/app/_components/common/Loading";
import { getPracticeDetail } from "@/app/service/practice_api";
import React, { useEffect, useState } from "react";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default function PracticeDetailPage({ params }: PageProps) {
  const [dataPractice, setDataPractice] = useState<any>(null);
  const [resolvedParams, setResolvedParams] = useState<any>(null);

  useEffect(() => {
    const resolveParams = async () => {
      const resolved = await params;
      setResolvedParams(resolved);
    };
    resolveParams();
  }, [params]);

  useEffect(() => {
    const fetchDataPractice = async () => {
      const dataPractice = await getPracticeDetail();
      setDataPractice(dataPractice.data.exam);
    };
    fetchDataPractice();
  }, [resolvedParams]);

  if (!dataPractice || !resolvedParams) {
    return <Loading />;
  }

  return (
    <div className="mt-[5rem]">
      <Detail_Practice params={resolvedParams} data={dataPractice} />
    </div>
  );
}
