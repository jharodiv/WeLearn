        /**
        * Definition for singly-linked list.
        * class ListNode {
        *     val: number
        *     next: ListNode | null
        *     constructor(val?: number, next?: ListNode | null) {
        *         this.val = (val===undefined ? 0 : val)
        *         this.next = (next===undefined ? null : next)
        *     }
        * }
        */

        function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

            const result = new ListNode(0);
            let current = result
            let current1 = l1;
            let current2 = l2;
            let carry = 0;

            while (current1 !== null || current2 !== null || carry > 0) {
                const val1 = current1 !== null ? current1.val : 0;
                const val2 = current2 !== null ? current2.val : 0;
                
                const sum = val1 + val2 + carry

                const result1 = sum % 10;
                carry = Math.floor(sum / 10);

                current.next = new ListNode(result1);
                current = current.next;

                if (current1 !== null) current1 = current1.next;
                if (current2 !== null) current2 = current2.next;
            }

            return result.next;
            
        };