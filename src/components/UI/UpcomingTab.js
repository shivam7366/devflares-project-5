import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

// import Sonnet from "../../components/Sonnet";

function UpcomingTab() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home" style={{ color: "#003145" }}>
        lorem ipsum dolor sit amet
      </Tab>
      <Tab eventKey="profile" title="Profile">
        lorem ipsum dolor sit amet 1
      </Tab>
    </Tabs>
  );
}

export default UpcomingTab;
