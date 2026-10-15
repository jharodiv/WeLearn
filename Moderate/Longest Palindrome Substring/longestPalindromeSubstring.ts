function longestPalindrome(s: string): string {

    let longest = "";

    for (let i = 0; i < s.length; i++){
        let left = i;
        let right = i;

        while(left >= 0 && right < s.length && s[left] == s[right]) {

            left --;
            right ++;
        }

            let palindrome = s.substring(left + 1, right);
            let reversed = palindrome.split("").reverse().join("");

            if (palindrome === reversed) {
                if (palindrome.length > longest.length){
                    longest = palindrome
                }
            }


        left = i + 1;
        right = i;

        while(left >= 0 && right < s.length && s[left] === s[right]){

            left--;
            right++;
        }

            palindrome = s.substring(left + 1, right);
            reversed = palindrome.split("").reverse().join("");

            if (palindrome === reversed) {
                if (palindrome.length > longest.length){
                    longest = palindrome
                }
            }

    }

    return longest;

};