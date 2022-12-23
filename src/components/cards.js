import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
];

function BasicExample() {
  return hackaathoncard.map((hackaathoncard) => (
    <div className="container d-flex flex-row flex-wrap ">
      <Card className="mt-3">
        <Card.Body>
          <Card.Title>Hackathon</Card.Title>
          <Card.Text>
            Gain substantial experience by solving real-world problems and pit
            against others to come up with
          </Card.Text>
          <Button variant="primary">View More</Button>
        </Card.Body>
      </Card>
    </div>
  ));
}

export default BasicExample;
