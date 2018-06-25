Hylda
=====

[![Demo site](https://img.shields.io/badge/demo-site-brightgreen.svg)](https://hylda-theme.netlify.com/)
[![npm version](https://badge.fury.io/js/hugo-hylda.svg)](https://badge.fury.io/js/hugo-hylda)
[![CircleCI](https://circleci.com/gh/dotboris/hylda.svg?style=svg)](https://circleci.com/gh/dotboris/hylda)

A Hyde inspired theme for Hugo with a splash of colour.

Installation
------------

TODO

Development
-----------

1.  Install dependencies

    ```sh
    yarn
    ```

1.  Start the build

    This will serve the example, build the assets and lint your code

    ```sh
    yarn start
    ```

1.  Open <http://localhost:1313>

### Linting

```sh
yarn lint
```

### Icons

We use the [Font Awesome](http://fontawesome.io/) icons.

To use an icon:

1.  Add the icon name to the `icons.txt` file
1.  Include your icon using `{{ partial "icon" "{name}" }}`

Releasing
---------

1.  Bump version

    ```sh
    yarn version
    ```

1.  Push version bump

    ```sh
    git push --tags origin master
    ```

1.  The CI will publish a new release and version of the demo site for you

License
-------

All the code in this project is licensed under the [MIT](LICENSE) license.

The icons are extracted from [Font Awesome](http://fontawesome.io/). They are
licensed under [SIL OFL 1.1](http://scripts.sil.org/OFL)
