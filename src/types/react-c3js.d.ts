declare module "react-c3js" {
  import { ArrayOrString, ChartConfiguration, Data, PrimitiveArray } from "c3";
  import * as React from "react";

  export interface IC3ChartProps extends ChartConfiguration {
    className?: string;
    style?: React.CSSProperties;
    unloadBeforeLoad?: boolean;
  }

  export class C3Chart extends React.Component<IC3ChartProps> {}

  export default C3Chart;
}
