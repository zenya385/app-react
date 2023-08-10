// import { Outlet } from "react-router"
import Clock from "../../components/Clock/Clock"
import Container from "../../components/Container/Container"
import Counter from "../../components/Counter/Counter"
import Counter1 from "../../components/Counter1/Counter1"
import { Link, Outlet } from "react-router-dom"



export default function CouterPage() {
  return <Container>
    <Counter step={2} />
    <Counter1 />
    <Clock />
      <div>
      <ul>
        <li>
          <Link to="/todo/painting">Painting image</Link>
        </li>
        <li>
          <Link to="/todo/clock">Clock time</Link>
        </li>
        <li>
          <Link to="/todo/counter">Counter</Link>
        </li>
      </ul>
    </div>
      <Outlet />
</Container>
};

