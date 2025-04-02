import { Button } from "./ui/button"
import { toast } from "sonner"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteJobAction } from "@/utils/actions"


type DeleteJobBtnProps = {
  id: string
}

const DeleteJobBtn = ({id} : DeleteJobBtnProps) => {
  
  const queryClient = useQueryClient();

  const {mutate, isPending} = useMutation({
    mutationFn: (id: string) => deleteJobAction(id),
    onSuccess: (data) => {
      if(!data) {
        toast('there was an error...')
        return;
      }
      
      queryClient.invalidateQueries({queryKey: ['jobs']})
      queryClient.invalidateQueries({queryKey: ['stats']})
      queryClient.invalidateQueries({queryKey: ['charts']})
      toast('job removed')
    }
  })

  return (
    <Button 
      size={"sm"}
      disabled={isPending}
      onClick={() => mutate(id)}>
        {isPending? 'deleting...' : 'delete'}
    </Button>
  )
}

export default DeleteJobBtn