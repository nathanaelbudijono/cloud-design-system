import Button from "@/components/buttons/button";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import Checkbox from "@/components/forms/checkbox";
import Radio from "@/components/forms/radio";
import { Form, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  css: string;
};

export default function Checkboxs() {
  const methods = useForm<Inputs>({
    mode: "onTouched",
  });
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    return;
  };
  return (
    <main>
      <Seo title="Checkbox" description="Checkbox" />
      <Typography variant="h4">Checkbox</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <Checkbox name="foods" label="Burger" value="burger" hideError />
          <Checkbox name="foods" label="Pizza" value="pizza" hideError />
          <Checkbox
            name="Hotdog"
            label="Hotdog"
            value="apple"
            validation={{ required: "Food must be selected" }}
          />
          <div className="flex justify-end mt-5">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </FormProvider>
      </form>
    </main>
  );
}
