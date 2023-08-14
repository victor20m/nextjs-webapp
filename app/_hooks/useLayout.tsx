'use client';
import LoginLayout from "../(LoginModule)/login/layout";
import RootLayout from "../layout";
import { usePathname } from "next/navigation";

const useLayout = (page: React.ReactNode) => {
  const pathName: any = usePathname();
  console.log("pathName", pathName)
  return window?.location?.href.indexOf("login") > -1 ? (
    <LoginLayout>{page}</LoginLayout>
  ) : (
    <RootLayout>{page}</RootLayout>
  );
};

export default useLayout;
