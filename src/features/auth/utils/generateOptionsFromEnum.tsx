import { Option } from "@mui/joy";
import { SelectableCountries } from "./enums";

export const generateOptionsFromEnum = () => {
  const opts = [];
  const c = Object.values(SelectableCountries);
  for (const iterator in SelectableCountries) {
    opts.push(
      <Option value={iterator} key={iterator}>
        {c.shift()}
      </Option>
    );
  }
  return opts;
};
//TODO DRY
import { ControllerRenderProps } from "react-hook-form";
export const generateOptionsFromEnumRHF = (
  fieldProp?: ControllerRenderProps<any, any>
) => {
  const opts = [];
  const c = Object.values(SelectableCountries);
  for (const iterator in SelectableCountries) {
    opts.push(
      <Option {...fieldProp} value={iterator} key={iterator}>
        {c.shift()}
      </Option>
    );
  }
  return opts;
};
