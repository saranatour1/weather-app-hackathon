import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuTrigger,
  DropdownMenuSubContent,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuShortcut,
  DropdownMenuGroup,

} from "@/components/ui/dropdown-menu"
import { ArrowDown, CheckMark, Settings } from "../icons"
import useUnitStore from "@/state"
import { DropdownMenuCheckboxItem } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

type UnitSettings = {
  temperature: "celsius" | "fahrenheit"
  windSpeed: "kmh" | "mph"
  precipitation: "mm" | "inches"
}

export const UnitsDropDown = () => {
  const { unit, toggleUnit } = useUnitStore();

  // TODO :according to the figma its one or the other, so change this to use unit on line 28
  const [units, setUnits] = useState<UnitSettings>({
    temperature: "celsius",
    windSpeed: "kmh",
    precipitation: "mm",
  })

  const updateUnit = <K extends keyof UnitSettings>(category: K, value: UnitSettings[K]) => {
    setUnits((prev) => ({ ...prev, [category]: value }))
  }

  return (<DropdownMenu>
    <DropdownMenuTrigger className="bg-neutral-800 px-4 py-3 rounded-4 flex items-center justify-center gap-x-2.5">
      <Settings />
      <span className=" text-preset-7 text-neutral-0">Units</span>
      <ArrowDown />
    </DropdownMenuTrigger>

    <DropdownMenuContent align="start" className="w-56 bg-neutral-800 rounded-12 border-neutral-600 px-1.5 py-2 flex flex-col items-start justify-start gap-1">

      <DropdownMenuLabel className="text-preset-7 text-neutral-0 p-2.5 w-full">
        {unit === "imperial" ? "Switch to Imperial" : "Switch to Metric"}
      </DropdownMenuLabel>

      {/* Grouped Items */}
      <DropdownMenuGroup className="w-full flex items-start justify-start flex-col gap-2">
        <DropdownMenuLabel className="text-preset-8 text-neutral-300">Temperature</DropdownMenuLabel>
        <DropdownMenuCheckboxItem
          checked={units.temperature === "celsius"}
          onCheckedChange={() => updateUnit("temperature", "celsius")}
          className="text-preset-7 text-neutral-0 p-2.5 w-full flex items-center justify-between"
        >
          Celsius (°C)
          {units.temperature === "celsius" && <CheckMark />}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={units.temperature === "fahrenheit"}
          onCheckedChange={() => updateUnit("temperature", "fahrenheit")}
          className="text-preset-7 text-neutral-0 p-2.5 w-full flex items-center justify-between"
        >
          Fahrenheit (°F)
          {units.temperature === "fahrenheit" && <CheckMark />}
        </DropdownMenuCheckboxItem>
      </DropdownMenuGroup>

      <DropdownMenuSeparator className="bg-neutral-600 w-full" />

      <DropdownMenuGroup className="w-full">
        <DropdownMenuLabel className="text-preset-8 text-neutral-300">
          Wind Speed
        </DropdownMenuLabel>


        <DropdownMenuCheckboxItem
          checked={units.windSpeed === "kmh"}
          onCheckedChange={() => updateUnit("windSpeed", "kmh")}
          className="text-preset-7 text-neutral-0 p-2.5 w-full flex items-center justify-between"
        >
          km/h
          {units.windSpeed === "kmh" && <CheckMark />}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={units.windSpeed === "mph"}
          onCheckedChange={() => updateUnit("windSpeed", "mph")}
          className="text-preset-7 text-neutral-0 p-2.5 w-full flex items-center justify-between"
        >
          mph
          {units.windSpeed === "mph" && <CheckMark />}
        </DropdownMenuCheckboxItem>
      </DropdownMenuGroup>

      <DropdownMenuSeparator className="bg-neutral-600 w-full" />

      <DropdownMenuGroup className="w-full">
        <DropdownMenuLabel className="text-preset-8 text-neutral-300">
          Precipitation
        </DropdownMenuLabel>
        <DropdownMenuCheckboxItem
          checked={units.precipitation === "mm"}
          onCheckedChange={() => updateUnit("precipitation", "mm")}
          className="text-preset-7 text-neutral-0 p-2.5 w-full flex items-center justify-between"
        >
          Millimeters (mm)
          {units.precipitation === "mm" && <CheckMark />}

        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={units.precipitation === "inches"}
          onCheckedChange={() => updateUnit("precipitation", "inches")}
          className="text-preset-7 text-neutral-0 p-2.5 w-full flex items-center justify-between"
        >
          Inches (in)
          {units.precipitation === "inches" && <CheckMark />}

        </DropdownMenuCheckboxItem>
      </DropdownMenuGroup>

    </DropdownMenuContent>
  </DropdownMenu>)
}