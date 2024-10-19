import { headers } from "next/headers";
import UserProvider from "@/_components/UserProvider";
import "bootstrap/dist/css/bootstrap.min.css";
export const metadata = {
  title: "Unicode Academy",
};
export default function RootLayout({ children }) {
  const token = headers().get("x-token");
  return (
    <html lang="en">
      <UserProvider token={token}>
        <body>{children}</body>
      </UserProvider>
    </html>
  );
}
