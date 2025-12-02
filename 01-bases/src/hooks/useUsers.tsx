import { useEffect, useRef, useState } from "react";
import type { User } from "../interfaces/request.response";
import { loadUsersAction } from "../actions/load-users.actions";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const [page, setPage] = useState<number>(1);

  const totalPages = useRef<number>(1);

  const nextPage = () => {
    console.log("NEXTPAGE");
    setPage((p) => Math.min(p + 1, totalPages.current));
  };
  const prevPage = () => {
    setPage((p) => Math.max(p - 1, 1));
  };

  useEffect(() => {
    loadUsersAction(page).then((data) => {
      if (data instanceof Error) {
        console.log(data.message);
        alert("Error loading users");
        return;
      }

      setUsers(data.data);
      totalPages.current = data.total_pages;
    });
  }, [page]);

  return { users, nextPage, prevPage, page, totalPages };
};
