import LiftSideBar from "@/components/navigation/LiftSideBar";
import Navbar from "@/components/navigation/navbar";
import { ReactNode } from "react";
import RightSideBar from "../../components/navigation/RightSideBar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />

      <div className="flex">
        <LiftSideBar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm-px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSideBar />
      </div>
    </main>
  );
};

export default RootLayout;
