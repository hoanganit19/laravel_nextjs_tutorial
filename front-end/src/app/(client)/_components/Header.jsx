import { getSession } from "@/utils/session";
import Link from "next/link";

export default async function Header() {
  const user = await getSession();

  return (
    <header>
      <h1>HEADER</h1>
      <ul className="d-flex gap-2 list-unstyled">
        {user ? (
          <>
            <li>Chào bạn: {user.name}</li>
            <li>
              <a href="#">Đăng xuất</a>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/auth/login">Đăng nhập</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}
