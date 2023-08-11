import * as React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Typography from "@/components/core/typography";
import Input from "@/components/forms/input";
import Button from "@/components/buttons/button";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineXCircle } from "react-icons/hi";

type Inputs = {
  input1: string;
  input2: string;
  input3: string;
  input4: string;
  input5: string;
};

export default function Forms() {
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
    <main>
      <section className="w-1/3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormProvider {...methods}>
            <Typography variant="h4">Normal Input</Typography>
            <div className="flex flex-col gap-3">
              <Input
                id="input1"
                label="Username"
                validation={{ required: "Name must be filled" }}
                placeholder="Enter your username"
                helperText="This is a helper text"
              />
              <Input
                id="input2"
                label="Username"
                leftIconLabel={AiOutlineUser}
                validation={{ required: "Name must be filled" }}
                placeholder="Enter your username"
              />
              <Input
                id="input3"
                validation={{ required: "Name must be filled" }}
                placeholder="Enter your username"
              />
              <Input
                id="input4"
                validation={{ required: "Name must be filled" }}
                placeholder="Enter your username"
                leftIcon={AiOutlineUser}
              />
              <Input
                id="input5"
                validation={{ required: "Name must be filled" }}
                placeholder="Enter your username"
                leftIcon={AiOutlineUser}
                rightNode={
                  <button type="button" className="p-1" onClick={handleClear}>
                    <HiOutlineXCircle className="text-xl text-typo-icons" />
                  </button>
                }
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
