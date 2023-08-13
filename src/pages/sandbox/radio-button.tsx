import Button from "@/components/buttons/button";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import Radio from "@/components/forms/radio";
import { Form, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  css: string;
};

export default function RadioButtons() {
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
      <Seo title="Radio Button" description="Radio button" />
      <Typography variant="h4">Radio Button</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <Radio name="Food" label="Hamburger" value="hamburger" hideError />
          <Radio name="Food" label="Pizza" value="pizza" hideError />
          <Radio
            name="Food"
            label="Pretzel"
            value="pretzel"
            validation={{ required: "Select a food" }}
            readOnly
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
