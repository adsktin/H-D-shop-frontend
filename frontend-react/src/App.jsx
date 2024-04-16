import React from 'react';
import TEST from './components/test';

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center bg-red-500">Hello, React with Vite and Tailwind!</h1>
      <div className='text-gray-500'> this is div app</div>
      <TEST/>
    </div>
  );
}

export default App;
