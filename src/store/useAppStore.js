import { create } from 'zustand';

// Basic app store
const useAppStore = create((set) => ({
  // Theme
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  
  // User preferences
  preferences: {
    showNotifications: true,
    language: 'en',
  },
  updatePreferences: (newPreferences) => 
    set((state) => ({ 
      preferences: { ...state.preferences, ...newPreferences } 
    })),
    
  // UI state
  ui: {
    sidebarOpen: false,
    activeModal: null,
  },
  updateUI: (changes) => 
    set((state) => ({ 
      ui: { ...state.ui, ...changes } 
    })),
  toggleSidebar: () => 
    set((state) => ({ 
      ui: { ...state.ui, sidebarOpen: !state.ui.sidebarOpen } 
    })),
}));

export default useAppStore; 