import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Split UI components
          ui: ['@/components/ui/button', '@/components/ui/card', '@/components/ui/input'],
          // Split pages
          home: ['@/pages/Home'],
          opportunities: ['@/pages/Opportunities'],
          services: ['@/pages/Services'],
          about: ['@/pages/About'],
          contact: ['@/pages/Contact'],
          shop: ['@/pages/Shop']
        }
      }
    }
  }
}));