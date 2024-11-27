import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../types/common/type";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
