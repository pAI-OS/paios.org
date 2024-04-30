import Heading from '@theme/Heading';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Create your Personal AI',
    Svg: require('@site/static/img/undraw/undraw_chat_bot_re_e2gj.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Access Your Information',
    Svg: require('@site/static/img/undraw/undraw_my_personal_files_re_3q0p.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Control Your Security',
    Svg: require('@site/static/img/undraw/undraw_safe_re_kiil.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className="w-1/3">
      <div>
        <Svg className="h-[200px] w-[200px] mx-auto" role="img" />
      </div>
      <div className="text-center px-4">
        <Heading as="h3" className="text-lg font-bold">{title}</Heading>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="flex items-center p-8 w-full">
      <div className="container mx-auto">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
