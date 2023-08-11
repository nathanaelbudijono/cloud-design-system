import * as React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Typography from "@/components/core/typography";
import Button from "@/components/buttons/button";
import Seo from "@/components/core/seo";
import { HiOutlineCalendar } from "react-icons/hi";
import DatePicker from "@/components/forms/date-picker";

type Inputs = {
  date: string;
};

export default function DatePickers() {
  const methods = useForm<Inputs>({
    mode: "onTouched",
  });
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data.date);
    return;
  };
  return (
    <main>
      <Seo title="Normal Input" description="Normal Input" />
      <section className="w-1/3 max-sm:w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormProvider {...methods}>
            <Typography variant="h4">Date Picker</Typography>
            <div className="flex flex-col gap-3">
              <DatePicker
                id="date"
                label="Date"
                validation={{
                  required: "Date must be filled",
                  valueAsDate: true,
                }}
                placeholder="dd/mm/yyyy"
                leftIconLabel={HiOutlineCalendar}
              />
              <DatePicker
                id="date"
                validation={{
                  required: "Date must be filled",
                  valueAsDate: true,
                }}
                placeholder="dd/mm/yyyy"
                leftIcon={HiOutlineCalendar}
              />
              <DatePicker
                id="date"
                validation={{
                  required: "Date must be filled",
                  valueAsDate: true,
                }}
                placeholder="dd/mm/yyyy"
                leftIcon={HiOutlineCalendar}
                disabled
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
