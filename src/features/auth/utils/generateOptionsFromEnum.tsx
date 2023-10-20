import { Option } from "@mui/joy";
import { useId } from "react";
import { SelectableCountries } from "./enums";

export const generateOptionsFromEnum = () => {
  const opts = [];
  const c = Object.values(SelectableCountries);
  for (const iterator in SelectableCountries) {
    opts.push(
      <Option value={iterator} key={useId()}>
        {c.shift()}
      </Option>
    );
  }
  return opts;
};
