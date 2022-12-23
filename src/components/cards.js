import { fontWeight } from "@mui/system";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import one from "../assets/cardimage/1.png";
import two from "../assets/cardimage/2.png";
import three from "../assets/cardimage/3.png";
import Carousel from "react-bootstrap/Carousel";
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
      <p
        className="text-center text-bold text-info text-uppercase mt-4"
        style={{
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Welcome To Ode To Code
      </p>
      <p
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
      </p>
      <div className="mt-5">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={one} alt="First slide" />
            <Carousel.Caption>
              <h3>Prove your skills</h3>
              <p>
                Gain substantial experience by solving real-world problems and
                pit against others to come up with innovative solutions.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={two} alt="Second slide" />

            <Carousel.Caption>
              <h3>Learn from community</h3>
              <p>
                One can look and analyze the solutions submitted by the other
                Data Scientists in the community and learn from them.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={three} alt="Third slide" />

            <Carousel.Caption>
              <h3>Challenge yourself</h3>
              <p>
                You will stand out from the crowd if you do well in AI
                challenges, it not only helps you shine in the community but
                also earns rewards.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
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
                <Button variant="primary">View More</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default BasicExample;
