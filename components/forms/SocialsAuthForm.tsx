"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import ROUTES from "@/constant/routes";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

const SocialsAuthForm = () => {
  const handelSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
      });
    } catch (error) {
      toast.error("Sign-in Failed", {
        description:
          error instanceof Error
            ? error.message
            : "An error occurred during sign-in",
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button
        className="background-dark400_light900 body-medium
       text-dark200_light800 min-h-12 flex-1 px-4 py-3.5 rounded-2 hover:cursor-pointer"
        onClick={() => handelSignIn("github")}
      >
        <Image
          src={"/icons/github.svg"}
          alt="github logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Loge in With Github</span>
      </Button>

      <Button
        className="background-dark400_light900 body-medium
       text-dark200_light800 min-h-12 flex-1 px-4 py-3.5 rounded-2 hover:cursor-pointer"
        onClick={() => handelSignIn("google")}
      >
        <Image
          src={"/icons/google.svg"}
          alt="Google logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span>Loge in With Google</span>
      </Button>
    </div>
  );
};

export default SocialsAuthForm;
