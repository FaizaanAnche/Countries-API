import { create } from "zustand"
import { filterStates, themeState } from "@/types/types"

export const useThemeStore = create<themeState>()((set) => ({
    darkMode: false,
    toggleTheme : () => set((state) => ({darkMode: !state.darkMode}))
}))

  