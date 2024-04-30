import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BackgroundPattern from '@site/src/components/BackgroundPattern';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="">
      <div className="container mx-auto text-center py-12">
        <Heading as="h1" className="text-6xl font-bold text-white">
          {siteConfig.title}
        </Heading>
        <p className="text-xl py-10 text-white">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Personal AI Operating System`}
      description={`Personal Artificial Intelligence Operating System (${siteConfig.title})`}>
      <BackgroundPattern />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
