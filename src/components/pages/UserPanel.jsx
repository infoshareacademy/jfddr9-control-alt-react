import { Button, Card } from "react-bootstrap";
import { FavoriteDrinksUserPanel } from "../FavouriteDrinksUserPanel";
import { useEffect, useState } from "react";
import { ChangeEmail } from "../auth/ChangeEmail";
export const UserPanel = () => {
  const [showInput, setShowInput] = useState(false);
  return (
    <>
      <div className="userpanel userpanel-background">
        <div className="userpanel-header">
          <h1>User panel</h1>
          <p>
            Here you can change your email and edit you favourites list below.
          </p>{" "}
        </div>
        <div className="userpanel-change-email">
          <Button
            onClick={() => setShowInput(!showInput)}
            className="general-btn green-hover"
          >
            {showInput ? "Hide" : "Change your email"}
          </Button>
          {showInput ? <ChangeEmail /> : <div></div>}
        </div>

        <FavoriteDrinksUserPanel></FavoriteDrinksUserPanel>
      </div>
    </>
  );
};
