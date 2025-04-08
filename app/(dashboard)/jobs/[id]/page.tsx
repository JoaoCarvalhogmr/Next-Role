import EditJobForm from "@/components/EditJobForm";
import { getSingleJobAction } from "@/utils/actions";
import { dehydrate
    , QueryClient, 
    HydrationBoundary
 } from "@tanstack/react-query";

export default async function JobDetailPage ({params}: {params: {id: string} }) {
    const queryClient = new QueryClient();
    
    const {id} = await params;
    
    await queryClient.prefetchQuery({
        queryKey: ['job', id],
        queryFn: () => getSingleJobAction(id)
    })

    

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <EditJobForm jobId={id} />
        </HydrationBoundary>
    )
}