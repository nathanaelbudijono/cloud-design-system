import { Framer } from "@/components/core/framer";
import Typography from "@/components/core/typography";

export default function Framers() {
  return (
    <main className="max-sm:h-full">
      <Framer>
        <Typography variant="h4">Framer</Typography>
        <Typography variant="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          faucibus dui a neque malesuada sodales. Pellentesque in vehicula
          risus. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Cras finibus, magna non porttitor ultricies,
          eros metus aliquam diam, ac congue nisl ex non sapien. Curabitur arcu
          eros, bibendum vitae augue nec, fermentum ultrices elit. Maecenas
          pulvinar diam vel elementum auctor. Curabitur faucibus tempus odio id
          porta. Phasellus placerat libero sed odio pellentesque, eu congue
          velit facilisis. Maecenas aliquet viverra fringilla. Suspendisse
          potenti.
        </Typography>
      </Framer>
    </main>
  );
}
