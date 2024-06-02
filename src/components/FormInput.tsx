import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { ReactNode } from "react";

export const FormInput = ({
  children,
  label,
  description,
}: {
  children: ReactNode;
  label: string;
  description?: string;
}) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>{children}</FormControl>
      <FormDescription>{description}</FormDescription>
      <FormMessage />
    </FormItem>
  );
};
