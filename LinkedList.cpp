#include<iostream>
#include<vector>

using namespace std;

class ListNode {
public:
    int val;
    ListNode* next;

    ListNode(int val) : val(val), next(nullptr) {}

    ListNode(int val, ListNode* next) : val(val), next(next) {}
};

class LinkedList {
// protected:
//     ListNode* head;
//     ListNode* tail;
public:
    ListNode* head;
    ListNode* tail;
    LinkedList() {
        head = nullptr;
        tail = nullptr;
    }

    int get(int index) {
        ListNode* curr = head;
        int i = 0;
        while (curr != nullptr) {
            if (i == index) {
                return curr->val;
            }
            curr = curr->next;
            i++;
        }
        return -1;
    }

    void insertHead(int val) {
        ListNode* temp = new ListNode(val, head);
        head = temp;
        if (tail == nullptr) tail = head;
    }
    
    void insertTail(int val) {
        if (tail == nullptr) insertHead(val);
        else {
            ListNode* temp = new ListNode(val);
            tail->next = temp;
            tail = temp;
        }
    }

    bool remove(int index) {
        if (index == 0) {
            if (head == nullptr) return false;
            else {
                ListNode* temp = head;
                head = head->next;
                delete temp;
                return true;
            }
        }
        else {
            ListNode* prev = nullptr;
            ListNode* curr = head;
            int i = 0;
            while (curr != nullptr) {
                if (i == index) {
                    prev->next = curr->next;
                    delete curr;
                    return true;
                }

                prev = curr;
                curr = curr->next;
                i++;
            }
            return false;
        }
    }

    vector<int> getValues() {
        vector<int> v;
        ListNode* curr = head;
        while (curr != nullptr) {
            v.push_back(curr->val);
            curr = curr->next;
        }
        return v;
    }
};

int main() {
    LinkedList ll;
    ll.insertHead(1);
    ll.insertHead(2);
    ll.insertHead(3);
    ll.insertTail(101);
    ll.insertTail(102);
    ll.insertTail(103);
    cout << "!!!" << endl;
    cout << ll.head << endl;
    vector v = ll.getValues();
    for (const auto& num : v) {
        std::cout << num << ' ';
    }
    std::cout << std::endl;
    return 0;
}
