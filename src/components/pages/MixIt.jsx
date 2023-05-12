import { Card } from "react-bootstrap";
import { SearchByName } from "../SearchByName";

export const MixIt = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h1>Mixit</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure natus
            rem optio delectus explicabo ab reiciendis. Explicabo laboriosam
            vitae unde dolorem, enim corporis!
          </p>
          <SearchByName />
        </Card.Body>
      </Card>
    </>
  );
};
