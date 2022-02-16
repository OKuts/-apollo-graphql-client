import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Layout, QueryResult } from '../components';
import TrackDetail from '../components/track-detail';

export const GET_TRACK = gql`
    query Track($trackId: ID!) {
        track(id: $trackId) {
            id
            title
            thumbnail
            length
            modulesCount
            numberOfViews
            description
            author {
                id
                name
                photo
            }
            modules {
                id
                title
                length
            }
        }
    }
`;

const Track = ({trackId = 'c_0'}) => {
    const {loading, error, data} = useQuery(GET_TRACK, {
        variables: {trackId}
    });

    return <Layout>
        <QueryResult error={error} loading={loading} data={data}>
            <TrackDetail track={data?.track} />
        </QueryResult>
    </Layout>;
};

export default Track;
