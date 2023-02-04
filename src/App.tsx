import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SiteContent from './layout/SiteContent';
import { QueryClient, QueryClientProvider } from 'react-query'
import { Button, ConfigProvider } from 'antd'
import Auth from './components/Auth';
import "./App.css"

const queryClient = new QueryClient()

function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ConfigProvider theme={{ token: { fontSize: 14 } }}>
            <Auth>
              <SiteContent></SiteContent>
            </Auth>
          </ConfigProvider>
        </BrowserRouter>
        {/* {process.env.NODE_ENV === "development" && <ReactQueryDevtools initialIsOpen={false} />} */}
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
