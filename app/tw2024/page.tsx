"use client";

import Title from "@/components/app/title";
import Chart from "@/components/tw2024/chart";
import Countdown from "@/components/tw2024/countdown";
import Explainer from "@/components/tw2024/explainer";
import List from "@/components/tw2024/list";

const Tw2024Page: React.FC = () => {
  return (
    <>
      <Title
        title="2024 Taiwan Election Polls: Accurate Aggregation & Analysis"
        subtitle="Unbiased, comprehensive poll data from diverse sources for a clear view of the 2024 Taiwan election landscape."
      />
      <Chart />
      <Countdown />
      <Explainer />
      <List />
    </>
  );
};

export default Tw2024Page;
