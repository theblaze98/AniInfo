/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WAIFUITAPI_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
