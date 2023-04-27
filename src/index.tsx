import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Routes } from 'react-router-dom'

const RootLayout = lazy(() => import('./Pages/RootLayout'));
const PostsScreen = lazy(() => import('./Pages/PostsScreen'));
const PostDetailsScreen = lazy(() => import('./Pages/PostDetailsScreen'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className='App'>
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<PostsScreen />} />
            <Route path="/Post" element={<PostDetailsScreen />} />
          </Route>
        </Routes>
      </Suspense>
      </BrowserRouter>
      </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
