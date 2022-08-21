import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import SyntaxHighlighter from "react-syntax-highlighter";

function BlogItem({ frontMatter: { title }, mdxSource }) {

  return (
    <Layout>
      <div className="mt-4">
        <h1>{title}</h1>
        <MDXRemote {...mdxSource} components={{ SyntaxHighlighter }} />
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
