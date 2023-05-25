export const SidePanel = (props) => {
  return (
    <div id={props.id} className="sidepanel sidepanel-bottom">
      <div className="sidepanel-content">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        {props.child}
      </div>
    </div>
  );
};
