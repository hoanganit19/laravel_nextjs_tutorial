import Link from "next/link";
import UserList from "./UserList";

export const metadata = {
  title: "Danh sách người dùng",
};
const getUsers = async () => {
  const response = await fetch(`${process.env.SERVER_API}/users`);
  return response.json();
};
export default async function UsersPage() {
  const { success, data: users } = await getUsers();
  fetch(`http://localhost:3000/api/auth`);
  if (!success) {
    return <h2>Không thể tải người dùng</h2>;
  }

  return (
    <div>
      <h1>Quản lý người dùng</h1>
      <Link href="/users/create" className="btn btn-primary mb-3">
        Thêm mới
      </Link>
      <UserList users={users} />
    </div>
  );
}
