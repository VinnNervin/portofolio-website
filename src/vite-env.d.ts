/// <reference types="vite/client" />

// Ensure TypeScript understands .vue single-file components.
// Some editor setups still need this explicit declaration to avoid TS2307 errors.
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>
  export default component
}
