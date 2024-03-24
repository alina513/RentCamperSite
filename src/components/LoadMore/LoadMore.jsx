import { Button } from "./LoadMore.styled";
export const LoadMore = ({handleLoadMore}) => {
    return(
        <>
        <Button onClick={handleLoadMore}>Load More</Button>
        </>
    )
};
