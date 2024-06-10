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
// creating a context to store the app state and setAppState function
export const AppContext = createContext<AppContextType>({
  appState: initialState,
  setAppState: () => {},
});
// helper function to get the AppContext
export const useAppContext = () => {
  return useContext(AppContext);
};
// wrapper component to provide the AppContext to the app
export function AppContextProvider({children}: { children: ReactNode }) {
  const [appState, setAppState] = useState<AppState>(initialState);
  return (
    <AppContext.Provider value={{appState, setAppState}}>
      {children}
    </AppContext.Provider>
  );
}