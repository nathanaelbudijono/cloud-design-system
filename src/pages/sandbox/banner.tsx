import Banner from "@/components/core/banner";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";

export default function Banners() {
  return (
    <main>
      <Seo title="Banner" description="banner" />
      <section className="fixed w-full left-0 text-center top-0 flex flex-col z-40">
        <div className="py-2 bg-d-700 ">
          <Typography variant="h1">Navigation Bar</Typography>
        </div>
        <Banner />
      </section>
      <section className="translate-y-32">
        <Typography variant="h4">Banner page</Typography>
      </section>
    </main>
  );
}
