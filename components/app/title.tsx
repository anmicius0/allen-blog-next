import * as React from "react";
import Typography from "@mui/material/Typography";

interface Props {
  title: string;
  subtitle?: React.ReactNode;
}

const Title: React.FC<Props> = ({ title, subtitle }) => (
  <>
    <Typography variant="h1" className="text-gray-900 text-3xl font-bold">
      {title}
    </Typography>
    {subtitle && (
      <Typography variant="body1" className="text-gray-600 text-lg font-normal">
        {subtitle}
      </Typography>
    )}
  </>
);

export default Title;
