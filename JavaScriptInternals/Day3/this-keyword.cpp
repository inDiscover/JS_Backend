#include <iostream>
using namespace std;

class Person {
    public:
void print() const 
{
cout << this << endl;
}
};


int main()
 {
    Person obj1;
    obj1.print(); // 1st case this will be obj1
 }