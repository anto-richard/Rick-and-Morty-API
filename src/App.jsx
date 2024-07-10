// src/App.js
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import CharacterList from './assets/components/CharacterList';
import './App.css';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <CharacterList />
      </div>
    </QueryClientProvider>
  );
};

export default App;
