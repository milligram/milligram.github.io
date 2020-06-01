import CarbonAds from '../components/CarbonAds'

type PropsType = {
  isHome: boolean
}

export default ({ isHome }: PropsType) => (
  <section className="container" id="getting-started">
    {!isHome && <CarbonAds />}
    <h3 className="title">Getting Started</h3>
    <p className="description">
      There are some ways to get started. First, see all download options
      available below, then choose the most suitable option for your need. Now
      you should add the main file of the Milligram and the CSS Reset in the
      header of your project. Just that!
    </p>
    <p>
      <a
        className="button download"
        href="https://github.com/milligram/milligram/archive/master.zip"
        title="Download Milligram"
      >
        Download Milligram
      </a>
    </p>
    <div className="example">
      <p>
        <strong>Install with Bower</strong>
      </p>
      <p>Milligram is available to install using Bower.</p>
    </div>
    <pre className="code prettyprint">
      <code className="code-content">{`$ bower install milligram`}</code>
    </pre>
    <p>
      <strong>Install with npm</strong>
    </p>
    <p>Milligram is also available to install using npm.</p>
    <pre className="code prettyprint">
      <code className="code-content">{`$ npm install milligram`}</code>
    </pre>
    <p>
      <strong>Install with Yarn</strong>
    </p>
    <p>Milligram is also available to install using Yarn.</p>
    <pre className="code prettyprint">
      <code className="code-content">{`$ yarn add milligram`}</code>
    </pre>
    <p>
      <strong>What's included</strong>
    </p>
    <p>
      Once downloaded, extract the compressed folder to see the main file in the
      uncompressed and minified version.
    </p>
    <pre className="code prettyprint lang-md">
      <code className="code-content">{`milligram/
├── examples/
│   └── index.html
├── dist/
│   ├── milligram.css
│   └── milligram.min.css
├── license
└── readme.md`}</code>
    </pre>
    <p>
      <strong>Usage</strong>
    </p>
    <p>
      First, use any method mentioned above to download Milligram. Then, just
      add these tags in the head. Milligram is also available via
      <a
        href="https://cdnjs.com/libraries/milligram"
        title="Milligram is also available via CDN"
        target="_blank"
        rel="noopener"
      >
        {' '}
        CDN
      </a>
      .
    </p>
    <pre className="code prettyprint">
      <code className="code-content">{`<!-- Google Fonts -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic">

<!-- CSS Reset -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css">

<!-- Milligram CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.css">

<!-- You should properly set the path from the main file. -->`}</code>
    </pre>
    <p>
      <strong>CLI</strong>
    </p>
    <p>
      A CLI for getting started with Milligram. It offers a super simple
      boilerplate project with Milligram.
    </p>
    <pre className="code prettyprint">
      <code className="code-content">{`$ npm install -g milligram-cli`}</code>
    </pre>
    <p>
      Create a new app using the command <code>milligram init</code>, then
      install dependencies and run with <code>npm start</code>.
    </p>
    <pre className="code prettyprint">
      <code className="code-content">{`$ milligram init new_app
$ cd new_app
$ npm start`}</code>
    </pre>
    {isHome && (
      <p>
        See more examples of{' '}
        <a href="getting-started.html" title="Getting Started">
          getting started
        </a>
        .
      </p>
    )}
  </section>
)
