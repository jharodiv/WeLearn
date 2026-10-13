    function isValid(s: string): boolean {

    const stack: string [] = [];

    const pairs: Record<string, string> = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    for (let i = 0; i < s.length; i++ ) {
        const current = s[i];

        if (current === "(" || current === "[" || current === "{") {
            stack.push(current);
        } else {  
            if (stack.length === 0 || stack[stack.length -1] !== pairs[current]) {
                return false;
            }

            stack.pop();
        }
    }

    return stack.length === 0;
};