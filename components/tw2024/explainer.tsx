import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";

interface ExplainerItem {
  label: string;
  content: string;
}

const Explainer: React.FC = () => {
  const explainerItems: ExplainerItem[] = [
    {
      label: "What are the major issues driving the election?",
      content:
        "In the 2024 Taiwan presidential election, major driving issues include domestic challenges like energy policy, national defense, economic development, the COVID-19 vaccine rollout, housing costs, and economic struggles. Internationally, the election is influenced by Taiwan’s relations with Mainland China and the United States, alongside broader geopolitical concerns.",
    },
    {
      label: "Who are the main candidates and what are their platforms?",
      content:
        "The main candidates for the 2024 Taiwan Presidential Election are Lai Ching-te, the chosen successor of President Tsai Ing-wen and vice-president since 2019, Hou You-yi from the Kuomintang (KMT), Ko Wen-je from the Taiwan People's Party (TPP), and Terry Gou, the founder of Foxconn. Lai emphasizes unity, strengthening Taiwan, and ensuring its security. Hou has struggled with questions about competence and strategy. Ko has attempted to position himself as a neutral third option. Terry Gou's campaign has faced numerous scandals. Their platforms differ on cross-Strait relations, with Lai taking a cautious stance on Taiwan's independence, Hou's stance being less clear, Ko attempting to position himself as a neutral third option, and Terry Gou's stance being unclear.",
    },
    {
      label: "What is the global significance of this election?",
      content:
        "The 2024 Taiwan Presidential Election holds global significance as it could impact the region's geopolitical dynamics, particularly in the context of China-Taiwan relations. The election's outcome could influence Taiwan's stance on its status as a sovereign nation or a province of China, which is a contentious issue that has implications for regional stability and international relations. The election also reflects the complex interplay of domestic politics and foreign policy, as the candidates' platforms and their positions on cross-Strait relations could shape Taiwan's role in the international community.",
    },
    {
      label: "How are candidates approaching cross-Strait relations?",
      content:
        "The candidates for the 2024 Taiwan Presidential Election have different approaches to cross-Strait relations. Lai Ching-te takes a cautious stance on Taiwan's independence and wants to diversify the island's economic relationships. Hou You-yi's stance is less clear, but he has shown signs of straying from Tsai's energy policy. Ko Wen-je attempts to position himself as a neutral third option, aligning more with the pan-Blue camp and showing potential to tilt Taiwan economically and politically toward the mainland. Terry Gou's stance is unclear, but his campaign has been marked by numerous scandals. Their platforms and positions on cross-Strait relations could shape Taiwan's role in the international community and its relations with China and other countries.",
    },
  ];

  return (
    <Stack spacing={2} className="p-8 text-start">
      {explainerItems.map((item, index) => (
        <Accordion
          key={index}
          className="border roudned border-gray-700 shadow-none"
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="font-medium">{item.label}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="font-light">{item.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
};

export default Explainer;
