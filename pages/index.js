import Head from 'next/head';
import { Grid, Text } from '@geist-ui/react';
import Link from 'next/link';
import BlogPostItem from '../components/BlogPostItem';
import { fetchBlogPosts } from '../lib/contentful';

const POST_LIMIT = 6;

const Homepage = ({ posts }) => {
  if (!posts) {
    return <p>Loading</p>
  }

  return (
    <>
      <Head>
        <title>Ash Smith - Senior Software Engineer. Bath, UK</title>
        <meta name="description" content="Senior Software Engineer @ Play Sports Network. Bath, UK" />
      </Head>

      <Grid.Container style={{ margin: 'calc(16pt * 2.5) 0 calc(16pt * 5)' }} justify="center">
        <Grid xs={20} alignContent="center" alignItems="center">
          <Text h1 size="3em" style={{ textAlign: 'center' }}>👋 Hey, I’m Ash! A Software Engineer and keen triathlete.</Text>
        </Grid>
      </Grid.Container>

      <Grid.Container gap={4}>
        <Grid xs={24}>
          <Text h3 style={{ textAlign: 'center' }}>Here's some recent<sup>*</sup> posts of mine...</Text>
        </Grid>

        {posts.map(({ fields }) => {
          return (
            <Grid key={fields.permalink} xs={24} md={12}>
              <BlogPostItem
                slug={fields.permalink}
                title={fields?.title || fields.permalink}
                date={fields.date}
                category={fields.category}
              />
            </Grid>)
        })}
        <Grid xs={24}>
          <Text p em style={{ textAlign: 'center' }}>Want to view more? <Link href="/posts"><a>See all of my wonderful blog posts</a></Link></Text>
          <Text small p em style={{ textAlign: 'center' }}><sup>*</sup> Blog posts may not be recent...</Text>
        </Grid>
      </Grid.Container>
    </>
  )
}

export async function getStaticProps({ preview }) {
  const posts = await fetchBlogPosts(preview, POST_LIMIT);
  return {
    props: {
      preview: preview ?? false,
      posts: posts ?? []
    }
  }
}

export default Homepage
