import { fontWeight } from "@mui/system";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import UpcomingTab from "./UI/UpcomingTab";
const hackaathoncard = [
  {
    id: 1,
    title: "Hackathon",
    text: "Gain substantial experience by solving real-world problems and pit against others to come up with",
    button: "Go somewhere",
  },
  {
    id: 2,
    title: "Hackathon",
    text: "Gain substantial experience by solving real-world problems and pit against others to come up with",
    button: "Go somewhere",
  },
  {
    id: 3,
    title: "Hackathon",
    text: "Gain substantial experience by solving real-world problems and pit against others to come up with",
    button: "Go somewhere",
  },
  {
    id: 4,
    title: "Hackathon",
    text: "Gain substantial experience by solving real-world problems and pit against others to come up with",
    button: "Go somewhere ",
  },
  {
    id: 3,
    title: "Hackathon",
    text: "Gain substantial experience by solving real-world problems and pit against others to come up with",
    button: "Go somewhere",
  },
  {
    id: 4,
    title: "Hackathon",
    text: "Gain substantial experience by solving real-world problems and pit against others to come up with",
    button: "Go somewhere ",
  },
];

function BasicExample() {
  return (
    <>
      {/* <Home /> */}
      {/* <p
        className="text-center text-bold text-info text-uppercase mt-4"
        style={{
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Welcome To Ode To Code
      </p> */}
      {/* <p
        className="text-center text-boldtext-uppercase"
        style={{
          fontSize: "20px",
          //   fontWeight: "bold",
        }}
      >
        while(!(succeed=try()));
      </p>
      <p
        className="text-center text-boldtext-uppercase"
        style={{
          fontSize: "20px",
          //   fontWeight: "bold",
        }}
      >
        Eat,sleep,code,repeat
      </p> */}
      <div
        style={{
          height: "400px",
          marginRight: "-73px",
          marginLeft: "-73px",
          background: "#003145",
        }}
      >
        <h1 className="text-white text-center pt-3">Why Hackathons?</h1>
        <p className="text-white text-justify p-5">
          Hackathons are a great way to meet potential business partners and
          come up with an idea for a potential new startup. Many hackathon teams
          come up with fantastic ideas that have real-world applications – and,
          once the hackathon is over, they get to work making their idea happen.
          There’s no better way to learn new technical skills than by
          participating in a hackathon. It’s a great opportunity to brush up on
          your technical knowledge or get to grips with the basics if you’ve
          never done anything technical before. You’ll also get support along
          the way to help you pick up these skills even faster. Everyone who
          completes a hackathon always comes out with an immense feeling of
          accomplishment. Whether you are highly skilled in a particular area or
          are a complete beginner, you will learn so much throughout the day,
          and come out of it with a tangible demo that you’ll be showcasing to a
          room of your peers – it would be hard not to feel proud of yourself
          after that!
        </p>
      </div>

      <p
        className="text-center text-bold text-uppercase mt-4"
        style={{
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Upcoming Hackathons
      </p>
      <div className="container d-flex flex-row flex-wrap ">
        {hackaathoncard.map((hackaathoncard) => (
          <div
            className="container d-flex flex-row flex-wrap "
            style={{ width: "22rem" }}
          >
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Hackathon</Card.Title>
                <Card.Text>
                  Gain substantial experience by solving real-world problems and
                  pit against others to come up with
                </Card.Text>
                <Button variant="primary" style={{ background: "#003145" }}>
                  View More
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* <UpcomingTab /> */}
    </>
  );
}

export default BasicExample;
