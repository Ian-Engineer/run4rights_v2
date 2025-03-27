import { useState, useEffect } from "react";
import { PageSetup } from "../_sharedComponents";

const AboutMePage = () => {
  // local state
  const [localState, setLocalState] = useState(false);

  // render
  useEffect(() => {
    setLocalState(true);
  }, []);

  return (
    <PageSetup open={localState}>
      <div>example</div>
    </PageSetup>
  )
};

export default AboutMePage;
