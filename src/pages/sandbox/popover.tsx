import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import ExamplePopover from "@/components/modules/popover/popover-example";

export default function Popovers() {
  return (
    <main>
      <Seo title="Popover" description="popover page" />
      <Typography variant="h4">Popover</Typography>
      <section className="flex justify-center">
        {" "}
        <ExamplePopover />
      </section>
    </main>
  );
}
