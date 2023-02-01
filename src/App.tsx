import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SiteContent from './layout/SiteContent';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Button, ConfigProvider } from 'antd'

const queryClient = new QueryClient()

function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ConfigProvider theme={{ token: { fontSize: 14 } }}>
            <SiteContent></SiteContent>
          </ConfigProvider>
        </BrowserRouter>
        {/* {process.env.NODE_ENV === "development" && <ReactQueryDevtools initialIsOpen={false} />} */}
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
