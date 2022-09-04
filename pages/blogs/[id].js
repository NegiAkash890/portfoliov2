import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import styles from './Blog.module.css';
import {Button, Image }from "@chakra-ui/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Flex, Tag } from "@chakra-ui/react";
import Head from "next/head";

function BlogItem({ frontMatter, mdxSource }) {
  const { tags , thumbnailUrl, title} = frontMatter ;
  return (
    <Layout>
      <Head>
          <title>{title}</title>
      </Head>
      <div className={styles.container}>
        <Image src={thumbnailUrl} alt={title} />
        <h1>{frontMatter.title}</h1>
        <Flex gap={"4"} mb={"4"}>
            {tags.map((tag,index) => ( <Tag key={index} variant='solid' bg={"black"}>{tag}</Tag> ))}
        </Flex>
       
        <MDXRemote {...mdxSource} components={{ SyntaxHighlighter, Button }} />
      </div>
    </Layout>
  );
}

export default BlogItem;

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      id: filename.replace(".mdx", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const markdownWithMeta = fs.readFileSync( path.join("posts", id + ".mdx"),"utf-8");
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  return {
    props: {
      frontMatter,
      id,
      mdxSource,
    },
  };
};
