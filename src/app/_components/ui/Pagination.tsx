"use client";
import React from "react";
import { Pagination } from "@nextui-org/react";

export default function NextPagination({ total }: { total: number }) {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <div className="flex justify-center items-center gap-5 mt-16">
      <div className="flex flex-col gap-5 t">
        {/* <p className="text-small text-default-500">
          Selected Page: {currentPage}
        </p> */}
        <Pagination
          color="primary"
          page={currentPage}
          total={total}
          onChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
