import Banner from "@/components/core/banner";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";

export default function Banners() {
  return (
    <>
      <main>
        <Seo title="Banner" description="banner" />
        <section className="fixed w-full left-0 text-center top-0 flex flex-col">
          <div className="py-2 bg-color-400 ">
            <Typography variant="h1">A Navbar</Typography>
          </div>
          <Banner />
        </section>
      </main>
      <main>
        <p>test</p>
      </main>
    </>
  );
}
