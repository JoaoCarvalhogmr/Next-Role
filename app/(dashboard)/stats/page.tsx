import ChartsContainer from "@/components/ChartsContainer";
import StatsContainer from "@/components/StatsContainer";


import { getStatsAction, getChartsDataAction } from "@/utils/actions"
import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";


const StatsPage = async() => { 
  const queryClient = new QueryClient();
  
  await queryClient.fetchQuery({
    queryKey: ['stats'],
    queryFn: () => getStatsAction()
  })

  await queryClient.fetchQuery({
    queryKey: ['charts'],
    queryFn: () => getChartsDataAction()
  })

  
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <StatsContainer />
      <ChartsContainer />
    </HydrationBoundary>
  )
}

export default StatsPage