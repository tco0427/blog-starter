import React from 'react';
import { graphql } from 'gatsby';
import useCategory from '../Hooks/useCategory';

import Bio from '../components/Bio';
import Layout from '../components/layout';
import SEO from '../components/Seo';
import Category from '../components/common/Category';
import Card from '../components/common/Card';
import titleIcon from '../images/title-icon.svg';

import '../styles/pages/index.scss';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;
  const categories: string[] = ['All', ...data.allMarkdownRemark.group.map((item) => item.fieldValue)];
  const [category, setCategory] = useCategory() as [string, () => void];
  // const markdown = data;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the
          gatsby-source-filesystem plugin in gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {/* <Bio /> */}
      {/* 이후에 추가해주세요 ▲ */}
      <div className="main">
        <aside className="main-aside">
          <Category categories={categories} category={category} setCategory={setCategory} />
        </aside>
        <div className="index">
          <h2 className="index-title">
            <img src={titleIcon} alt="title icon" />
            POSTS
          </h2>
          <div className="index-content">
            <div className="max-width-1024 card-container">
              {posts
                .filter((post) => (category === 'All' ? post : category === post.frontmatter.category))
                .map((post) => (
                  <Card key={post.fields.slug} post={post} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      group(field: frontmatter___category) {
        fieldValue
      }
      nodes {
        excerpt
        html
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          category
        }
      }
    }
  }
`;
