import React from "react";

import { IBaseFieldProps } from "./types";

export interface ISubmitFieldProps extends IBaseFieldProps {
  text: string;
}

export default class SubmitField extends React.Component<ISubmitFieldProps> {
  render() {
    const { className = "", inputProps, text } = this.props;
    return <input type="submit" {...inputProps} value={text} />;
  }
}
