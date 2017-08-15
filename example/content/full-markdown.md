---
title: Markdown full example
menu: main
---

Paragraphs
----------

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum lectus ipsum, nec fringilla elit scelerisque sit amet. Nam malesuada tristique felis ut fringilla. Aenean at ligula sit amet felis fermentum sollicitudin eget rhoncus purus.

Phasellus id urna et sem lobortis tristique eget quis felis. Curabitur consequat consectetur lobortis. Pellentesque faucibus accumsan tincidunt. Fusce ultrices tellus vitae eros dapibus fermentum. Phasellus placerat ut leo et suscipit. Vivamus vel diam mi. Suspendisse potenti. Aliquam erat volutpat.

```python
# this function should be optimized

def fibo(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibo(n-1) + fibo(n-2)
```

Line breaks
-----------

Two households, both alike in dignity,  
In fair Verona, where we lay our scene,  
From ancient grudge break to new mutiny,  
Where civil blood makes civil hands unclean.

Headers
-------

Curabitur eget sapien a odio sodales consectetur. Curabitur sed tortor ultricies, lobortis turpis id, tristique nibh. Maecenas volutpat, mauris ac tincidunt venenatis, dolor diam rutrum enim, quis commodo lacus magna ut velit.

### Header 3

Morbi libero metus, porta in euismod a, luctus ut diam. Proin suscipit nibh eget felis tristique iaculis vitae ac magna. Sed non nisl nec urna luctus fringilla. Sed mollis ut leo ac placerat.

### Header 3

Vestibulum imperdiet lectus et congue pellentesque. Morbi blandit erat ac velit pulvinar, vel congue erat posuere. Integer risus odio, mattis eu vestibulum quis, vulputate vitae tortor. Nunc lacinia nunc ac enim lobortis, at suscipit sem lobortis.

#### Header 4

Donec viverra, leo nec faucibus pretium, lacus magna accumsan massa, ut laoreet diam mauris id diam. Ut ultricies nisl magna, vitae cursus massa scelerisque id. Suspendisse dui est, molestie eu metus at, tristique sodales dui.

#### Header 4

Aenean convallis purus ut condimentum porttitor. Sed varius dignissim lectus sed auctor. Nam a nisi sed justo euismod ullamcorper vel sed nulla. Vestibulum dictum tellus eget pellentesque tempus.

##### Header 5

Mauris condimentum venenatis augue non condimentum. Pellentesque dapibus sagittis arcu, sed congue risus pellentesque vehicula. Duis ultrices lorem eu libero interdum, ut tristique odio elementum. Nam vel feugiat erat.

Emphasis
--------

Regular, *italic* and **bold**.

Links
-----

[Wikipedia](http://en.wikipedia.org/ "A free encyclopedia") is a free encyclopedia.

[IMSLP][link_imslp] is a library of public domain music scores.

[link_imslp]: http://imslp.org/ "IMSLP/Petrucci Music Library"

Code
----

The following `fact` function computes the factorial of a positive integer:

    def fact(n):
        if n == 0:
            return 1
        else:
            return n*fact(n-1)

Images
------

![Wikipedia logo](http://upload.wikimedia.org/wikipedia/en/b/bc/Wiki.png "The Wikipedia logo")

![IMSLP logo][img_imslp]

[img_imslp]: http://imslp.org/imslp.png "The IMSLP logo"

Lists
-----

### Unordered list

-   Item Z
-   Item B
-   Item M
    -   Item 89
    -   Item 45

---

- An item

  A paragraph

- Another item

  Another paragraph

### Ordered list

1. First item
2. Second item
3. Third item

### Complex list

- An item

  A paragraph

- Another item
  1. First sub-item
  2. Second sub-item
     - A sub-sub-item
     - Another sub-sub-item
  3. Third sub-item

Horizontal rules
----------------

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum lectus ipsum, nec fringilla elit scelerisque sit amet. Nam malesuada tristique felis ut fringilla.

***

Aenean at ligula sit amet felis fermentum sollicitudin eget rhoncus purus. Phasellus id urna et sem lobortis tristique eget quis felis. Curabitur consequat consectetur lobortis.

---

Pellentesque faucibus accumsan tincidunt. Fusce ultrices tellus vitae eros dapibus fermentum. Phasellus placerat ut leo et suscipit. Vivamus vel diam mi. Suspendisse potenti. Aliquam erat volutpat.

Quotes
------

> This is a blockquote.
>
> Code example:
>
>     def abs(x):
>         if x >= 0:
>             return x
>         else:
>             return -x
>
> A list:
>
> 1. First item
> 2. Second item
>
> > This is a nested blockquote.
> >
> > - An item
> > - Another item

Markdown extensions
-------------------

### Tables

| Composer     | Work                                  | Genre         |
|--------------|---------------------------------------|---------------|
| J.S. Bach    | Brandenburg Concerto No. 3 in G major | Concerto      |
| W.A. Mozart  | Requiem Mass in D minor               | Sacred music  |
| L. Beethoven | Symphony No. 9 in D minor             | Symphony      |
| F. Schubert  | Trio No. 2 in E-flat major            | Chamber music |
| R. Wagner    | Der Ring des Nibelungen               | Opera         |

### Automatic hyperlinking

http://en.wikipedia.org/

### Fenced code blocks

```python
# this function should be optimized

def fibo(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibo(n-1) + fibo(n-2)
```

### Intra-word emphasis

is_this_emphasized?

### Strikethrough

~~Is this struckthrough?~~

### Highlight

==Is this highlighted?==

### Automatic linebreaks

Two households, both alike in dignity,
In fair Verona, where we lay our scene,
From ancient grudge break to new mutiny,
Where civil blood makes civil hands unclean.
