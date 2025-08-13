"use client";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import ROUTES from "@/constant/routes";
import Link from "next/link";

interface AuthFormProps<T extends FieldValues> {
  formType: "Sign_UP" | "Sign_IN";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formSchema: z.ZodType<T, any>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean }>;
}

export function OAuthForm<T extends FieldValues>({
  formType,
  formSchema,
  defaultValues,
  onSubmit,
}: AuthFormProps<T>) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handelSubmit: SubmitHandler<T> = async () => {};

  const buttonText = formType === "Sign_IN" ? "Sign_IN" : "Sign_UP";
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handelSubmit)}
        className="space-y-8 mt-10"
      >
        {Object.keys(defaultValues).map((field) => (
          <FormField
            key={field}
            control={form.control}
            name={field as Path<T>}
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-2.5">
                <FormLabel className="paragraph-medium text-dark400_light700">
                  {field.name === "email"
                    ? "Email Address"
                    : field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                </FormLabel>
                <FormControl>
                  <Input
                    type={field.name === "password" ? "password" : "text"}
                    required
                    placeholder={field.name}
                    {...field}
                    className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-12 rounded-1.5 border"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button
          disabled={form.formState.isSubmitting}
          className="primary-gradient paragraph-medium min-h-12 w-full rounded-2 px-4 py-3 font-inter text-light-900"
        >
          {form.formState.isSubmitted
            ? buttonText === "Sign_IN"
              ? "Signing In..."
              : "Signing Up..."
            : buttonText}
        </Button>

        {formType === "Sign_IN" ? (
          <p>
            Dont have an account?{""}
            <Link
              href={ROUTES.SIGN_UP}
              className="paragraph-semibold primary-text-gradient "
            >
              Sign Up
            </Link>
          </p>
        ) : (
          <p>
            Already have an account?{""}
            <Link
              href={ROUTES.SIGN_IN}
              className="paragraph-semibold primary-text-gradient "
            >
              Sign In
            </Link>
          </p>
        )}
      </form>
    </Form>
  );
}
