import * as React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Typography from "@/components/core/typography";
import Button from "@/components/buttons/button";
import { AiOutlineUser } from "react-icons/ai";
import PasswordInput from "@/components/forms/password-input";
import { RiLockPasswordFill } from "react-icons/ri";
import Seo from "@/components/core/seo";

type Inputs = {
  input1: string;
  input2: string;
  input3: string;
  input4: string;
  input5: string;
};

export default function NormalInput() {
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
      <Seo title="Password Input" description="Password Input" />
      <section className="w-1/3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormProvider {...methods}>
            <Typography variant="h4">Password Input</Typography>
            <div className="flex flex-col gap-3">
              <PasswordInput
                id="input1"
                label="Username"
                validation={{ required: "Password must be filled" }}
                placeholder="Enter your password"
                helperText="Dont forget your password"
              />
              <PasswordInput
                id="input2"
                label="Username"
                leftIconLabel={RiLockPasswordFill}
                validation={{ required: "Password must be filled" }}
                placeholder="Enter your password"
              />
              <PasswordInput
                id="input3"
                validation={{ required: "Password must be filled" }}
                placeholder="Enter your password"
              />
              <PasswordInput
                id="input4"
                validation={{ required: "Password must be filled" }}
                placeholder="Enter your password"
                leftIcon={RiLockPasswordFill}
              />
              <PasswordInput
                id="input5"
                validation={{ required: "Password must be filled" }}
                placeholder="Enter your password"
                leftIcon={RiLockPasswordFill}
              />
              <PasswordInput
                id="input5"
                validation={{ required: "Password must be filled" }}
                placeholder="Enter your password"
                leftIcon={RiLockPasswordFill}
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
    </main>
  );
}
