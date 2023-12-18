import ProgramDetails from "./ProgramDetails";
import basic1 from "./program-images/basic-1.png";
import basic2 from "./program-images/basic-2.png";
import safety from "./program-images/safety.png";
import traffic from "./program-images/traffic.png";

const TabDetails = () => {
  return (
    <div className="d-flex justify-content-between">
      <ProgramDetails
        image={basic1}
        title={"Learn Basics"}
        details={
          "Learn about basics of car driving. Understand the combination of clutch, brake & accelerator"
        }
      />
      <ProgramDetails
        image={basic2}
        title={"Learn Basics - 2"}
        details={
          "Learn about basics of car driving. Understand the combination of clutch, brake & accelerator"
        }
      />
      <ProgramDetails
        image={safety}
        title={"Road Safety"}
        details={
          "Learn about basics of car driving. Understand the combination of clutch, brake & accelerator"
        }
      />
      <ProgramDetails
        image={traffic}
        title={"Traffic Rules"}
        details={
          "Learn about basics of car driving. Understand the combination of clutch, brake & accelerator"
        }
      />
    </div>
  );
};

export default TabDetails;
