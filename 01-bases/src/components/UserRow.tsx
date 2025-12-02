import type { User } from "../interfaces/request.response";

interface Props {
  user: User;
}

export const UserRow = ({ user }: Props) => {
  return (
    <tr className="text-center">
      <td>
        <img
          src={user.avatar}
          alt={`Avatar de ${user.first_name} ${user.last_name}`}
          className="rounded-full w-8 h-8 mx-auto"
        />
      </td>
      <td>{user.first_name} {user.last_name}</td>
      <td>{user.email}</td>
    </tr>
  );
};
