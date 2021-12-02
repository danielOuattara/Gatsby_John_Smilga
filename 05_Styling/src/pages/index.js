import React from "react";
import Layout from "../components/Layout";
import { page, text } from './../styles/home.module.css';
import { StyledButton } from "./../styles/button";



export default function Home() {
  return (
      <Layout >
        <h1 style={{color:"blue", textTransform:"capitale"}}>Hello world of Gatsby</h1>
        <p>Gatsby is cool !</p>
        <h1 className={page}>Super Cool ! </h1>
        <p className={text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsam eius commodi voluptatum dolorem, in dignissimos dolores dolor voluptatibus distinctio odit obcaecati aspernatur nisi id iusto voluptates tempora nam accusamus.</p>

        <StyledButton>Styled Button</StyledButton>
      </Layout>
  );
}


