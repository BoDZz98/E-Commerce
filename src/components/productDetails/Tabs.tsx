import { Tab, Tabs } from "react-bootstrap";
import { DescTab } from "./DescTab";
import { AdditionalInfoTab } from "./AdditionalInfoTab";
import { ReviewsTab } from "./ReviewsTab";

export function MyTabs() {
  return (
    <Tabs defaultActiveKey="Description" className="mb-3 fs-3 ">
      {/* <Tab eventKey="Description" title="Description">
        <DescTab />
      </Tab>
      <Tab eventKey="Info" title="Info">
        <AdditionalInfoTab />
      </Tab>
      <Tab eventKey="Reviews" title="Reviews">
        <ReviewsTab />
      </Tab> */}
    </Tabs>
  );
}
