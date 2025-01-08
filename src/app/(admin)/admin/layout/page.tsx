"use client"
import { useSearchParams } from 'next/navigation'
import EditFooter from './EditFooter'
import { Suspense } from 'react'

function LayoutContent() {
  const searchParams = useSearchParams()
  const page = searchParams.get("page")
  console.log("page", page)
  
  return (
    <div>
      {page === "footer" && <EditFooter/>  }
    </div>
  )
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LayoutContent />
    </Suspense>
  )
}

