import {useGetLaunchesQuery} from "./api/spaceXApi";
import {SpaceXShips} from "./SpaceXShips";

export const SpaceXLaunches = ({sortArg,}) => {
    const {data: launches, isLoading, error} = useGetLaunchesQuery(sortArg);
    const getFormattedData = (data) =>{
        const launchDate = new Date(data);
        return launchDate.toDateString();
    }

    //<!-- <SpaceXShips shipsID={launch.ships[0]}/> dont work(-->
    return (
        <>{error ? (
            <>Oh no, there was an error</>
        ) : isLoading ? (
            <>Loading...</>
        ) : launches ? (
            <>
                <ul>
                    {launches.docs.map((launch, index) => (
                        <li key={index}><h1>
                            {launch.name}
                        </h1>
                            <p>
                                Data: {getFormattedData(launch.date_local)}
                            </p>
                            <p>
                                {launch.details}
                            </p>
                            <img src={launch.links.flickr.original[0]} alt={''} width={250}/>
                        </li>
                    ))}
                </ul>
            </>
        ) : null}
        </>
    );
}
