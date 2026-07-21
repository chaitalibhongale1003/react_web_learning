export const ROUTES = {
  HOME: "/",
  ADD_EXPENSE: "/add",
  EDIT_EXPENSE: "/edit/:id",

  getEditExpensePath: (id: string) => `/edit/${id}`,
} as const;