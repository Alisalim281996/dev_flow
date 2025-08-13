"use client";
import { OAuthForm } from "@/components/forms/OAuthForm";
import { SignInSchema } from "@/lib/schema";
import React from "react";

const SignIn = () => {
  return (
    <OAuthForm
      formType="Sign_IN"
      formSchema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default SignIn;
