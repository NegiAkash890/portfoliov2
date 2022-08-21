import React from "react";
import Layout from "../../components/layout";
import { remark } from "remark";
import html from "remark-html";
import { getPostData } from "./getPostData";
function BlogItem({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

export default BlogItem;

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);
  // ...
}
