function FancyBorder(props) {
  console.log(props);
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
}

export default function WelcomeDialog() {
  return (
    <>
      <FancyBorder color="blue">
        <h1 className="Dialog-title">Welcome</h1>
        <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
      </FancyBorder>
      <div>
      <SplitPane right={<h1>sou right</h1>} left={<h1>sou left</h1>}></SplitPane>
      </div>      
    </>
  );
}
