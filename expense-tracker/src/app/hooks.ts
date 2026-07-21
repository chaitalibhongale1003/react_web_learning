import { useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "./store";

/**
 * Typed Redux Dispatch Hook
 */
export const useAppDispatch =
  useDispatch.withTypes<AppDispatch>();

/**
 * Typed Redux Selector Hook
 */
export const useAppSelector =
  useSelector.withTypes<RootState>();