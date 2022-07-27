import "./NavBar.scss";
import Search from "../../components/Search/Search";

const Navigation = ({searchFilter}) => {
  return (
    <div>
      <Search searchFilter={searchFilter} />
    </div>
  );
};

export default Navigation;