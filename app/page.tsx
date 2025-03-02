import { Metadata } from "next";
import DashboardContent from "./ui/dashboard-content";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <DashboardContent></DashboardContent>
  );
}
