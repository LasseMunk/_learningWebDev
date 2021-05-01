let re;

// Literal characters
re = /hello/;
re = /hello/i;

// Metacharacter symbols
// re = /^h/; // must start with
re = /^h/i; // must start with and is case insensitive
re = /d$/i; // must end with and is case insensitive
re = /world$/i; // must end with and is case insensitive
re = /^world$/i; // must start and end with 'world'
re = /h.llo/i; // matches any ONE character
re = /h*llo/i; // matches any character, 0 or more times
    // heeeeeeello and hllo will both match

// OPTIONAL CHARACTERS
re = /gre?a?y/i; // the letter 'e' and letter 'a' is optional
            //allows for spelling 'grey' like 'grey' or 'gray'
            // also matchs 'gry' since bot 'e' and 'a' are optional

// ESCAPE CHARACTERS
re = /gre?a?y\?/i;  // the ? mark is taken as a literal by escaping using \


// Brackets [] - Character sets
re = /gr[ae]y/i; // MUST be 'a' or 'e' - cannot be empty
re = /[GF]ray/; // MUST be 'F' or 'G' - cannot be empty - Case sensitive
re = /[^GF]ray/; // Match anything ELSE THAN 'F' or 'G'
re = /^[GF]ray/; // MUST start with is on the other side of the brackets
re = /[A-Z]ray/; // Any UPPERCASE letters
re = /[a-z]ray/; // Any lowercase letters
re = /[A-Za-z]ray/; // Any letter
re = /[0-9]ray/; // Any digit
re = /[0-9][0-9]ray/; // Any two digits

// Braces {} - quantifiers
re = /Hel{2}o/i; // hello matches because of 2 'l's
        // lllll doesn't match
re = /Hel{2,4}o/i; // hello, helllo, hellllo matches
re = /Hel{2,}o/i; // must occour AT LEAST n-times (2 times)
                  // helo doesn't match, but any number of l's more matches

// Parentheses () - grouping
re = /[0-9]x{3}/; // only looks for 3 times 'x'
re = /([0-9]x){3}/; // the group () looks for the entire group range 3 times
      // 3x4x5x will match
      // 3x4x5x6x7x will also match

re = /^([0-9]x){3}$/ // will only match the group, not if the range is larger than the group

// shorthand character classes
re = /\w/; // word character - alphanumeric character or _
re = /\w+/; // matches one or more word characters

re = /\W/; // NON word characters or _

re = /\d/; // digits
re = /\d+/; // digits - array contains all digits
re = /\D/; // NON digits
re = /\D+/; // NON digits 0 or more times
re = /\s/; // whitespace character
re = /\S/; // NON whitespace character
re = /Hell\b/i; // Word boundary
      // Only looks for the entire word 'hell', not 'hell'o in 'hello'.

// Assertions
re = /x(?=y)/; // match 'x' only of it's followed by 'y'
re = /x(?!y)/; // match 'x' only of it's NOT followed by 'y'

// String to match
const str = 'xasday';

// log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);