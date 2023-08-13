import Button from "@/components/buttons/button";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import DropzoneInput from "@/components/forms/dropzone";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  pdf: FileList;
};

export default function Dropzones() {
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
      <Seo title="Dropzone" description="Dropzone" />
      <Typography variant="h4">Dropzone</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <DropzoneInput
            id="pdf"
            label="Upload files"
            accept={{ "application/pdf": [".pdf"] }}
            helperText="Only PDF"
          />
          <DropzoneInput
            id="pdf"
            label="Upload files"
            accept={{ "application/pdf": [".pdf"] }}
            helperText="Only PDF"
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
