import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './queryClient'

interface Props {
  children: React.ReactNode
}

const TanstackQueryProvider: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default TanstackQueryProvider
