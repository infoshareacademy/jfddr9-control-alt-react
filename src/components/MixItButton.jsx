import { Button } from "react-bootstrap";
import { Panel } from "../utils/panels";

export const MixItButton = ({
  selectedOption,
  viewName,
  changeView,
  previousViewName,
}) => {
  return (
    <div className="bottom-buttons-div">
      {!(selectedOption === null) && (
        <Button
          className="general-btn green-hover"
          onClick={() => {
            viewName === Panel.DRINK_PANEL
              ? changeView(previousViewName)
              : changeView(Panel.DRINK_PANEL);
          }}
        >
          {viewName === Panel.DRINK_PANEL
            ? "Go back to search"
            : "Show your drink"}
        </Button>
      )}
    </div>
  );
};
