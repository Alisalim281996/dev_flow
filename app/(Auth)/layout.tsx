import SocialsAuthForm from "@/components/forms/SocialsAuthForm";
import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-auth-light dark:bg-auth-dark bg-cover bg-no-repeat bg-center px-4 py-10">
      <section className="light-border background-light800_dark200 shadow-light100_dark100 shadow-md sm:min-w-[520px] sm:px-8 min-w-full rounded-[10px] border px-4 py-10">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="h2-bold text-dark100_light900">Join DevFlow</h1>
            <p className="paragraph-regular text-dark500_light400">
              To Get your question answered
            </p>
          </div>
          <Image
            src={"/images/site-logo.svg"}
            alt="DevFlow Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        {children}
        <div>
          <SocialsAuthForm />
        </div>
      </section>
    </main>
  );
}
