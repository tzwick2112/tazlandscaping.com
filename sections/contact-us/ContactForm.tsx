"use client";

import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { cn } from "@/utils";

import Select from "@/components/select";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";

import services from "@/constants/services";

import Input from "../../components/input";
import { useToast } from "../../components/ui/use-toast";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  service: yup.string().required("Service is required"),
  message: yup.string(),
});
const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    try {
      const { name, email, phone, message, service } = data;

      const formData = new FormData();
      formData.append("_wpcf7_unit_tag", "d3d3d05");
      formData.set("your-name", `${name}`);
      formData.set("your-subject", `New Request: ${name}`);
      formData.set("your-email", email);
      formData.set("your-phone", phone);
      formData.set("your-service", service);
      formData.set("your-message", message);

      const response = await axios.post(process.env.NEXT_PUBLIC_CONTACT_FORM_URL!, formData);

      if (response.status === 200) {
        toast({
          title: "Success!",
          description: "Your request has been successfully submitted. We will be in touch with your shortly.",
          className: "bg-secondary text-white",
        });
        reset();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request. Please try later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full relative z-10"
    >
      <Title
        title="We’re Ready to Assist You"
        subTitle="Contact Us Today"
        white
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Input
          id="name"
          placeholder="Your Name"
          className="lg:col-span-2"
          error={errors.name}
          {...register("name")}
          required
        />
        <Input
          id="your-phone"
          placeholder="Phone Number"
          {...register("phone")}
          value={watch("phone") || ""}
          phoneInput
          error={errors.phone}
          required
        />
        <Input
          id="email"
          placeholder="Email"
          {...register("email")}
          error={errors.email}
          required
        />
        <Select
          options={[
            {
              value: "",
              label: "Choose Service",
            },
            ...services.map((item) => ({
              value: item.title,
              label: item.title,
            })),
          ]}
          {...register("service")}
          error={errors.service}
          id="service"
          placeholder="Please Choose Service"
          className="lg:col-span-2"
          inputClassName={cn("text-text !py-4", !watch("service") && "!text-text")}
          messageClassName="input-error-message"
          required
        />
        <Input
          className="col-span-1 lg:col-span-2"
          id="message"
          placeholder="Message"
          {...register("message")}
          error={errors.message}
          textarea
          rows={5}
        />

        <div className="inline-block w-fit">
          <Button
            variant={"neutral"}
            className="flex gap-3 before:bg-primary"
            disabled={isLoading}
          >
            <div className="flex items-center gap-3">
              <div className="font-medium">{isLoading ? "Submiting Message..." : "Submit Message"}</div>
            </div>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
