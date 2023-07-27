import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const spaceXApi = createApi({
    reducerPath: 'spacexApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.spacexdata.com'}),
    endpoints: (build) => ({
        getLaunches: build.query({
            query: (arg) => ({
                url: '/v5/launches/query',
                method: 'POST',
                body: {
                    "query": {
                        "success": true,
                        "date_utc": {
                            "$gte": "2015-01-01T00:00:00.000Z",
                            "$lte": "2019-12-31T00:00:00.000Z"
                        }
                    },
                    "options":{
                        "sort": {
                            "date_local": arg
                        },
                        "limit": 250,
                    }
                }
            }),
            getShipsById: build.query({
                query: (id) => ({
                    url: `/v4/ships/${id}`,
                    method: "GET"
                })
            })
        }),
    }),
})

export const {useGetLaunchesQuery, useGetShipsByIdQuery} = spaceXApi;