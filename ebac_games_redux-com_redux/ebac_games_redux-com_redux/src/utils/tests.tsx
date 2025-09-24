import { PreloadedState } from "@reduxjs/toolkit"
import { RenderOptions } from "@testing-library/react"

interface ExetendedRenderOptions extends Omit<RenderOptions, 'queries'>{
  preloadedState?: PreloadedState
}

export function renderizaComProvider(
  elemento: React.ReactElement,
  {
    preloadedState = {},
    store,
    ...opcoesAdicionais
  }: ExetendedRenderOptions = {}
)
