// xianxu@gmail.com
// cannot concatenate current recursion level's key (string) to next result's path. only works for first array

  var generateArray = function(obj) {
      var keysArray = Object.keys(obj);
      var orderedArray = [];
      var next_results, prefix, path;
      
      for (var i = 0; i < keysArray.length; i++) {
          var key = keysArray[i];
          var value = obj[key];
          
          if (key.slice(0,2) === '$$') {
              prefix = '$$';
          } else if (key.slice(0,1) === '$') {
              prefix = '$';
          } else {
              prefix = null;
          }
          
          if (prefix) { // if the key has a prefix or a child recursive call has a prefix
              // orderedArray = orderedArray.concat([prefix, key, value]);
              orderedArray.push([prefix, key, value]);
          } else if (typeof(value) == "object") { // if key is not prefixed and the value is primitive
              next_results = generateArray(obj[key]);
              if (next_results) { 
                  for (var j = 0; j < next_results.length; j++) {
                    console.log(j, next_results.length);
                    next_results[j][1] = key + '/' + next_results[j][1];
                    // orderedArray = orderedArray.concat(next_results[j]);
                    orderedArray.push([prefix, key, value]);
                  }
              }
          } 
            
      }

      console.log('outside for loop:', orderedArray.toString());
      return [orderedArray];
      
  }
  
  var json1 = { 'key1': 'value1', 
                'key2': {
                          '$prefixKey1': 'simpleValue'
                        },
                '$key3': 'simpleValue3',
                'key4': 'simpleValue4'
              };

  var json2 = { '2key1':  { 
                            '2keyNested': {
                              '2keyDoubleNested': {
                                '$2keyNestedPrefix': '2SimpleValue'
                              },
                              '2keyDoubleNested2': 'unimportantValue',
                              '$2keyNestedPrefix2': '2SimpleValue2'
                            },
                            '$2keyNestedPrefix3': '2SimpleValue3',
                            '2keyUnimportant': 'unimportantValue2'
                          }
              };

  var json3 = {'$simplePrefixKey' : '23'};

  generateArray(json2);


