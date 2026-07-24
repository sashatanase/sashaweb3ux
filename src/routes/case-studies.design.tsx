import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies/design")({
  component: () => <Outlet />,
});
