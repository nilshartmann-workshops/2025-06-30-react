import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <div className={"AppLayout"}>
      <Outlet />
    </div>
  );
}
