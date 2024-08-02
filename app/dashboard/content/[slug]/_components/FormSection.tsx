"use client";
import { TamplateTypes } from "@/app/(data)/Tamplates";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface PROPS {
  selectedTamplates: any;
  userFormInput: any;
  loading: boolean;
}
function FormSection({ selectedTamplates, userFormInput, loading }: PROPS) {
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    userFormInput(formData);
  };

  return (
    <div className="h-fit w-fit bg-white p-6 dark:bg-gray-500">
      <Image src={selectedTamplates?.icon} alt="image" height={70} width={70} />
      <h2 className="headerText">{selectedTamplates?.name}</h2>
      <p className="text-black">{selectedTamplates?.desc}</p>
      <form className="mt-4 py-2" onSubmit={onSubmit}>
        {selectedTamplates?.form?.map((data: any) => (
          <div
            key={data?.name}
            className="grid w-full items-center gap-1.5 py-2"
          >
            {/* @ts-ignore */}
            <Label htmlFor={data?.name} className="font-bold text-black">
              {data?.label} {data?.required ? null : "[Optional]"}
            </Label>
            {data?.field === "input" ? (
              <Input
                type="text"
                name={data?.name}
                placeholder={data?.label}
                className="text-black shadow-lg"
                onChange={handleInputChange}
                required={data?.required}
              />
            ) : data?.field === "textarea" ? (
              <Textarea
                name={data?.name}
                placeholder={data?.label}
                className="shadow-lg"
                onChange={handleInputChange}
                required={data?.required}
              />
            ) : null}
          </div>
        ))}
        <Button type="submit" variant={"bgColor"} className="mt-2 w-full">
          {loading ? (
            <Loader2Icon className="animate-spin" />
          ) : (
            "Generate Content"
          )}
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
