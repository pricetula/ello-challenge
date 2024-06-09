import {
  useContext,
  createContext,
  useState,
  type ReactNode,
} from "react";

export interface AppState {
  openSearchBox: boolean;
}

export interface AppContextType {
  appState: AppState;
  setAppState: (appState: AppState) => void;
}

const initialState: AppState = {
  openSearchBox: false,
};

export const AppContext = createContext<AppContextType>({
  appState: initialState,
  setAppState: () => {},
});

export const useAppContext = () => {
  return useContext(AppContext);
};

export function AppContextProvider({children}: { children: ReactNode }) {
  const [appState, setAppState] = useState<AppState>(initialState);
  return (
    <AppContext.Provider value={{appState, setAppState}}>
      {children}
    </AppContext.Provider>
  );
}