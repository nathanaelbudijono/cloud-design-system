import * as React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Typography from "@/components/core/typography";
import Input from "@/components/forms/input";
import Button from "@/components/buttons/button";
import { AiOutlineUser } from "react-icons/ai";

type Inputs = {
  username: string;
};

export default function Forms() {
  const methods = useForm<Inputs>({
    mode: "onTouched",
  });
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data.username);
    return;
  };
  return (
    <main>
      <section className="w-1/3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormProvider {...methods}>
            <Typography variant="h4">Normal Input</Typography>
            <div className="flex flex-col gap-3">
              <Input
                id="username"
                label="Username"
                validation={{ required: "Name must be filled" }}
                placeholder="Enter your username"
                helperText="This is a helper text"
              />
              <Input
                id="username"
                label="Username"
                leftIconLabel={AiOutlineUser}
                validation={{ required: "Name must be filled" }}
                placeholder="Enter your username"
              />
              <Input
                id="username"
                validation={{ required: "Name must be filled" }}
                placeholder="Enter your username"
              />
              <Input
                id="username"
                validation={{ required: "Name must be filled" }}
                placeholder="Enter your username"
                leftIcon={AiOutlineUser}
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
