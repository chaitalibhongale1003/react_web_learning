import { ROUTES } from "./routes";

export const NAVIGATION_ITEMS = [
  {
    label: "Dashboard",
    path: ROUTES.HOME,
  },
  {
    label: "Add Expense",
    path: ROUTES.ADD_EXPENSE,
  },
] as const;