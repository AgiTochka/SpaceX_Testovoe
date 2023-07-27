
import {useGetShipsByIdQuery} from "./api/spaceXApi";

export const SpaceXShips = ({shipsID}) =>{
    const {data: ships, isLoading, error} = useGetShipsByIdQuery(shipsID);
    console.log(ships);
    return (
        <>{error ? (
            <>Oh no, there was an error</>
        ) : isLoading ? (
            <>Loading...</>
        ) : ships ? (
                <img src={ships.image} alt={ships.name}/>
        ) : null}
        </>
    );
}