import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { describeDrink } from "../gpt";

export const GPTDescribeButton = ({ selectedOption }) => {
  const [description, setDescription] = useState("");
  const [buttonDescription, setButtonDescription] =
    useState("Describe by an AI");
  useEffect(() => {
    setDescription("");
    setButtonDescription("Describe by an AI");
  }, [selectedOption]);

  return (
    <>
      <p>{description}</p>
      <Button
        className="general-btn green-hover"
        onClick={() => {
          setButtonDescription("Loading...");
          describeDrink(
            selectedOption.label,
            setDescription,
            setButtonDescription
          );
        }}
      >
        {buttonDescription}
      </Button>
    </>
  );
};
