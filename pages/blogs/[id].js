import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { remark } from "remark";
import html from "remark-html";
import { getPostData } from "./getPostData";
import { Octokit } from "@octokit/core";
function BlogItem({ postData }) {
  const [data, setData] = useState();
  async function fetchPostData() {
    const octokit = new Octokit({
      auth : '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'
    })
    const response=  await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: 'NegiAkash890',
      repo: 'blog',
      path:"_posts"
      
    })
    setData(response.data[0].git_url.content);
    console.log(response.data[0].content);
    console.log(response.data[0].git_url.content);;
    return response;
  }
  
  useEffect(() => {
    fetchPostData();
  }, []) ;
  return (
    <Layout>
     
      <div dangerouslySetInnerHTML={data}></div>
      
    </Layout>
  );
}

export default BlogItem;

// export async function getStaticProps({ params }) {
//   // Add the "await" keyword like this:
//   const postData = await getPostData(params.id);
//   // ...
// }

// export async function getStaticPaths() {
//   return {
//      params: [] ,
//     fallback: false
//   }
// }