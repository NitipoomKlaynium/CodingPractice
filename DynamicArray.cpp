#include<iostream>

using namespace std;


class DynamicArray {
protected:
    int* items;
    int size;
    int capacity;

public:
    
    DynamicArray(int capacity) {
        this->items = new int[capacity];
        this->size = 0;
        this->capacity = capacity;
    }

    int get(int i) {
        if (i < size) {
            return this->items[i];
        }
        else {
            return 0;
        }
    }

    void insert(int i, int n) {
        if (this->size == this->capacity) {
            this->resize();
        }
        this->printAll();
        memcpy(this->items + i + 1, this->items + i, (this->size++ - i) * sizeof(int));
        this->items[i] = n;
    }

    void pushback(int n) {
        if (this->size == this->capacity) {
            this->resize();
        }
        this->items[this->size] = n;
        this->size++;
    }

    int popback() {
        return this->items[--this->size];
    }

    void resize() {
        int* newItems = new int[this->capacity * 2];
        memcpy(newItems, this->items, this->capacity * sizeof(int));

        this->capacity *= 2;
        delete[] this->items;
        this->items = newItems;
    }

    int getSize() {
        return this->size;
    }

    int getCapacity() {
        return this->capacity;
    }

    void print() {
        for (int i = 0 ; i < this->size ; i++) {
            cout << this->items[i] << " ";
        }
        cout << endl;
    }

    void printAll() {
        for (int i = 0 ; i < this->capacity ; i++) {
            cout << this->items[i] << " ";
        }
        cout << endl;
    }

};

int main() {
    DynamicArray arr(4);
    cout << arr.getSize() << endl;
    cout << arr.getCapacity() << endl;
    arr.pushback(1);
    arr.pushback(2);
    arr.pushback(3);
    arr.printAll();
    arr.pushback(4);
    arr.printAll();
    arr.insert(2, 99);
    arr.printAll();
    arr.insert(2, 99);
    arr.printAll();
    arr.insert(2, 99);
    arr.printAll();
    arr.insert(2, 99);
    arr.printAll();
    arr.insert(2, 99);
    arr.printAll();
    cout << arr.get(7) << endl;

    return 0;
}