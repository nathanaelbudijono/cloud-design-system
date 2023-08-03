import Button from "@/components/buttons/button";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import { AiOutlineArrowRight, AiOutlinePlus } from "react-icons/ai";
export default function Buttons() {
  return (
    <main>
      <Seo title="Buttons" description="Buttons" />
      <Typography variant="h2">Normal Buttons</Typography>
      <section className="flex-list">
        <div className="flex-center">
          <Button variant="primary" size="lg" rightIcon={AiOutlineArrowRight}>
            Primary Large
          </Button>
          <Button variant="primary" size="base" leftIcon={AiOutlinePlus}>
            Primary Base
          </Button>
          <Button variant="primary" size="sm">
            Primary Small
          </Button>
        </div>
        <div className="flex-center">
          <Button variant="secondary" size="lg">
            Secondary Large
          </Button>
          <Button variant="warning" size="base">
            Warning Base
          </Button>
          <Button variant="outline" size="sm">
            Outline Small
          </Button>
        </div>
        <div className="flex-center">
          <Button variant="ghost" size="lg">
            Ghost Large
          </Button>
          <Button variant="primary" size="lg" disabled>
            Primary Disabled
          </Button>
          <Button variant="warning" size="lg" disabled>
            Warning Disabled
          </Button>
        </div>
      </section>
      <Typography variant="h2" className="mt-3">
        Icon Buttons
      </Typography>
    </main>
  );
}
