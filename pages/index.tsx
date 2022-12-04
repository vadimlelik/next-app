import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Тут будет текс</Htag>
      <Htag tag="h2">Тут будет текс</Htag>
      <Htag tag="h3">Тут будет текс</Htag>
      <Button appearence="primary">Button primary</Button>
      <Button appearence="ghost">Button</Button>
    </div>
  );
}
