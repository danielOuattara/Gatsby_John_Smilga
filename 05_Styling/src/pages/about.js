
import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/Layout';
import styled from "styled-components";
const about = () => {
    return (
        <Layout>
            <Wrapper>
                <h2>This is The About Page</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem hic tempora consequatur, eveniet veritatis inventore nihil blanditiis iste iusto nesciunt ipsa omnis pariatur ex minus officia laudantium et cupiditate!</p>
                <Link to="/">Go back Home </Link>
            </Wrapper>
        </Layout>
    );
}

export default about;


const Wrapper = styled.section `
    color: green;
    h1 {
        color: red;
    }
    text-transform: capitalize;
`;