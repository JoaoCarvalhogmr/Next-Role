import { zodResolver } from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import { JobStatus, CreateAndEditJobType, JobMode, createAndEditJobSchema } from "@/utils/types";
import { Button } from "./ui/button";
import { Form } from "./ui/form";
import {CustomFormField, CustomFormSelect} from "./FormComponents";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { createJobAction, getSingleJobAction, updateJobAction } from "@/utils/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


const EditJobForm = ({jobId}: {jobId: string}) => {
  const queryClient = useQueryClient();

  const router = useRouter();

  const {data} = useQuery({
    queryKey: ['job', jobId],
    queryFn: () => getSingleJobAction(jobId)
  })
  
  const {mutate, isPending} = useMutation({
    mutationFn: (data: CreateAndEditJobType) => updateJobAction(jobId, data),
    onSuccess: (data) => {
      if(!data) {
        toast("there was an error...");
        return;
      }
      toast("job updated");
      queryClient.invalidateQueries({queryKey: ["jobs"]});
      queryClient.invalidateQueries({queryKey: ["job", jobId]});
      queryClient.invalidateQueries({queryKey: ["stats"]});
      router.push("/jobs");
    }
  })

  const form = useForm<CreateAndEditJobType>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      company: data?.company || "",
      position: data?.position || "",
      location: data?.location || "",
      status: (data?.status as JobStatus) || JobStatus.Pending,
      mode: (data?.mode as JobMode) || JobMode.FullTime
    }
  })

  const onSubmit = (values: CreateAndEditJobType) => {
    mutate(values);
  }



  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="bg-muted p-8 rounded">
        <h2 className="capitalize font-semibold text-4xl mb-6">
          edit job
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
          <CustomFormField name="position" control={form.control}  />
          <CustomFormField name="company" control={form.control} />
          <CustomFormField name="location" control={form.control} />
          <CustomFormSelect 
            name="status"
            control={form.control}
            labelText="job status"
            items={Object.values(JobStatus)}
          />
          <CustomFormSelect 
            name="mode"
            control={form.control}
            labelText="job mode"
            items={Object.values(JobStatus)}
          />          
          <Button
            type="submit"
            className="self-end capitalize"
            disabled={isPending}
          >
            {isPending ? "updating..." : "edit job"}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default EditJobForm