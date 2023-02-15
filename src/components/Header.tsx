import { Logo } from "./UI/Logo";
import { Fio } from "./UI/Fio";
import { Quit } from "./UI/Quit";

function Header() {
  return (
    <nav className="header">
      <Logo />
      <div className="item1 personal_area">
        <Fio />
        <Quit />
      </div>
    </nav>
  );
}

export { Header };
