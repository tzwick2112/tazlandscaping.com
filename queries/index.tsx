export const GET_BLOG_SLUGS = `
  query {
    posts(first: 1000) {
      nodes {
        id
      }
    }
  }
`;

export const GET_BLOG_BY_ID = `
  query GetPostById($id: ID!) {
    post(id: $id) {
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      id
      title
      tags {
        nodes {
          name
        }
      }
      date
      excerpt
    }
  }
`;

export const GET_RECENT_BLOG_POSTS = `
  query blogPosts {
    posts(first: 5) {
      nodes {
        id
        featuredImage {
          node {
            sourceUrl
          }
        }
        title
        content
        date
        excerpt
      }
    }
  }
`;

export const GET_BLOG_POSTS = `
query blogPosts($first: Int, $cursor: String) {
  posts(first: $first, after: $cursor) {
    edges{
      cursor
      node{
        title
      slug
      excerpt
      content
      date
      featuredImage{
        node{
          sourceUrl
        }
      }
      }
    }
  } 
}
`;

export const GET_BLOG_BY_SLUG = `
 query GetPostBySlug($slug: String!) {
    postBy(slug: $slug) {
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      id
      title
      slug
      date
      excerpt
    }
  }
`;

export const GET_FIRST_3_BLOGS = `
  query blogPosts {
    posts(first: 3) {
      nodes {
        id
        featuredImage {
          node {
            sourceUrl
          }
        }
        title
        content
        date
        excerpt
      }
    }
  }
`;
