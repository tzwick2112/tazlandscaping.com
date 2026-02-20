"use server";

import { notFound } from "next/navigation";

import { GET_BLOG_BY_SLUG, GET_BLOG_POSTS } from "@/queries";

export async function getPosts({ cursor, first }: { cursor?: string; first?: number }) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      body: JSON.stringify({
        query: GET_BLOG_POSTS,
        variables: {
          cursor,
          first,
        },
      }),
    });

    if (!response.ok) {
      console.error("Response Status:", response.status);
      const errorText = await response.text();
      console.error("Response Error:", errorText);
      throw new Error("Failed to fetch data from the API");
    }

    const { data } = await response.json();

    return {
      posts:
        data?.posts?.edges?.map((item: any) => ({
          cursor: item?.cursor || "",
          ...item.node,
        })) || [],
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      posts: [],
    };
  }
}

export async function getPostBySlug({ slug }: { slug: string }) {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL || "", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GET_BLOG_BY_SLUG,
        variables: {
          slug,
        },
      }),
    });

    const { data } = await response.json();

    if (data?.postBy) {
      return {
        post: data?.postBy,
      };
    }
    notFound();
  } catch (error) {
    notFound();
    return {
      post: {},
    };
  }
}
