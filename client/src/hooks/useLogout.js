// think like this, as you logout, what is the thing might change
// the state of the user AND the localStorage that store user data
// both of these need to be null or removed
// hence no backend process involved in this matters

import { useAuthContext } from "./useAuthContext";
import { useWorkoutContext } from "./useWorkoutContext";

export const useLogout = () => {
  // call the dispatch function from useAuthContext as this is the hook that can grab the context data
  const { dispatch } = useAuthContext();
  const { dispatch: workoutDispatch } = useWorkoutContext();

  // create a function logout
  const logout = () => {
    // remove user from the localStorage
    localStorage.removeItem("user");

    // dispatch logout action, no payload as in LOGOUT just change user state to null
    dispatch({ type: "LOGOUT" });
    // now we can clear or dispatch the SET_WORKOUT to turn the value workouts to null back
    workoutDispatch({ type: "SET_WORKOUTS", payload: null });
  };

  // export the logout so that it can be used inside logout button
  return { logout };
};
