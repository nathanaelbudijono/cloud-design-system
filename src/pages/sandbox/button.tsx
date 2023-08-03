import Button from "@/components/buttons/button";
import IconButton from "@/components/buttons/icon-button";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import ButtonLink from "@/components/links/button-links";
import { AiOutlineArrowRight, AiOutlinePlus, AiFillEye } from "react-icons/ai";
export default function Buttons() {
  return (
    <main>
      <Seo title="Buttons" description="Buttons" />
      <Typography variant="h4">Normal Buttons</Typography>
      {/* start region, Normal Buttons */}
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
      {/* end region, normal buttons */}
      {/* start region, icon buttons */}
      <Typography variant="h4" className="mt-3">
        Icon Buttons
      </Typography>
      <section className="flex-list">
        <div className="flex-center">
          <IconButton icon={AiFillEye} variant="primary" size="lg" />
          <IconButton icon={AiFillEye} variant="secondary" size="base" />
          <IconButton icon={AiFillEye} variant="outline" size="sm" />
        </div>
        <div className="flex-center">
          <IconButton icon={AiFillEye} variant="warning" size="lg" />
          <IconButton icon={AiFillEye} variant="ghost" size="base" />
          <IconButton icon={AiFillEye} variant="primary" size="sm" disabled />
        </div>
      </section>
      {/* end region, icon buttons
      start region, button links */}
      <Typography variant="h4" className="mt-3">
        Button Links
      </Typography>
      <section className="flex-list">
        <div className="flex-center">
          <ButtonLink
            variant="primary"
            size="lg"
            rightIcon={AiOutlineArrowRight}
            href="/"
          >
            Primary Large
          </ButtonLink>
          <ButtonLink
            variant="primary"
            size="base"
            leftIcon={AiOutlinePlus}
            href="/"
          >
            Primary Base
          </ButtonLink>
          <ButtonLink variant="primary" size="sm" href="/">
            Primary Small
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
