import * as React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Typography from "@/components/core/typography";
import Button from "@/components/buttons/button";
import Seo from "@/components/core/seo";
import TextAreaInput from "@/components/forms/text-area";
import { HiOutlineXCircle } from "react-icons/hi";
import { LuPencil } from "react-icons/lu";

type Inputs = {
  input1: string;
  input2: string;
  input3: string;
  input4: string;
  input5: string;
};

export default function TextAreaInputs() {
  const methods = useForm<Inputs>({
    mode: "onTouched",
  });
  const { handleSubmit, reset, clearErrors } = methods;
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    return;
  };
  const handleClear = () => {
    reset({ input5: "" });
    clearErrors("input5");
  };
  return (
    <section className="max-w-7xl mx-auto">
      <Seo
        title="Text Area TextAreaInput"
        description="Text Area TextAreaInput"
      />
      <section className="w-1/3 max-sm:w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormProvider {...methods}>
            <Typography variant="h4">Text Area Input</Typography>
            <div className="flex flex-col gap-3">
              <TextAreaInput
                id="input1"
                label="Enter your description"
                rows={10}
                validation={{ required: "Description must be filled" }}
                placeholder="Your description here"
                helperText="Must be a string!"
              />
              <TextAreaInput
                id="input2"
                label="Enter your description"
                leftIconLabel={LuPencil}
                validation={{ required: "Description must be filled" }}
                placeholder="Your description here"
              />
              <TextAreaInput
                id="input3"
                validation={{ required: "Description must be filled" }}
                placeholder="Your description here"
              />
              <TextAreaInput
                id="input4"
                validation={{ required: "Description must be filled" }}
                placeholder="Your description here"
              />
              <TextAreaInput
                id="input5"
                validation={{ required: "Description must be filled" }}
                placeholder="Your description here"
                rightNode={
                  <button type="button" className="p-1" onClick={handleClear}>
                    <HiOutlineXCircle className="text-xl text-typo-icons" />
                  </button>
                }
              />
              <TextAreaInput
                id="input5"
                validation={{ required: "Description must be filled" }}
                placeholder="Your description here"
                rightNode={
                  <button type="button" className="p-1" onClick={handleClear}>
                    <HiOutlineXCircle className="text-xl text-typo-icons" />
                  </button>
                }
                readOnly
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
    </section>
  );
}
