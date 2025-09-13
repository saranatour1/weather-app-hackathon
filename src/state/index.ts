import { create } from 'zustand'

type Unit = "imperial" | "metric"

interface UnitStoreProps {
  unit: Unit
  setUnit: (unit: Unit) => void
  toggleUnit: () => void
}

const useUnitStore = create<UnitStoreProps>((set) => ({
  unit: "metric",
  setUnit: (unit) => set({ unit }),
  toggleUnit: () =>
    set((state) => ({
      unit: state.unit === "metric" ? "imperial" : "metric",
    })),
}))

export default useUnitStore
