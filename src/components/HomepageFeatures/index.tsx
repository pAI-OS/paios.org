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
        Design and train your AI to think, learn, and adapt like you, making it your ultimate digital companion. Personalize your AI to fit your unique needs and style.
      </>
    ),
  },
  {
    title: 'Access Your Information',
    Svg: require('@site/static/img/undraw/undraw_my_personal_files_re_3q0p.svg').default,
    description: (
      <>
        Unify your digital life by integrating all your files, data, and accounts into a single, secure hub. Access your information anywhere, anytime, and stay organized.
      </>
    ),
  },
  {
    title: 'Control Your Security',
    Svg: require('@site/static/img/undraw/undraw_safe_re_kiil.svg').default,
    description: (
      <>
        Take control of your digital privacy by selectively sharing access to your personal data. Easily grant or revoke access permissions to protect your sensitive information.
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
    <section className="flex items-center p-8 pb-16 w-full">
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
