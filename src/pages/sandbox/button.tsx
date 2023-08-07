import Button from "@/components/buttons/button";
import IconButton from "@/components/buttons/icon-button";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import ButtonLink from "@/components/links/button-links";
import { AiOutlineArrowRight, AiOutlinePlus, AiFillEye } from "react-icons/ai";
export default function Buttons() {
  return (
    <main className="max-sm:h-full">
      <Seo title="Buttons" description="Buttons" />
      <Typography variant="h4">Normal Buttons</Typography>
      {/* start region, Normal Buttons */}
      <section className="flex-list mb-5">
        <div className="grid grid-cols-5 gap-4 max-md:grid-cols-3 max-sm:grid-cols-1">
          <Button variant="primary" size="lg" rightIcon={AiOutlineArrowRight}>
            Primary Large
          </Button>
          <Button variant="primary" size="base" leftIcon={AiOutlinePlus}>
            Primary Base
          </Button>
          <Button variant="primary" size="sm">
            Primary Small
          </Button>

          <Button variant="warning" size="base">
            Warning Base
          </Button>
          <Button variant="outline" size="sm">
            Outline Small
          </Button>
          <Button variant="ghost" size="lg">
            Ghost Large
          </Button>
          <Button variant="primary" size="lg" disabled>
            Primary Disabled
          </Button>
          <Button variant="warning" size="lg" disabled>
            Warning Disabled
          </Button>
          <Button variant="primary" size="lg" isLoading>
            Warning Disabled
          </Button>
        </div>
      </section>
      {/* end region, normal buttons */}
      {/* start region, icon buttons */}
      <Typography variant="h4">Icon Buttons</Typography>
      <section className="flex-list mb-5">
        <div className="grid grid-cols-6 gap-4 max-md:grid-cols-3 ">
          <IconButton icon={AiFillEye} variant="primary" size="lg" />
          <IconButton icon={AiFillEye} variant="outline" size="sm" />

          <IconButton icon={AiFillEye} variant="warning" size="lg" />
          <IconButton icon={AiFillEye} variant="ghost" size="base" />
          <IconButton icon={AiFillEye} variant="primary" size="sm" disabled />
        </div>
      </section>
      {/* end region, icon buttons
      start region, button links */}
      <Typography variant="h4">Button Links</Typography>
      <section className="flex-list ">
        <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
          <ButtonLink
            variant="primary"
            size="lg"
            rightIcon={AiOutlineArrowRight}
            href="/"
          >
            Primary Large
          </ButtonLink>
          <ButtonLink
            variant="warning"
            size="base"
            leftIcon={AiOutlinePlus}
            href="/"
          >
            Warning Base
          </ButtonLink>
          <ButtonLink variant="outline" size="sm" href="/">
            Outline Small
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
