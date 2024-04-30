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
      <div className="container mx-auto text-center py-24">
        <Heading as="h1" className="text-4xl font-bold text-white">
          {siteConfig.title}
        </Heading>
        <p className="text-xl py-6 text-white">{siteConfig.tagline}</p>
        <div className="py-10">
          <Link
            className="bg-white rounded-md text-gray-500 px-4 py-2"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
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
