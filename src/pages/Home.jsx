import { useQuery } from "@tanstack/react-query";
import React from "react";
import { request } from "graphql-request";
import allfilms from '../queries/allFilms';

export const Home = () => {
    const {data, isLoading, error} = useQuery({
        queryKey: ['allFilms'],
        queryFn: async () =>
            request(
                "https://swapi-graphql.netlify.app/.netlify/functions/index", allfilms
            ),
    });
    console.log(data);
    return (
        <div>
            {data.allFilms.films.map((item) => {
                return <p>{item.title}</p>;
            })}
        </div>
    );
};