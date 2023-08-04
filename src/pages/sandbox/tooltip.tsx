import Button from "@/components/buttons/button";
import IconButton from "@/components/buttons/icon-button";
import Seo from "@/components/core/seo";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/core/tooptip";
import Typography from "@/components/core/typography";
import { SiNextdotjs } from "react-icons/si";
export default function Tooltips() {
  return (
    <main>
      <Seo title="Tooltips" description="Tooltips" />
      <Typography variant="h4">Tooltip</Typography>
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="primary" size="base" rightIcon={SiNextdotjs}>
              Hover me!
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <Typography variant="p" color="black">
              This is NextJs
            </Typography>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </main>
  );
}
