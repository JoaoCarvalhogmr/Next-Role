'use client'

import { Form } from './ui/form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import { CustomFormField, CustomFormSelect } from "./FormComponents";
import { Button } from "./ui/button";
import { createAndEditJobSchema, CreateAndEditJobType, JobMode, JobStatus } from "@/utils/types";

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createJobAction } from '@/utils/actions';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const CreateJobForm = () => {

    const form = useForm<CreateAndEditJobType>({
        resolver: zodResolver(createAndEditJobSchema),
        defaultValues: {
          position: "",
          company: "",
          location: "",
          status: JobStatus.Pending,
          mode: JobMode.FullTime
        },
      })

    const queryClient = useQueryClient();
    const router = useRouter();
    const {mutate, isPending} = useMutation({
      mutationFn: (values: CreateAndEditJobType) => createJobAction(values),
      onSuccess: (data) => {
        if(!data) {
          toast.error("There was an error...")
          return;
        }

        toast.success("Job created successfully");
        queryClient.invalidateQueries({queryKey: ['jobs']});
        queryClient.invalidateQueries({queryKey: ['stats']});
        queryClient.invalidateQueries({queryKey: ['charts']});
        //form.reset();
        router.push('/jobs');
      }
    })
    
    const onSubmit = (values: CreateAndEditJobType) => {
        mutate(values)
        
    }
    
    return (

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='bg-muted p-8 rounded'
        >
          <h2 className='capitalize font-semibold text-4xl mb-6'>add job</h2>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start'>
            
            <CustomFormField name='position' control={form.control} />
            <CustomFormField name='company' control={form.control} />
            <CustomFormField name='location' control={form.control} />
            <CustomFormSelect
              name='status'
              control={form.control}
              labelText='job status'
              items={Object.values(JobStatus)}
            />
            <CustomFormSelect
              name='mode'
              control={form.control}
              labelText='job mode'
              items={Object.values(JobMode)}
            />
  
            <Button type='submit' className='self-end capitalize' disabled={isPending}>
              {isPending ? 'loading' : 'create job'}
            </Button>
          </div>
        </form>
      </Form>
    );
  }


export default CreateJobForm