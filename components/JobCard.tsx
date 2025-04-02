import { JobType } from "@/utils/types"
import { BadgeCheck, Map, CalendarClock, SignalHigh } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import JobInfo from "./JobInfo"
import DeleteJobBtn from "./DeleteJobBtn"

const JobCard = ({job}: {job: JobType}) => {
  const date = new Date(job.createdAt).toLocaleDateString();

  return (
    <Card className="bg-muted">
      <CardHeader>
        <CardTitle>{job.position}</CardTitle>
        <CardDescription>{job.company}</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="mt-4 grid grid-cols-2 gap-4">
        <JobInfo text={job.mode} icon={<BadgeCheck />} />
        <JobInfo text={job.location} icon={<Map />} />  
        <JobInfo text={date} icon={<CalendarClock />} />
        <Badge className="w-32 justify-center">
          <JobInfo text={job.status} icon={<SignalHigh className="w-4 h-4" />} />
        </Badge>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Button asChild size={"sm"}>
          <Link href={`jobs/${job.id}`}>
            edit
          </Link>
        </Button>
        <DeleteJobBtn />
      </CardFooter>
    </Card>
  )
}

export default JobCard