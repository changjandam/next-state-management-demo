import { create } from 'zustand';

interface Store {
  query: string;
  setQuery: (query: string) => void;
}

export const useStore = create<Store>()((set) => ({
  query: '',
  setQuery: (query: string) => set(() => ({ query })),
}));
