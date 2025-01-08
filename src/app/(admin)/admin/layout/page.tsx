"use client"
    import { useSearchParams } from 'next/navigation'
import EditFooter from './EditFooter'

export default function page() {
    const searchParams = useSearchParams()  
    const page = searchParams.get("page")
    console.log("page", page)
  return (
    <div>
        {page === "footer" && <EditFooter/>  }
    </div>
  )
}

