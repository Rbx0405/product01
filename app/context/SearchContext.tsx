'use client';

import React, { createContext, useContext, useState } from 'react';

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (isOpen: boolean) => void;
}

const SearchContext = createContext<SearchContextType | null>(null);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, isSearchOpen, setIsSearchOpen }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
