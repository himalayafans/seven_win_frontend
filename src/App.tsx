import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SiteContent from './layout/SiteContent';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <SiteContent></SiteContent>
        </BrowserRouter>
        {process.env.NODE_ENV === "development" && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
