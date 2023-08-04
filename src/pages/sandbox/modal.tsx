import Button from "@/components/buttons/button";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import ExampleModal from "@/components/modules/modals/onclick-module";

export default function Modals() {
  return (
    <main>
      <Seo title="modal" description="modal" />
      <Typography variant="h4">Modal</Typography>
      <ExampleModal>
        {({ openModal }) => (
          <Button variant="primary" onClick={openModal}>
            Open Modal
          </Button>
        )}
      </ExampleModal>
    </main>
  );
}
