import { useStore } from "./store";

export const useStoreApi = () => {
  const { state, dispatch } = useStore();

  return {
    balance: state.balance,
    address: state.address,
  
    setAddress: newAddress => {
      dispatch({
        type: "NEW-ADDRESS",
        address: newAddress,
      });
    },
    setBalance: newBalance => {
      dispatch({
        type: "SET-BALANCE",
        balance: newBalance
      });
    },
  };
};