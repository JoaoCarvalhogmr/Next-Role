'use client'
import { Input } from "./ui/input"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Button } from "./ui/button"

import { Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
 } from "./ui/select"
 import { JobStatus } from "@/utils/types"


const SearchForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get('search') as string;
    const jobStatus = formData.get('jobStatus') as string;

    console.log(search, jobStatus)

  }

  return (
    <form action="" className="bg-muted mb-16 p-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-lg" onSubmit={handleSubmit}>
      <Input 
        type="text" 
        placeholder="Search Jobs" 
        name="search" 
        className="!bg-white text-black placeholder:text-black/50" 
      />
      <Select  name="jobStatus" defaultValue="all">
        <SelectTrigger className="!bg-white text-black" >
          <SelectValue placeholder="select job" />
        </SelectTrigger>
        <SelectContent className="!bg-white">
        {
          ['all', ...Object.values(JobStatus)].map((jobStatus) => {
            return <SelectItem className="text-black hover:!bg-muted" key={jobStatus} value={jobStatus}>
                {jobStatus}
            </SelectItem>
          })
        }
        </SelectContent>
      </Select>
        <Button type="submit">
          Search
        </Button>
    </form>
    
    
  )
}

export default SearchForm