"use client";
import { OAuthForm } from "@/components/forms/OAuthForm";
import { SignUpSchema } from "@/lib/schema";
import React from "react";

const SignUp = () => {
  return (
    <OAuthForm
      formType="Sign_UP"
      formSchema={SignUpSchema}
      defaultValues={{ email: "", password: "", name: "", username: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default SignUp;
