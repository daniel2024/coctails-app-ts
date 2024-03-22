import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Filters {
    searchQuery?:string;
    filterKey?:string;
}

interface FilterContextType {
  filters: Filters;
  updateFilters: (newFilters: Filters) => void;
}


const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function useFilters() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
}

interface FilterProviderProps {
  children: ReactNode;
}

// Crea el proveedor
export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
    const [filters, setFilters] = useState<Filters>({filterKey:'name', searchQuery:''});
  
    const updateFilters = (newFilters: Filters) => {
      setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
    };
  
    const value = { filters, updateFilters };
  
    return (
     <FilterContext.Provider value={value}>
     {children}
    </FilterContext.Provider>
     )
  };