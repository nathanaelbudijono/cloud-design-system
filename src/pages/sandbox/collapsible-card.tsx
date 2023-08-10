import CollapsibleCard from "@/components/card/collap-card";
import Typography from "@/components/core/typography";
import CollapCardContent from "@/constant/collapsible-card-content";
import { useState } from "react";

export default function CollapCard() {
  const [open, setOpen] = useState<number[]>([]);
  const { content } = CollapCardContent;

  function toggle(index: number) {
    if (open.includes(index)) {
      setOpen((prevOpen) => prevOpen.filter((i) => i !== index));
    } else {
      setOpen((prevOpen) => [...prevOpen, index]);
    }
  }

  return (
    <main>
      <Typography variant="h4">Collapsible Card</Typography>
      <section className="mb-5">
        {content?.map((item, index) => {
          return (
            <CollapsibleCard
              key={index}
              variant={index === 0 ? "primary" : "outline"}
              title={item.title}
              desc={item.desc}
              toggle={() => toggle(index)}
              open={open.includes(index)}
            />
          );
        })}
      </section>
    </main>
  );
}
