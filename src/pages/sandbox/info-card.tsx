import InfoCard from "@/components/core/info-card";
import Typography from "@/components/core/typography";
import { LiaTelegramPlane } from "react-icons/lia";

export default function InfoCards() {
  return (
    <main>
      <Typography variant="h4">Info-Card</Typography>
      <section className="grid grid-cols-4 gap-4 max-md:grid-cols-3 max-sm:grid-cols-1">
        <InfoCard
          icon={LiaTelegramPlane}
          label="Lorem Ipsum"
          desc="Consectus dominicus elit"
          variant="primary"
        />
        <InfoCard
          icon={LiaTelegramPlane}
          label="Lorem Ipsum"
          desc="Consectus dominicus elit"
          variant="secondary"
          isLoading
        />
        <InfoCard
          icon={LiaTelegramPlane}
          label="Lorem Ipsum"
          desc="Consectus dominicus elit"
          variant="warning"
        />
        <InfoCard
          icon={LiaTelegramPlane}
          label="Lorem Ipsum"
          desc="Consectus dominicus elit"
          variant="success"
        />
        <InfoCard
          icon={LiaTelegramPlane}
          label="Lorem Ipsum"
          desc="Consectus dominicus elit"
          variant="outline"
        />
        <InfoCard
          label="Lorem Ipsum"
          desc="Consectus dominicus elit"
          variant="outline"
        />
      </section>
    </main>
  );
}