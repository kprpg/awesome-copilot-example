import Link from "next/link";
import { getFormattedDate } from "@/lib/date-utils";

export default function DatePage() {
  // Using server component to get the date at request time
  const today = getFormattedDate(new Date());

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-3xl font-bold mb-2">Today&apos;s Date</h1>
        
        <div className="bg-black/[.05] dark:bg-white/[.06] px-6 py-4 rounded-lg text-2xl font-[family-name:var(--font-geist-mono)] font-semibold">
          {today}
        </div>
        
        <Link 
          href="/"
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
        >
          Back to Home
        </Link>
      </main>
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-500">
        <p>Date displayed in your local timezone</p>
      </footer>
    </div>
  );
}
