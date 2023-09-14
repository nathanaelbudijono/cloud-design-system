import * as React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Typography from "@/components/core/typography";
import Input from "@/components/forms/input";
import Button from "@/components/buttons/button";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineXCircle } from "react-icons/hi";
import Seo from "@/components/core/seo";
import SelectInput from "@/components/forms/select-input";

type Inputs = {
  selectinputs: string;
};

export default function SearchSelectInput() {
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
      <Seo title="Select Input" description="Select Input" />
      <section className="w-1/3 max-sm:w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormProvider {...methods}>
            <Typography variant="h4">Select Input</Typography>
            <div className="flex flex-col gap-3">
              <SelectInput
                id="selectinputs"
                label="Select Input"
                placeholder="Select something"
                options={[
                  { value: "hi", label: "hi" },
                  {
                    label: "option 2",
                    value: "option2",
                  },
                ]}
                validation={{ required: "Select Input must be filled" }}
              />
            </div>

            <div className="flex justify-end mt-5">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </FormProvider>
        </form>
      </section>
    </main>
  );
}
