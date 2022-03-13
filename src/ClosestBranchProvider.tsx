import React, { useEffect, useState } from "react";
import { Branch } from "./Branch";
import { closestBranchTo } from "./distances";
import { SearchLocation } from "./SearchLocation";

const ClosestBranchContext = React.createContext<undefined|Branch>(undefined);

type ClosestBranchProviderProps = {
    children: JSX.Element;
    search: SearchLocation;
    branches: Branch[];
}

export default function ClosestBranchProvider({ children, search, branches }: ClosestBranchProviderProps) {
  const [closest, setClosest] = useState<undefined | Branch>();
  
  useEffect(() => {
    if (branches && typeof search === 'object') {
      setClosest(closestBranchTo(search, branches));
    } else {
      setClosest(undefined);
    }
  }, [search, branches]);

  return (
    <ClosestBranchContext.Provider value={closest}>
      {children}
    </ClosestBranchContext.Provider>
  );
}

export const useClosestBranch = () => React.useContext(ClosestBranchContext);
  

  