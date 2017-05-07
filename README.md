Hylda
=====

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

1.  Start the development server

    ```sh
    ./bin/serve
    ```

1.  Open <http://localhost:1313>

### Icons

We use the [Font Awesome](https://fontawesome.io/) icons.

To use an icon:

1.  Add the icon name to the `icons.txt` file
1.  Include your icon using `{{ partial "icon" "{name}" }}`

Releasing
---------

1.  Bump version

    ```sh
    yarn version
    ```

1.  Build package

    ```sh
    yarn run build
    ```

1.  Deploy to npm registry

    TODO: How?

1.  Push version bump

    ```sh
    git push && git push --tags
    ```

License
-------

All the code in this project is licensed under the [MIT](MIT) license.

The icons are extracted from [Font Awesome](https://fontawesome.io/). They are
licensed under [SIL OFL 1.1](http://scripts.sil.org/OFL)
