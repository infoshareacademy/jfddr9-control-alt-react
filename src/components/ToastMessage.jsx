export const ToastMessage = ({ text }) => {
  return (
    <>
      <div className="toasty" bg={"dark"}>
        <p>{text}</p>
      </div>
    </>
  );
};
