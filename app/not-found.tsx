import NotFound from "@/sections/not-found";

import { INFO } from "@/constants";

export const metadata = {
  title: `404 | ${INFO.BUSINESS_NAME}`,
  openGraph: {
    title: `404 | ${INFO.BUSINESS_NAME}`,
  },
};

export default function page() {
  return (
    <>
      <div className="absulte inset-0 h-[80px] lg:h-[90px] top-0 bg-primary-dark"></div>
      <NotFound />
    </>
  );
}
