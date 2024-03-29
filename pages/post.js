import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const Content = () => {
    const router = useRouter();

    return (
        <>
            <h1>{router.query.title} </h1>
            <p>This is the blog content. </p>
        </>
    );
};

const Page = () => (
    <Layout>
        <Content />
    </Layout>
);

export default Page;
