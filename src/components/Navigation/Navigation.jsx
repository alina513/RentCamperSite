import { Container , Link} from "./Navigation.styled";
export const Navigation = () => {
return(
<Container>
    <Link to='/'>Home</Link>
    <Link to='/catalog'>Catalog</Link>
    <Link to='/favorites'>Favorite</Link>
</Container>
)
};