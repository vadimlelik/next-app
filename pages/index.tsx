import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";
import P from "../components/P/P";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Тут будет текс</Htag>
      <Htag tag="h2">Тут будет текс</Htag>
      <Htag tag="h3">Тут будет текс</Htag>
      {/* <Button
        appearence="primary"
        onClick={() => console.log("Click in button")}
      >
        Button primary
      </Button> */}
      <Button appearence="primary" arrow="left">
        Button primary
      </Button>
      <Button appearence="primary" arrow="left">
        Button primary
      </Button>
      <Button appearence="ghost" arrow="left">
        Button
      </Button>

      <P size="small"> small</P>
      <P size="large"> large</P>
      <P size="middle"> large</P>
    </div>
  );
}
