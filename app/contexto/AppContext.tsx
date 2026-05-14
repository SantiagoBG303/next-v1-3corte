"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type AppContextType = {
  nombre: string;
  setNombre: (nombre: string) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [nombre, setNombre] = useState("santiago");

  return (
    <AppContext.Provider value={{ nombre, setNombre }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext debe usarse dentro de AppProvider");
  }

  return context;
}