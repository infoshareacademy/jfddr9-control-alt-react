export const SidePanel = (props) => {
  return (
    <div id={props.id} class="sidepanel">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      {props.child}
    </div>
  );
};
