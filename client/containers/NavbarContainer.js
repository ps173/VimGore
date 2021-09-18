import { Nav } from "../components";

export default function NavbarContainer() {
 return (
  <div>
   <Nav>
    <Nav.Title />
    <Nav.LinkContainer>
     <Nav.Links href="/about">About</Nav.Links>
     <Nav.Links href="/learn">Learn</Nav.Links>
    </Nav.LinkContainer>
   </Nav>
  </div>
 );
}
