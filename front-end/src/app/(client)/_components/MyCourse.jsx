"use client";

import { useUser } from "@/utils/hook";

export default function MyCourse() {
  const { user, isLoading, isAuthenticated } = useUser();

  return (
    <div>
      <h2>My Course</h2>
      {!isLoading && isAuthenticated && <h3>Khóa học của: {user?.name}</h3>}
    </div>
  );
}
