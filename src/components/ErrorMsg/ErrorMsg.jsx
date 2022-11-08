import React from "react";
import { Badge } from "reactstrap";

const ErrorMsg = ({ value }) => {
  return value ? (
    <Badge className="badge-dot text-danger">
        {value} 
    </Badge>
  ) : null;
};

export default ErrorMsg;