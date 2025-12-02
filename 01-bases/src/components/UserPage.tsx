import { useUsers } from "../hooks/useUsers";
import { UserRow } from "./UserRow";

// https://reqres.in/api/users?page=2

export default function UserPage() {
  const { users, nextPage, prevPage, page, totalPages } = useUsers();

  const handleNextPage = () => {
    nextPage();
  };

  const handlePrevPage = () => {
    prevPage();
  };

  return (
    <>
      <h3 className="text-blue-950">Usuarios</h3>

      <table className="table-auto w-[500px] bg-black rounded-xl text-white mt-5">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={3} className="text-center text-white">
              Página {page} de {totalPages.current}
            </td>
          </tr>
        </tfoot>
      </table>

      <div className="flex justify-between w-[500px]">
        <button
          disabled={page === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl mt-5 disabled:opacity-50"
          onClick={handlePrevPage}
        >
          Previous
        </button>
        <button
          disabled={page === totalPages.current}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl mt-5 disabled:opacity-50"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </>
  );
}
