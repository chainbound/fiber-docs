import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--light', styles.heroBanner)}>
      <div className="container">
      <img src="/img/echo-full-logo.jpg" className={clsx('mainLogo', styles.mainLogo)}></img>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <div className={styles.buttons}> */}
          {/* <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link> */}
        {/* </div> */}
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    // <img></img>
    <Layout
      title={`${siteConfig.title}`}
      description="Unified interface for fast transaction dispatch to Ethereum block builders">
      <HomepageHeader />
      {/* <main> */}
        {/* <HomepageFeatures /> */}
      {/* </main> */}
    </Layout>
  );
}
