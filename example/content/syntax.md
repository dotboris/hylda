---
title: Syntax highlighting
menu: main
---

## Python

```python
# this function should be optimized

def fibo(n):
    """
    This is a doc block
    """

    print "Hello from fibo"
    print 'Hello with different quotes'

    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibo(n-1) + fibo(n-2)
```

```python
def __copy__(o):
    pass
```

## Javascript

```js
function prettyList (list) {
  var res = ''

  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    item = item[0].toUpperCase() + item.slice(1).toLowerCase()
    res += (i + 1) + '.  ' + item + '\n'
  }

  return res
}

prettyList(['fi', 'fo', 'fum'])
// 1.  Fi
// 2.  Fo
// 3.  Fum
```

## Ruby

```ruby
# Stolen from https://github.com/dotboris/jerry/blob/master/lib/jerry/config.rb
class Jerry
  class Config
    # The jerry instance this config is part of
    attr_writer :jerry

    # @return an instance of an object wired by the config
    def [](key)
      provider = self.class.providers[key]

      if provider
        provider.call @jerry, self
      else
        raise InstantiationError,
              "Failed to instanciate #{key}. Can't find provider for it"
      end
    rescue RuntimeError
      raise InstantiationError, "Provider for #{key} raised an error"
    end
  end
end
```
