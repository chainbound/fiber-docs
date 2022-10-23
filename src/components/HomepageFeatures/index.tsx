import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type PricingItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: PricingItem[] = [
  {
    title: 'Professional',
    // Svg: require('@site/static/img/fast.svg').default,
    description: (
      <>
        Fiber is faster than the competition. 
      </>
    ),
  },
  {
    title: 'Easy to use',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Use any of the provided client packages in your language of choice to easily
        integrate with your service.
      </>
    ),
  },
  {
    title: 'High visibility',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Dashboards and tracing tools will give you high visibility into your transactions,
        and can provide you with insights to make further improvements.
      </>
    ),
  },
];

function Feature({title, description}: PricingItem) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
